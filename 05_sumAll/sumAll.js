const sumAll = function(start, end) {
    let ret = 0;
    if (!Number.isInteger(start) ||
        !Number.isInteger(end) ||
        start < 0 ||
        end < 0) {
            ret = "ERROR";
        } else {
            if (end < start) {
                let temp = start;
                start = end;
                end = temp;
            }
            for (let i = start; i < end+1; i++) {
                ret += i;
            }
        }
    return ret;
};

// Do not edit below this line
module.exports = sumAll;
