"use client";

import React, { useEffect, useRef, useState } from "react";
// import audio from "/audios/audio.mp3";
// import soundBar from "/images/icons/sound-bar.svg";
// import animatedSoundBar from "/images/icons/animated-sound-bar.svg";

const AudioSection = () => {
  const [isAudioOn, setIsAudioOn] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("audioPreference");
      return saved ? saved === "on" : false;
    }
    return false;
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    localStorage.setItem("audioPreference", isAudioOn ? "on" : "off");

    if (!audioRef.current) return;

    if (isAudioOn) {
      // audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isAudioOn]);

  return (
    <div className="text-foreground bg-foreground/20 rounded-full z-60 mix-blend-difference group">
      <div onClick={() => setIsAudioOn(!isAudioOn)} className="">
        <img
          src={
            isAudioOn
              ? "/images/icons/animated-sound-bar.svg"
              : "/images/icons/sound-bar.svg"
          }
          alt="sound-bar"
          className="size-8 group-hover:scale-[1.02]"
        />
      </div>
      <audio ref={audioRef} src="/audios/audio.mp3" loop />
    </div>
  );
};

export default AudioSection;
