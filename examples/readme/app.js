import {Observable} from 'rx';
import {div, h1, h3} from '@cycle/dom';

export default function main({DOM, MousePosition}){
  const mousePosition$ = MousePosition.positions();

  return {
    DOM: mousePosition$.map(pos =>
      div(
        '.container', [
          h1('Where\'s my 🐭 at?'),
          h3(`X: ${pos.x}, Y: ${pos.y}`)
        ]
      )
    )
  }
}
