// adapter functions
// from frontend masters functional javascript course

// unary adapter returns a function that calls the passed function with
// one argument only
// motivation:
// good function design generally leads to functions that only take
// one or two inputs as this tends to increase composability
function unary(fn){
    return function oneArg(arg){
        return fn(arg)
    }
}

function printArgs(...args){
    outputStr = ""

    for(const arg of args){
        outputStr += arg.toString()
    }

    return outputStr
}

// without unary adapter
console.log(printArgs(1, 2, 3, 4, 5)) //prints 12345
// with unary adapter
printOne = unary(printArgs)
console.log(printOne(1, 2, 3, 4, 5)) //prints 1