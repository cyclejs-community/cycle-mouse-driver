import {makeMouseDriver} from '../src/mouse-driver';
import xstreamAdapter from '@cycle/xstream-adapter';
import rxAdapter from '@cycle/rx-adapter';

import simulant from 'simulant';

describe('makeMouseDriver', () => {
  describe('stream agnostic', () => {
    it('is stream library agnostic', (done) => {
      const sources = makeMouseDriver()({}, rxAdapter);

      sources.positions().take(1).subscribe(() => done());

      const event = simulant('mousemove');

      simulant.fire(document.body, event);
    });
  });

  describe('positions', () => {
    it('returns a stream of mouse positions', (done) => {
      const sources = makeMouseDriver()({}, xstreamAdapter);

      sources.positions().take(1).addListener({
        next: () => {},
        error: done,
        complete: done
      });

      const event = simulant('mousemove');

      simulant.fire(document.body, event);
    });
  });

  describe('up', () => {
    it('returns a stream of mouseup events', (done) => {
      const sources = makeMouseDriver()({}, xstreamAdapter);

      sources.up().take(1).addListener({
        next: () => {},
        error: done,
        complete: done
      });

      const event = simulant('mouseup');

      simulant.fire(document.body, event);
    });
  });

  describe('down', () => {
    it('returns a stream of mouseup events', (done) => {
      const sources = makeMouseDriver()({}, xstreamAdapter);

      sources.down().take(1).addListener({
        next: () => {},
        error: done,
        complete: done
      });

      const event = simulant('mousedown');

      simulant.fire(document.body, event);
    });
  });

  describe('click', () => {
    it('returns a stream of mouseup events', (done) => {
      const sources = makeMouseDriver()({}, xstreamAdapter);

      sources.click().take(1).addListener({
        next: () => {},
        error: done,
        complete: done
      });

      const event = simulant('click');

      simulant.fire(document.body, event);
    });
  });
});
