const button = document.querySelector('button.button');
const input = document.querySelector('.age');

button.onclick = () => {  // Стрелочная функцыя, точно также как и function ()
    let num = +input.value;
    if (num >= 18 && num < 100) {
        document.querySelector('.text_massege').innerHTML = "Wellcom :)";
        console.log('User had logined')
    }
    else if (num >= 100) {
        document.querySelector('.text_massege').innerHTML = "Sorry, you very oldes for this site :\\";
        console.log('I think he lay')
    }
    else {
        document.querySelector('.text_massege').innerHTML = "Your age is " + num + ', it less than 18. Yu cant logined :(';
        console.log('User dont logined')
    }
}