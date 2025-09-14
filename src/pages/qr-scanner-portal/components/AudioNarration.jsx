import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AudioNarration = ({ text, isActive = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const speechRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Check if speech synthesis is supported
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    return () => {
      if (speechRef?.current) {
        speechSynthesis.cancel();
      }
      if (intervalRef?.current) {
        clearInterval(intervalRef?.current);
      }
    };
  }, []);

  const startNarration = () => {
    if (!text || !('speechSynthesis' in window)) return;

    // Cancel any existing speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setCurrentTime(0);
      // Estimate duration (rough calculation: ~150 words per minute)
      const wordCount = text?.split(' ')?.length;
      const estimatedDuration = (wordCount / 150) * 60;
      setDuration(estimatedDuration);

      // Start progress tracking
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= estimatedDuration) {
            clearInterval(intervalRef?.current);
            return estimatedDuration;
          }
          return prev + 0.1;
        });
      }, 100);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentTime(0);
      if (intervalRef?.current) {
        clearInterval(intervalRef?.current);
      }
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentTime(0);
      if (intervalRef?.current) {
        clearInterval(intervalRef?.current);
      }
    };

    speechRef.current = utterance;
    speechSynthesis.speak(utterance);
  };

  const pauseNarration = () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
      setIsPaused(true);
      if (intervalRef?.current) {
        clearInterval(intervalRef?.current);
      }
    }
  };

  const resumeNarration = () => {
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
      setIsPaused(false);
      // Resume progress tracking
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            clearInterval(intervalRef?.current);
            return duration;
          }
          return prev + 0.1;
        });
      }, 100);
    }
  };

  const stopNarration = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
    if (intervalRef?.current) {
      clearInterval(intervalRef?.current);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs?.toString()?.padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (!('speechSynthesis' in window)) {
    return null;
  }

  return (
    <div className={`bg-card border border-border rounded-lg p-4 transition-all duration-300 ${
      isActive ? 'ring-2 ring-primary/20 border-primary/30' : ''
    }`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Icon name="Volume2" size={20} className="text-primary" />
          <span className="font-medium text-foreground">Audio Narration</span>
        </div>
        <div className="text-sm text-muted-foreground">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-muted rounded-full h-2 mb-4">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-3">
        {!isPlaying ? (
          <Button
            variant="default"
            size="sm"
            onClick={startNarration}
            disabled={!text}
          >
            <Icon name="Play" size={16} className="mr-2" />
            Play
          </Button>
        ) : (
          <>
            {!isPaused ? (
              <Button
                variant="outline"
                size="sm"
                onClick={pauseNarration}
              >
                <Icon name="Pause" size={16} className="mr-2" />
                Pause
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={resumeNarration}
              >
                <Icon name="Play" size={16} className="mr-2" />
                Resume
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={stopNarration}
            >
              <Icon name="Square" size={16} className="mr-2" />
              Stop
            </Button>
          </>
        )}
      </div>

      {/* Accessibility Note */}
      <div className="mt-3 text-xs text-muted-foreground text-center">
        Listen to the story behind your food
      </div>
    </div>
  );
};

export default AudioNarration;