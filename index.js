// Write your solution in this file!
var customerName = 'bob'
var bestCustomer ;
const leastFavouriteCustomer='maybe its bob'
console.log(customerName)

function upperCaseCustomerName() {
    // let customerName='bob'
    customerName= customerName.toUpperCase()
    return customerName;
}
function setBestCustomer(){
    bestCustomer='not bob'
    return bestCustomer;
}
function overwriteBestCustomer(){
    bestCustomer='maybe bob';
    return bestCustomer;
}
function changeLeastFavoriteCustomer(){
    leastFavouriteCustomer = "it\'s now bob"
}


