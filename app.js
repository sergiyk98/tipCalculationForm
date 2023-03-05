const button = document.querySelector('button'),
   fieldAmount = document.querySelector('#bill-amount'),
   fieldPeople = document.querySelector('#number-of-people'),
   tipAmount = document.querySelector('#tip-amount'),
   totalPerPerson = document.querySelector('#total-per-person');




fieldAmount.addEventListener('input', toggleButton);
fieldPeople.addEventListener('input', toggleButton);

function toggleButton() {
   if (fieldAmount.value.trim() === '' || fieldPeople.value.trim() === '') {
      button.disabled = true;
   } else {
      button.disabled = false;
   }
}


button.addEventListener('click', () => {
   const inputRadio = document.querySelector('input[name="tip"]:checked');

   tipAmount.innerText = ((fieldAmount.value / 100) * inputRadio.value).toFixed(2);
   totalPerPerson.innerText = (fieldAmount.value / fieldPeople.value + Number(tipAmount.innerText) / fieldPeople.value).toFixed(2);
});