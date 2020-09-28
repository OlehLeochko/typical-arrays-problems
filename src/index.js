function bubbleSort(arr) {
    let tmp = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}
exports.min = function min(array) {
    if (typeof array === "undefined" || array.length === 0) {
        return 0;
    }
    let arrSort = bubbleSort(array);
    return arrSort[0];
    //return array.sort((a, b) => a - b)[0];
};

exports.max = function max(array) {
    if (typeof array === "undefined" || array.length === 0) {
        return 0;
    }
    let arrSort = bubbleSort(array);
    return arrSort[array.length - 1];
    //return array.sort((a, b) => a - b)[array.length - 1];
};

exports.avg = function avg(array) {
    if (typeof array === "undefined" || array.length === 0) {
        return 0;
    }
    return array.reduce((a, b) => a + b) / array.length;
};
