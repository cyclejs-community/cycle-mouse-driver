import {makeMousePositionDriver} from '../src/mouse-position-driver';

import assert from 'assert';
import simulant from 'simulant';

describe("makeMousePositionDriver", () => {
  describe("positions", () => {
    it("returns a stream of mouse positions", (done) => {
      const sources = makeMousePositionDriver()();

      sources.positions().take(1).addListener({
        next: () => {},
        error: done,
        complete: done
      });

      const event = simulant('mousemove');

      simulant.fire(document.body, event);
    });
  });
})
