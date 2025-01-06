const palindromes = function (input) {

    function isAlphaNumberic(aChar) {
        const ascii = aChar.charCodeAt(0);
        return (ascii>=48 && ascii<=57) ||
               (ascii>=65 && ascii<=90) || 
               (ascii>=97 && ascii<=122);
    }

    function removePunc(aStr) {
        let strArr = aStr.split("");
        strArr = strArr.filter(char => isAlphaNumberic(char));
        return strArr.join("");
    }

    function reverseString(aStr) {
        const strArr = aStr.split("");
        const revArr = new Array();
    
        while (strArr.length > 0) {
            revArr.push(strArr.pop());
        }
    
        return revArr.join("");
    };

    let forward = removePunc(input).toLowerCase();
    let reverse = reverseString(forward);

    return forward === reverse;

};

// Do not edit below this line
module.exports = palindromes;
