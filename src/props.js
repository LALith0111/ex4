import React from 'react';

function Cars({name1, tool1, model1,model2,model3,name2, tool2,name3, tool3,}) {

    return (
      <div>
        <h1>Sedan</h1>
        <h2>Brand: {name1}.</h2>
        <h2>Model: {model1}.</h2>
        <h2>Price: {tool1}.</h2><br></br>

        <h1>Hatchback</h1>
        <h2>Brand: {name2}.</h2>
        <h2>Model: {model1}.</h2>
        <h2>Price: {tool2}.</h2><br></br>

        <h1>SUV</h1>
        <h2>Brand: {name3}.</h2>
        <h2>Model: {model1}.</h2>
        <h2>Price: {tool3}.</h2><br></br>
      </div>
      
    );

  }
  
  Cars.defaultProps = {
    name1: "Skoda",
    model1:"Octavia",
    tool1: "35,00,000",

    name2: "Honda",
    model2:"Jazz",
    tool2: "9,00,000",

    name3: "Ford",
    model3:"Endeavour",
    tool3: "40,00,000",
  }
export default Cars


// .Block{
//     background-color: black;
//     color: antiquewhite;
//     animation: blink 1s steps(1, end) infinite;
//     -webkit-animation:colorchange 20s infinite alternate;
//   }
  
//   @keyframes blink {
//     0% {
//       opacity: 1;
//       color: blue;
//     }
//     10% {
//         opacity: 0;
//         color: #8e44ad;
//       }
//       20% {
//         opacity: 1;
//         color: #1abc9c;
//       }
      
//       30% {
//         opacity: 0;
//         color: #d35400;
//       }
      
//       40% {
//         opacity: 1;
//         color: blue;
//       }
//     50% {
//         color: #34495e;
//       opacity: 0;
//     }
//     60% {
//         opacity: 1;
//         color: blue;
//       }
      
//       70% {
//         opacity: 0;
//         color: #2980b9;
//       }
//       80% {
//         opacity: 1;
//         color: #f1c40f;
//       }
      
//       90% {
//         opacity: 1;
//         color: #2980b9;
//       }
      
//     100% {
//         color: pink;
//       opacity: 1;
//     }
//   }
  