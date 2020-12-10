// 三路快排
export function quickSort3ways<T>(arr: T[], l: number = 0, r: number = arr.length - 1): void {
  if (l >= r) return
  if (r - l > 15) {
    const randomIndex: number = Math.round(Math.random() * (l - r + 1) + r); // 随机化快速排序，使得期望是N(logn)
    [arr[l], arr[randomIndex]] = [arr[randomIndex], arr[l]];
  }
  const v: T = arr[l];

  // arr[l+1, lt] < v ; arr[gt, r] > v ; arr[lt + 1, i] === v
  let lt = l;
  let gt = r + 1;
  let i = l + 1;
  while (i < gt) {
    if (arr[i] < v) {
      [arr[i], arr[lt + 1]] = [arr[lt + 1], arr[i]];
      lt++;
      i++;
    } else if (arr[i] > v) {
      [arr[i], arr[gt - 1]] = [arr[gt - 1], arr[i]];
      gt--;
    } else { // arr[i] === v
      i++;
    }
  }

  [arr[l], arr[lt]] = [arr[lt], arr[l]]

  quickSort3ways(arr, l, lt - 1)
  quickSort3ways(arr, gt, r)
}