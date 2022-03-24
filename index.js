var customerName = 'bob'

function upperCaseCustomerName () {
    // let upCaseCustomerName = String(customerName);
    // // let finalCustomerName = upCaseCustomerName.toUpperCase();
    // // return finalCustomerName
    // upCaseCustomerName.toUpperCase()
    // upCaseCustomerName = String(customerName);
    customerName = customerName.toUpperCase();
    // customerName
    //customerName = customerName.toUpperCase();
    //customerName = 'BOB';
    return customerName
}

function setBestCustomer() {
    bestCustomer = 'not bob'
    return bestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer
}

const leastFavoriteCustomer = 'jimmy'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'agatha';
    return leastFavoriteCustomer
}