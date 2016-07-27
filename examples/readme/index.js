import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';
import {makeMousePositionDriver} from '../../src/mouse-position-driver';

var app = require('./app').default;

const drivers = {
  DOM: makeDOMDriver('.app'),
  MousePosition: makeMousePositionDriver()
};

run(app, drivers);
