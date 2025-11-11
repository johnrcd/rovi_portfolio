---
title: Lume
---

Lume is a MIDI-based audio visualizer that renders graphics in real time. It's powered by p5.js, an open-source graphics library that allows it to run directly on the web.

Currently, Lume is a private project meant for personal use.

## how does it work?

The root of Lume's rendering is the `Graphic`, or more commonly, the `DynamicGraphic`, a class that represents a visual to be rendered. These graphics can be simple as a square, or complex as a musical keyboard, but all of them function with a `draw()` function that Lume calls to let them draw themselves onto the canvas.

```
// here's an example of what a draw() method can look like

draw(): void {

	// initializating math/drawing functionality:

	// color

	this._p5.fill("rgba(0, 0, 0, 0)");

	// anchors/units

	this._p5.ellipseMode(this._p5.CENTER);
	this._p5.rectMode(this._p5.CENTER);
	this._p5.angleMode(this._p5.DEGREES);

	// line styling

	this._p5.strokeWeight(8);
	this._p5.strokeCap(this._p5.ROUNDED);
	this._p5.stroke("rgba(0, 255, 255, 1)");

	// actual drawing:
	// render 12 notes, one for each
	// note in the western musical scale

	for (let i = 0; i < 12; i++) {
		this._p5.arc(
			CANVAS_CENTER_X, CANVAS_CENTER_Y,
			this.radius, this.radius,
			(i / 12) * 360 + this.segmentGap / 2,
			((i + 1) / 12) * 360 - this.segmentGap / 2,
			this._p5.OPEN,
		);
	}
}
```

These graphics are stored in `Layouts`, which store the list of all the graphics that will be rendered, along with the other necessary metadata to allow them to run.

```
export default class Diamonds extends Layout {
	getCanvasSize(): { x: number; y: number } {

		// layouts have a predetermined size
		// 850 x 850 is the "default" when making new layouts
		// but it's not a hard rule by any means

		return { x: 850, y: 850 };
	}

	getTrackers(): NoteTracker[] {
		const trackers: NoteTracker[] = [];

		// graphics in a layout may only want to see
		// notes from a specific MIDI channel, and will
		// come with multiple note trackers that will
		// filter based on channel

		// in this example, we don't need to do that
		// so we just have one note tracker that
		// accepts all notes

		trackers.push(new NoteTracker());
		return trackers;
	}

	getGraphics(p5: P5, trackers: NoteTracker[]): Graphic[] {
		const graphics: Graphic[] = [];

		const diamond = new DiamondChord(p5, trackers[0]);

		// graphics come with customization options to ensure
		// that they can be used across a wide array of layouts

		diamond.sizeMultiplier = 5;
		diamond.sizeOffset = 0;
		diamond.lineThickness = 8;
		diamond.boostThreshold = 175;

		graphics.push(diamond);

		return graphics;
	}
}
```

When a MIDI file is played, Lume attaches a callback to the player to filter out only what's necessary, and process the data to be used by `Graphic` objects.

## examples

<iframe width="560" height="315" src="https://www.youtube.com/embed/tdfniKb3-Ic?si=bNG9fHdaSRhIFall" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-ML9xjx_3I8?si=XQDZJoTCwZrdGncJ&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## status

As mentioned, Lume is a private project, and is not open for public use or contributions. This is predominantly because Lume currently runs as a locally-run website that is configured with enviornmental variables.

In other words, you need direct access to the source code to run Lume, and to change any settings you need to modify a configuration file that isn't meant to be a configuration file at all (in this context, anyways).

Ideally, Lume would be ported to Electron (or some other JavaScript framework) to allow it to be ran as a standalone application, but my priorites are focused on adding new layouts.

## development history

Lume is a project that was inspired by a few things, but the root of it was from a Japanese music producer that goes by symmez. He posted a tweet that showed a little of the behind the scenes of his videos— specifically his audio visualizers:

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">p5.jsの練習でコードの視覚化をしました <a href="https://t.co/6vt8K7bOIr">pic.twitter.com/6vt8K7bOIr</a></p>&mdash; 新目鳥 (@Symmez) <a href="https://twitter.com/Symmez/status/1855265702799925325?ref_src=twsrc%5Etfw">November 9, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

> translation: Visualizing code in p5.js practice

I thought it was pretty cool, especially the fact it was running directly on the browser. Plus, I’ve always wanted to work on a TypeScript project, so I thought it was a quick project I could work on.

Soon enough (as with many of my projects), it eventually became much bigger than I initially intended.

Other major inspirations include [ALMAMPlayer](https://almam.itch.io/almamplayer), [Synesthesia](https://synthesia.app/), and...

(no it's just those three tbh)

