import { useState, useEffect, useCallback } from 'react';
import './App.css';
import words from "./wordList.json"
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { HangmanKeyboard } from './HangmanKeyboard'

function App() {

  // set Word for game
  const [wordToGuess, setWordToGuess] = useState(getWord)

  // store letters already guessed
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetter = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )
  function getWord() {
    return words[Math.floor(Math.random() * words.length)]
  }
  const gameOver = incorrectLetter.length >= 6
  const winGame = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || gameOver || winGame) return
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, gameOver, winGame])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return
      e.preventDefault()
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return (
    <div className='container'>
      <div className='win-lose'>
        {winGame && "Winner! - Press ENTER to try Again"}
        {gameOver && "Nice Try! - Press ENTER to try Again"}
      </div>
      <HangmanDrawing numOfGuesses={incorrectLetter.length} />
      <HangmanWord reveal={gameOver} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch' }}>
        <HangmanKeyboard disabled={winGame || gameOver} addGuessedLetter={addGuessedLetter} inactiveLetters={incorrectLetter} activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))} />
      </div>

    </div>
  );
}

export default App;
