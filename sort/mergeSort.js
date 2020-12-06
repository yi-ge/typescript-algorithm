"use strict";
exports.__esModule = true;
exports.mergeSortBU = exports.mergeSort = void 0;
// 将arr[l...mid]和arr[mid, r]两部分进行归并
var merge = function (arr, l, mid, r) {
    var aux = new Array(r - l + 1);
    for (var i_1 = l; i_1 <= r; i_1++) {
        aux[i_1 - l] = arr[i_1];
    }
    var i = l, j = mid + 1;
    for (var k = l; k <= r; k++) {
        if (i > mid) {
            arr[k] = aux[j - l];
            j++;
        }
        else if (j > r) {
            arr[k] = aux[i - l];
            i++;
        }
        else if (aux[i - l] < aux[j - l]) {
            arr[k] = aux[i - l];
            i++;
        }
        else {
            arr[k] = aux[j - l];
            j++;
        }
    }
};
// 归并排序 (自顶向下)
function mergeSort(arr, l, r) {
    if (l === void 0) { l = 0; }
    if (r === void 0) { r = arr.length - 1; }
    if (l >= r)
        return;
    var mid = l + ((r - l) >> 1);
    // 递归的使用归并排序，对arr[l...r]的范围进行排序
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    if (arr[mid] > arr[mid + 1])
        merge(arr, l, mid, r);
}
exports.mergeSort = mergeSort;
// 归并排序（自底向上），可以对链表进行O(logn)排序
function mergeSortBU(arr, n) {
    if (n === void 0) { n = arr.length; }
    for (var sz = 1; sz < n; sz += sz) {
        for (var i = 0; i + sz < n; i += sz + sz) {
            // 对 arr[i...i+sz-1] 和 arr[i+sz...i+2*sz-1] 进行归并
            merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1, n - 1));
        }
    }
}
exports.mergeSortBU = mergeSortBU;
