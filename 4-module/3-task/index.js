function highlight(table) {

  for (let row of table.rows) {
    if (row.cells[2].textContent == "m") {
      row.classList.add("male");
    } else if (row.cells[2].textContent == "f") {
      row.classList.add("female");
    };

    if (row.cells[1].innerHTML < 18) {
      row.style.textDecoration = "line-through";
    };

    if (row.cells[3].dataset.available == undefined) {
      row.hidden = true;
    } else if (row.cells[3].dataset.available == "false") {
      row.classList.add("unavailable");
    } else {
      row.classList.add("available");
    }
  }
}