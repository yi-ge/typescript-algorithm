"use strict";
exports.__esModule = true;
exports.shellSort = void 0;
// 希尔排序
// 修改增量可以获得更优性能，例如Sedgewick增量
function shellSort(arr) {
    for (var len = arr.length, d = arr.length >> 1; d >= 1; d = d >> 1) { // 把记录按下标的一定增量(d)分组，并逐步缩小增量(每次折半)
        for (var x = 0; x < d; x++) { // 对每一个分组进行计算
            for (var i = x + d; i < len; i += d) { // 插入排序
                var temp = arr[i];
                var j = void 0;
                for (j = i - d; j >= 0 && arr[j] > temp; j = j - d) {
                    arr[j + d] = arr[j];
                }
                arr[j + d] = temp;
            }
        }
    }
}
exports.shellSort = shellSort;
