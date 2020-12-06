// 插入排序 - 优化
export function insertionSort<T>(arr: T[]): void {
  for (let i = 1, len = arr.length; i < len; i++) {
    let e: T = arr[i]; // 寻找元素arr[i]适合插入的位置
    let j: number; // j保存元素e应该插入的位置
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
}


// 插入排序
// export function insertionSort<T>(arr: T[]): void {
//   for (let i = 1, len = arr.length; i < len; i++) {
//     for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
//       const tmp = arr[j];
//       arr[j] = arr[j - 1];
//       arr[j - 1] = tmp;
//     }
//   }
// }


