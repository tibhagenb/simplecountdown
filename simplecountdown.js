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
