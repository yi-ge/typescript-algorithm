"use strict";
exports.__esModule = true;
exports.bubbleSort = void 0;
// 冒泡排序
function bubbleSort(arr) {
    var _a;
    for (var i = 0, len = arr.length; i < len - 1; i++) { // 除了最后一个数
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
}
exports.bubbleSort = bubbleSort;
