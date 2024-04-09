
let currentElems
fetch('./data.json')
  .then(response => response.json())
  .then(jsonData =>{
      console.log(jsonData)
//currentElems=jsonData
console.log(jsonData)
  } 
);

