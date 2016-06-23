# seed-grid [![Build status](https://travis-ci.com/helpscout/seed-grid.svg?token=mizbXyxLU95YeKzixKT2&branch=master)](https://travis-ci.com/helpscout/seed-grid) [![npm version](https://badge.fury.io/js/seed-grid.svg)](https://badge.fury.io/js/seed-grid) [![Dependencies](https://david-dm.org/helpscout/seed-grid.svg)](https://david-dm.org/helpscout/seed-grid)
Grid system pack for [Seed](https://github.com/helpscout/seed)!

![Grid pack](https://raw.githubusercontent.com/helpscout/seed-grid/master/grid-pack.png)

You can use this with *any* scss project you'd like! (Seed not required).

Seed's grid system was inspired by [Bootstrap V4](https://github.com/twbs/bootstrap/tree/v4-dev).
However, it has been enhanced and modified quite heavily to fit Seed's needs and code organizational structure.

## Install
```
npm install seed-grid --save-dev
```

## Basic Usage

### CSS
Add the [seed-grid.css](https://github.com/helpscout/seed-grid/blob/master/dist/seed-grid.css) or [seed-grid.min.css](https://github.com/helpscout/seed-grid/blob/master/dist/seed-grid.min.css) to your project, and import it like so:

```html
<link rel="stylesheet" href="/css/seed-grid.css">
```

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedGrid = require('seed-grid');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: seedGrid
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-grid* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-grid";
```

**Note:** Because seed-grid has dependencies, it's includePaths output will be n `array`. If you're including other paths in addition to seed-grid, you will need to flatten the array. An easy way to do this is to use [sass-pathfinder](https://github.com/itsjonq/sass-pathfinder).

Example with *sass-pathfinder*:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedGrid = require('seed-grid');
var bourbon = require('bourbon').includePaths;
var pathfinder = require('sass-pathfinder');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pathfinder(
        './scss/vendor/example',
        bourbon,
        seedGrid
      )
    }))
    .pipe(gulp.dest('./css'));
});
```

## Options

The following variables can be found in [`_config.scss`](https://github.com/helpscout/seed-grid/blob/master/scss/pack/_config.scss)

```sass
// Namespace
$seed-grid-namespace-col: "o-col" !default;
$seed-grid-namespace-container: "o-container" !default;
$seed-grid-namespace-row: "o-row" !default;
$seed-grid-namespace-row-flex: "o-row-flex" !default;


// Breakpoints
$seed-breakpoints: (
  xs: 0,
  sm: 544px,
  md: 768px,
  lg: 992px,
  xl: 1200px
) !default;


// Container
$seed-container-widths: (
  sm: 576px,
  md: 720px,
  lg: 940px,
  xl: 1140px
) !default;


// Grid
$seed-grid-columns: 12 !default;
$seed-grid-gutter: 30px !default;
$seed-grid-gutter-offset: ceil($seed-grid-gutter / 2) !default; // 15px

```

## Examples

(Coming soon!)

## Dependencies

* [Bourbon](https://github.com/thoughtbot/bourbon)
* [Seed Breakpoints](https://github.com/helpscout/seed-breakpoints)
