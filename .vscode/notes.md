start from vedio 8-5
/////////////////////////////////////////////////////////////
npm init -y কমান্ডটি Node.js প্রোজেক্টের জন্য package.json
ফাইল স্বয়ংক্রিয়ভাবে তৈরি করতে ব্যবহার করা হয়।

-y (yes flag) → এটি ডিফল্ট ভ্যালুগুলি স্বয়ংক্রিয়ভাবে গ্রহণ করে,
ফলে প্রতিবার তথ্য ইনপুট না করেও package.json তৈরি করা যায়।

tsc --init চালানোর পর tsconfig.json নামে একটি ফাইল তৈরি হবে, যেখানে ডিফল্ট সেটিংস থাকবে:
TypeScript প্রোজেক্ট সেটআপের জন্য এটি প্রথম ধাপ।

///////////////////////////////////////////////////////////
npm init -y
npm install typescript --save-dev
npm install mongoose --save
tsc -init==tsconfig.json make korbe
tsconfig.json → "rootDir": "./src", "outDir": "./dist"

"build":"tsc →
ts k js convert korar jonno.....
npm run build......

node dist/app.js
server er code k alada kora ....app.listen holo server er code

sob connection amar server file korbo . ata mongo / server / jakono kisur sathe hok na kano

Dotenv এর cwd (Current Working Directory) কানেক্ট করা গুরুত্বপূর্ণ কারণ এটি নিশ্চিত করে যে আপনার অ্যাপ সঠিক .env ফাইলটি লোড করছে। যদি cwd নির্দিষ্ট না করা হয়, তবে .env ফাইলটি ভুল ডিরেক্টরি থেকে লোড হতে পারে বা একেবারেই লোড নাও হতে পারে

npm i --save-dev @types/node ইনস্টল করা গুরুত্বপূর্ণ কারণ এটি TypeScript প্রোজেক্টে Node.js-এর জন্য টাইপ ডেফিনিশন সরবরাহ করে।
TypeScript-এ বিল্ট-ইন Node.js মডিউলগুলোর টাইপ পাওয়া যায়:

যেমন fs, path, http, process ইত্যাদি ব্যবহারের সময় TypeScript টাইপ ইঙ্গিত দেয়।
যদি @types/node ইনস্টল না করা হয়, তাহলে TypeScript বুঝতে পারবে না যে এই মডিউলগুলো কীভাবে কাজ করে, এবং টাইপের এরর দিতে পারে।

dotenv.config({ path: path.join((process.cwd(), ".env")) });
......................
Step 3 — Adding Eslint
For adding eslint, we will install the required packages given below.

npm i -D eslint@9.14.0 @eslint/js @types/eslint\_\_js typescript typescript-eslint

.
.............
npx eslint --init

npm i -D --exact prettier

npm i --save-dev @types/express.....express bydefault type declare file day na.tai alada kore install korte hobe

\*\*async function main() a try catch use korte hobe error hobe fix korar jonno

npm i --save-dev @types/cors

///parser

app.use(express.json());
app.use(cors());
......................................
.eslintrc.\* ফাইলগুলো হচ্ছে ESLint-এর পুরনো কনফিগারেশন পদ্ধতি (JSON, YAML, বা JavaScript ফরম্যাটে) যেখানে আপনি আপনার ESLint সেটিংস নির্ধারণ করেন। অন্যদিকে, eslint.config.mjs হল ESLint-এর নতুন ফ্ল্যাট কনফিগ পদ্ধতি, যা ECMAScript মডিউল (ESM)(JavaScript Module) ফরম্যাটে লেখা হয়।
...............................................
এই কোডটি আপনার ESLint কনফিগারেশনে Node.js-এর বিল্ট-ইন গ্লোবাল ভেরিয়েবলগুলোকে নির্দিষ্ট করে।

বিস্তারিতভাবে:

globals: এটি একটি প্যাকেজ যা বিভিন্ন প্ল্যাটফর্মের (যেমন Node.js, ব্রাউজার ইত্যাদি) গ্লোবাল ভেরিয়েবলগুলোর তালিকা সরবরাহ করে।
globals.node: এখানে Node.js এর জন্য প্রি-ডিফাইন করা গ্লোবাল ভেরিয়েবলগুলোর তালিকা রয়েছে।
languageOptions: { globals: globals.node }: এই অংশটি ESLint-কে জানায় যে, Node.js-এ যেসব গ্লোবাল ভেরিয়েবল আগে থেকেই বিদ্যমান (যেমন process, \_\_dirname, ইত্যাদি) সেগুলোকে সঠিকভাবে স্বীকার করা হবে। ফলে, এই ভেরিয়েবলগুলোর জন্য no-undef এরর আসবে না।

সংক্ষেপে, এই কোডের মাধ্যমে আপনি ESLint কে নির্দেশ দিচ্ছেন যে, Node.js-এর সব বিল্ট-ইন গ্লোবাল ভেরিয়েবলগুলো উপলব্ধ আছে, তাই ESLint এগুলোকে ভুল হিসেবে গণ্য করবে না।
.................................................

npm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier ← Avoiding conflicts when working with ESLint and Prettier

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

................
code GITHUB a push korar age .gitignore file make korte hobe..........

npx gitignore node ----best way to make gitiognore file command\***\*\*\*\*\***##########

.env.local a note rakha valo.
.....................................
ts-node-dev dea sorasori ts k run korte part but production a ata use kora jabe na.
sudu JS use korte hobe production a
