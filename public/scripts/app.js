'use strict';

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

var nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Jen Mead';
var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

var getFirstNameShort = function getFirstNameShort(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstNameShort('Mike Smith'));
