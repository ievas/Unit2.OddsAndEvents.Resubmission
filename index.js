// TODO: this file! :)
//State
let state = {
   numberBank: [],
   odds: [],
   evens: []
}
//References
//for form use onSubmit event
let form = document.querySelector("form");
let bankField = document.querySelector("#numberBank output");
let sortOneButton = document.querySelector("#sortOne");
let sortAllButton = document.querySelector("#sortAll");

let oddField = document.querySelector("#odds output");
let evenField = document.querySelector("#evens output");


//Render

function render(){
    bankField.textContent = "";
    for (num of state.numberBank){
        
        bankField.textContent += num + " ";
    }
}

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let num = form.elements.number.value;
    state.numberBank.push(num);
    // console.log(state.numberBank);
    // if(Number(num)%2 === 0){
    //     state.evens.push(num);
    // } else {
    //     state.odds.push(num);
    // }
    form.reset();
    render();
})



sortOneButton.addEventListener("click", (ev) => {
    let num = state.numberBank[0];
    if(Number(num)%2===0) {
        evenField.textContent += num + " ";
    } else {
        oddField.textContent += num + " ";
    } 
    state.numberBank.shift();
    render();
})

sortAllButton.addEventListener("click", (ev) => {
    for (num of state.numberBank){
        if(Number(num)%2 === 0){
            evenField.textContent += num + " ";
        } else {
            oddField.textContent += num + " ";
        }
    }

    state.numberBank = [];
    render();
   
})

