//iphone11
var phone11Total = 1219;
var phone11tax = 61;
var phone12Total = 59;
var phone12tax = 3;
var total = 1342;
var plusButton = document.querySelector('#plusButton');
plusButton.addEventListener('click', function(){
    var product = document.querySelector('#iPhone11').value;
    product = +product + 1;
    if(product < 0){
        alert('Sorry!')
    }
    else{
        var productPrice = product*1219;
        phone11Total = productPrice;
        document.querySelector('#iPhone11').value = product;
        document.querySelector('#iphone11-price').innerHTML = phone11Total;
        total = phone11Total + phone12Total;
        phone11tax = Math.round(phone11Total*0.05);
        document.querySelector('#subtotal').innerHTML = total;
        document.querySelector('#tax').innerHTML = phone11tax + phone12tax;
        document.querySelector('#grandTotal').innerHTML = total + phone11tax + phone12tax;
    }
})
var minusButton = document.querySelector('#minusButton');
minusButton.addEventListener('click', function(){
    var product = document.querySelector('#iPhone11').value;
    product = +product - 1;
    if(product < 0){
        alert('Sorry!')
    }
    else{
        var productPrice = product*1219;
        phone11Total = productPrice;
        document.querySelector('#iPhone11').value = product;
        document.querySelector('#iphone11-price').innerHTML = phone11Total;
        total = phone11Total + phone12Total;
        phone11tax = Math.round(phone11Total*0.05);
        document.querySelector('#subtotal').innerHTML = total;
        document.querySelector('#tax').innerHTML = phone11tax + phone12tax;
        document.querySelector('#grandTotal').innerHTML = total + phone11tax + phone12tax;
    }
})
/******************************************************************/
//iphone12
var plusButton = document.querySelector('#plusButton12');
plusButton.addEventListener('click', function(){
    var product = document.querySelector('#iPhone12').value;
    product = +product + 1;
    if(product < 0){
        alert('Sorry!')
    }
    else{
        var productPrice = product*59;
        phone12Total = productPrice;
        document.querySelector('#iPhone12').value = product;
        document.querySelector('#iphone12-price').innerHTML = phone12Total;
        total = phone11Total + phone12Total;
        phone12tax = Math.round(phone12Total*0.05);
        document.querySelector('#subtotal').innerHTML = total;
        document.querySelector('#tax').innerHTML = phone11tax + phone12tax;
        document.querySelector('#grandTotal').innerHTML = total + phone11tax + phone12tax;
    }
})
var minusButton = document.querySelector('#minusButton12');
minusButton.addEventListener('click', function(){
    var product = document.querySelector('#iPhone12').value;
    product = +product - 1;
    if(product < 0){
        alert('Sorry!')
    }
    else{
        var productPrice = product*59;
        phone12Total = productPrice;
        document.querySelector('#iPhone12').value = product;
        document.querySelector('#iphone12-price').innerHTML = phone12Total;
        total = phone11Total + phone12Total;
        phone12tax = Math.round(phone12Total*0.05);
        document.querySelector('#subtotal').innerHTML = total;
        document.querySelector('#tax').innerHTML = phone11tax + phone12tax;
        document.querySelector('#grandTotal').innerHTML = total + phone11tax + phone12tax;
    }
})

//remove product
document.querySelector('.remove-item-1').addEventListener('click', function(){
    document.querySelector('.cart-item-1').style.display = 'none';
    if(document.querySelector('.cart-item-1').style.display === 'none' && document.querySelector('.cart-item-2').style.display === 'none'){
        phone11Total = 0;
        phone11tax = 0;
        phone12Total = 0;
        phone12tax = 0;
        total = 0;
        document.querySelector('#subtotal').innerHTML = phone12Total;
        document.querySelector('#tax').innerHTML = phone12tax;
        document.querySelector('#grandTotal').innerHTML = phone12Total + phone12tax;
    }
    document.querySelector('#subtotal').innerHTML = phone12Total;
    document.querySelector('#tax').innerHTML = phone12tax;
    document.querySelector('#grandTotal').innerHTML = phone12Total + phone12tax;
})
document.querySelector('.remove-item-2').addEventListener('click', function(){
    document.querySelector('.cart-item-2').style.display = 'none';
    if(document.querySelector('.cart-item-1').style.display === 'none' && document.querySelector('.cart-item-2').style.display === 'none'){
        phone11Total = 0;
        phone11tax = 0;
        phone12Total = 0;
        phone12tax = 0;
        total = 0;
        document.querySelector('#subtotal').innerHTML = phone12Total;
        document.querySelector('#tax').innerHTML = phone12tax;
        document.querySelector('#grandTotal').innerHTML = phone12Total + phone12tax;
    }
    document.querySelector('#subtotal').innerHTML = phone11Total;
    document.querySelector('#tax').innerHTML = phone11tax;
    document.querySelector('#grandTotal').innerHTML = phone11Total + phone11tax;
})

document.querySelector('.check-out').addEventListener('click', function(){
    document.querySelector('.container').style.display = 'none';
    var body = document.querySelector('body');
    var div = document.createElement('div');
    div.innerHTML = `<div class="text-center mt-5">
    <p>Phone 11 MRP: ${phone11Total}</p>
    <p>Phone 12 MRP: ${phone12Total}</p>
    <p>Tax: ${phone11tax + phone12tax}</p>
    <p>Total: ${total}</p>
    <h2>Thank You for your order</h2>
    </div>`;
    body.appendChild(div);
})