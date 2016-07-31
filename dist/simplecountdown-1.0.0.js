(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(){
 window.SimpleCountdown = {
   computeTimeRemaining: function(deadline){
    var t = Date.parse(deadline) - Date.parse(new Date());
    var s = Math.floor((t / 1000) % 60);
    var m = Math.floor((t / 1000 / 60) % 60);
    var h = Math.floor((t / (1000 * 60 * 60)) % 24);
    var d = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'seconds': s,
      'minutes': m,
      'hours': h,
      'days': d
    }
   },
   loadCSS: function(){
   	var brick = ".brick{" + 
    	"padding: 10px;" + 
    	"display:inline-block;" +
      "}";
    var legend = ".legend{" + 
    	"display: block;"
      "}";
    var css = brick + legend;
    var cssDiv = document.createElement('div');
    cssDiv.innerHTML = '<style>' + css + '</style>';
    document.getElementsByTagName('head')[0].appendChild(cssDiv.childNodes[0]);
   },
   display: function(container, deadline){
   	this.loadCSS();
    var t = this.computeTimeRemaining(deadline);
    document.getElementById(container).innerHTML = '<div class="brick">' 
+ t.days + '<span class="legend">Days</span></div><div class="brick">' + t.hours + '<span class="legend">Hours</span></div><div class="brick">' + t.minutes + '<span class="legend">Minutes</span></div><div class="brick">' + t.seconds + '<span class="legend">Seconds</span></div>';
   },
   autoDisplay: function(container, deadline){
   	this.display(container, deadline);
   	setInterval(function(){SimpleCountdown.display(container, deadline);}, 1000);
   }
 };
})();

},{}]},{},[1]);
