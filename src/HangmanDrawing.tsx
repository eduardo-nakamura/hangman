const HEAD = (
    <div className="head"/>
)
const BODY = (
    <div className="boddy"/>
)
const RIGHT_ARM = (
    <div className="right-arm"/>
)
const LEFT_ARM = (
    <div className="left-arm"/>
)
const RIGHT_LEG = (
    <div className="right-leg"/>
)
const LEFT_LEG = (
    <div className="left-leg"/>
)

const BODY_PARTS = [ HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG ]
type HangmanDrawingProps = {
    numOfGuesses: number
}


export function HangmanDrawing({numOfGuesses}: HangmanDrawingProps){
    return <div className="drawing-container">
        {BODY_PARTS.slice(0, numOfGuesses)}
    
        <div className="hangman-rope"/>
        <div className="hangman-top"/>
        <div className="hangman-pole"/>
        <div className="hangman-base"/>
    </div>
}