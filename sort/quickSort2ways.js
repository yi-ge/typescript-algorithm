"use strict";
exports.__esModule = true;
exports.quickSort2ways = void 0;
// 对arr[l, r]部分进行partition操作
// 返回p，使得arr[l, p-1] < arr[p]; arr[p+1, r] > arr[p]
var partition2ways = function (arr, l, r) {
    var _a, _b, _c;
    var randomIndex = Math.round(Math.random() * (l - r + 1) + r); // 随机化快速排序，使得期望是N(logn)
    _a = [arr[randomIndex], arr[l]], arr[l] = _a[0], arr[randomIndex] = _a[1];
    var v = arr[l];
    // arr[l+1, i] <= v ; arr[j, r] >= v
    var i = l + 1, j = r;
    while (true) {
        while (i <= r && arr[i] < v)
            i++;
        while (j >= l + 1 && arr[j] > v)
            j--;
        if (i > j)
            break;
        _b = [arr[j], arr[i]], arr[i] = _b[0], arr[j] = _b[1];
        i++;
        j--;
    }
    _c = [arr[j], arr[l]], arr[l] = _c[0], arr[j] = _c[1];
    return j;
};
// 双路快排
function quickSort2ways(arr, l, r) {
    if (l === void 0) { l = 0; }
    if (r === void 0) { r = arr.length - 1; }
    if (l >= r)
        return;
    var p = partition2ways(arr, l, r);
    quickSort2ways(arr, l, p - 1);
    quickSort2ways(arr, p + 1, r);
}
exports.quickSort2ways = quickSort2ways;
