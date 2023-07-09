import { useContext, useEffect, createContext, useState } from "react";
import audiosHit from "../utils/audio";

const audios = {
  bg: "/assets/audio/PUBLICO_FONDO.mp3",
  out: "/assets/audio/OUT.mp3",
  hit: "/assets/audio/HIT.mp3",
  strike: "../assets/audio/STRIKE.mp3",
  single_double: '/assets/audio/SINGLE-DOUBLE.mp3'
};

const AudioContext = createContext({});

const AudioContextProvider = (props) => {
  async function loadBGAudio() {
    const audioElement = document.querySelector('#bg-audio')
    audioElement.play()
    audioElement.volume = 0.3
    audioElement.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
  }

  useEffect(() => {
    loadBGAudio();
  }, []);

  const openActions = async () => {
    const audio = new Audio(audios.hit)
    audio.play()
  }

  const playSound = async (play = "") => {
    const audioFileName = audios[play];
    if (audioFileName) {
      const audio = new Audio(audioFileName)
      audio.play()
    }
  };

  const playSoundFile = async (file) => {
    const audio = new Audio(file)
    audio.play()
  };

  const playHitAudio = async (outs, action) => {
    const audio = audiosHit.playAudio(outs, action);
    if (audio) {
      const audio = new Audio(audio)
      audio.play()
    }
  };

  const resetHitAudio = async () => {
    audiosHit.resetAudios();
  };

  return (
    <AudioContext.Provider
      value={{
        playSound,
        playSoundFile,
        playHitAudio,
        resetHitAudio,
        openActions
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
