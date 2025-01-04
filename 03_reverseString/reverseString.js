const reverseString = function(aStr) {
    let strArr = aStr.split("");
    let revArr = new Array();

    while (strArr.length > 0) {
        revArr.push(strArr.pop());
    }

    return revArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
