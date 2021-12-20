import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';





function App() {
  
  return (
    <div className="App">
      <Button handleClick={(event, id)=>{
        console.log("Button clicked", event, id)
      }}/>
      <Input value="" handleChange={(event)=>console.log(event)}/>
      <Container styles={{border: '1px solid black', padding: '1rem'}}/>
    </div>
  );
}

export default App;




// import Status from './components/Status';
// import Heading from './components/Heading';
// import Oscar from './components/Oscar';
{/* <Status status='loading'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Me!</Heading>
      </Oscar> */}