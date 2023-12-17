function createGrid() {
    const gridContainerDiv = document.querySelector(".EAS-container");
    const gridCreationButton = document.querySelector(".grid-creation-button")
    const allGridVerticalDivs = document.querySelectorAll(".gridverticalDivs")
    gridContainerDiv.style.width = "700px";
    gridContainerDiv.style.height = "30px";

    const userColorChoice = prompt('Please pick a color');
    let userGridDimensionChoice = prompt('Please enter a number up to 100')

    // Essenitally the grid is 16 'vertical divs' stacked in a column that are invisible from the first for loop, the 16 horizontal divs from the second for loop are visible and what will be interacted with

    // This Loop Creates first column of Grid Divs
    for (let i = 0; i <= userGridDimensionChoice; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('gridverticalDivs');
        gridContainerDiv.appendChild(gridDiv)
        gridDiv.style.height = '100%';
        gridDiv.style.width = '100%';
        // gridDiv.style.border = '2px solid black';
        gridDiv.style.display = 'flex';
        gridDiv.style.flexDirection = 'row';

        for (let j = 0; j <= userGridDimensionChoice; j++) {
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('gridhorizontalDivs');
            gridDiv.appendChild(rowDiv);
            rowDiv.style.height = '30px';
            rowDiv.style.width = '30px';
            rowDiv.style.border = '1px solid rgba(0, 0, 0, 0.5)';
            rowDiv.addEventListener('mouseover', () => {
                rowDiv.style.backgroundColor = `${userColorChoice}`
            });
        }

    }
    // This removes the button after it's intially pressed
    if(gridCreationButton){gridCreationButton.remove();};
    // gridContainerDiv.appendChild(createResetButton);

}

function createResetButton (){ 
    const gridContainerDiv = document.querySelector(".EAS-container");
    let resetButton = document.createElement('button');
    resetButton.innerHTML = 'Reset Grid';
    gridContainerDiv.appendChild(resetButton);
    resetButton.onclick = function() {
        // Remove the existing grid
        while (gridContainerDiv.firstChild) {
          gridContainerDiv.removeChild(gridContainerDiv.firstChild);
        }
        createGrid();
        createResetButton();
    }



    
}




function findElementTest() {
    const testText = document.createElement("p")
    testText.innerHTML = "Can I been Seen?";
    gridContainerDiv.appendChild(testText)
    return testText
}