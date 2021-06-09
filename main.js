let carts = document.querySelectorAll('add-cart'); 

let products = [
    {
        name:  'black hoodie',
        tag:   'blackhoodie',
        print:  15,
        incart: 0,
    },

    {
        name:  'gray hoodie',
        tag:   'grayhoodie',
        print:  20,
        incart: 0,
    },
    {
        name:  'cream hoodie',
        tag:   'creamhoodie',
        print:  10,
        incart: 0,
    },
    {
        name:  'black hoodie',
        tag:   'blackhoodie',
        print:  25,
        incart: 0,
    }
];


for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartnumbers(products[i]);
        totalcost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartnumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumber', productNumbers +1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartitems = localStorage.getItem('productsinCart');
    cartitems = JSON.parse(cartitems);

    if(cartitems != null) {

        if(cartitems[product.tag] != undefined) {
            cartitems = {
                ...cartitems,
                [product.tag]: product
            }
        }
        cartitems[product.tag].incart += 1;
  } else {
      product.incart = 1;
      cartitems = {
          [product.tag]: product
      }
  }

localStorage.setItem("productsincart", JSON.stringify
(cartitems)); 

}

function totalcost(product) {
    let cartcost = localStorage.getItem('totalcost');

    console.log("my cartcost is", cartcost);
    console.log(typeof cartcost);

    if(cartcost != null) {
        cartcost = parseInt(cartcost);
        localStorage.setItem("totalcost", cartcost + product.price);
    } else {
        localStorage.setItem("totalcost", product.price);
    }
}

function displaycart() {
    let cartitems = localStorage.getItem("productsincart");
    cartitems = JSON.parse(cartitems);
    let productcontainer = document.querySelector
    (".product");
    let cartcost = localStorage.getItem('totalcost');

}


if( cartitems && productcontainer ) {
    productcontainer.innerHTML = '';
    Object.values(cartitems).map(item => {
        productcontainer.innerHTML += `
        <div class="product">
            <ion-icon name="close-circle"></ion-icon>
            <img src="./images/${item.tag}.jpg">
            <span>${item.name}</span>
            </div>
            <div class="price">$${item.price},00</div>
            <div class="quantity">
            <ion-icon class="decrease"
            name="arrow-dropleft-circle"></ion-icon>
            <span>${items.incart}</span>
            <ion-icon class="increase"
            name="arrow-dropleft-circle"></ion-icon>
            </div>
            <div class="total">
            $${items.incart * item.price},00
            </div>
            `;
            

            
    });

    productcontainer.innerHTML += `
    <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
            basket total
        </h4>
        <h4 class="basketTotal">
            $${cartcost},00
        </h4>
        `;
}
onLoadCartNumbers();
displaycart();

