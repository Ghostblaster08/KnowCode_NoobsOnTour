import React, { useEffect } from "react";

const GreenBot = () => {
  useEffect(() => {
    const injectScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    injectScript("https://cdn.botpress.cloud/webchat/v2.2/inject.js");
    injectScript("https://files.bpcontent.cloud/2025/01/24/14/20250124142831-ITSBULU2.js");    

    return () => {
      // Cleanup scripts when component unmounts
      const scripts = document.querySelectorAll(
        'script[src="https://cdn.botpress.cloud/webchat/v2/inject.js"], script[src="https://mediafiles.botpress.cloud/52345432-5432543-5435-435545434/webchat/v2/config.js"]'
      );
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return (
    <div>
      <h1>GreenBot Chat</h1>
      <div id="botpress-webchat"></div>
    </div>
  );
};

export default GreenBot;
