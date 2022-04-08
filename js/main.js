const products = [
{id: 1, title: 'Notebook', price: 2000, picture: 'img/1.png'},
{id: 2, title: 'Mouse', price: 20, picture: 'img/2.png'},
{id: 3, title: 'Keyboard', price: 200, picture: 'img/3.png'},
{id: 4, title: 'Gamepad', price: 50, picture:'img/4.png'},
];

//вывод изображения
const renderProduct = (item) => 
`<div class="product-item">
    <h3>${item.title}</h3>
    <img src="${item.picture}" width="200" hieght="160">
    <span>${item.price} руб.</span>
    <button class="buy-bth">купить</button>
</div>`
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    let str = '';
    //убираем запятые
    productsList.forEach(element => {
        str += element
    });
    document.querySelector('.products').innerHTML = str;
};
renderPage(products);

//Запятые берутся из products