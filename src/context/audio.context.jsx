import { useContext, createContext, useState } from "react";
import audiosHit from "../utils/audio.ts";

const audios = {
  bg: "/assets/audio/PUBLICO_FONDO.mp3",
  out: "/assets/audio/OUT.mp3",
  hit: "/assets/audio/HIT.mp3",
  strike: "../assets/audio/STRIKE.mp3",
  single_double: "/assets/audio/SINGLE-DOUBLE.mp3",
  homerun: "/assets/audio/HOMERUN.mp3"
};

const AudioContext = createContext({});

const AudioContextProvider = (props) => {
  const [currentAudio, setCurrentAudio] = useState(null);

  const openActions = async () => {
    stopCurrentAudio();
    const audio = new Audio(audios.hit);
    setCurrentAudio(audio);
    audio.play();
  };

  const playSound = async (play = "") => {
    stopCurrentAudio();
    const audioFileName = audios[play];
    if (audioFileName) {
      const audio = new Audio(audioFileName);
      setCurrentAudio(audio);
      audio.play();
    }
  };

  const playSoundFile = async (file) => {
    stopCurrentAudio();
    const audio = new Audio(file);
    setCurrentAudio(audio);
    audio.play();
  };

  const playHitAudio = async (outs, action) => {
    stopCurrentAudio();
    const audio = audiosHit.playAudio(outs, action);
    if (audio) {
      const audio_b = new Audio(audio);
      setCurrentAudio(audio_b);
      audio_b.play();
    }
  };

  const resetHitAudio = async () => {
    audiosHit.resetAudios();
  };

  const stopCurrentAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        playSound,
        playSoundFile,
        playHitAudio,
        resetHitAudio,
        openActions,
      }}
    >
      {props.children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  return useContext(AudioContext);
};

export default AudioContextProvider;
