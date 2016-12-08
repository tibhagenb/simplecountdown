SimpleCountdown.addTheme(
  {
    playa: {
       content: {
         title: "Playa &#9728"
       },
       style: {
         container: ".sc-container{" +
            "font-family: sans-serif, 'Arial', 'Helvetica';" +
            "background: linear-gradient(#29B6F6, #4FC3F7, #81D4FA, #B3E5FC, #B3E5FC, #B3E5FC, #B3E5FC, rgba(255,255,255,0.8), #FFF176, #FFEE58);" +
            "background: -moz-linear-gradient(#29B6F6, #4FC3F7, #81D4FA, #B3E5FC, #B3E5FC, #B3E5FC, #B3E5FC, rgba(255,255,255,0.8),  #FFF176, #FFEE58);" +
            "background: -webkit-linear-gradient(#29B6F6, #4FC3F7, #81D4FA, #B3E5FC, #B3E5FC, #B3E5FC, #B3E5FC, rgba(255,255,255,0.8), #FFF176, #FFEE58);" +
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
            "border: 2px solid #FFEB3B;" +
          "}" +

          ".sc-brick:nth-child(2) .sc-number{" +
            "color: rgba(255,255,255,0.8);" +
          "}" +

          ".sc-brick:nth-child(2) .sc-legend{" +
            "color: #FFEB3B;" +
          "}" +

          ".sc-brick:nth-child(3){" +
            "border: 2px solid #FFEE58;" +
          "}" +

          ".sc-brick:nth-child(3) .sc-number{" +
            "color: rgba(255,255,255,0.9);" +
          "}" +

          ".sc-brick:nth-child(3) .sc-legend{" +
            "color: #FFEE58;" +
          "}" +

          ".sc-brick:nth-child(4){" +
            "border: 2px solid #FFF59D;" +
          "}" +

          ".sc-brick:nth-child(4) .sc-legend{" +
            "color: #FFF59D;" +
          "}" +

          ".sc-brick:nth-child(4) .sc-number{" +
            "color: rgba(255,255,255,1);" +
          "}" +

          ".sc-brick:nth-child(5){" +
            "border: 2px solid #FFF9C4;" +
          "}" +

          ".sc-brick:nth-child(5) .sc-number{" +
            "color: #FFF9C4;" +
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
            "color: #FFF9C4;" +
            "text-shadow: 0px 1px rgba(255,255,255,0.2), 2px 2px rgba(0,0,0,0.1);" +
          "}"

       }
     }
   }
);
