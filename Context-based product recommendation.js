<script>
  document.gleenConfig = {
    company: "sportstech-eu",
    apiBaseUrl: "https://eu.alhena.ai"
  };
</script>
<script src="https://eu.alhena.ai/sdk/gleenWidget.js"></script>
  
<script>
  function startAdvice(type) {
    let message = '';
    if (type === 'treadmill') {
      message = "Hey! Ich suche nach Laufbändern. Ich brauche Hilfe, das richtige Modell zu finden. Hilf mir, das beste für mich zu finden.";
    } else if (type === 'bike') {
      message = "Ich interessiere mich für ein Indoor-Bike. Ich brauche Hilfe, das ideale Modell für mein Training zu finden.";
    }
    
    if (window.gleenWidget) {
      // API for sending Custom messages on behalf of user
      window.gleenWidget.open(); 
      window.gleenWidget.sendMessage(message);
    }
  }
  </script>



# Example of calling this function. Don't just Copy Paste as it. This is an example. 
<body>
        <p>Demo of SportsTech Production setup</p>
        <div class="menu">
          <h3>Choose buying advice:</h3>
          <button onclick="startAdvice('treadmill')">Treadmill Buying Advice</button>
          <button onclick="startAdvice('bike')">Bike Purchase Advice</button>
        </div>
  </body>
