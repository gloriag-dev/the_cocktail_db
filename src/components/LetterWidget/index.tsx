import React from "react"
import "./style.scss"


export interface ILetterWidgetProps {
    onChange: (event: any) => void
}

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

export default function LetterWidget(props: ILetterWidgetProps) {

    return <div className="letterWidget">
        <h3>Browse by letter</h3>
        <div className="letters-container">
            {letters.map((letter, index) => {
                return <button className="alphabet-btn" key={index} onClick={(event) => props.onChange(letter)}>{letter}</button>
            })}
        </div>
    </div>
}