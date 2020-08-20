// Set initial count
let count = 0;
// Select value and all buttons
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

console.log(btns);

btns.forEach((btn) => {
  //   console.log(btn);
  btn.addEventListener('click', (e) => {
    // Select each button
    console.log(e.currentTarget);
    const btnSelect = e.currentTarget;

    // Change count
    if (btnSelect.classList.contains('decrease')) {
      count--;
    } else if (btnSelect.classList.contains('reset')) {
      count = 0;
    } else if (btnSelect.classList.contains('increase')) {
      count++;
    }
    value.innerText = count;

    // Change color
    if (count < 0) {
      value.style.color = 'red';
    } else if (count > 0) {
      value.style.color = 'green';
    } else {
      value.style.color = '#000000';
    }
  });
});
