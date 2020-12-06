// 希尔排序
// 修改增量可以获得更优性能，例如Sedgewick增量
export function shellSort<T>(arr: T[]): void {
  for (let len = arr.length, d = arr.length >> 1; d >= 1; d = d >> 1) { // 把记录按下标的一定增量(d)分组，并逐步缩小增量(每次折半)
    for (let x = 0; x < d; x++) { // 对每一个分组进行计算
      for (let i = x + d; i < len; i += d) { // 插入排序
        let temp = arr[i];
        let j: number;
        for (j = i - d; j >= 0 && arr[j] > temp; j = j - d) {
          arr[j + d] = arr[j];
        }
        arr[j + d] = temp;
      }
    }
  }
}