const repeatString = function(aStr, count) {
    let ret = '';
    if (count < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < count; i++) {
        ret += aStr;
    }
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
