import {div, h1, h3, p} from '@cycle/dom';
import xs from 'xstream';

export default function main ({DOM, Mouse}) {
  const mousePosition$ = Mouse.positions();
  const click$ = Mouse.click();

  const clickCount$ = click$
    .fold((acc, ev) => acc + 1, 0);

  const state$ = xs.combine(
    mousePosition$,
    clickCount$
  );

  return {
    DOM: state$.map(([pos, clickCount]) =>
      div(
        '.container', [
          h1('Where\'s my 🐭 at?'),
          h3(`X: ${pos.x}, Y: ${pos.y}`),
          p(`p.s. you've clicked ${clickCount} times`)
        ]
      )
    )
  };
}
