"use strict";

const addToCartBtns = document.querySelectorAll('.btn-custom_');

const cartMenu = document.querySelector('#added-items');


function* counter() {
    for (let i = 0; ; i++) {
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


    buildCartElement(qty = 1) {

        let itemContainer = document.createElement('div');
        itemContainer.classList.add("d-flex", "item-container_", "justify-content-center", "my-1");

        let itemTemplate = `
<!--<button type="button" class="remove-item_ btn text-uppercase">del</button>-->
            ${this.itemPhoto}
            <div class="d-flex flex-column justify-content-center">
                <span>${this.itemName}</span>
                <div>
                    <span>PRICE</span>
                    <span>${this.itemPrice}</span>
                </div>
                <div>
                    <span>QTY:</span>
                    <input type="number" class="item-qty_" value="${qty}">
                </div>
            </div>
            <!--<i class="remove-item_ fas fa-times"></i>-- Не смог разобраться, как повесить обработчик на этот элемент, поэтому сделал просто кнопку>-->
            <button class="remove-item_ mr-2 btn ml-2" type="button">X</button>`;

        itemContainer.innerHTML = itemTemplate.trim();

        return itemContainer
    }
}

let cart = {
    elementsOfCart: {},

    addToCart: function (e) {
        let item = e.target.parentElement;
        let element = new CartElement(item);
        cart.elementsOfCart[element.itemName.trim()] = 1;
        cartMenu.appendChild(element.buildCartElement());
        setHandler(document.querySelectorAll('.remove-item_'), "click", cart.removeFromCart);
        console.log(cart.elementsOfCart)


    },

    removeFromCart: function (e) {
        let item = e.target.parentElement;
        let itemName = document.querySelectorAll('.item-name_')[0].innerHTML;
        item.parentNode.removeChild(item);
        delete cart.elementsOfCart[itemName.trim()];
        console.log(cart.elementsOfCart)
    }

};







