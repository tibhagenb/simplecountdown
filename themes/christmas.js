SimpleCountdown.addTheme(
  {
    christmas: {
       content: {
         title: "Merry Christmas"
       },
       style: {
         container: ".sc-container{" +
            "font-family: sans-serif, 'Arial', 'Helvetica';" +
            "background: #ffffff;" +
            "background: -moz-linear-gradient(top,  #ffffff 0%, #e72432 50%, #580d14 95%, #ffffff 100%));" +
            "background: -webkit-linear-gradient(top,  #ffffff 0%,#e72432 50%, #580d14 95%, #ffffff 100%));" +
            "background: linear-gradient(to bottom,  #ffffff 0%,#e72432 50%, #580d14 95%, #ffffff 100%);" +
            "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#580d14',GradientType=0 );" +
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
            "border: 2px solid #1B5E20;" +
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
            "border: 2px solid #2E7D32;" +
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
            "border: 2px solid #388E3C;" +
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
            "border: 2px solid #FFD740;" +
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
   }
);
