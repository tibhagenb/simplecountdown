(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(){
 window.SimpleCountdown = {
   callback: null,
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
    };
   },
   themes: {
     raw: {
       content: {
         title: "My countdown"
       },
       style: {
         container: ".sc-container{}",
         title: ".sc-title{}",
         brick:
           ".sc-brick{" +
    	     "padding: 10px;" +
    	     "display:inline-block;" +
           "}",
         number: ".sc-number{}",
         legend:
           ".sc-legend{" +
    	    "display: block;" +
           "}"
       },
       js: ""
     }
   },
   addTheme: function (newTheme, afterCallback) {
     for (p in newTheme) {
       if (newTheme.hasOwnProperty(p)) {
         this.themes[p] = newTheme[p];
       }
     }
     if(afterCallback){
         this.callback = afterCallback;
     }
   },
   loadCSS: function(theme){
    var cssDiv = document.createElement('div');
    cssDiv.innerHTML = '<style>' + this.themes[theme].style.title + this.themes[theme].style.container + this.themes[theme].style.brick + this.themes[theme].style.number + this.themes[theme].style.legend + '</style>';
    document.getElementsByTagName('head')[0].appendChild(cssDiv.childNodes[0]);
   },
   display: function(container, deadline, theme, refresh){
    theme = theme ? theme : "raw";
    if(!refresh){
    	this.loadCSS(theme);
    }
    var t = this.computeTimeRemaining(deadline);
    if(!refresh){
    	document.getElementById(container).className += " sc-container";
	  }
    document.getElementById(container).innerHTML = '<div class="sc-title">' + this.themes[theme].content.title + '</div><div class="sc-brick"><span class="sc-number">' + t.days + '</span><span class="sc-legend">Days</span></div><div class="sc-brick"><span class="sc-number">' + t.hours + '</span><span class="sc-legend">Hours</span></div><div class="sc-brick"><span class="sc-number">' + t.minutes + '</span><span class="sc-legend">Minutes</span></div><div class="sc-brick"><span class="sc-number">' + t.seconds + '</span><span class="sc-legend">Seconds</span></div>';
    if(!refresh && this.callback){
      this.callback();
    }
   },
   autoDisplay: function(container, deadline, theme){
     this.display(container, deadline, theme, false);
     setInterval(function(){SimpleCountdown.display(container, deadline, theme, true);}, 1000);
   }
 };
})();

},{}]},{},[1]);
