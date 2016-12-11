SimpleCountdown.addTheme(
  {
    year: {
       content: {
         title: "Happy new year"
       },
       style: {
         container: ".sc-container{" +
            "font-family: sans-serif, 'Arial', 'Helvetica';" +
            "background: #131313;" +
            "background: -moz-linear-gradient(top,  #131313 0%, #2c2c2c 86%, #2c2c2c 86%, #474747 100%, #595959 100%, #666666 100%, #000000 100%, #000000 100%, #111111 100%, #000000 100%, #474747 100%, #1c1c1c 100%, #2b2b2b 100%, #4c4c4c 100%, #111111 100%, #111111 101%);" +
            "background: -webkit-linear-gradient(top,  #131313 0%,#2c2c2c 86%,#2c2c2c 86%,#474747 100%,#595959 100%,#666666 100%,#000000 100%,#000000 100%,#111111 100%,#000000 100%,#474747 100%,#1c1c1c 100%,#2b2b2b 100%,#4c4c4c 100%,#111111 100%,#111111 101%);" + 
            "background: linear-gradient(to bottom,  #131313 0%,#2c2c2c 86%,#2c2c2c 86%,#474747 100%,#595959 100%,#666666 100%,#000000 100%,#000000 100%,#111111 100%,#000000 100%,#474747 100%,#1c1c1c 100%,#2b2b2b 100%,#4c4c4c 100%,#111111 100%,#111111 101%);" +
            "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#131313', endColorstr='#111111',GradientType=0 );" + 
            "}",
         title: ".sc-title{" +
            "font-weight: 900;" +
            "font-size: 3em;" +
            "font-family: Verdana, Geneva, sans-serif;" +
            "color: rgba(255,255,255,1);" +
            "text-shadow: 2px 2px rgba(0,0,0,0.1);" +
         "}",
         brick:
          ".sc-brick{" +
            "margin: 5% 1%;" +
            "width: 75px;" +
            "height: 75px;" +
            "padding: 20px;" +
            "display:inline-block;" +
            "border: 2px solid red;" +
            "border-radius: 50% 50%;" +
          "}" +

          // - Select first brick
          ".sc-brick:nth-child(2){" +
            "border: 2px solid #ffffff;" +
            "box-shadow: 1px 0.5px rgba(255,255,255,0.8);" +
          "}" +

          ".sc-brick:nth-child(2) .number{" +
            "color: rgba(255,255,255,0.8);" +
          "}" +

          ".sc-brick:nth-child(2) .legend{" +
            "color: #1B5E20;" +
            "text-shadow: 0.3px 0.2px rgba(255,255,255,0.8);" +
          "}" +

          ".sc-brick:nth-child(3){" +
            "border: 2px solid #ffffff;" +
            "box-shadow: 1px 0.5px rgba(255,255,255,0.8);" +
          "}" +

          ".sc-brick:nth-child(3) .number{" +
            "color: rgba(255,255,255,0.9);" +
            "text-shadow: 0.3px 0.2px rgba(255,255,255,0.8);" +
          "}" +

          ".sc-brick:nth-child(3) .legend{" +
            "color: #2E7D32;" +
            "text-shadow: 0.3px 0.2px rgba(255,255,255,0.8);" +
          "}" +

          ".sc-brick:nth-child(4){" +
            "border: 2px solid #ffffff;" +
            "box-shadow: 1px 0.5px rgba(255,255,255,0.8);" +
          "}" +

          ".sc-brick:nth-child(4) .legend{" +
            "color: #388E3C;" +
            "text-shadow: 0.3px 0.2px rgba(255,255,255,0.8);" +
          "}" +

          ".sc-brick:nth-child(4) .number{" +
            "color: rgba(255,255,255,1);" +
            "text-shadow: 0.3px 0.2px rgba(255,255,255,0.8);" +
          "}" +

          ".sc-brick:nth-child(5){" +
            "border: 2px solid #ffffff;" +
            "box-shadow: 1px 0.5px rgba(255,255,255,0.8);" +
          "}" +

          ".sc-brick:nth-child(5) .number{" +
            "color: #FFD740;" +
            "text-shadow: 0.3px 0.2px rgba(255,255,255,0.8);" +
          "}",

         number: ".sc-number{ " +
            "font-size: 1.7em;" +
            "color: white;" +
            "font-weight: 900;" +
            "text-shadow: 2px 2px rgba(0,0,0,0.1);" +
            "font-family: Tahoma, Geneva, sans-serif;" +
            "display: block;" +
            "margin-top: 10%;" +
         "}",

         legend:".sc-legend{" +
            "display: block;" +
            "font-size: 12px;" +
            "text-transform: uppercase;" +
            "margin-top: 8%;" +
            "color: #FFD740;" +
            "text-shadow: 0px 1px rgba(255,255,255,0.2), 2px 2px rgba(0,0,0,0.1);" +
            "text-shadow: 0.3px 0.2px rgba(255,255,255,0.5);" +
          "}"

       }
     }
    },

 function callback() {

     function createSnowflake() {
         var div = document.createElement('div');
         div.className = 'snowflake';
         if (document.body)
           document.body.insertBefore(div, document.body.firstChild);
         else
           document.body.appendChild(div);

       div.style.width = div.style.height = Math.floor((Math.random() * 15) + 10) + "px";
       div.style.position = "fixed";
       div.style.backgroundColor = "white";
       div.style['border-radius'] = "50%";
       div.style.opacity = 0;
       //- positions
       div.style.left = Math.floor(window.screen.width / 2) + 1 + "px";
       div.style.top = "100%";
       return div;
     }

     function snow(numberOfSnowflakes) {
       var snowflakes = [];
       for (var i = 0; i < numberOfSnowflakes;  i++) {
           snowflakes.push(createSnowflake());
     }

     function animate(snowflakeDiv){
      console.log(Math.floor(window.screen.width / 2));
         snowflakeDiv.style.left = Math.floor((Math.random() * window.screen.width) + 1) + "px";
         snowflakeDiv.style.top = "0px";
         snowflakeDiv.style.transition = "all " + Math.floor((Math.random() * 9000) + 7000)  + "ms cubic-bezier(.60,.67,.83,0.8)";
         snowflakeDiv.style.opacity = Math.random();

         snowflakeDiv.addEventListener("transitionend", updateTransition, true);
         function updateTransition() {
             snowflakeDiv.remove();
         }

     }

     setTimeout(function () {
         for (var i = 0; i < snowflakes.length; i++) {
             animate(snowflakes[i]);
         }
     }, 1000);
    }

    window.onload = function(){
        setInterval(function () {
            if(document.getElementsByClassName('snowflake').length < 150){
                snow(Math.floor((Math.random() * 10) + 1));
            }
            // console.log(document.getElementsByClassName('snowflake').length);
        }, 500);
    };
});
