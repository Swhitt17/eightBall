import React,{useState} from "react";
import {RandomChoice} from "./RandomChoice"
import "./EightBall.css"

const EightBall= ({answers}) => {
    const [response, setResponse] = useState({msg:"Think of a Question", color: "black"});
     const handleClick = (e) => {
        setResponse(RandomChoice(answers))
     }
    return (
        <div className="EightBall"
        style={{
            backgroundColor: response.color
        }}
        onClick={handleClick}
        >

       <b>{response.msg}</b>

        </div>
    )


}

export default EightBall;