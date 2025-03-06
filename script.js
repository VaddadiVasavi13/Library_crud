document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from input fields
    let bookName = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let publishDate = document.getElementById("publishDate").value;
    let price = document.getElementById("price").value;

    if (bookName && author && publishDate && price) {
        addBook(bookName, author, publishDate, price);
        document.getElementById("bookForm").reset(); // Clear form
    }
});

function addBook(bookName, author, publishDate, price) {
    let table = document.getElementById("bookTableBody");

    // Create a new row
    let row = table.insertRow();
    row.innerHTML = `
        <td contenteditable="true">${bookName}</td>
        <td contenteditable="true">${author}</td>
        <td contenteditable="true">${publishDate}</td>
        <td contenteditable="true">${price}</td>
        <td>
            <button class="edit" onclick="editRow(this)">Edit</button>
            <button class="save" onclick="saveRow(this)" style="display:none;">Save</button>
            <button class="delete" onclick="deleteRow(this)">Delete</button>
        </td>
    `;
}

// Enable editing mode
function editRow(button) {
    let row = button.parentElement.parentElement;
    row.querySelectorAll("td[contenteditable]").forEach(td => td.style.border = "1px solid red");
    button.style.display = "none";
    row.querySelector(".save").style.display = "inline";
}

// Save changes
function saveRow(button) {
    let row = button.parentElement.parentElement;
    row.querySelectorAll("td[contenteditable]").forEach(td => td.style.border = "none");
    button.style.display = "none";
    row.querySelector(".edit").style.display = "inline";
}

// Delete row
function deleteRow(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}
