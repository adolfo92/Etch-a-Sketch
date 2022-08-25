//------ div creation function --------
function divCreation(divClass,divSecondClass){
    const div = document.createElement("div");
    div.classList.add(divClass);
    if (divSecondClass!=undefined){
        div.classList.add(divSecondClass);
    }    
    return div;
};
//----- function for Background color changer / Class adding ---------

function paint(element,color){
    element.style.backgroundColor = color;

}


//----------Replace grid function-----

function createGrid(size){
    if (size<=100 && size >=2){
        // Remove previous grid
        while (container.hasChildNodes()){
            console.log("Check 1");
            container.removeChild(container.firstChild);
        }
        
        //Create new grid
        for(let rowNum = 1; rowNum <= size;rowNum++){

            let createdRow = container.appendChild(divCreation("row",rowNum));
        
            for(let colNum = 1; colNum<=size;colNum++){
                
                createdRow.appendChild(divCreation("column",colNum));
            }
        
        }

        return;

    }

    return alert("Invalid input, size must be between 2 and 100");
}

//----- base HTML Grid creation ----

const container = document.querySelector(".gridContainer");

for(let rowNum = 1; rowNum <= 16;rowNum++){

    let createdRow = container.appendChild(divCreation("row",rowNum));

    for(let colNum = 1; colNum<=16;colNum++){
        
        createdRow.appendChild(divCreation("column",colNum));
    }

}

//----- Make grid sensible to hovering ----------

const squares = document.querySelectorAll(".column");

squares.forEach(square => square.addEventListener('mouseover',(e)=> {
    console.log(e);
    paint(square,"black");
    }
    ));

//------- Button behaviors -------------

// Size Change --------------------
const button = document.querySelector('#size-change');

button.addEventListener('click',()=>{
    let newSize = prompt("Grid size?");
    createGrid(newSize);
});