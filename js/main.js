"use strict";

const addToCartBtns = document.querySelectorAll('.btn-custom_');

const cartMenu = document.querySelector('#added-items');



function* counter() {
    for (let i =0;;i++) {
        console.log(i);
        yield i
    }
}

class CartElement {

    constructor(item) {
        this.itemPhoto = item.querySelectorAll('.photo_')[0].innerHTML;
        this.itemName = item.querySelectorAll('.item-name_')[0].innerHTML;
        this.itemPrice = item.querySelectorAll('.price_')[0].innerHTML;
    }

    buildCartElement () {
        return `<div class="d-flex">
            ${this.itemPhoto}
            <div class="d-flex flex-column">
                <span>${this.itemName}</span>
                <div>
                    <span>PRICE</span>
                    <span>${this.itemPrice}</span>
                </div>
                <div>
                    <span>QTY:</span>
                    <input type="number" id="item-qty" value="0">
                </div>
            </div>
        </div>`
    }
}

let cartCouner = counter();


let addToCart = function (e) {

    let item = e.target.parentElement;
    let element = new CartElement(item);

    let mydiv = document.createElement('div');
    mydiv.innerHTML = element.buildCartElement().trim();


    cartMenu.appendChild(mydiv)
    // const divyArray = Array.from(cartMenu);
    // divyArray.push(element.buildCartElement())
    // divyArray.innerHTML = element.buildCartElement();


    // cartMenu.item(cartCouner.next().value).innerHTML = element.buildCartElement();

};



for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", addToCart);
}




