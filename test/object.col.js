// Test :: Object :: Col
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-grid: object :: col', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.o-col');

  describe('config', function() {
    it('should change the default class if namespace is defined', function() {
      var style = `
        $seed-grid-namespace-col: rookie;
        @import "./_index";
      `;
      var output = barista({ content: style });
      var $c = output.$('.o-col');
      var $o = output.$('.rookie');

      expect($c.exists()).to.be.false;
      expect($o.exists()).to.be.true;
    });

    it('should change the column sizes if config is defined', function() {
      var style = `
        $seed-grid-columns: (
          0: 0px,
          100: 100px,
        );
        @import "./_index";
      `;
      var output = barista({ content: style });
      var $c = output.$('.o-col-3');
      var $o = output.$('.o-col-100');

      expect($c.exists()).to.be.false;
      expect($o.exists()).to.be.true;
      expect($o.getProp('width')).to.equal('100px');
    });
  });

  describe('base', function() {
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
});
