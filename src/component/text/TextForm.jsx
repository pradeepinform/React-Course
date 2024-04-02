import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText);

    };


    const handleLoClick = () => {

        let newtext = text.toLowerCase();
        setText(newtext);

    };

    const handleClear = () => {
        let newText = '';
        setText(newText);
    }


    const handleCopy = () =>{

        navigator.clipboard.writeText(text);
    };


    const handleExtraSpace = () =>{

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    const handleOnClick = (event) => {

        setText(event.target.value);
    };


    return (
        <>

            <div className='container'>

                <div className="my-9 ">
                    <h2 className='t-52'>{props.text}</h2>
                    <textarea className="form-control" onChange={handleOnClick} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className=" my-2 btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="ms-2 btn btn-secondary" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className=" ms-2 btn btn-success" onClick={handleClear}>Clear</button>
                <button className="ms-2 btn btn-warning" onClick={handleCopy}>TextCopy</button>
                <button className="ms-2 btn btn-danger" onClick={handleExtraSpace}>ExtraSpaceRemove</button>
            </div>


            <div className="container">
                <h1 className='mt-4'>Your text is Summary</h1>
                <p>{text.split(" ").length}  word And {text.length}  Characters</p>
                <h4>Previews</h4>
                <p>{text}</p>
            </div>

        </>
    )
}
