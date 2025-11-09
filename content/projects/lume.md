---
title: Lume
---

Lume is a MIDI-based audio visualizer that renders graphics in real time. It's powered by p5.js, an open-source graphics library that allows it to run directly on the web.

Currently, Lume is a private project meant for personal use.

## examples

<iframe width="560" height="315" src="https://www.youtube.com/embed/tdfniKb3-Ic?si=bNG9fHdaSRhIFall" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-ML9xjx_3I8?si=XQDZJoTCwZrdGncJ&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## development

Lume is a project that was inspired by a few things, but the root of it was from a Japanese music producer that goes by symmez. He posted a tweet that showed a little of the behind the scenes of his videos— specifically his audio visualizers:

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">p5.jsの練習でコードの視覚化をしました <a href="https://t.co/6vt8K7bOIr">pic.twitter.com/6vt8K7bOIr</a></p>&mdash; 新目鳥 (@Symmez) <a href="https://twitter.com/Symmez/status/1855265702799925325?ref_src=twsrc%5Etfw">November 9, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I thought it was pretty cool, especially the fact it was running directly on the browser. Plus, I’ve always wanted to work on a TypeScript project, so I thought it was a quick project I could work on.

Soon enough (as with many of my projects), it eventually became much bigger than I initially intended.

Other major inspirations include [ALMAMPlayer](https://almam.itch.io/almamplayer), [Synesthesia](https://synthesia.app/), and...

Much of the development work with Lume is creating new visualizers and layouts. For an example of what goes into creating one, check out my blog post on developing the Keyboard visualizer.

## tech

Outside of p5.js, Lume uses:

- language: typescript
- framework: none(?)
- testing: vitest
- docs: typedoc

