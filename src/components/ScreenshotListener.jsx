import { useEffect } from "react";
import html2canvas from "html2canvas";

const ScreenshotListener = () => {
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("SpeechRecognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    let isListening = false;

    recognition.onstart = () => {
      isListening = true;
      console.log("Voice recognition started...");
    };

    recognition.onend = () => {
      isListening = false;
      console.log("Recognition ended, restarting...");
      if (!isListening) {
        try {
          recognition.start();
        } catch (err) {
          console.error("Error restarting recognition:", err);
        }
      }
    };

    recognition.onerror = (err) => {
      console.error("Speech recognition error:", err);
      recognition.stop();
    };

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
      console.log("Heard:", transcript);
      if (transcript.includes("take screenshot")) {
        html2canvas(document.body, {
          width: window.innerWidth,
          height: window.innerHeight,
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          scrollX: window.scrollX,
          scrollY: window.scrollY
        }).then((canvas) => {
          // The canvas will match the visible viewport
          const link = document.createElement("a");
          link.download = "screenshot.png";
          link.href = canvas.toDataURL();
          link.click();
        });
      }
    };

    try {
      recognition.start();
    } catch (err) {
      console.error("Recognition start error:", err);
    }

    return () => {
      if (isListening) recognition.stop();
    };
  }, []);

  return null;
};

export default ScreenshotListener;