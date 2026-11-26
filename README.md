# World in One Frame — 26 November 2026

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/xfreehome/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/xfreehome/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A single picture that sums up the world's biggest news on 26 November 2026.
Five stories, one frame. The image (`entry.png`) is 1024 by 1024 pixels and
stays under the 1 MiB limit. A small Node program (`main.ts`, standard
library only) checks the picture and copies it byte-for-byte to the output
folder.

## What happened today

1. **Trump hits 14 nations with new tariffs — Washington, USA (Thu 26 Nov).**
   President Trump unveils a new round of tariffs on 14 trading partners —
   up to 25% — accusing them of flooding global markets with excess
   industrial output. The EU, China, India, Japan and South Korea are among
   the targets.
2. **Houthis strike a Saudi Red Sea port — Jizan, Saudi Arabia (Thu 26 Nov).**
   Yemen's Houthis strike Jizan Port on Saudi Arabia's Red Sea coast — minor
   damage, no casualties — as the regional escalation widens.
3. **Ukraine hits air base; Kyiv struck — Ukraine–Russia (Thu 26 Nov).**
   Ukraine says it struck a major Russian air base, damaging five planes,
   and hit two oil refineries in Samara. Russia answers with ballistic
   missiles on Kyiv, wounding seven people.
4. **Kim calls for wider nuclear deployment — Pyongyang, North Korea (Wed 25 Nov).**
   Kim Jong Un calls deploying tactical nuclear weapons across multiple
   domains an 'important and urgent task' after inspecting nuclear facilities.
5. **100th Macy's parade delayed by storm — New York, USA (Thu 26 Nov).**
   New York postpones the 100th Macy's Thanksgiving Day Parade to Saturday —
   the first weather delay in its history — as a nor'easter brings winds
   gusting to 60 mph.

Sources: Reuters, CNN, AP, Inshorts, Morning Briefing.

## Run it

```sh
node main.ts
# writes /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png)
```

Running `main.ts` twice gives a byte-identical `/output/entry.png`
(the same SHA-256 every time).
