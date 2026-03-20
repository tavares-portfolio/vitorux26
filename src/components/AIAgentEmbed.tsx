
import { useEffect } from 'react';

// Declare custom elements for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'df-messenger': any;
      'df-messenger-chat': any;
    }
  }
}

const AIAgentEmbed = () => {
  useEffect(() => {
    // Load Dialogflow CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
    document.head.appendChild(link);

    // Load Dialogflow JS
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="h-full w-full relative">
      <style>{`
        body {
          background: none;
          margin: 0;
          padding: 0;
        }
        df-messenger {
          position: relative !important;
          bottom: auto !important;
          right: auto !important;
          width: 100% !important;
          height: 100% !important;
          --df-messenger-chat-background: #101623;
          --df-messenger-titlebar-background: #101623;
          --df-messenger-titlebar-font-color: #fff;
          --df-messenger-font-color: #101623;
          --df-messenger-message-user-background: #C6DAFC;
          --df-messenger-message-bot-background: #101623;
          --df-messenger-message-bot-font-color: #fff;
          --df-messenger-message-user-font-color: #222;
          --df-messenger-chat-border-radius: 0px;
          --df-messenger-message-border-radius: 14px;
          --df-messenger-chat-window-width: 100%;
          --df-messenger-chat-window-height: 100%;
          box-shadow: none;
          z-index: 1;
        }
        df-messenger-chat-bubble {
          display: none !important;
        }
      `}</style>
      
      <df-messenger
        project-id="manifest-truth-460314-p3"
        agent-id="c50096cf-e202-4d84-9642-3aa1156c61eb"
        language-code="en"
        max-query-length="-1"
        expand
      >
        <df-messenger-chat chat-title="BU"></df-messenger-chat>
      </df-messenger>
    </div>
  );
};

export default AIAgentEmbed;
