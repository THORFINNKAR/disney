

const dropdown = document.querySelector(".part3_ouverture");
const btnDrop = document.querySelector(".part3_boutton");

let toggleIndex = 0;

btnDrop.addEventListener('click', () => {

    if(toggleIndex === 0){
        dropdown.style.height = `${dropdown.scrollHeight}px`;
        toggleIndex++;
    } else {
        dropdown.style.height = `${btnDrop.scrollHeight}px`;
        toggleIndex--;
    }

})




const dropdown2 =document.querySelector("#ouverture");
const btnDrop2 =document.querySelector("#boutton");

let toggleIndex2 = 0;

btnDrop2.addEventListener('click', () => {

    if(toggleIndex === 0){
        dropdown2.style.height = `${dropdown2.scrollHeight}px`;
        toggleIndex++;
    } else {
        dropdown2.style.height = `${btnDrop2.scrollHeight}px`;
        toggleIndex--;
    }

})




const dropdown3 = document.querySelector("#ouverture_1");
const btnDrop3 = document.querySelector("#button_1");

let toggleIndex3 = 0;

btnDrop3.addEventListener('click', () => {

    if(toggleIndex === 0){
        dropdown3.style.height = `${dropdown3.scrollHeight}px`;
        toggleIndex++;
    } else {
        dropdown3.style.height = `${btnDrop3.scrollHeight}px`;
        toggleIndex--;
    }

})





const dropdown4 = document.querySelector("#ouverture_2");
const btnDrop4 = document.querySelector("#boutton_2");

let toggleIndex4 = 0;

btnDrop4.addEventListener('click', () => {

    if(toggleIndex === 0){
        dropdown4.style.height = `${dropdown4.scrollHeight}px`;
        toggleIndex++;
    } else {
        dropdown4.style.height = `${btnDrop4.scrollHeight}px`;
        toggleIndex--;
    }

})





const dropdown5 = document.querySelector("#ouverture_5");
const btnDrop5 = document.querySelector("#boutton_5");

let toggleIndex5 = 0;

btnDrop5.addEventListener('click', () => {
    if(toggleIndex === 0){
        dropdown5.style.height = `${dropdown5.scrollHeight}px`;
        toggleIndex++;
    } else {
        dropdown5.style.height = `${btnDrop5.scrollHeight}px`;
        toggleIndex--;
    }

})