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


function* counter () {
    for (let i =1;; i++){
        yield i
    }

}

let cart = {
    cartItems: {},

    drawItem: function (item) {

        let itemContainer = document.createElement('div');
        itemContainer.classList.add("d-flex", "item-container_", "justify-content-center", "my-1");

        let itemTemplate =
            `<img class="photo_" src="${this.itemPhoto}"/>
            <div class="d-flex flex-column justify-content-center">
                <div>${this.itemName}</div>
                <div>
                    <span>PRICE</span>
                    <span>${this.itemPrice}</span>
                </div>
                <div>
                    <span>QTY:</span>
                    <input type="number" class="item-qty_" value="${this.qty}">
                </div>
            </div>
            <!--<i class="remove-item_ fas fa-times"></i>-- Не смог разобраться, как повесить обработчик на этот элемент, поэтому сделал просто кнопку>-->
            <button class="remove-item_ mr-2 btn ml-2" type="button">X</button>`;

        itemContainer.innerHTML = itemTemplate.trim();

        cartMenu.appendChild(itemContainer);
    },

    addToCart: function (e) {
        let element = e.target.parentNode;
        let item = new CartItem(element);
        let itemCounter = counter();

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
                cart.cartItems[item.itemName]=itemCounter.next();
                console.log('add');
            }),
            (function () {

                console.log(`cartItems: ${cart.cartItems}`);
                console.log(cart.cartItems[item.itemName]);
            })
        );
        // console.log(cart.cartItems)


        // setHandler(document.querySelectorAll('.remove-item_'), "click", cart.removeFromCart);
    },

    removeFromCart: function (e) {

    },

    getItemCount: function () {

    }

};







