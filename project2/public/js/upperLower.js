function sortTable(colIndex) {
    const table = document.getElementById("myTable");
    const rows = Array.from(table.rows).slice(1); // Header row'u atla

    rows.sort((rowA, rowB) => {
        const cellA = parseFloat(rowA.cells[colIndex].textContent.trim() || '0');
        const cellB = parseFloat(rowB.cells[colIndex].textContent.trim() || '0');
        return cellA - cellB;
    });

    // Tabloyu sıralanan satırlarla güncelle
    rows.forEach((row, index) => {
        table.rows[index + 1].parentNode.appendChild(row); // +1, header row'u göz ardı eder
    });
}