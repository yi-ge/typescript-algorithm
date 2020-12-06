// 选择排序：即选择一个最小值，然后交换
export function selectionSort<T>(arr: T[]): void {
  for (let i = 0, len = arr.length; i < len; i++) {
    let minIndex: number = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}
