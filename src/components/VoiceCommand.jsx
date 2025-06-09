import React, { useEffect } from "react";
import { takeScreenshot } from "../utility/Screenshot";
// This component listens for voice commands and takes a screenshot when "take screenshot" is spoken.

function VoiceCommand() {
  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) return;

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          const transcript = event.results[i][0].transcript.trim().toLowerCase();
          if (transcript.includes("Stephen take screenshot")) {
            console.log("Voice command recognized: taking screenshot");
            takeScreenshot("voice-screenshot");
          }
        }
      }
    };

    recognition.start();

    return () => recognition.stop();
  }, []);

  return null; // No UI needed
}

export default VoiceCommand;