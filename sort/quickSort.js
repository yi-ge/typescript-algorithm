"use strict";
exports.__esModule = true;
exports.quickSort = void 0;
// 对arr[l, r]部分进行partition操作
// 返回p，使得arr[l, p-1] < arr[p]; arr[p+1, r] > arr[p]
var partition = function (arr, l, r) {
    var _a, _b, _c;
    var randomIndex = Math.round(Math.random() * (l - r + 1) + r); // 随机化快速排序，使得期望是N(logn)
    _a = [arr[randomIndex], arr[l]], arr[l] = _a[0], arr[randomIndex] = _a[1];
    var v = arr[l];
    // arr[l+1, j] < v ; arr[j+1, i] > v
    var j = l;
    for (var i = l + 1; i <= r; i++) {
        if (arr[i] < v) {
            _b = [arr[i], arr[j + 1]], arr[j + 1] = _b[0], arr[i] = _b[1];
            j++;
        }
    }
    _c = [arr[j], arr[l]], arr[l] = _c[0], arr[j] = _c[1];
    return j;
};
// 快速排序
function quickSort(arr, l, r) {
    if (l === void 0) { l = 0; }
    if (r === void 0) { r = arr.length - 1; }
    if (l >= r)
        return;
    var p = partition(arr, l, r);
    quickSort(arr, l, p - 1);
    quickSort(arr, p + 1, r);
}
exports.quickSort = quickSort;
