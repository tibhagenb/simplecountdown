(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(){
 window.SimpleCountdown = {
   computeTimeRemaining: function(deadline){
    var t = Date.parse(deadline) - Date.parse(new Date());
    var s = t > 0 ? Math.floor((t / 1000) % 60) : 0;
    var m = t > 0 ? Math.floor((t / 1000 / 60) % 60) : 0;
    var h = t > 0 ? Math.floor((t / (1000 * 60 * 60)) % 24) : 0;
    var d = t > 0 ? Math.floor(t / (1000 * 60 * 60 * 24)) : 0;
    return {
      'seconds': s,
      'minutes': m,
      'hours': h,
      'days': d
    }
   },
   themes: {
     raw: {
       content: {
         title: "My countdown"
       },
       style: {
         container: ".container{}",
         title: ".title{}",
         brick:
           ".brick{" +
    	     "padding: 10px;" +
    	     "display:inline-block;" +
           "}",
         number: ".number{}",
         legend:
           ".legend{" +
    	    "display: block;" +
           "}"
       }
     }
   },
   addTheme: function (newTheme) {
     for (p in newTheme) {
       if (newTheme.hasOwnProperty(p)) {
         this.themes[p] = newTheme[p];
       }
     }
   },
   loadCSS: function(theme){
    var cssDiv = document.createElement('div');
    cssDiv.innerHTML = '<style>' + this.themes[theme].style.title + this.themes[theme].style.container + this.themes[theme].style.brick + this.themes[theme].style.number + this.themes[theme].style.legend + '</style>';
    document.getElementsByTagName('head')[0].appendChild(cssDiv.childNodes[0]);
   },
   display: function(container, deadline, theme){
    theme = theme ? theme : "raw";
    this.loadCSS(theme);
    var t = this.computeTimeRemaining(deadline);
    document.getElementById(container).className += " container";
    document.getElementById(container).innerHTML = '<div class="title">' + this.themes[theme].content.title + '</div><div class="brick"><span class="number">'
+ t.days + '</span><span class="legend">Days</span></div><div class="brick"><span class="number">' + t.hours + '</span><span class="legend">Hours</span></div><div class="brick"><span class="number">' + t.minutes + '</span><span class="legend">Minutes</span></div><div class="brick"><span class="number">' + t.seconds + '</span><span class="legend">Seconds</span></div>';
   },
   autoDisplay: function(container, deadline, theme){
     this.display(container, deadline, theme);
     setInterval(function(){SimpleCountdown.display(container, deadline, theme);}, 1000);
   }
 };
})();

},{}]},{},[1]);
