const makeBigger = () => {
   /*alert('make bigger!');*/
   document.querySelector('div.content').style.fontSize = '40px';
   document.querySelector('h1').style.fontSize = '40px';
};

const makeSmaller = () => {
  /* alert('make smaller!');*/
   document.querySelector('div.content').style.fontSize = '10px';
   document.querySelector('h1').style.fontSizeAdjust = '10px';
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);
