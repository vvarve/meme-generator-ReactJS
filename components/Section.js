import React, {useState} from "react";
import memesData from "../memesData";

export const Section = () => {
const [meme, setMeme] = useState("")
const [top, setTop] = useState("")
const [down, setDown] = useState("")

    function getMemeImage() {   
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(memesArray[randomNumber].url)
       
        setTop(document.querySelector(".input-top-text").value)
        setDown(document.querySelector(".input-bottom-text").value)
    }
    console.log(meme)


    return (
        <div>
            <section>
                        <label className="label-top" htmlFor="top-text">Top text</label>
                        <input className="input-top-text" type="text" name="top-text" placeholder="Shut up"></input>
                        <label className="label-bottom" htmlFor="bottom-text">Bottom text</label>
                        <input className="input-bottom-text" type="text" name="bottom-text" placeholder="And take my mone"></input>
                        <button className="btn-section" onClick={getMemeImage}>Get a new meme image<span className="btn-image-span"></span></button>
            </section>
            <div className="principal-image">
                {top && <span className="top-text">{top}</span>}
                <img className="meme" src={meme}></img>
                {down && <span className="down-text">{down}</span>}
            </div>
        </div>
    )
}