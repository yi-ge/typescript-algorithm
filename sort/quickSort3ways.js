"use strict";
exports.__esModule = true;
exports.quickSort3ways = void 0;
// 三路快排
function quickSort3ways(arr, l, r) {
    var _a, _b, _c, _d;
    if (l === void 0) { l = 0; }
    if (r === void 0) { r = arr.length - 1; }
    if (l >= r)
        return;
    if (r - l > 15) {
        var randomIndex = Math.round(Math.random() * (l - r + 1) + r); // 随机化快速排序，使得期望是N(logn)
        _a = [arr[randomIndex], arr[l]], arr[l] = _a[0], arr[randomIndex] = _a[1];
    }
    var v = arr[l];
    // arr[l+1, lt] < v ; arr[gt, r] > v ; arr[lt + 1, i] === v
    var lt = l;
    var gt = r + 1;
    var i = l + 1;
    while (i < gt) {
        if (arr[i] < v) {
            _b = [arr[lt + 1], arr[i]], arr[i] = _b[0], arr[lt + 1] = _b[1];
            lt++;
            i++;
        }
        else if (arr[i] > v) {
            _c = [arr[gt - 1], arr[i]], arr[i] = _c[0], arr[gt - 1] = _c[1];
            gt--;
        }
        else { // arr[i] === v
            i++;
        }
    }
    _d = [arr[lt], arr[l]], arr[l] = _d[0], arr[lt] = _d[1];
    quickSort3ways(arr, l, lt - 1);
    quickSort3ways(arr, gt, r);
}
exports.quickSort3ways = quickSort3ways;
