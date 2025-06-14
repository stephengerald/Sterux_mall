import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";

function VoiceScreenshot() {
  const [listening, setListening] = useState(false);

  // Screenshot function
  const takeScreenshot = async (keyword = "screenshot") => {
    const element = document.body;
    const canvas = await html2canvas(element);
    const link = document.createElement("a");
    link.download = `${keyword}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      console.warn("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          const transcript = event.results[i][0].transcript.trim().toLowerCase();
          console.log("Transcript:", transcript);
          if (transcript.includes("take screenshot")) {
            console.log("Voice command recognized: taking screenshot");
            takeScreenshot("voice-screenshot");
          }
        }
      }
    };

    recognition.start();

    return () => recognition.stop();
  }, []);

  return (
    <>
      {listening && (
        <div className="fixed top-4 right-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg z-50 flex items-center space-x-2">
          <span className="animate-pulse text-lg">🎤</span>
          <span className="font-medium">Voice command listening...</span>
        </div>
      )}
      <button
        onClick={() => takeScreenshot("manual-screenshot")}
        className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
      >
        Take Screenshot
      </button>
    </>
  );
}

export default VoiceScreenshot;