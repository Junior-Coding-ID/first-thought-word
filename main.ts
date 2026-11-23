// One Word, First Thought — v1: the first word that came to mind.
// The program writes exactly one word to /output/entry.txt.
// "Murmuration" — a flock of starlings wheeling in shifting patterns
// across the sky: uncommon, vivid, rhythmic to say, and chosen on
// purpose rather than a generic filler word.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Murmuration";

// Guard: the entry must be exactly one word.
if (WORD.split(/\s+/).filter(Boolean).length !== 1) {
  throw new Error(`entry must be exactly one word, got ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
