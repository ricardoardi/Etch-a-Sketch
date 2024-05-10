const container = document.querySelector(".container");
const rows = document.querySelector(".rows");
const header= document.querySelector(".header");
const allRows= document.querySelectorAll(".rows");

const newBtn = document.createElement("button");
newBtn.textContent="New Grid";
header.appendChild(newBtn);

const hexCharacter=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

function getColor(index){
    return hexCharacter[index];
}

function generateColor(){
    let colorHex="#";

    for(let index=0;index<6;index++){
        const randomPosition= Math.floor(Math.random()*hexCharacter.length);
        colorHex+=getColor(randomPosition);
    }

    return colorHex
}



newBtn.addEventListener("click",()=>{
    let input=prompt("choose grid");
    if (input>0&&input<=100){
        deleteGrid()
        makeGrid(input);
    }else{
        return "invalid number"
    }
})



function makeGrid(input=16){
    let grid= input * input;
    for(let i=0;i<grid;i++){
        const rows = document.createElement("div");
        rows.className="rows";
        container.appendChild(rows);
        rows.addEventListener("mouseover",()=>{
            const newColor=generateColor();
            rows.style.backgroundColor=newColor;
        })
    }
}

function deleteGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}

makeGrid();




