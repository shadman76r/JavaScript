const addproduct = () =>{

    const productEL = document.getElementById('product')
    const quantityEL = document.getElementById('Quantity')
    const product = productEL.value;
    const Quantity = quantityEL.value;

    // console.log('product add', product,Quantity)

    // call the display function

    display(product,Quantity);

    addProductToCart(product,Quantity);

    // after adding make the fields empty those must be empty values
    productEL.value='';
    quantityEL.value='';

}

const getcart = () =>{
    const cart = {};
    return cart;
}
const addProductToCart = (product,Quantity)=>{
    const cart = getcart();
    cart[product] = Quantity;
    console.log('cart',cart)
}

const display = (product, Quantity) =>{
    // this one is for creating the list
    const li = document.createElement('li');
    li.innerHTML=`${product} : ${Quantity}`

    // get the ul and add the li in the ul by using append child in the last part
    const ul = document.getElementById('product-container');
    ul.appendChild(li);

}