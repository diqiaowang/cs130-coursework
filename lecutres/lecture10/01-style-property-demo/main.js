const resetButtonBackgrounds = () => {
    const color = '#EEE';
    document.querySelector("#btn1").style.backgroundColor = color;
    document.querySelector("#btn2").style.backgroundColor = color;
    document.querySelector("#btn3").style.backgroundColor = color;
    document.querySelector("#btn4").style.backgroundColor = color;
};

const makeRed = () => {
    // your code here...
    resetButtonBackgrounds ();
    console.log('Change background to red');
    document.querySelector("body").style.backgroundColor = 'red';
    document.querySelector("#btn1").style.backgroundColor = 'red';
    document.querySelector("#btn1").style.fontSize = '20px';
};

const makeBlue = () => {
    // your code here...
    resetButtonBackgrounds ();
    console.log('Change background to blue');
    document.querySelector("body").style.backgroundColor = 'blue';
    document.querySelector("#btn2").style.backgroundColor = 'blue';
};

const makePink = () => {
    // your code here...
    resetButtonBackgrounds ();
    console.log('Change background to pink');
    document.querySelector("body").style.backgroundColor = 'pink';
    document.querySelector("#btn3").style.backgroundColor = 'pink';
};

const makeOrange = () => {
    // your code here...
    resetButtonBackgrounds ();
    console.log('Change background to orange');
    document.querySelector("body").style.backgroundColor = 'orange';
    document.querySelector("#btn4").style.backgroundColor = 'orange';
};

