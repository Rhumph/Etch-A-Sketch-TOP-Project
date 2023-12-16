function createGrid (){ 
    const gridContainerDiv = document.querySelector(".EAS-container");
    const gridCreationButton = document.querySelector(".grid-creation-button")
    const allGridVerticalDivs = document.querySelectorAll(".gridverticalDivs")
    gridContainerDiv.style.width = "700px";
    gridContainerDiv.style.height = "30px";

    
    // Essenitally the grid is 16 'vertical divs' stacked in a column that are invisible from the first for loop, the 16 horizontal divs from the second for loop are visible and what will be interacted with

    // This Loop Creates first column of Grid Divs
    for (let i = 0; i <= 15; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('gridverticalDivs');
        gridContainerDiv.appendChild(gridDiv)
        gridDiv.style.height = '100%';
        gridDiv.style.width = '100%';
        // gridDiv.style.border = '2px solid black';
        gridDiv.style.display = 'flex';
        gridDiv.style.flexDirection = 'row';
    
        for (let j = 0; j <=15; j++) {
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('gridhorizontalDivs');
            gridDiv.appendChild(rowDiv);
            rowDiv.style.height = '30px';
            rowDiv.style.width = '30px';
            rowDiv.style.border = '1px solid rgba(0, 0, 0, 0.5)';

            rowDiv.style.width = '30px';
        }
    
    }
    // This removes the button after it's intially pressed
    gridCreationButton.remove();
    
}







function findElementTest() { 
    const testText = document.createElement("p")
testText.innerHTML = "Can I been Seen?";
gridContainerDiv.appendChild(testText)
return testText
}