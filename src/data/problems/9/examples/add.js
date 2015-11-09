var makeAdder = function (x) {
    return function(y) {
        return x + y;
    }
}

var addThree = makeAdder(3);

console.log(addThree(5));
