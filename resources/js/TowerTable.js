function createTable(rows) {
    // Create a table element
    let table = document.createElement('table');
    // let rows = 16;
    let columns = 3;
    let ranNum = rows * columns;

    setTowerCounts(rows);

    let numbers = [];
    for (let i = 1; i <= ranNum; i++) {
        numbers.push(i)
    }

    for (let i = numbers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    let index = 0;

    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');
        row.classList.add('column');

        for (let j = 0; j < columns; j++) {
            let cell = document.createElement('td');
            cell.classList.add('block');
            cell.style.textAlign = 'center'
            let number = numbers[index];
            cell.innerText = number;
            index++
            cell.addEventListener('click', function () {
                getTowerQuestions(cell);
            });

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    // Append the table to the body of the document
    // Append the table to the specific div
    var tableContainer = document.getElementById('tower_Table');
    tableContainer.appendChild(table);
}

function clearTable() {
    var tableContainer = document.getElementById("tower_Table");
    tableContainer.innerHTML = ''; // Clear the table from the UI

    createTable(rows);

    // Clear table data from sessionStorage
    // localStorage.clear();
    // window.location.reload()


}