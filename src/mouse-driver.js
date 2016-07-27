import fromEvent from 'xstream/extra/fromEvent';
import xstreamAdapter from '@cycle/xstream-adapter';

export function makeMouseDriver () {
  return function mouseDriver (sinks, streamAdapter) {
    return {
      positions () {
        const positions$ = fromEvent(document, 'mousemove')
          .map(ev => {
            return {x: ev.clientX, y: ev.clientY};
          }
        )
        .startWith({x: 0, y: 0});

        return streamAdapter.adapt(positions$, xstreamAdapter.streamSubscribe);
      },
      up () {
        const up$ = fromEvent(document, 'mouseup');

        return streamAdapter.adapt(up$, xstreamAdapter.streamSubscribe);
      },
      down () {
        const down$ = fromEvent(document, 'mousedown');

        return streamAdapter.adapt(down$, xstreamAdapter.streamSubscribe);
      },
      click () {
        const click$ = fromEvent(document, 'click');

        return streamAdapter.adapt(click$, xstreamAdapter.streamSubscribe);
      }
    };
  };
}
