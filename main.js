function sub(e){
e.preventDefault()
   const input = document.querySelectorAll('input');
  let allFilled = true;

   input.forEach(function(input) {
    if (input.value.trim() === '') {
        allFilled = false;
    } 
    input.value = '';
  });
  if (!allFilled) {
    alert('One or more inputs are empty');

  } else {
    alert('Sumbited successfuly');
  }
  }

  document.getElementById('cv').addEventListener('input', function() {
    if (this.value.length === 3) {
      this.blur(); // Removes focus from the input
    }

  });

  document.getElementById('Exp-mm').addEventListener('input', function() {
    if (this.value.length === 2) { // Assuming 10 is the max length
      const nextInput = this.nextElementSibling;
      if (nextInput && nextInput.tagName === "INPUT") {
        nextInput.focus(); // Focus on the next input element
      }
    }
  });
  document.getElementById('Exp-yy').addEventListener('input', function() {
    if (this.value.length === 2) { // Assuming 10 is the max length
      const nextInput = this.nextElementSibling;
      if (nextInput && nextInput.tagName === "INPUT") {
        nextInput.focus(); // Focus on the next input element
      }
    }
  });
  
  
  


  
  document.getElementById('btn1').addEventListener('click',sub)