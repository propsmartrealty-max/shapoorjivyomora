import * as fs from 'fs';
import * as path from 'path';
import { SEOLocations, SEONRILocations, SEOConfigurations, SEOTopics } from '../src/lib/programmaticSEO';

interface GSCPage {
  url: string;
  impressions: number;
  clicks: number;
  position: number;
}

const data: GSCPage[] = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'scripts/gsc-urls.json'), 'utf8'));

const allLocs = new Set([...SEOLocations, ...SEONRILocations]);
const allConfigs = new Set(SEOConfigurations);
const allTopics = new Set(SEOTopics);

let validCount = 0;
let invalidCount = 0;
const missingTokens = {
  locs: new Set<string>(),
  configs: new Set<string>(),
  topics: new Set<string>()
};

const validCombos: { location: string; configuration: string; topic: string }[] = [];

for (const item of data) {
  try {
    const parsed = new URL(item.url);
    const parts = parsed.pathname.split('/').filter(Boolean);
    if (parts[0] === 'market' && parts.length === 4) {
      const [, loc, cfg, top] = parts;
      let ok = true;
      if (!allLocs.has(loc)) {
        missingTokens.locs.add(loc);
        ok = false;
      }
      if (!allConfigs.has(cfg)) {
        missingTokens.configs.add(cfg);
        ok = false;
      }
      if (!allTopics.has(top)) {
        missingTokens.topics.add(top);
        ok = false;
      }

      if (ok) {
        validCount++;
        validCombos.push({ location: loc, configuration: cfg, topic: top });
      } else {
        invalidCount++;
      }
    }
  } catch (e) {}
}

console.log(`Valid GSC Market Combos: ${validCount} / ${validCount + invalidCount}`);
console.log(`Invalid Market Combos: ${invalidCount}`);
console.log('Missing Locations in config:', Array.from(missingTokens.locs));
console.log('Missing Configurations in config:', Array.from(missingTokens.configs));
console.log('Missing Topics in config:', Array.from(missingTokens.topics));
