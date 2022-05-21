const makeHome = () => {
    document.querySelector('body').className = '';
 };
 
 const makeChicago = () => {
    document.querySelector('body').className = 'chicago';
 };
 
 const makeLa = () => {
    document.querySelector('body').className = 'la';
 };
 
 const makeNyc = () => {
    document.querySelector('body').className = 'nyc';
 };
 
 document.querySelector('#home').addEventListener('click', makeHome);
 document.querySelector('#chicago').addEventListener('click', makeChicago);
 document.querySelector('#la').addEventListener('click', makeLa);
 document.querySelector('#nyc').addEventListener('click', makeNyc);
 