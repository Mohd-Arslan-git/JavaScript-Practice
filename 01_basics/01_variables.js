const accountId = 1234
let accountEmail = "mohdarslan@gmail.com"
var accountPassword = "0000"
accountCity = "Allahabad"
let accountAmount;


/*   prefer not use var 
    # because of issues in the block scope and function scope
    
    # because of its function scope
    and it can be re-declared
    which may lead to confusion and bugs in code    
*/
console.log(accountPassword);
console.table([accountEmail, accountId, accountCity, accountPassword, accountAmount])