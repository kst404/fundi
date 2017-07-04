"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const registry = {};

const registerDep = exports.registerDep = name => obj => registry[name] = obj;

const getDep = exports.getDep = name => registry[name];

exports.default = wrapper => (...args) => wrapper(registry)(...args);