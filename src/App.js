import React, {useState, useEffect} from "react"
import Meme from "./component/meme"
import "./index.css"

const username = process.env.REACT_APP_IMGFLIP_USERNAME
const password = process.env.REACT_APP_IMGFLIP_PASSWORD

const objectToQueryParam = (obj) => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`)
    return "?" + params.join("&")
}

function App() {
    const [templates, setTemplates] = useState([])
    const [template, setTemplate] = useState(null)
    const [topText, setTopText] = useState(" ")
    const [bottomText, setBottomText] = useState(" ")
    const [meme, setMeme] = useState(null)
    const [start, setStart] = useState(true)
    
    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json()
        .then(json => setTemplates(json.data.memes)) 
      )},[])

    function restart() {
      setMeme(null)
      setTemplate(null)
      setTopText("")
      setBottomText("")
    }

    async function downloadMeme(imageURL) {
      // fetch the image blob
      const url = imageURL
      const response = await fetch(url)
      const blob = await response.blob()
      
      // create an objectURL
      const blobURl = URL.createObjectURL(blob)

      // set <a> tag's href to blob url
      const link = document.createElement('a')
      link.href = blobURl
      link.download = "meme"

      // Append link and trigger the download
      document.body.appendChild(link)
      link.click()
    }

    if (meme) {
      return (
        <div className="showPage">
          <div className="show-header">
            <h1>Meme Generator</h1>
            <p>Feel free to download your meme!</p>
          </div>
          <div className="new-meme">
            <button onClick={() => restart()}>Create more Meme!</button>
            <img src={ meme } alt="custom meme" />
            <button onClick={() => downloadMeme(meme)}>Download</button>
          </div>
            <div style={{margin:"20px"}}></div>
        </div>
      )
    }

    return (
      <div className="all-memes">
        {start && (
          <div className="landing">
            <div className="start">
              <h1>Meme Generator</h1>
              <p>I am so happy to be a meme.</p>
              <button onClick={()=> setStart(!start)}>
                Get started <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            <div className="credit"> Picture credits to : 
              <a href="https://www.inverse.com/article/60923-strange-planet-book-visual-glossary" target="_blank" rel="noreferrer">JAKE KLEINMAN</a>
            </div>
          </div>
        )}

        {!start && template && (
          <div className="editPage">
            <button onClick={() => restart()} className="back-btn">
              <i className="fas fa-arrow-left"></i>
                Back to template
            </button>

             <div className="edit-header">
                <h1>Meme Generator</h1>
                <p>Add Some Word to The Picture.</p>
              </div>

            <form 
                onSubmit = { async(e) => {
                  e.preventDefault()

                  const params = {
                    template_id: template.id,
                    text0: topText,
                    text1: bottomText,
                    username: username,
                    password: password,
                  }

                  const response = await fetch(`https://api.imgflip.com/caption_image${objectToQueryParam(params)}`)
                  const json = await response.json()
                  setMeme (json.data.url)
                }}
              >
              <div className="edit-place ">
                <div className="edit-img-name">
                  <Meme template = {template} />
                  <p>{template.name}</p>
                </div>

                <div className="edit-input">
                    <input 
                      className = "top-text"
                      placeholder = "Top Text"
                      value = {topText}
                      onChange={(e) => setTopText(e.target.value)}
                    />

                    <input 
                      placeholder = "Bottom Text"
                      value = {bottomText}
                      onChange={(e) => setBottomText(e.target.value)}
                    />
                      <button type = "submit"> Generate </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {!start && !template && (
          <div className="templatePage">
            <div className="template-header">
              <h1>Meme Generator</h1>
              <p>I am so happy to be a meme.</p>
            </div>

            <div className="meme meme-card">
              {templates.map((template) => {
                return (
                  <>
                    <Meme 
                      key = {template.id}
                      template={template}
                      onClick={() => {setTemplate(template)}}
                    />
                  </>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
}

export default App

