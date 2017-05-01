// Test :: DOM :: Component :: Col
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var genki = require('genki');
var expect = require('chai').expect;

describe('seed-grid: dom: component: col', function() {
  var style = `
    @import "./_index";
  `;
  var page = genki.start({ content: style });
  var window = page.window;
  var $ = page.$;

  $('body').append(`
    <div class="o-container">
      <div class="o-row js-row">
        <div class="o-col-9 js-col"></div>
        <div class="o-col-3 js-col"></div>
      </div>
      <div class="o-row o-row--sm js-row--sm">
        <div class="o-col-9 js-col"></div>
        <div class="o-col-3 js-col"></div>
      </div>
      <div class="o-row-flex js-row-flex">
        <div class="o-col-9 js-col"></div>
        <div class="o-col-3 js-col"></div>
      </div>
      <div class="js-no-row">
        <div class="o-col-9 js-col"></div>
        <div class="o-col-3 js-col"></div>
      </div>
    </div>
  `);

  var $row = $('.js-row');
  var $rowSM = $('.js-row--sm');
  var $flex = $('.js-row-flex');
  var $no = $('.js-no-row');

  var $el = {
    row: {
      c9: $row.find('.o-col-9'),
      c3: $row.find('.o-col-9'),
    },
    rowSM: {
      c9: $rowSM.find('.o-col-9'),
      c3: $rowSM.find('.o-col-9'),
    },
    flex: {
      c9: $flex.find('.o-col-9'),
      c3: $flex.find('.o-col-9'),
    },
    no: {
      c9: $no.find('.o-col-9'),
      c3: $no.find('.o-col-9'),
    },
  };

  it('should only float (left) if parent is .o-row', function() {
    expect($el.row.c9.css('float')).to.equal('left');
    expect($el.row.c3.css('float')).to.equal('left');
    expect($el.flex.c9.css('float')).to.be.empty;
    expect($el.flex.c3.css('float')).to.be.empty;
    expect($el.no.c9.css('float')).to.be.empty;
    expect($el.no.c3.css('float')).to.be.empty;
  });

  it('should only have padding (left/right) if parent is .o-row/.o-row-flex', function() {
    expect($el.row.c9.css('padding-left')).to.not.be.empty;
    expect($el.flex.c9.css('padding-left')).to.not.be.empty;
    expect(parseInt($el.row.c9.css('padding-left'), 10)).to.be.above(0);
    expect(parseInt($el.flex.c9.css('padding-left'), 10)).to.be.above(0);
    expect($el.no.c9.css('padding-left')).to.be.empty;
    expect($el.no.c9.css('padding-right')).to.be.empty;
    expect($el.no.c3.css('padding-left')).to.be.empty;
    expect($el.no.c3.css('padding-right')).to.be.empty;
  });

  it('should reduce horizontal spacing if row size modifier classes are applied', function() {
    var mL = $row.css('margin-left');
    var mR = $row.css('margin-left');

    expect(mL).to.not.equal($rowSM.css('margin-left'));
    expect(mR).to.not.equal($rowSM.css('margin-right'));
    expect(parseInt($el.row.c9.css('padding-left'), 10))
      .to.be.above(parseInt($el.rowSM.c9.css('padding-left'), 10));
    expect(parseInt($el.row.c9.css('padding-right'), 10))
      .to.be.above(parseInt($el.rowSM.c9.css('padding-right'), 10));
  });
});
