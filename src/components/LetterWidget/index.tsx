import React from "react"
import "./style.scss"


export interface ILetterWidgetProps {
    letter: string;
    onChange: any
}
export default function LetterWidget(props: ILetterWidgetProps) {

    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


    const handleClick = (letter: string) => {

        props.onChange(letter)
    }

    return <div className="letterWidget">
        <h3>Browse by letter</h3>
        <div className="letters-container">
            {letters && letters.map((letter, index) => {
                return <button className="alphabet-btn" key={index} onClick={(event) => handleClick(letter)}>{letter}</button>
            })}
        </div>
    </div>
}