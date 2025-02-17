import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase", "Success");
    }

    const handleLowClick = ()=>{
        let newtext1 = text.toLowerCase();
        setText(newtext1)
        props.showAlert("Converted to Lowercase", "Success");
    }

    const handleClearClick = ()=>{
        let newtext1 = "";
        setText(newtext1)
        props.showAlert("Text is cleared", "Success");
    }

    const handleReadClick = () => {
        if (text.trim().length === 0) {
          alert("Please enter some text to read!");
          return;
        }
        let speech = new SpeechSynthesisUtterance(text);
        speech.lang = "en-US"; // Set language
        speech.rate = 1; // Adjust speed (1 is normal)
        speech.pitch = 1; // Adjust pitch
        speech.volume = 1; // Adjust volume
        window.speechSynthesis.speak(speech);
        props.showAlert("Reading Text....", "Success");
    };

    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value);
    }

    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!!!!", "Success");
    }
    
  return (
    <>
    <div className='container' style={{color: props.mode ==='dark'?'white':'black'}}>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} placeholder='Enter your text' onChange={handleOnChange} 
            style={{backgroundColor: props.mode ==='dark'?'#070c2b':'white', color: props.mode ==='dark'?'white':'black'}}
            id="myBox" rows="10"></textarea>
        </div>
        <div>
        <button className='btn btn-light mx-2' onClick={handleUpClick} >Convert to Uppercase</button>
        <button className='btn btn-light mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
        <button className='btn btn-light mx-2' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-light mx-2' onClick={handleReadClick}>Read</button>
        <button className='btn btn-light mx-2' onClick={handleCopy}>Copy Text</button>
        </div>
    </div>
    {/* my-3 adds distance between two components of container */}
    <div className='container my-5' style={{color: props.mode ==='dark'?'white':'black'}}> 
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter(word => word.trim() !== "").length} words, {text.length} Characters</p>        
        <p>Minutes to read: <b>{0.008 * text.split(" ").length}</b></p>
    </div>
    
    </>
  )
}