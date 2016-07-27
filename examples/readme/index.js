import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';
import {makeMouseDriver} from '../../src/mouse-driver';

var app = require('./app').default;

const drivers = {
  DOM: makeDOMDriver('.app'),
  Mouse: makeMouseDriver()
};

run(app, drivers);
