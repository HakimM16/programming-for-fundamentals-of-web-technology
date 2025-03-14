// Function to create the multiplication table
function createMultiplicationTable() {
    const size = 15; // 15x15 table
    
    // Create table element
    const table = document.createElement('table');
    
    // Add caption
    const caption = document.createElement('caption');
    caption.textContent = 'Multiplication Table';
    table.appendChild(caption);
    
    // Create thead
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    // Add "X" cell in the top-left corner
    const cornerCell = document.createElement('th');
    cornerCell.textContent = 'X';
    headerRow.appendChild(cornerCell);
    
    // Add header cells (1 to 15)
    for (let i = 1; i <= size; i++) {
        const th = document.createElement('th');
        th.textContent = i;
        headerRow.appendChild(th);
    }
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create tbody
    const tbody = document.createElement('tbody');
    
    // Create rows for the body
    for (let i = 1; i <= size; i++) {
        const row = document.createElement('tr');
        
        // Create the first cell with row number
        const rowHeader = document.createElement('td');
        rowHeader.textContent = i;
        row.appendChild(rowHeader);
        
        // Create cells with multiplication results
        for (let j = 1; j <= size; j++) {
            const cell = document.createElement('td');
            cell.textContent = i * j;
            row.appendChild(cell);
        }
        
        tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
    
    // Create tfoot
    const tfoot = document.createElement('tfoot');
    const footerRow = document.createElement('tr');
    const footerCell = document.createElement('td');
    footerCell.colSpan = size + 1;
    footerCell.textContent = 'JavaScript';
    footerRow.appendChild(footerCell);
    tfoot.appendChild(footerRow);
    table.appendChild(tfoot);
    
    // Add the table to the container
    document.getElementById('tableContainer').appendChild(table);
}

// Call the function when the page loads
window.onload = createMultiplicationTable;