const expenseForm = document.getElementById("expenseForm")
const expenseList = document.getElementById("expenseList")
expenseForm.addEventListener("submit",
function(event) {
    event.preventDefault();
    const description = document.getElementById("description").Value;
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;
    if (document && category && !isNaN(amount)) {
        const newRow = document.createElement("tr")
        newRow.innerHTML = `<td>${description}</td>
        <td>${category}</td>
        <td>${amount}</td>'
        expenseList.appendChild(newRow)
        document.getElementById("description").Value=''
        document.getElementById("category").Value=''
        document.getElementById("amount").Value=''
    }
        else{
    alert("please fill out all field whit valid data")
}
});