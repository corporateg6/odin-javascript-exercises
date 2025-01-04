const removeFromArray = function(inArr, ...inArg) {
    let ret = new Array();
    for (let i = 0; i < inArr.length; i++) {
        if (!(inArg.includes(inArr[i]))) {
            ret.push(inArr[i]);
        }
    }
    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
