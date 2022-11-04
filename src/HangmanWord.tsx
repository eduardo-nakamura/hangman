type HangmanWordProps = {
    guessedLetters: string[],
    wordToGuess: string
    reveal?: boolean
}
export function HangmanWord({guessedLetters, wordToGuess, reveal = false }: HangmanWordProps){
 
    return <div className="container-word">
        {wordToGuess.split("").map((letter, index) => (
            <p><span style={{color: !guessedLetters.includes(letter) && reveal ? "red" : "black"}} key={index} className={guessedLetters.includes(letter) || reveal ? 'word-yes' : 'word-no'}>{letter}</span></p>
        ))}
    </div>
}