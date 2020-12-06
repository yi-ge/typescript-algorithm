// 冒泡排序
export function bubbleSort<T>(arr: T[]) {
  for (let i = 0, len = arr.length; i < len - 1; i++) { // 除了最后一个数
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
}