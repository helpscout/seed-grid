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

  describe('config', function() {
    it('should change the default class of namespace is defined', function() {
      var style = `
        $seed-grid-namespace-container: rookie;
        @import "./_index";
      `;
      var output = barista({ content: style });
      var $c = output.$('.o-container');
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

    it('should have horizontal padding by default', function() {
      expect(parseInt($o.getProp('padding-left'), 10)).to.be.above(0);
      expect(parseInt($o.getProp('padding-right'), 10)).to.be.above(0);
    });

    it('should have auto horizontal margins by default', function() {
      expect($o.getProp('margin-left')).to.be.equal('auto');
      expect($o.getProp('margin-right')).to.be.equal('auto');
    });
  });

  describe('modifiers', function() {
    describe('fluid', function() {
      it('should have a fluid modifier class', function() {
        var $o = output.$('.o-container--fluid');

        expect($o.exists()).to.be.true;
        expect($o.getProp('max-width')).to.equal('100%');
      });
    });

    describe('responsive', function() {
      it('should have a responsive modifier class', function() {
        var $o = output.$('.o-container--responsive');

        expect($o.exists()).to.be.true;
        expect($o.getProp('max-width')).to.equal('100%');
      });
    });
  });
});
