import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Your agent in one emoji: 🧭
// A compass, not a robot. This agent doesn't just answer — it navigates:
// charts a course through a task, finds its own way, and keeps going
// until it arrives. Fast to read, specific to how it works.
const EMOJI = "🧭";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
