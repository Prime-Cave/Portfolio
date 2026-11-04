// Renders every composition to ../public/videos as mp4, webm and a poster jpg.
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, statSync } from "node:fs";

const OUT = "../public/videos";
const videos = JSON.parse(readFileSync("src/videos.json", "utf8"));

const remotion = (...args) =>
  execFileSync("npx", ["remotion", ...args], { stdio: "inherit" });

const renderFlags = ["--muted", "--color-space=bt709", "--jpeg-quality=95"];

mkdirSync(OUT, { recursive: true });

for (const { id, name, posterFrame } of videos) {
  remotion("render", "src/index.ts", id, `${OUT}/${name}.mp4`, "--codec=h264", "--crf=28", ...renderFlags);
  remotion("render", "src/index.ts", id, `${OUT}/${name}.webm`, "--codec=vp9", "--crf=34", ...renderFlags);
  remotion("still", "src/index.ts", id, `${OUT}/${name}.jpg`, `--frame=${posterFrame}`, "--image-format=jpeg", "--jpeg-quality=74", "--scale=0.7");
}

for (const { name } of videos) {
  for (const ext of ["mp4", "webm", "jpg"]) {
    const size = statSync(`${OUT}/${name}.${ext}`).size;
    console.log(`${name}.${ext}: ${(size / 1024).toFixed(0)} KB`);
  }
}
