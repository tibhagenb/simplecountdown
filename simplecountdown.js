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
   themes: {
     raw: { 
       brick:
         ".brick{" + 
    	   "padding: 10px;" + 
    	   "display:inline-block;" +  
         "}",
       legend: 
         ".legend{" + 
    	  "display: block;" +
         "}" 
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
    theme = theme ? theme : "raw";
    var cssDiv = document.createElement('div');
    cssDiv.innerHTML = '<style>' + this.themes[theme].brick + this.themes[theme].legend + '</style>';
    document.getElementsByTagName('head')[0].appendChild(cssDiv.childNodes[0]);
   },
   display: function(container, deadline, theme){
    this.loadCSS(theme);
    var t = this.computeTimeRemaining(deadline);
    document.getElementById(container).innerHTML = '<div class="brick">' 
+ t.days + '<span class="legend">Days</span></div><div class="brick">' + t.hours + '<span class="legend">Hours</span></div><div class="brick">' + t.minutes + '<span class="legend">Minutes</span></div><div class="brick">' + t.seconds + '<span class="legend">Seconds</span></div>';
   },
   autoDisplay: function(container, deadline, theme){
     this.display(container, deadline, theme);
     setInterval(function(){SimpleCountdown.display(container, deadline, theme);}, 1000);
   }
 };
})();
