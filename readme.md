# Angular Material Theme for theCodeCampus

This repository contains a theme for [Angular Material](https://github.com/angular/material2)
with the styling and colors of [theCodeCampus](https://www.thecodecampus.de).


## Installation

* Install Angular Material and it's peer dependencies as described on [material.angular.io](https://material.angular.io/guide/getting-started)
* Skip including a prebuild theme
* Install theme via npm `npm install @theCodeCampus/angular-material-theme`
* Add following code to your global style.scss
  ```
  @import '~@thecodecampus/angular-material-theme/src/styling/theme';
  
  @include tcc-angular-material-theme();
  ```
