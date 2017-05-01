// Test :: object :: Row
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-grid: object :: row', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.o-row');
  var $cf = output.$('.o-row::after');

  describe('config', function() {
    it('should change the default class if namespace is defined', function() {
      var style = `
        $seed-grid-namespace-row: rookie;
        @import "./_index";
      `;
      var output = barista({ content: style });
      var $c = output.$('.o-row');
      var $o = output.$('.rookie');

      expect($c.exists()).to.be.false;
      expect($o.exists()).to.be.true;
    });
  });

  describe('base', function() {
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
});
