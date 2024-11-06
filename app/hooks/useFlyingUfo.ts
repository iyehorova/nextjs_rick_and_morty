'use client';
import { useState, useEffect } from 'react';
import { VIDEO_DURATION, VIDEO_DELAY } from '../constant';
import { LocalStorage } from '../types/LocalStorage';

export function useFlyingUfo() {
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    const savedValue: boolean = JSON.parse(
      window.localStorage.getItem(LocalStorage.video) || 'true',
    );
    setIsFlying(savedValue);
  }, []);

  useEffect(() => {
    let timer = 0;

    if (isFlying) {
      timer = window.setTimeout(() => {
        setIsFlying(prev => !prev);
        window.localStorage.setItem(LocalStorage.video, 'false');
      }, VIDEO_DURATION);
    } else {
      timer = window.setTimeout(() => {
        setIsFlying(prev => !prev);
        window.localStorage.setItem(LocalStorage.video, 'true');
      }, VIDEO_DELAY);
    }

    return () => clearTimeout(timer);
  }, [isFlying]);

  return isFlying;
}
