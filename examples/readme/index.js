import {run} from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import {makeMousePositionDriver} from '../../src/mouse-position-driver'
import {Observable} from 'rx';

var app = require('./app').default;

const drivers = {
  DOM: makeDOMDriver('.app'),
  MousePosition: makeMousePositionDriver()
};

run(app, drivers);
