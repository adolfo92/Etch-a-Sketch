//------------------------------------------------ div creation function --------
function divCreation(divClass,divSecondClass){
    const div = document.createElement("div");
    div.classList.add(divClass);
    if (divSecondClass!=undefined){
        div.classList.add(divSecondClass);
    }    
    return div;
};
//-------------- function for Background color change / Class adding ---------

function paint(element,color){

    element.style.backgroundColor = color;
}
function rainbowPaint(element){
    color=Math.floor(Math.random()*16777215).toString(16);
    console.log(color);
    element.style.backgroundColor = `#${color}`;


    // Notas de interes:
        // 16777215 es la maxima combinacion de colores hexadecimales
        // toString(16) convierte el numero a formato Hexadecimal, toString(2) a binario y asi
}


//------------------- Replace color function --------------------------------
function colorButtons(buttonQuery,color){

    buttonQuery.addEventListener('click',()=>{

        const squares = document.querySelectorAll(".column");
    
            squares.forEach(square => square.addEventListener('mouseover',(e)=> {
                if (color == "rainbow"){

                    rainbowPaint(square);
                    return;
                };
                paint(square,color);
            }
            ));
        
    });

}

//-----------------------------------------Replace grid function-----

function createGrid(size){

    //Grid boundaries------------
    if (size<=100 && size >=2){

        // Remove previous grid---------------------
        while (container.hasChildNodes()){
            container.removeChild(container.firstChild);
        }
        
        //Create new grid----------------
        for(let rowNum = 1; rowNum <= size;rowNum++){

            let createdRow = container.appendChild(divCreation("row",rowNum));
        
            for(let colNum = 1; colNum<=size;colNum++){
                
                createdRow.appendChild(divCreation("column",colNum));
            }
        
        }

        //Make grid sensible to hovering ----------

        const squares = document.querySelectorAll(".column");

        squares.forEach(square => square.addEventListener('mouseover',(e)=> {
            paint(square,"black");
        }
        ));

        return;

    }

    return alert("Invalid input, size must be between 2 and 100");
}

//---------------------------------------- Button behaviors -------------


// Size Change --------------------
const sizeButton = document.querySelector('#size-change');

sizeButton.addEventListener('click',()=>{
    let newSize = prompt("Grid size?");
    createGrid(newSize);
});

// Eraser button ------------------
const eraseButton = document.querySelector('#eraser');
colorButtons(eraseButton,"white");

// Black button --------------------
const blackButton = document.querySelector('#black');
colorButtons(blackButton,"black");

// Rainbow button --------------------
const rainbowButton = document.querySelector('#rainbow');
colorButtons(rainbowButton,"rainbow");


//------------------------------------------------------- base HTML Grid creation ---------------------------------------------------------------------

const container = document.querySelector(".gridContainer");

createGrid(16);
