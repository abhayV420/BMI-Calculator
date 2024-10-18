import React from "react";
import { useState } from "react";

export default function converter() {
  const [weight, setweight] = useState('');
  const [height, setheight] = useState('');
  const [value, setvalue] = useState('...');
  const [status, setstatus] = useState('');

  let result = () =>{
    let newheight = height*2;
    let resultf = weight/newheight
    setvalue(resultf)
    if(resultf>=30){
      setstatus('Your are Overweight')
    }else if(weight === '0' || height === '0'){
      setvalue('Incorrect value')
      setstatus('Please enter a correct value')
    }else if(weight === "" || height === "") {
      setvalue('...')
      setstatus('Both Boxes should contain value')
    }else{
      setstatus('Your are fine')
    }
  }

  let reload = () =>{
    setweight('');
    setheight('');
    setvalue('...')
    setstatus('cleared.')
  }
  return (
    <div
      id="maindiv"
      className="flex flex-col justify-center items-center gap-5"
    >
      <h1 id="title">BMI Calculator</h1>

      <div id="main-part" className="flex flex-col gap-5">
        <div id="input-part" className="flex flex-col gap-1">
          <div id="input1" className="flex flex-col gap-1">
            <label htmlFor="inp1">weight(kg)</label>
            <input
              id="inp1"
              type="number"
              value={weight}
              placeholder="Enter your weight"
              className="px-3"
              onChange={(e) => setweight(e.target.value)

              }
            />
          </div>
          <div id="input2" className="flex flex-col gap-1">
            <label htmlFor="inp2">height(m)</label>
            <input
              id="inp2"
              type="number"
              value={height}
              placeholder="Enter your height"
              className="px-3"
              onChange={(e) => setheight(e.target.value)}
            />
          </div>
        </div>

        <div id="button-part" className="flex flex-col gap-2">
          <button className="bg-blue-600 text-white" onClick={result}>Submit</button>
          <button onClick={reload}>Reload</button>
        </div>
      </div>

      <div id="status-part">
        <h2 id="result">Your BMI is:- {value}</h2>
        <h3 id="status" className="text-center ">{status}</h3>
      </div>
    </div>
  );
}
