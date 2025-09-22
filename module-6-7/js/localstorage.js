const addNumberls = () =>{
    const number = Math.ceil(Math.random()*100)
    console.log(number);
    localStorage.setItem('number', number)
}

// non-primitive
const setobject = () =>{
    const customer = {
        name: 'shadman', product: 3, price: 75
    }
    // make it string
    const customerJSON = JSON.stringify(customer)
    localStorage.setItem('customer', customerJSON)
}

const getnumber = () => {
    const number = localStorage.getItem('number');
    console.log('from save local storage', number);
}

const readobjectFromls = () =>{
    const customerJSON = localStorage.getItem('customer')
    const customer = JSON.parse(customerJSON)
    console.log(customer)
}