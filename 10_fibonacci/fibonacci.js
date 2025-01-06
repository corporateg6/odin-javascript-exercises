const fibonacci = function(nth) {
    function fibRec(n) {
        if (n==0) {
            return 0;
        } else if (n==1) {
            return 1;
        } else {
            return fibRec(n-1) + fibRec(n-2);
        }
    }

    if (nth<0) {
        return "OOPS";
    } else {
        return fibRec(nth);
    }

};

// Do not edit below this line
module.exports = fibonacci;
