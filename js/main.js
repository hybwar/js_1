class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }
    _fetchProducts() {
        this.goods = [{
                id: 1,
                title: 'Notebook',
                price: 2000,
                picture: 'img/1.png'
            },
            {
                id: 2,
                title: 'Mouse',
                price: 20,
                picture: 'img/2.png'
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 200,
                picture: 'img/3.png'
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 50,
                picture: 'img/4.png'
            },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            //           block.innerHTML += item.render();
        }
    }

    //DZ2
    // medot Summa total cost all goods
    GoofList() {
        let s = 0;
        for (let product of this.goods) {
            s += product.price;
        }
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.picture = product.picture;
    }
    render() {
        return `<div class="product-item">
    <h3>${this.title}</h3>
    <img src="${this.picture}" width="200" hieght="160">
    <span>${this.price} руб.</span>
    <button class="buy-bth">купить</button>
</div>`
    }

}


let list = new ProductList();

//DZ1
//Empty classes

class BasketGoods {
    constructor() {
        //properties
    }
    renderBasket() {
        //layout rendering basket
        //insertAdjacentHTML()
    }
    closeBasket() {
        //close basket
        //classList.remove('active')
    }
    delBasketGood() {
        //delete one item from basket

    }
    calcTotal() {
        //price calculation for all order
        //for() {}
    }
    checkout() {
        //chekout
        //post
    }
}
class ItemShopBasket {
    constructor(title, id, price, picture, subTotal) {
        this.title =
            this.id =
            this.price =
            this.picture =
            this.subTotal = 0;
    }
    renderStrShop() {
        //inserting product line
        //innerHTML 
    }
    calcSubTotal() {
        // price calculation  for numbers of goods
        //for() {}
    }
}