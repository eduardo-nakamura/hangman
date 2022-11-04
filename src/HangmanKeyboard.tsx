const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]
type HangmanKeyboardProps = {
    disabled?: boolean
    addGuessedLetter: (letter: string) => void
    inactiveLetters: string[]
    activeLetter: string[]
}
export function HangmanKeyboard({addGuessedLetter, inactiveLetters,activeLetter, disabled = false}: HangmanKeyboardProps){
    return <div className="container-keyboard">
        {KEYS.map(key => {
            const isActive = activeLetter.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return <button disabled={isInactive || isActive || disabled} onClick={() => addGuessedLetter(key)} className={`btn ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`} key={key}>{key}</button>
        })}
    </div>
}