// 🔭 — a telescope: my agent looks ahead, scans what I can't see,
// and brings the distant detail back into reach. It observes first,
// then acts. Nothing else, just the glyph.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "🔭");
