import fromEvent from 'xstream/extra/fromEvent';
import xstreamAdapter from '@cycle/xstream-adapter';

export function makeMousePositionDriver () {
  return function mousePositionDriver (sinks, streamAdapter) {
    return {
      positions () {
        const positions$ = fromEvent(document, 'mousemove')
          .map(ev => {
            return {x: ev.clientX, y: ev.clientY};
          }
        )
        .startWith({x: 0, y: 0});

        return streamAdapter.adapt(positions$, xstreamAdapter.streamSubscribe);
      }
    };
  };
}
