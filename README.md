# MonocleToggle #

## Hover / Tap Dropdown Navigation for Touchscreens ##

### When you need this. ###

* Dropdown navigation that responds to hover/tap/click and functions universally for touchscreens, traditional displays, and computers with Touchscreen Monitors
* Parent li's with nested ul's that are themselves links


### Setup ###

* Works with conventionally marked up navigation
```

<nav>
   <ul>
      <li><a href="#">Parent Link</a>
         <ul>
            <li><a href="#">Nested Link</a></li>
            <li><a href="#">Nested Link</a></li>
            <li><a href="#">Nested Link</a></li>
         </ul>
      </li>
   </ul>
</nav>

```

* Watches for
    `$('nav li:has(ul)').monocleToggle();`

* Link to jQuery.

* Link to the plugin in your website or copy/paste the function into your scripts file.

* Style the classes ".monocle-hover, .monocle-open" (Both of them) to target your hover states.

```

.monocle-hover a,
.monocle-open a,
a:hover {
    Hover styles here
}

```

* Nothing else to configure. monocleToggle does the rest.


### Citation ###
Big Thanks to Osvaldas Valutis

His plugin [doubleTapToGo](https://osvaldas.info/drop-down-navigation-responsive-and-touch-friendly) was the building block for MonocleToggle.

### Dependencies ###
jQuery 1.7


### Have a question? ###

dave@davecarney.net

Copyright 2016 Dave Carney

Licensed under the MIT license