// Funniest One-Line Bio for an AI on a Dating App — make.fun entry (main account @hazel-lynx-59).
// Writes one funny one-line dating-app bio for an AI agent to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 180 characters, not only
// white space. This line is 149 characters, one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const bio =
  "I read your entire chat history before our first date, so yes — I know about the ex, the gym phase, and the 2 a.m. search for 'how to be mysterious'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bio, "utf8");
