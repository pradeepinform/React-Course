import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText);

    };


    const handleOnClick = (event) => {

        setText(event.target.value);
    };


    return (
        <div className='container-fluid'>

            <div className="my-9 ">
                <h2 className='t-52'>{props.text}</h2>
                <textarea className="form-control" onChange={handleOnClick} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className=" my-2 btn btn-primary" onClick={handleUpClick}>ToUpperCase</button>
            <button className="ms-2 btn btn-secondary">LowerCase</button>
            <button className=" ms-2 btn btn-success">Clear</button>
            <button className="ms-2 btn btn-warning">textCopy</button>
            <button className="ms-2 btn btn-danger">RemoveSpace</button>
        </div>
    )
}
