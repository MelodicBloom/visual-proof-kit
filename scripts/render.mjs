// Usage: npm run render:hero -- --props=props/foo.json   (or inline JSON)
import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
const mode = process.argv[2];
const arg = process.argv.find((a) => a.startsWith('--props='));
let propsPath = arg ? arg.slice(8) : null;
let props = propsPath ? (fs.existsSync(propsPath) ? JSON.parse(fs.readFileSync(propsPath, 'utf8')) : JSON.parse(propsPath)) : {repo: 'visual-proof-kit'};
const slug = props.repo.toLowerCase().replace(/[^a-z0-9-]+/g, '-');
const out = `out/${slug}`; fs.mkdirSync(out, {recursive: true});
const tmp = `${out}/.props.json`; fs.writeFileSync(tmp, JSON.stringify(props));
const rc = (...a) => execFileSync('npx', ['remotion', ...a, `--props=${tmp}`], {stdio: 'inherit'});
if (mode === 'hero' || mode === 'all') {
  rc('render', 'src/index.ts', 'HeroLoop', `${out}/hero.mp4`, '--codec=h264', '--crf=20');
  rc('still', 'src/index.ts', 'HeroLoop', `${out}/hero-poster.jpg`, '--frame=36', '--image-format=jpeg', '--jpeg-quality=88');
}
if (mode === 'og' || mode === 'all') rc('still', 'src/index.ts', 'OgCard', `${out}/og.png`);
fs.rmSync(tmp); console.log(`done → ${out}/`);
