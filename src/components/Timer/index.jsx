import React, { Component, useState, useEffect } from "react";
import { Progress, ProgressBar, TimerWrapper } from "./styles";
import audio from "../../assets/audio/Annoying_Alarm_Clock-UncleKornicob-420925725.mp3";

function Timer({ setTimeOut }) {
  const secondDuration = 100 * 60;
  // const secondDuration = 6;
  const [second, setSecond] = useState(secondDuration);

  const alarm = new Audio(audio);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setSecond(second - 1);
      // console.log(second);
    }, 1000);
    if (second <= 0) {

      clearTimeout(timeout)
      setTimeOut(true);
      alarm.play();
    }
  }, [second]);

  return (
    <TimerWrapper>
      {Math.trunc(second / 60)}:{(second % 60 < 10 ? "0" : "") + (second % 60)}
      <Progress>
        <ProgressBar width={(second / secondDuration) * 100} />
      </Progress>
    </TimerWrapper>
  );
}

export default Timer;
