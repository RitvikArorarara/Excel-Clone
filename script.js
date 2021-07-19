let rowNumberSection = document.querySelector(".row-number-section");

for(let i = 1; i <= 100; i++){
    let div = document.createElement("div");
    div.innerText=i;
    div.classList.add("row-number");
    rowNumberSection.append(div);
}
let columnTagsSection = document.querySelector(".column-tag-section")

for(let i = 0;i<26;i++){

    let asciiCode = 65 + i; 

    let reqAlphabet = String.fromCharCode(asciiCode)

    let div = document.createElement("div")
    div.innerText = reqAlphabet;
    div.classList.add("column-tag");
    columnTagsSection.append(div);


}

let cellSection = document.querySelector(".cell-section")

for(let i = 0; i <= 100; i++){
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for(let j = 0; j < 26; j++){

        let asciiCode = 65 + j;

        let reqAlphabet = String.fromCharCode(asciiCode);

        let cellAddress = reqAlphabet + i;

        let cellDiv = document.createElement("div");

        cellDiv.contentEditable = true;

        cellDiv.classList.add("cell");

        cellDiv.setAttribute("data-address", cellAddress);

        rowDiv.append(cellDiv);
    }
    cellSection.append(rowDiv);
}