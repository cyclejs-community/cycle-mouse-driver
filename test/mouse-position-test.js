import {makeMousePositionDriver} from '../src/mouse-position-driver';
import xstreamAdapter from '@cycle/xstream-adapter';
import rxAdapter from '@cycle/rx-adapter';

import simulant from 'simulant';

describe('makeMousePositionDriver', () => {
  describe('positions', () => {
    it('returns a stream of mouse positions', (done) => {
      const sources = makeMousePositionDriver()({}, xstreamAdapter);

      sources.positions().take(1).addListener({
        next: () => {},
        error: done,
        complete: done
      });

      const event = simulant('mousemove');

      simulant.fire(document.body, event);
    });

    it('is stream library agnostic', (done) => {
      const sources = makeMousePositionDriver()({}, rxAdapter);

      sources.positions().take(1).subscribe(() => done());

      const event = simulant('mousemove');

      simulant.fire(document.body, event);
    });
  });
});
