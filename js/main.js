"use strict";

const addToCartBtns = document.querySelectorAll('.btn-custom_');

const cartMenu = document.querySelectorAll('added-items');


let createCartElement = function (item) {

    let itemPhoto = item.querySelectorAll('.photo_')[0].innerHTML;
    let itemName = item.querySelectorAll('.item-name_')[0].innerHTML;
    let itemPrice = item.querySelectorAll('.price_')[0].innerHTML;

    let nameDiv=document.createElement("div");
    let nameText = document.createTextNode(itemName);


    nameDiv.appendChild(nameText);

    return `<div>${itemPhoto}</div>`


};


let addToCart = function (e) {
    let item = e.target.parentElement;
    let ss=createCartElement(item);
    // cartMenu.appendChild(document.createTextNode(ss));


};


for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", addToCart);
}


