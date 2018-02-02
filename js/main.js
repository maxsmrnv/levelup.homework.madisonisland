"use strict";

const addToCartBtns = document.querySelectorAll('.btn-custom_');

const cartMenu = document.getElementById('added-items');

const photoItem = document.querySelectorAll('#added-items');


let createCartElement = function (photo,name,price) {

    console.log(price);

    return price

};


let addToCart = function (e) {
    console.log(e.target);
    let item = e.target.parentElement;
    let itemPhoto = item.querySelectorAll('.photo_')[0];
    let itemName = item.querySelectorAll('.item-name_')[0];
    let itemPrice = item.querySelectorAll('.price_')[0];


    cartMenu.appendChild(itemPhoto.cloneNode(true));
    cartMenu.appendChild(itemName.cloneNode(true))

};


for (let i=0; i<addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", addToCart);
}


