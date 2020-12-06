// 对arr[l, r]部分进行partition操作
// 返回p，使得arr[l, p-1] < arr[p]; arr[p+1, r] > arr[p]
const partition: Function = <T>(arr: T[], l: number, r: number): number => {
  const randomIndex: number = Math.round(Math.random() * (l - r + 1) + r); // 随机化快速排序，使得期望是N(logn)
  [arr[l], arr[randomIndex]] = [arr[randomIndex], arr[l]];
  const v: T = arr[l];

  // arr[l+1, j] < v ; arr[j+1, i] > v
  let j = l
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < v) {
      [arr[j + 1], arr[i]] = [arr[i], arr[j + 1]]
      j++
    }
  }

  [arr[l], arr[j]] = [arr[j], arr[l]]

  return j
}

// 快速排序
export function quickSort<T>(arr: T[], l: number = 0, r: number = arr.length - 1): void {
  if (l >= r) return

  const p = partition(arr, l, r)
  quickSort(arr, l, p - 1)
  quickSort(arr, p + 1, r)
}