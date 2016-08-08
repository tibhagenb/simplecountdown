# simplecountdown
A simple countdown

# Simple example
Include library in your page:
```javascript
<script type="text/javascript" src="simplecountdown.js"></script>
```

Add div container:
```HTML
<div id="myCountdown"></div>
```

Add js to load countdown:
```javascript
<script type="text/javascript">
  var deadline = '2016-08-15 15:00:00';
  SimpleCountdown.autoDisplay('myCountdown', deadline);
</script>
```

#Example with theme
It is now possible to add custom theme to customize countdown style.

Theme should be specified adding a third parameter to autoDisplay method, if no theme is specified, raw theme is used by default. A theme named "playa" is provided with this countdown. For use playa theme, include playa.js file in your page:
```javascript
<script type="text/javascript" src="simplecountdown.js"></script>
<script type="text/javascript" src="themes/playa.js"></script>
```

Add div container:
```HTML
<div id="myCountdown"></div>
```

Add js to load countdown:
```javascript
<script type="text/javascript">
  SimpleCountdown.autoDisplay('myCountdown', '2016-10-15 15:00:00', "playa");
</script>
```

#Develop your own theme
To develop your own theme you have to call addTheme method with a json object in paramter like describe below:
```javascript
SimpleCountdown.addTheme(
  {
    myNewTheme: { // myNewTheme is the name of the theme, name to specify in method autoDisplay in third parameter
       content: {
         title: "My title" // Title displayed above the counter
       },
       style: {
         container: ".container{}", // container is the class of countdown container
         title: ".title{}", // title is the class of title div, add your css here to customize title
         brick: ".brick{}", // brick is the class of each div which contains number and legend
         number: ".number{}", // number is the class of each span in which numbers are displayed
         legend:".legend{}" // legend is the class of each span in which legend (day, hour, minute, second) is displayed
       }
     }
   }
);
```
