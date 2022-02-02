function calculateSquare(number, callback) {
    setTimeout(() => {
        const result = number * number;
        callback(result);
    }, 3000);
}
let callback = (result) => {
    console.log(new Date().getTime() + 'Result from calculateSquare: ' + result);
};

const start = new Date().getTime(); // 当前时间

console.log(start + 'Start')
calculateSquare(2, callback);