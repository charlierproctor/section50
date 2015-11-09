function f(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}

var arr = []

for (var i = 2; i < 20; i++) {
    if (f(i)) {
        arr.push(i)
    } 
}

console.log(arr)