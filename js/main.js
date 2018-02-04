"use strict";



let setHandler = (elementsList,action,handlerFunc) => {
    for (let i = 0; i < elementsList.length; i++) {
        elementsList[i].addEventListener(action, handlerFunc);
    }
};

setHandler(addToCartBtns,"click",cart.addToCart);

