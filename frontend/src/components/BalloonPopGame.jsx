import React, { useState, useEffect } from 'react';
import Balloon from './Balloon'; // Balloon component import
import './BalloonPopGame.css'; // Import the custom CSS

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function BalloonPopGame() {
  const [balloons, setBalloons] = useState([]); // Balloon state
  const [recognition, setRecognition] = useState(null);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const popSound = new Audio('/burst.wav');
  const cheerSound = new Audio('/kids_cheering.mp3');

  // Define balloon images based on the index
  const balloonImages = [
    '/balloon1.png',
    '/balloon2.png',
    '/balloon3.png',
    '/balloon4.png',
    '/balloon5.png',
  ];

  useEffect(() => {
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.lang = 'en-IND';
      recognitionInstance.interimResults = true;

      recognitionInstance.onresult = (event) => {
        let finalTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript.trim();
          }
        }

        setTranscript(finalTranscript);

        if (finalTranscript.toLowerCase().includes('pop') || finalTranscript.toLowerCase().includes('bob')) {
          popBalloon();
        }
      };

      setRecognition(recognitionInstance);
    }

    // Add 5 balloons initially when the game starts
    addInitialBalloons();
  }, []);

  const addInitialBalloons = () => {
    const initialBalloons = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      popped: false,
      image: balloonImages[i], // Assign specific image based on index
    }));
    setBalloons(initialBalloons);
  };

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

  const popBalloon = () => {
    setBalloons((prevBalloons) => {
      const firstUnpopped = prevBalloons.find((balloon) => !balloon.popped);
      if (firstUnpopped) {
        popSound.play();
        cheerSound.play();
        setScore((prevScore) => prevScore + 1);

        const updatedBalloons = prevBalloons.map((balloon) =>
          balloon.id === firstUnpopped.id ? { ...balloon, popped: true } : balloon
        );

        // Check if all balloons are popped
        if (updatedBalloons.every((balloon) => balloon.popped)) {
          setGameOver(true);
        }

        return updatedBalloons;
      }
      return prevBalloons;
    });
  };

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
    addInitialBalloons();
  };

  const goToWaitlist = () => {
    // Logic to navigate to the waitlist screen
    alert("Navigating to the waitlist screen...");
  };

  // Format the score to display as '000'
  const formattedScore = score.toString().padStart(3, '0').split('');

  // Function to calculate zigzag position
  const getBalloonStyle = (index) => {
    const zigzagOffset =90; // Increased offset for larger gaps
    const verticalOffset = index % 2 === 0 ? zigzagOffset : -zigzagOffset;
    return {
      transform: `translateY(${verticalOffset}px)`,
      margin: '60px', // Added margin for extra spacing
    };
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#FFEBDA] to-[#FBD5B5] relative">
      <div className="flex w-full justify-between items-center px-5 py-2">
        <button className="icon-button" onClick={goToWaitlist}>
          <img src="/back.png" alt="Back" />
        </button>

        <div className="flex flex-col items-center justify-center ml-28">
          <h1 className="font-bold text-xl">Score</h1>
          <div className="score-box-container">
            {formattedScore.map((digit, index) => (
              <div key={index} className="score-box">
                {digit}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button className="icon-button" onClick={resetGame}>
            <img src="/reset.png" alt="Reset" />
          </button>
          <button className="icon-button" onClick={listening ? stopListening : startListening}>
            <img src={listening ? '/play.png' : '/play.png'} alt="Play/Pause" />
          </button>
          <button className="icon-button" onClick={goToWaitlist}>
            <img src="/home.png" alt="Home" />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center mt-40">
        <div className="flex justify-center items-center">
          {balloons.map((balloon, index) => (
            <div key={balloon.id} style={getBalloonStyle(index)}>
              <Balloon isPopped={balloon.popped} imageSrc={balloon.image} /> {/* Use specific balloon image */}
            </div>
          ))}
        </div>

        {gameOver && (
          <div className="game-over text-4xl font-bold text-center text-[#FF3D00] mt-10">
            Hurray, game over!
            <button
              onClick={resetGame}
              className="bg-[#FFABC4] text-black py-2 px-6 mt-4 rounded-full shadow-lg hover:bg-[#FF8DAA]"
            >
              Play Again
            </button>
            <button
              onClick={goToWaitlist}
              className="bg-[#C6F1BA] text-black py-2 px-6 mt-4 rounded-full shadow-lg hover:bg-[#A0D8A5]"
            >
              Exit
            </button>
          </div>
        )}
      </div>

      {listening && (
        <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-2xl text-[#101010]">
          Listening for "pop"... 🎤
        </p>
      )}
      {listening && transcript && (
        <p className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-[#101010] text-xl">
          Heard: "{transcript}"
        </p>
      )}
    </div>
  );
}

export default BalloonPopGame;
