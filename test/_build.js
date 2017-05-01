// Test :: Build
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-grid: build', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should build', function() {
    expect(output.css).to.exist;
  });

  it('should build only once', function() {
    var $o = output.$('.o-container');
    var $r = output.$('.o-row');
    var $c = output.$('.o-col-12');

    expect($o.selectors.length).to.equal(1);
    expect($r.selectors.length).to.equal(1);
    expect($c.selectors.length).to.equal(1);
  });
});
