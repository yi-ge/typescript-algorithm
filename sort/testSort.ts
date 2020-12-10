import SortTestHelper from "../util/sortTestHelper";
import { bubbleSort } from "./bubbleSort";
import { insertionSort } from "./insertionSort";
import { mergeSort, mergeSortBU } from "./mergeSort";
import { quickSort } from "./quickSort";
import { quickSort2ways } from "./quickSort2ways";
import { quickSort3ways } from "./quickSort3ways";
import { selectionSort } from "./selectionSort";
import { shellSort } from "./shellSort";
import { TimSort } from "./TimSort";

const randomNumber: number[] = SortTestHelper.generateRandomArray(100000, 0, 10000);

SortTestHelper.testSort('冒泡排序', bubbleSort, SortTestHelper.copy(randomNumber))
SortTestHelper.testSort('选择排序', selectionSort, SortTestHelper.copy(randomNumber))
SortTestHelper.testSort('插入排序', insertionSort, SortTestHelper.copy(randomNumber))
SortTestHelper.testSort('归并排序', mergeSort, SortTestHelper.copy(randomNumber))
SortTestHelper.testSort('归并排序BU', mergeSortBU, SortTestHelper.copy(randomNumber))
SortTestHelper.testSort('TimSort', TimSort, SortTestHelper.copy(randomNumber))
SortTestHelper.testSort('希尔排序', shellSort, SortTestHelper.copy(randomNumber))
SortTestHelper.testSort('快速排序', quickSort, SortTestHelper.copy(randomNumber))
SortTestHelper.testSort('双路快排', quickSort2ways, SortTestHelper.copy(randomNumber))
SortTestHelper.testSort('三路快排', quickSort3ways, SortTestHelper.copy(randomNumber))

// const num: number[] = [10, 9, 5, 7, 6, 8, 3.4, 3.5, 2, 1, 0, -1];
// const str: string[] = ['B', 'C', 'D', 'E', 'F', 'G', 'A', 'H'];
// selectionSort(num)
// selectionSort(str)

// printLine(num)
// printLine(str)

// const randomNumber: number[] = SortTestHelper.generateRandomArray(10000, 0, 10000);
// SortTestHelper.testSort('选择排序', selectionSort, randomNumber)

// type Student = {
//   name: string;
//   score: number;
//   compare
// }

// function printLine<T>(arr: T[]) {
//   let out = '[' + arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     out += ', ' + arr[i];
//   }
//   out += ']';
//   console.log(out)
// }
