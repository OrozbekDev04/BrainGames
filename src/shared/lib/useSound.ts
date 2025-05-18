import { useMemo } from 'react';
import { Howl } from 'howler';
export const useSound = () => {
  const pourSound = useMemo(
    () =>
      new Howl({
        src: ['../../../public/sounds/waterBubble.wav'],
        volume: 1.0,
      }),
    []
  );

  const successSound = useMemo(
    () =>
      new Howl({
        src: ['../../../public/sounds/mixkit-final-level-bonus-2061.wav'],
        volume: 1.0,
      }),
    []
  );

    const clickGame = useMemo(
    () =>
      new Howl({
        src: ['../../../public/sounds/sound-comeToGame.wav'],
        volume: 1.0,
      }),
    []
  );

  const errorSound = useMemo(
    () =>
      new Howl({
        src: ['../../../public/sounds/button-error-mp3.mp3'],
        volume: 1.0,
      }),
    []
  );

   const bubbleSound = useMemo(
    () =>
      new Howl({
        src: ['../../../public/sounds/mixkit-water-bubble-1317.wav'],
        volume: 1.0,
      }),
    []
  );

     const balanceRandom = useMemo(
    () =>
      new Howl({
        src: ['../../../public/sounds/balance-in-randome.mp3'],
        volume: 1.0,
      }),
    []
  );

  const playPour = () => pourSound.play();
  const playSuccess = () => successSound.play();
  const playError = () => errorSound.play();
  const playGame = () => clickGame.play();
  const playBubble = () => bubbleSound.play();
  const playRandome = () => balanceRandom.play();

  return { playPour, playSuccess, playError,playGame,playBubble,playRandome };
};
