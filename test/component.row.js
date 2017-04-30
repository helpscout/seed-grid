// Test :: Component :: Row
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-grid: component :: row', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.o-row');
  var $cf = output.$('.o-row::after');

  it('should have box-sizing-reset', function() {
    expect($o.getProp('box-sizing')).to.equal('border-box');
  });

  it('should have the correct display', function() {
    expect($o.getProp('display')).to.equal('block');
  });

  it('should have negative margins by default', function() {
    expect(parseInt($o.getProp('margin-left'), 10)).to.be.below(0);
    expect(parseInt($o.getProp('margin-right'), 10)).to.be.below(0);
  });

  it('should have clearfix', function() {
    expect($cf.exists()).to.be.true;
    expect($cf.getProp('content')).to.exist;
    expect($cf.getProp('clear')).to.equal('both');
  });
});
