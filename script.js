const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const priceElements = document.querySelectorAll('.prices');

  // Initialize total price
  let totalPrice = 0;

  // Loop through each price element and add its value to the total price
  for (let i = 0; i < priceElements.length; i++) {
    totalPrice += parseFloat(priceElements[i].innerText);
  }

  // Create a new row for the total price
  const newRow = document.createElement('tr');
  const newCell = document.createElement('td');

  // Set the text content of the new cell to the total price
  newCell.textContent = `Total Price: ${totalPrice}`;

  // Add the new cell to the new row
  newRow.appendChild(newCell);

  // Add the new row to the end of the table
  const table = document.querySelector('table');
  table.appendChild(newRow);

};

getSumBtn.addEventListener("click", getSum);

