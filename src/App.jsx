import React from 'react';
import Navbar from './component/header/Navbar';
import TextForm from './component/text/TextForm';



export default function App() {
  return (
    <div>
      <Navbar />
      <TextForm text="Enter the Any Text Analyze Below" textform="Text-Form"/>
    </div>
  )
}
