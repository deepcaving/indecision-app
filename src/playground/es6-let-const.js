var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Jen Mead';
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

const getFirstNameShort = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameShort('Mike Smith'));