"use strict";
exports.__esModule = true;
exports.selectionSort = void 0;
// 选择排序：即选择一个最小值，然后交换
function selectionSort(arr) {
    var _a;
    for (var i = 0, len = arr.length; i < len; i++) {
        var minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex])
                minIndex = j;
        }
        _a = [arr[minIndex], arr[i]], arr[i] = _a[0], arr[minIndex] = _a[1];
    }
}
exports.selectionSort = selectionSort;
