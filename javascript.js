document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    let keepGoing = true; 
    let i = 0;

    let row; // Declare row outside the loop to maintain scope

    do {
        if (i % 17 === 0) {
            row = document.createElement("div");
            row.classList.add("row");
            container.appendChild(row);
        } else {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);  
        }
        i++;
        if (i > 272) {
            keepGoing = false;
        }
    } while (keepGoing);
});
