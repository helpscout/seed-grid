// Test :: Component :: Col
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-grid: component :: col', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.o-col');

  it('should have box-sizing-reset', function() {
    expect($o.getProp('box-sizing')).to.equal('border-box');
  });

  it('should not have display property defined by default', function() {
    expect($o.getProp('display')).to.equal.false;
  });

  it('should have a min-height', function() {
    expect($o.getProp('min-height')).to.exist;
  });

  it('should have a default width (100%) defined', function() {
    expect($o.getProp('width')).to.exist;
    expect($o.getProp('width')).to.equal('100%');
  });

  it('should have not have padding by default', function() {
    expect($o.getProp('padding')).to.be.false;
    expect($o.getProp('padding-left')).to.be.false;
    expect($o.getProp('padding-right')).to.be.false;
  });

  it('should not be floating be default', function() {
    expect($o.getProp('float')).to.be.false;
  });

  it('should have a position defined by default', function() {
    expect($o.getProp('position')).to.equal('relative');
  });
});
