function printLine<T>(arr: T[]) {
  let out = '[' + arr[0];
  for (let i = 1; i < arr.length; i++) {
    out += ', ' + arr[i];
  }
  out += ']';
  console.log(out)
}

// 生成有n个整型元素的随机数组，每个元素的随机范围为[rangeL, rangeR]
export default class SortTestHelper {
  static generateRandomArray(n: number, rangeL: number, rangeR: number): Array<number> {
    const arr = new Array(n)
    for (let i = 0; i < n; i++) {
      arr[i] = Math.round(Math.random() * (rangeL - rangeR + 1) + rangeR)
    }
    return arr
  }

  static isSorted<T>(arr: T[]): boolean {
    for (let i = 0, len = arr.length - 1; i < len; i++) {
      if (arr[i] > arr[i + 1]) return false
    }
    return true
  }

  static testSort<T>(sortName: string, sort: Function, arr: T[]) {
    // const num: number[] = [10, 9, 5, 7, 6, 8, 3.4, 3.5, 2, 1, 0];
    // const str: string[] = ['B', 'C', 'D', 'E', 'F', 'G', 'A', 'H'];
    // sort(num)
    // sort(str)
    // printLine(num)
    // printLine(str)
    if (arr.length <= 100) {
      console.log('排序前：')
      printLine(arr)
    }

    console.time(sortName)
    sort(arr)
    console.timeEnd(sortName)
    if (!SortTestHelper.isSorted(arr)) {
      console.error(sortName + '排序异常')
    }

    if (arr.length <= 100) {
      console.log('排序后：')
      printLine(arr)
      console.log('--------')
    }
  }

  static copy<T>(arr: T[]): T[] {
    const res = new Array(arr.length)
    for (let i = 0, len = arr.length; i < len; i++) {
      res[i] = arr[i]
    }
    return res
  }
}