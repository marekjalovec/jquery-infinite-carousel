Add an infinite carousel on your site, the easy way. See a [Demo here](http://sroucheray.org/blog/samples/jquery-infinite-carousel/)

## Features ##

  * Really easy to insert a HTML carousel on your site.
  * Loop infinitely over items when clicking next or previous button.
  * Avoid animation flickering due to multi-clicks on next and previous buttons.

## Sample HTML ##

```
<div id="viewport">
<ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
	<li>4</li>
	<li>5</li>
</ul>
</div>
<a id="previous">Previous</a>
<a id="next">Next</a>

<!-- 
ul/li structure can be replaced by any other html structure as div/div, div/span... 
-->
```

## Sample CSS ##

```
/* Comments on styles purpose in the source code */
#viewport{
	width: 240px;
	overflow:hidden;
}
#viewport ul{
	position: relative;
	padding: 0;
}
#viewport li{
	width: 100px;
	height: 50px;
	float: left;
	list-style: none;
}
```

## Initialize the carousel ##
```
$('#viewport').carousel('#previous', '#next');
```

## Custom easing and duration ##
Animation easing and duration can be changed in configuration object.
```
$('#viewport').carousel('#previous', '#next', {
    duration: 600,
    easing: 'linear'
});
```

## Autoslide ##
Autoslide can be enabled in configuration object.
```
$('#viewport').carousel('#previous', '#next', {
    autoslide: true,
    autoslideTimeout: 5000,
    autoslideDirection: 'next'
});
```