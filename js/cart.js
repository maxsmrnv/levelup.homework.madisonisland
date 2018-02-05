"use strict";

const addToCartBtns = document.querySelectorAll('.btn-custom_');

const cartMenu = document.querySelector('#added-items');



class CartItem {

    constructor(element) {
        this.itemPhoto = element.querySelectorAll('.photo_')[0].innerHTML;
        this.itemName = element.querySelectorAll('.item-name_')[0].innerHTML;
        this.itemPrice = element.querySelectorAll('.price_')[0].innerHTML;
    }


    buildCartItem(qty = 1) {

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
    itemsOfCart: {},

    addToCart: function (e) {
        let element = e.target.parentElement;
        let item = new CartItem(element);
        if (cart.itemsOfCart[item.itemName.trim()] === undefined) {
            cart.itemsOfCart[item.itemName.trim()] = 1;
            cartMenu.appendChild(item.buildCartItem());
        }
        else {
            console.log(item)
        }


        setHandler(document.querySelectorAll('.remove-item_'), "click", cart.removeFromCart);
    },

    removeFromCart: function (e) {
        let element = e.target.parentElement;
        // let itemName = document.querySelectorAll('.item-name_')[0].innerHTML;
        element.parentNode.removeChild(element);
        delete cart.itemsOfCart[item.itemName.trim()];
        console.log(cart.itemsOfCart)
    },

    getItemCount: function () {

    }

};







