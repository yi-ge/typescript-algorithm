import { insertionSort } from "./insertionSort";

// 将arr[l...mid]和arr[mid, r]两部分进行归并
const merge: Function = <T>(arr: T[], l: number, mid: number, r: number): void => {
  const aux: T[] = new Array(r - l + 1)
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i]
  }

  let i = l, j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l]
      j++
    } else if (j > r) {
      arr[k] = aux[i - l]
      i++
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l]
      i++
    } else {
      arr[k] = aux[j - l]
      j++
    }
  }
}

// 归并排序 (自顶向下)
export function mergeSort<T>(arr: T[], l: number = 0, r: number = arr.length - 1): void {
  if (l >= r) return
  const mid: number = l + ((r - l) >> 1);

  // 递归的使用归并排序，对arr[l...r]的范围进行排序
  mergeSort(arr, l, mid)
  mergeSort(arr, mid + 1, r)

  if (arr[mid] > arr[mid + 1]) merge(arr, l, mid, r)
}

// 归并排序（自底向上），可以对链表进行O(logn)排序
export function mergeSortBU<T>(arr: T[], n: number = arr.length) {
  for (let sz = 1; sz < n; sz += sz) {
    for (let i = 0; i + sz < n; i += sz + sz) {
      // 对 arr[i...i+sz-1] 和 arr[i+sz...i+2*sz-1] 进行归并
      merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1, n - 1))
    }
  }
}