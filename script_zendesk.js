<script>
  document.gleenConfig = {
    company: "sportstech-eu",
    apiBaseUrl: "https://eu.alhena.ai"
  };
</script>
<script src="https://eu.alhena.ai/sdk/gleenWidget.js"></script>

<script>
window.gleenWidget.on("icebreaker_question:postback", (data) => {
  // hide the alhena chat widget
  document.getElementById("helix-chat-container").style.display = "none";

  // load the zendesk widget
  const script = document.createElement("script");
  script.id = "ze-snippet";
  script.src =
    "https://static.zdassets.com/ekr/snippet.js?key=020063c3-9669-4c6e-9ff8-4c38f1488645";
  script.async = true;
  script.onload = () => {
    // open the zendesk widget
    window.zE("messenger", "open");
  };
  document.body.appendChild(script);
});
</script>
