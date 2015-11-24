# jquery-stars - A rating star plugin using icon fonts
Put the rating star in your app without any complications :-)
Want demo? [See here](http://viniciusmichelutti.github.io/jquery-stars/demo/)

## Dependencies
+ jQuery
+ Any icon font

## Usage
You can use any icon font, just import the font and jquery.
By default the icons uses [Font Awesome](http://fortawesome.github.io/Font-Awesome/) classes, to change see Options section.

```html
<script src="stars.js"></script>
<div></div>
```
```js
$('div').stars();

// 3 Stars with tootltip and callback
$('div').stars({
  stars: 3,
  text: ['Good', 'Great', 'Excellent'],
  click: function(index) {
    // Some ajax action
  }
});
```

## Options
```js
stars      : 5                // How many stars are displayed. Default is 5
emptyIcon  : 'fa-star-o'      // Font icon class for empty stars
filledIcon : 'fa-star'        // Font icon class when hovering or selected
starClass  : ''               // Common class for stars
color      : '#E4AD22'        // Font color, if 'none' doesn't apply any color
value      : 0                // Default value to initialize filled stars
text       : []               // Array of strings, tooltips for each star
click      : function(index)  // Callback
```

## Licence
[The MIT License](http://opensource.org/licenses/MIT)
