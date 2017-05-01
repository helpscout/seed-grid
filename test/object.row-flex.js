// Test :: object :: Row Flex
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-grid: object :: row-flex', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.o-row-flex');
  var $cf = output.$('.o-row-flex::after');

  describe('config', function() {
    it('should change the default class of namespace is defined', function() {
      var style = `
        $seed-grid-namespace-row-flex: rookie;
        @import "./_index";
      `;
      var output = barista({ content: style });
      var $c = output.$('.o-row-flex');
      var $o = output.$('.rookie');

      expect($c.exists()).to.be.false;
      expect($o.exists()).to.be.true;
    });
  });

  describe('base', function() {
    it('should have box-sizing-reset', function() {
      expect($o.getProp('box-sizing')).to.equal('border-box');
    });

    it('should have the correct flex properties', function() {
      expect($o.getProp('display')).to.equal('flex');
      expect($o.getProp('flex-wrap')).to.equal('wrap');
    });

    it('should have negative margins by default', function() {
      expect(parseInt($o.getProp('margin-left'), 10)).to.be.below(0);
      expect(parseInt($o.getProp('margin-right'), 10)).to.be.below(0);
    });

    it('should not have clearfix', function() {
      expect($cf.exists()).to.be.false;
    });
  });

  describe('modifiers', function() {
    describe('sizes', function() {
      it('should have a range of default sizes', function() {
        var $sm = output.$('.o-row-flex--sm');
        var $xs = output.$('.o-row-flex--xs');

        expect($sm.exists()).to.be.true;
        expect($xs.exists()).to.be.true;
      });

      it('should alter the margin offsets', function() {
        var $sm = output.$('.o-row-flex--sm');
        var $xs = output.$('.o-row-flex--xs');

        expect($sm.getProp('margin-left')).to.not.equal($o.getProp('margin-left'));
        expect($xs.getProp('margin-left')).to.not.equal($o.getProp('margin-left'));
        expect($sm.getProp('margin-left')).to.not.equal($xs.getProp('margin-left'));
      });
    });
  });
});
