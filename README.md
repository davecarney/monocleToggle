# MonocleToggle #

## Bridging the Hover/Tap divide ##

### When you need this. ###

* Dropdown navigation that responds to hover/tap/click and functions universally for touchscreens and traditional displays
* Parent li's with nested ul's that are themselves links


### Setup ###

* Works with conventionally marked up navigation
```
#!html

<nav>
    <ul>
        <li>
            <a href="#">Parent Menu Item</a>
            <ul>
                <li>
                    <a href="#">Child Menu Item</a>
                </li>
            </ul>
        </li>
    </ul>
</nav>
```


* Watches for
    `$('nav li:has(ul)').monocleToggle();`

* Link to the plugin in your website or copy/paste the function into your scripts file.

* Nothing else to configure. monocleToggle does the rest.


### Dependencies ###
jQuery 1.7


### Have a question? ###

dave@davecarney.net

Copyright 2016 Dave Carney

Licensed under the MIT license