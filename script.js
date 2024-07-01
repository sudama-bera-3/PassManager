document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const website = document.getElementById('website').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    addPassword(website, username, password);
  
    document.getElementById('website').value = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  });
  
  function addPassword(website, username, password) {
    const table = document.getElementById('passwordTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
  
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
  
    cell1.textContent = website;
    cell2.textContent = username;
    cell3.textContent = password;
  }
  