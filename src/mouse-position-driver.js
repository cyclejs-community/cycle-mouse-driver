import fromEvent from 'xstream/extra/fromEvent';

export function makeMousePositionDriver () {
  return function mousePositionDriver () {
    return {
      positions () {
        return fromEvent(document, 'mousemove')
          .map(ev => {
            return {x: ev.clientX, y: ev.clientY}
          }
        )
        .startWith({x: 0, y: 0})
      }
    }
  }
}
