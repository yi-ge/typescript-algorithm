// 对arr[l, r]部分进行partition操作
// 返回p，使得arr[l, p-1] < arr[p]; arr[p+1, r] > arr[p]
const partition2ways: Function = <T>(arr: T[], l: number, r: number): number => {
  const randomIndex: number = Math.round(Math.random() * (l - r + 1) + r); // 随机化快速排序，使得期望是N(logn)
  [arr[l], arr[randomIndex]] = [arr[randomIndex], arr[l]];
  const v: T = arr[l];

  // arr[l+1, i] <= v ; arr[j, r] >= v
  let i = l + 1, j = r
  while (true) {
    while (i <= r && arr[i] < v) i++
    while (j >= l + 1 && arr[j] > v) j--
    if (i > j) break;
    [arr[i], arr[j]] = [arr[j], arr[i]]
    i++;
    j--;
  }

  [arr[l], arr[j]] = [arr[j], arr[l]]
  return j
}

// 双路快排
export function quickSort2ways<T>(arr: T[], l: number = 0, r: number = arr.length - 1): void {
  if (l >= r) return

  const p = partition2ways(arr, l, r)
  quickSort2ways(arr, l, p - 1)
  quickSort2ways(arr, p + 1, r)
}