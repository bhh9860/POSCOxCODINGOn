const a = 10;
// const b = 20;
// //1번(전체)
// function connect() {
//     return a + b;
// }

// module.exports = connect;

//2번(부분)
module.exports.add = () => {
    return a * b;
}

//2번의 축약
exports.add2 = () => {
    return a + b + b;
}

// module.exports = {
//     a,
//     b,
// }