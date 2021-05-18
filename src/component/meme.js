import React from "react"
import "../index.css"

function Meme({template, onClick}){
    return(
        <div className="meme-name">
            <img  
                src={template.url} 
                alt={template.name}
                onClick={onClick}
            />
        </div>
    )
}

export default Meme