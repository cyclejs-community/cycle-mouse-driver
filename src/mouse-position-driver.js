import {Observable} from 'rx';

export function makeMousePositionDriver () {
  return function mousePositionDriver () {
    return {
      positions () {
        return Observable.fromEvent(document, 'mousemove')
          .map(ev => {
            return {x: ev.clientX, y: ev.clientY}
          }
        )
        .startWith({x: null, y: null})
      }
    }
  }
}
