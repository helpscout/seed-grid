// Test :: Component :: Container
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-grid: component :: container', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.o-container');

  it('should have box-sizing-reset', function() {
    expect($o.getProp('box-sizing')).to.equal('border-box');
  });

  it('should have the correct display', function() {
    console.log($o.getProps());
    expect($o.getProp('display')).to.equal('block');
  });

  it('should have horizontal padding by default', function() {
    expect(parseInt($o.getProp('padding-left'), 10)).to.be.above(0);
    expect(parseInt($o.getProp('padding-right'), 10)).to.be.above(0);
  });

  it('should have auto horizontal margins by default', function() {
    expect($o.getProp('margin-left')).to.be.equal('auto');
    expect($o.getProp('margin-right')).to.be.equal('auto');
  });
});
