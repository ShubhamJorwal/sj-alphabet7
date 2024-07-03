import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './voiceinputskxsw.scss';

const VoiceInput = () => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);

  const handleStartListening = () => {
    setIsListening(true);
    SpeechRecognition.startListening();
  };

  const handleStopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };

  const handleResetTranscript = () => {
    resetTranscript();
    setIsListening(false);
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='sdc45wer5wesr5esd'>
        
      <div className="sklsdf4545ws">
          <input 
        type="text" 
        value={transcript} 
        onChange={(e) => {}} // Prevent the input from being editable
        placeholder="Search..." 
        className="searcs9887sdf8wptagbar"
      />
      {!isListening ? (
        <button onClick={handleStartListening} className="mic-button">
          <img src="/Final_Assets/Icons/microphone.svg" alt="Microphone" />
        </button>
      ) : (
        <>
          <button onClick={handleStopListening} className="mic-button">
          <img src="/Final_Assets/Icons/play-pause.svg" alt="play-pause" />
          </button>
          <button onClick={handleResetTranscript} className="mic-button">
          <img src="/Final_Assets/Icons/refresh.svg" alt="refresh" />
          </button>
        </>
      )}
      </div>
      <p className='s9887sdf8wptag'> <img src="/Final_Assets/Icons/star-shooting.svg" alt="refresh" />{listening ? 'Listening...' : 'Click the microphone to Search Games'}</p>
    
    </div>
  );
};

export default VoiceInput;
