let op = prompt("Enter operation, + - * /");
let num1 = parseFloat(document.getElementById(num1));
let num2 = parseFloat(document.getElementById(num2));


switch (op){
    case '+':
        alert(`${num1} + ${num2} = ${num1 + num2}`);
    break;
    
    case '-':
        alert(`${num1} - ${num2} = ${num1 - num2}`);
    break;

    case `*`:
        alert(`${num1} * ${num2} = ${num1 * num2}`);
    break;
}

// let op = prompt("Enter operation, + - * /");
// let num1 = parseFloat(prompt("Enter a number"));
// let num2 = parseFloat(prompt("Enter a second number"));


// switch (op){
//     case '+':
//         alert(`${num1} + ${num2} = ${num1 + num2}`);
//     break;
    
//     case '-':
//         alert(`${num1} - ${num2} = ${num1 - num2}`);
//     break;

//     case `*`:
//         alert(`${num1} * ${num2} = ${num1 * num2}`);
//     break;
// }