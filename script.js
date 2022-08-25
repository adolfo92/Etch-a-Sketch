//------ div creation function --------
function divCreation(divClass,divSecondClass){
    const div = document.createElement("div");
    div.classList.add(divClass);
    if (divSecondClass!=undefined){
        div.classList.add(divSecondClass);
    }    
    return div;
};


//----- HTML Grid creation ----

const container = document.querySelector(".gridContainer");

for(let rowNum = 1; rowNum <= 16;rowNum++){

    let createdRow = container.appendChild(divCreation("row",rowNum));

    for(let colNum = 1; colNum<=16;colNum++){
        
        createdRow.appendChild(divCreation("column",colNum));
    }

}
