"use strict";
exports.__esModule = true;
var sortTestHelper_1 = require("../util/sortTestHelper");
var bubbleSort_1 = require("./bubbleSort");
var insertionSort_1 = require("./insertionSort");
var mergeSort_1 = require("./mergeSort");
var quickSort_1 = require("./quickSort");
var quickSort2ways_1 = require("./quickSort2ways");
var quickSort3ways_1 = require("./quickSort3ways");
var selectionSort_1 = require("./selectionSort");
var shellSort_1 = require("./shellSort");
var TimSort_1 = require("./TimSort");
var randomNumber = sortTestHelper_1["default"].generateRandomArray(100000, 0, 100000);
sortTestHelper_1["default"].testSort('冒泡排序', bubbleSort_1.bubbleSort, sortTestHelper_1["default"].copy(randomNumber));
sortTestHelper_1["default"].testSort('选择排序', selectionSort_1.selectionSort, sortTestHelper_1["default"].copy(randomNumber));
sortTestHelper_1["default"].testSort('插入排序', insertionSort_1.insertionSort, sortTestHelper_1["default"].copy(randomNumber));
sortTestHelper_1["default"].testSort('归并排序', mergeSort_1.mergeSort, sortTestHelper_1["default"].copy(randomNumber));
sortTestHelper_1["default"].testSort('归并排序BU', mergeSort_1.mergeSortBU, sortTestHelper_1["default"].copy(randomNumber));
sortTestHelper_1["default"].testSort('TimSort', TimSort_1.TimSort, sortTestHelper_1["default"].copy(randomNumber));
sortTestHelper_1["default"].testSort('希尔排序', shellSort_1.shellSort, sortTestHelper_1["default"].copy(randomNumber));
sortTestHelper_1["default"].testSort('快速排序', quickSort_1.quickSort, sortTestHelper_1["default"].copy(randomNumber));
sortTestHelper_1["default"].testSort('双路快排', quickSort2ways_1.quickSort2ways, sortTestHelper_1["default"].copy(randomNumber));
sortTestHelper_1["default"].testSort('三路快排', quickSort3ways_1.quickSort3ways, sortTestHelper_1["default"].copy(randomNumber));
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
