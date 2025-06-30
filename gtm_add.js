       <script>
          document.gleenConfig = {
            company: "sportstech-eu",
            apiBaseUrl: "https://eu.alhena.ai"
          };
        </script>
        <script src="https://eu.alhena.ai/sdk/gleenWidget.js"></script>

        <script>    
          function pushFingerprintToDataLayer() {
            const fingerprint = window.gleenWidget.getFingerprint?.();
            if (fingerprint) {
              console.log("tagging current user with Alhena interacted user")
              console.log(fingerprint)
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'alhena_intracted_user',
                gleen_fingerprint: fingerprint
              });
            }
          }

          window.gleenWidget.on('ticket:bot_response_finished', function (){
            pushFingerprintToDataLayer();
          }); 
        </script>
