# Angular Material Theme for theCodeCampus

This repository contains a theme for [Angular Material](https://github.com/angular/material2)
with the styling and colors of [theCodeCampus](https://www.thecodecampus.de).


## Installation

* Install Angular Material and it's peer dependencies as described on [material.angular.io](https://material.angular.io/guide/getting-started)
* Skip including a prebuild theme
* Install theme via npm `npm install @theCodeCampus/angular-material-theme`
* Add following code to your global style.scss
  ```scss
  @import '@thecodecampus/angular-material-theme/src/styling/theme';
  
  @include tcc-angular-material-theme();
  // for dark theme use @include tcc-angular-material-dark-theme() instead
  // @include tcc-angular-material-dark-theme();
  ```

## Applying the theme background to body

If you want to apply the theme background to all elements, add the class `mat-app-background` to the body element 
inside your `index.html`

```html
<body class="mat-app-background mat-app-foreground">
  <app-root></app-root>
</body>
```
