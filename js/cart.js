"use strict";

const addToCartBtns = document.querySelectorAll('.btn-custom_');

const cartMenu = document.querySelector('#added-items');

//simple hash generator
let loseCode = function (str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        let newchar = str.charCodeAt(i);
        hash += newchar;
    }
    return hash;
};

class CartItem {

    constructor(element) {
        this.itemPhoto = element.getElementsByClassName('photo_')[0].getAttribute('src');
        this.itemName = element.querySelectorAll('.item-name_')[0].innerHTML.trim();
        this.itemPrice = element.querySelectorAll('.price_')[0].innerHTML.trim();
        this.qty = 1;
    }

    getItemId() {
        return loseCode(this.itemName + this.itemPrice)

    }

}


let cart = {
    cartItems: {},

    drawItem: function (item, callback) {

        let itemContainer = document.createElement('div');

        itemContainer.classList.add("d-flex", "item-container_", "justify-content-center", "my-1");

        let itemTemplate =
            `<img class="photo_" src="${item.itemPhoto}"/>
            <div class="d-flex flex-column justify-content-center">
                <div class="item-name_">${item.itemName}</div>
                <div>
                    <span>PRICE</span>
                    <span class="price_">${item.itemPrice}</span>
                    <span>$</span>
                </div>
                <div>
                    <span>QTY:</span>
                    <input type="number" class="input-qty_" id="${item.getItemId()}-qty_" value="${item.qty}" disabled>
                </div>
            </div>
            <!--<i class="remove-item_ fas fa-times"></i>-- Не смог разобраться, как повесить обработчик на этот элемент, поэтому сделал просто кнопку>-->
            <button class="remove-item_ mr-2 btn ml-2" type="button">X</button>`;

        itemContainer.innerHTML = itemTemplate.trim();

        cartMenu.appendChild(itemContainer);

        callback();
    },

    addToCart: function (e) {
        let element = e.target.parentNode;
        let item = new CartItem(element);

        if (cart.cartItems[item.getItemId()] === undefined) {

            cart.drawItem(item, (function () {
                cart.cartItems[item.getItemId()] = {'qty': item.qty, 'price': item.itemPrice}
            }));
            setHandler(document.querySelectorAll('.remove-item_'), "click", cart.removeFromCart);
            cart.drawSubtotal()
        }
        else {
            cart.incrItemQty(item, cart.drawSubtotal);
        }
        // разобраться как повесить хендлеры на изменение инпута
        // setHandler(document.querySelectorAll('.input-qty_'), "change", cart.updateQty(item));
        // setHandler(document.querySelectorAll('.input-qty_'), "change", cart.drawSubtotal);
    },

    removeFromCart: function (e) {
        let element = e.target.parentNode;
        let item = new CartItem(element);
        delete cart.cartItems[item.getItemId()];
        element.parentNode.removeChild(element);
        cart.drawSubtotal();
    },

    incrItemQty: function (item, callback) {
        let curQty = document.getElementById(`${item.getItemId()}-qty_`).value;
        document.getElementById(`${item.getItemId()}-qty_`).value = +curQty + 1;
        cart.updateQty(item, +curQty + 1);
        callback();
    },

    updateQty: function (item, val) {
        cart.cartItems[item.getItemId()].qty = val;
    },

    drawSubtotal: function () {
        let curSum = 0;
        for (let i in cart.cartItems) {
            curSum += cart.cartItems[i].price * cart.cartItems[i].qty
        }
        document.getElementById('subtotal-value').value = curSum;
    }
};
