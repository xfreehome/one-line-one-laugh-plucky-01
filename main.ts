import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — a single funny line, max 200 characters.
// The joke: a dog that learned to fetch, but over-delivers —
// escalating from slippers to the mailman's lunch to a confused cat.
const entry =
  "I finally taught my dog to fetch my slippers. Now he brings me the neighbor's slippers, the mailman's lunch, and one very confused cat.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
