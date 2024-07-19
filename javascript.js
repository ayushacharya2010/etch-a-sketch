document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    let keepGoing = true; 
    let i = 0;

    let row; // Declare row outside the loop to maintain scope
    let number = parseInt(prompt("How many squares would you like on each side? Keep the number below 100."));
    if (isNaN(number) || number < 1 || number > 100) {
        alert("Invalid input. Please enter a number between 1 and 100.");
        return;
    }

    do {
        if (i % (number + 1) === 0) {
            row = document.createElement("div");
            row.classList.add("row");
            container.appendChild(row);
        } else {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);  

            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = 'red';
            })
        }
        i++;
        if (i > (number * (number + 1))) {
            keepGoing = false;
        }
    } while (keepGoing);


});

