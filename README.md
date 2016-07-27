# [Cycle Mouse Position](http://raquelxmoss.github.io/cycle-mouse-position)

Have you ever wanted a stream of mouse positions for your Cycle application? Then this driver is for you!

## Installation

```bash
$ npm install cycle-mouse-position --save
```

## Usage

- Install Cycle Mouse Position with npm (see above)

- Import the driver

```js
import {makeMousePositionDriver} from 'cycle-mouse-position';
```

- Initialise the driver by calling `makeMousePositionDriver()` in your drivers object

```js
const drivers = {
  MousePosition: makeMousePositionDriver()
}
```

- Add it to your main function's sources

```js
function main({MousePosition}) { // Your amazing main function }
```

- Call `MousePosition.positions()` without any arguments to get a stream of all mousemove events as a vector with an x and a y position.

```js
const mousePosition$ = MousePosition.positions();
```

## Example

**[Try this example online](http://raquelxmoss.github.io/cycle-mouse-position)**

```javascript
import {run} from '@cycle/xstream-run';
import {makeDOMDriver, div, h1, h3} from '@cycle/dom';
import {makeMousePositionDriver} from 'cycle-mouse-position'
import xs from 'xstream';

export default function main({DOM, MousePosition}){
  const mousePosition$ = MousePosition.positions();

  return {
    DOM: mousePosition$.map(pos =>
      div(
        '.container', [
          h1('Where\'s my mouse at? 🐭'),
          h3(`X: ${pos.x}, Y: ${pos.y}`)
        ]
      )
    )
  }
}

const drivers = {
  DOM: makeDOMDriver('.app'),
  MousePosition: makeMousePositionDriver()
};

run(app, drivers);
```

