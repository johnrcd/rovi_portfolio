---
title: Lume
---

Lume is a MIDI-based audio visualizer that renders graphics in real time. It's powered by p5.js, an open-source graphics library that allows it to run directly on your browser.

Currently, Lume is a private project meant for personal use.

## how does it work?

At the core of Lume's rendering system is the `Graphic`, a component that has the code needed to draw a visual onto the page. `Graphic` components are directly responsible for rendering themselves via their `draw()` function.

The reactive part of Lume — what allows it to respond to MIDI data — is done with a `DynamicGraphic`, a component that is given realtime information on a MIDI file as it's being played back, such as the list of currently held notes, and how long it's been since the file has started playing.

Each frame, Lume processes the raw information from its MIDI player into a format understandable by `Graphic` components, gives each of them the information they need, and calls all of their `draw()` functions.

## examples

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/y13ibn8Lwjo?si=ia9YLvxVtLZxmYdT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tdfniKb3-Ic?si=bNG9fHdaSRhIFall" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-ML9xjx_3I8?si=A5RyVKDhD17ZHYs9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## status

As mentioned, Lume is a private project, and is not open for outside use or contributions. This is mainly because Lume is not stable enough to be used by non-developers.

To run Lume currently, you need direct access to the code (which is not public), and have the knowledge to run it locally — using npm, setting up enviornmental variables.

Ideally, Lume would be ported to Electron or some other JavaScript framework that would allow it to be ran as a standalone application, but my priorites are focused on adding new layouts (and other projects).

## development history

Lume is a project that was inspired by a few things, but the root of it was from a Japanese music producer that goes by symmez. He posted a tweet that showed a little of the behind the scenes of his videos— specifically his audio visualizers:

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">p5.jsの練習でコードの視覚化をしました <a href="https://t.co/6vt8K7bOIr">pic.twitter.com/6vt8K7bOIr</a></p>&mdash; 新目鳥 (@Symmez) <a href="https://twitter.com/Symmez/status/1855265702799925325?ref_src=twsrc%5Etfw">November 9, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

> translation: Visualizing code in p5.js practice

I thought it was pretty cool, especially the fact it was running directly on the browser. Plus, I’ve always wanted to work on a TypeScript project, so I thought it was a quick project I could work on.

Soon enough (as with many of my projects), it eventually became much bigger than I initially intended.

Other inspirations include [ALMAMPlayer](https://almam.itch.io/almamplayer), and [Synesthesia](https://synthesia.app/).

