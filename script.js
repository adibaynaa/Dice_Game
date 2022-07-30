let disp = document.getElementById('dice-display');
let shuffle = document.getElementById('shuffle');

// let disp_numb = [];

shuffle.addEventListener('click' , ()=>{
  let random_numb = Math.ceil(Math.random() * 6);
  disp.textContent = 'Your Dice : ' + random_numb;
});