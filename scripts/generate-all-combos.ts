import * as fs from 'fs';
import * as path from 'path';
import { SEOLocations, SEONRILocations, SEOConfigurations, SEOTopics, TOP_CURATED_MARKET_COMBOS } from '../src/lib/programmaticSEO';

interface GSCPage {
  url: string;
  impressions: number;
  clicks: number;
  position: number;
}

const data: GSCPage[] = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'scripts/gsc-urls.json'), 'utf8'));

// All available locations including wipro-hinjewadi
const allLocs = new Set([...SEOLocations, ...SEONRILocations, 'wipro-hinjewadi']);
const allConfigs = new Set(SEOConfigurations);
const allTopics = new Set(SEOTopics);

const comboMap = new Map<string, { location: string; configuration: string; topic: string }>();

// 1. Add existing curated combos
for (const combo of TOP_CURATED_MARKET_COMBOS) {
  const key = `${combo.location}/${combo.configuration}/${combo.topic}`;
  comboMap.set(key, combo);
}

// 2. Add all GSC historical combos
for (const item of data) {
  try {
    const parsed = new URL(item.url);
    const parts = parsed.pathname.split('/').filter(Boolean);
    if (parts[0] === 'market' && parts.length === 4) {
      const [, loc, cfg, top] = parts;
      if (allLocs.has(loc) && allConfigs.has(cfg) && allTopics.has(top)) {
        const key = `${loc}/${cfg}/${top}`;
        if (!comboMap.has(key)) {
          comboMap.set(key, { location: loc, configuration: cfg, topic: top });
        }
      }
    }
  } catch (e) {}
}

const combinedList = Array.from(comboMap.values());
console.log(`Total Unique Market Combos to Pre-Render: ${combinedList.length}`);

// Save to a TS module or JSON to inspect
fs.writeFileSync(
  path.resolve(process.cwd(), 'src/data/marketCombos.json'),
  JSON.stringify(combinedList, null, 2),
  'utf8'
);
console.log('Saved to src/data/marketCombos.json');
