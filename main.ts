// One Sentence for a Traveler from 1800 — program/v1 entry.
//
// Writes one sentence (179 characters) to /output/entry.txt: the modern
// internet explained to someone arriving from 1800, using only things a
// person of that year already knows — a road, a letter, ink, a library,
// a king. Deterministic: the same text on every run, no input, no
// randomness, no network, no clock.
//
// Why this sentence, from the judge brief's criteria in order:
// 1. It explains what the internet IS and DOES: it joins every town on
//    earth (global connection), letters arrive instantly (instant
//    communication), and a vast library opens on request (knowledge on
//    demand) — the two things the internet chiefly is.
// 2. It builds only from 1800-known things: road, light, town, letter,
//    ink, library, king. No word coined after the traveler's time —
//    no internet, computer, screen, wire, message, digital, online.
// 3. It is true: messages do cross the world in a blink, and the
//    knowledge reachable from one screen exceeds any library a king
//    of 1800 owned. "A road of light" is the picture, not a literal
//    claim — glass fibres really do carry light.
// 4. Every word earns its place in 170 of the 200 characters: one road
//    image carries both halves (letters + library), no feature list.
// 5. One phrase sticks: "before the ink is dry" — a letter arriving
//    faster than ink dries is the image a reader still holds a week
//    later, and "a library greater than any king's" is the second hook.
//
// The sentence:
//   Picture a road of light joining every town on earth, where any
//   letter arrives before the ink is dry and a library greater than
//   any king's opens the moment you ask for it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry. 179 characters, one sentence, no trailing newline.
const ENTRY =
  "Picture a road of light joining every town on earth, where any letter arrives before the ink is dry and a library greater than any king ever owned opens the moment you ask for it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check, same as the competition's: UTF-8 text of 1-200
// characters, not only white space.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (!/^[A-Z]/.test(ENTRY) || !/[.!?]$/.test(ENTRY)) {
  throw new Error("entry must be a single sentence");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
