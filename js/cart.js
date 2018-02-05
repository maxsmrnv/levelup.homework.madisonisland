"use strict";

const addToCartBtns = document.querySelectorAll('.btn-custom_');

const cartMenu = document.querySelector('#added-items');


class CartItem {

    constructor(element) {
        this.itemPhoto = element.getElementsByClassName('photo_')[0].getAttribute('src');
        this.itemName = element.querySelectorAll('.item-name_')[0].innerHTML.trim();
        this.itemPrice = element.querySelectorAll('.price_')[0].innerHTML.trim();
        this.qty = 1;
    }

}




let cart = {
    cartItems: {},

    drawItem: function (item,callback) {

        let itemContainer = document.createElement('div');
        itemContainer.classList.add("d-flex", "item-container_", "justify-content-center", "my-1");

        let itemTemplate =
            `<img class="photo_" src="${item.itemPhoto}"/>
            <div class="d-flex flex-column justify-content-center">
                <div class="cart-item-name_">${item.itemName}</div>
                <div>
                    <span>PRICE</span>
                    <span>${item.itemPrice}</span>
                </div>
                <div>
                    <span>QTY:</span>
                    <input type="number" class="item-qty_" value="${item.qty}">
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

        let promise = new Promise(function (resolve, reject) {

            if (cart.cartItems[item.itemName]!== undefined) {
                return reject();
            }
            else {
                return resolve();
            }

        });
        console.log(promise);
        promise.then(
            (function () {
                cart.drawItem(item,(function () {
                    cart.cartItems[item.itemName]=1;
                }));
                console.log('add');
                setHandler(document.querySelectorAll('.remove-item_'), "click", cart.removeFromCart)
            }),
            cart.updateQty
        );
        // console.log(cart.cartItems)


        // ;
    },

    removeFromCart: function (e) {
        let element = e.target.parentNode;
        console.log(element);
        let itemName = element.querySelectorAll('.cart-item-name_')[0].innerHTML.trim();
        element.parentNode.removeChild(element);
        delete cart.cartItems[itemName]

    },

    updateQty: function () {
        console.log('QQ');
        let curCnt = document.querySelectorAll('.item-qty_')[0].value;

    }

};







