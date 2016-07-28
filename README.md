# [Cycle Mouse Driver](http://cyclejs-community.github.io/cycle-mouse-driver)

A driver for Cycle.js to help you deal with mouse events in your application

## Installation

```bash
$ npm install cycle-mouse-driver --save
```
Cycle Mouse Driver is stream library agnostic. You should be able to use it with RxJs, xstream, or whatever you like. Please [open an issue](https://github.com/cyclejs-community/cycle-mouse-driver/issues) if you have any troubles, and note which stream library you are using.

## Usage

- Install Cycle Mouse Driver with npm (see above)

- Import the driver

```js
import {makeMouseDriver} from 'cycle-mouse-driver';
```

- Initialise the driver by calling `makeMouseDriver()` in your drivers object

```js
const drivers = {
  Mouse: makeMouseDriver()
}
```

- Add it to your main function's sources

```js
function main({Mouse}) { /* Your amazing main function */ }
```

## Methods
- `up()`: returns a stream of mouseup events

- `down()`: returns a stream of mousedown events

- `click()`: returns a stream of click events

- `positions()`: returns a stream of all mousemove events as a vector with an x and a y position.

```js
const mousePosition$ = Mouse.positions();
const mouseUp$ = Mouse.up();
```

## Example

**[Try this example online](http://cyclejs-community.github.io/cycle-mouse-driver)**

```javascript
import {run} from '@cycle/xstream-run';
import {makeDOMDriver, div, h1, h3} from '@cycle/dom';
import {makeMouseDriver} from 'cycle-mouse-position'
import xs from 'xstream';

export default function main({DOM, Mouse}){
  const mousePosition$ = Mouse.positions();

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
  Mouse: makeMouseDriver()
};

run(app, drivers);
```

# [Feedback, Ideas, and Contributions welcome](https://github.com/cyclejs-community/cycle-mouse-driver/issues/11)
We would love to hear from you if you have ideas for features we haven't implemented yet, feedback on the API and documentation, or would like to contribute. Feel free to write your ideas [here](https://github.com/cyclejs-community/cycle-mouse-driver/issues/11), or open an issue. Thanks!
