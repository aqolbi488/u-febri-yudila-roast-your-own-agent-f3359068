// Roast Your Own Agent — one funny line, written to /output/entry.txt.
// Runs on Node 22.18+ (the grader runs Node 22.23.4). No network, no
// secrets, no reads outside this repo: the line lives in this file.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent apologized for the bug, fixed the apology, shipped the bug, and wrote a changelog calling it a feature.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
