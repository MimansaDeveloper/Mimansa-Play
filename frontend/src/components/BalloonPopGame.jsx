import React, { useState, useEffect } from 'react';
import Balloon from './Balloon'; // Import your Balloon component
import './BallonPopGame.css'; // Import the custom CSS for animations

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function BalloonPopGame() {
  const [balloons, setBalloons] = useState([]);
  const [recognition, setRecognition] = useState(null);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [score, setScore] = useState(0);

  const popSound = new Audio('/burst.wav');
  const cheerSound = new Audio('/kids_cheering.mp3');

  useEffect(() => {
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.lang = 'en-US';
      recognitionInstance.interimResults = true;

      recognitionInstance.onresult = (event) => {
        let interimTranscript = "";
        let finalTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript.trim();
          } else {
            interimTranscript += event.results[i][0].transcript.trim();
          }
        }

        setTranscript(interimTranscript || finalTranscript);

        if (finalTranscript.toLowerCase().includes('pop')) {
          popBalloon();
        }
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  const startListening = () => {
    if (recognition && !listening) {
      recognition.start();
      setListening(true);
    }
  };

  const stopListening = () => {
    if (recognition && listening) {
      recognition.stop();
      setListening(false);
    }
  };

  const addBalloon = () => {
    const newBalloon = {
      id: Date.now(),
      popped: false,
    };
    setBalloons([...balloons, newBalloon]);
  };

  const popBalloon = () => {
    setBalloons((prevBalloons) => {
      const firstUnpopped = prevBalloons.find((balloon) => !balloon.popped);
      if (firstUnpopped) {
        popSound.play();
        cheerSound.play();
        
        // Use functional form to update the score
        setScore((prevScore) => prevScore + 1);

        return prevBalloons.map((balloon) =>
          balloon.id === firstUnpopped.id ? { ...balloon, popped: true } : balloon
        );
      }
      return prevBalloons;
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#FFEBDA] to-[#FBD5B5] relative">
      <h1 className="text-5xl font-extrabold mb-6 text-[#101010] animate-bounce text-center mt-4">Balloon Pop Game</h1>

      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="bubble-container">
          {balloons.map((balloon) => (
            <Balloon
              key={balloon.id}
              isPopped={balloon.popped}
            />
          ))}
        </div>

        {/* Move the listening text lower down */}
        {listening && <p className="mt-20 text-2xl text-[#101010]">Listening for "pop"... 🎤</p>}
        
        {listening && transcript && (
          <p className="mt-2 text-[#101010] text-xl">Heard: "{transcript}"</p>
        )}
      </div>

      <div className="flex justify-around mb-4">
        <button
          onClick={addBalloon}
          className="bg-[#FFABC4] text-black py-3 px-4 rounded-full shadow-lg hover:bg-[#FF8DAA] transition-transform transform hover:scale-110"
        >
          Add Balloon
        </button>
        <button
          onClick={startListening}
          className="bg-[#C6F1BA] text-[#101010] py-3 px-4 rounded-full shadow-lg hover:bg-[#A0D8A5] transition-transform transform hover:scale-110"
        >
          Start Listening
        </button>
        <button
          onClick={stopListening}
          className="bg-[#FFABC4] text-black py-3 px-4 rounded-full shadow-lg hover:bg-[#FF8DAA] transition-transform transform hover:scale-110"
        >
          Stop Listening
        </button>
      </div>

      <div className="absolute top-4 right-4 bg-[#EAF2E3] px-4 py-2 rounded-full shadow-lg">
        <p className="text-2xl font-bold text-[#101010]">Score: {score}</p>
      </div>
    </div>
  );
}

export default BalloonPopGame;
