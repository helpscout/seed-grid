// QUnit :: Test :: Col
/* globals QUnit: true */
'use strict';

var q = QUnit;
var t = q.test;
var md = q.module;

md('object: col', {
  before: function() {
    this.$co = $('.o-container');
    this.$r = $('.o-row');
    this.$c2 = $('.js-col-2');
    this.$c3 = $('.js-col-3');
    this.$c5 = $('.js-col-5');
    this.$c7 = $('.js-col-7');
    this.$c8 = $('.js-col-8');
    this.$c9 = $('.js-col-9');
    this.$c10 = $('.js-col-10');
  },
}, function() {

  t('should not adjust to full-width if no responsive modifer is used', function(assert) {
    assert.notEqual(this.$co.width(), this.$c2.width(),
      'col size stays the same');
  });

  t('should fallback to full-widths if responsive modifier is larger than viewport size', function(assert) {
    assert.equal(this.$co.width(), this.$c3.width(),
      '@sm modifier fallback to default width');
    assert.equal(this.$co.width(), this.$c5.width(),
      '@md modifier fallback to default width');
    assert.equal(this.$co.width(), this.$c5.width(),
      '@md modifier fallback to default width');
    assert.equal(this.$co.width(), this.$c8.width(),
      '@lg modifier fallback to default width');
    assert.notOk(parseInt(this.$c8.css('margin-left'), 10),
      '@lg offset modifier doesn\'t trigger');
  });
});
