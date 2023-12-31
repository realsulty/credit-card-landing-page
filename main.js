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
  


  
  document.getElementById('btn1').addEventListener('click',sub)