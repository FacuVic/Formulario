function generateNumbers() {
    var from = parseInt(document.getElementById('fromNumber').value);
    var to = parseInt(document.getElementById('toNumber').value);
    var quantity = parseInt(document.getElementById('quantity').value);
    var formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = '';
  
    if (isNaN(from) || isNaN(to) || isNaN(quantity)) {
      alert('Por favor ingrese números válidos en todos los campos.');
      return;
    }
  
    if (from >= to) {
      alert('El valor "Desde" debe ser menor que el valor "Hasta".');
      return;
    }
  
    if (quantity <= 0) {
      alert('La cantidad debe ser mayor que cero.');
      return;
    }
  
    var numbers = [];
    for (var i = 0; i < quantity; i++) {
      var randomNum = Math.floor(Math.random() * (to - from + 1)) + from;
      numbers.push(randomNum);
    }
  
    var tableHTML = '<h3># y lista de números:</h3>';
    tableHTML += '<table class="table">';
    tableHTML += '<thead><tr><th>#</th><th>Número</th><th>Eliminar</th></tr></thead>';
    tableHTML += '<tbody>';
    numbers.forEach(function(num, index) {
      tableHTML += '<tr><td>' + (index + 1) + '</td><td>' + num + '</td><td><button onclick="deleteRow(this)" class="btn btn-danger">Eliminar</button></td></tr>';
    });
    tableHTML += '</tbody></table>';
  
    formContainer.innerHTML = tableHTML;
  }
  
  function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  