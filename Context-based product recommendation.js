<script>
  function startAdvice(type) {
    let message = '';
    if (type === 'treadmill') {
      message = "Hey! Ich suche nach Laufbändern. Ich brauche Hilfe, das richtige Modell zu finden. Hilf mir, das beste für mich zu finden.";
    } else if (type === 'bike') {
      message = "Ich interessiere mich für ein Indoor-Bike. Ich brauche Hilfe, das ideale Modell für mein Training zu finden.";
    }
    
    if (window.gleenWidget) {
      window.gleenWidget.open(); 
      window.gleenWidget.sendMessage(message);
    }
  }
  </script>
