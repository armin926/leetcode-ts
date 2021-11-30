/*
 * 题目名称： 剑指 Offer 11. 旋转数组的最小数字

 * 题目描述： 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 *           给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。
 *           请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为1。  
 * 
 * 解题思路： 采用二分查找法，创造首尾两个指针，获取中间值，会出现三种情况：
 *           1、mid > right ：代表最小值一定在 mid 右侧，所以 left 移到 mid+1 的位置。
 *           2、mid < right ：代表最小值一定在 mid 左侧或者 mid 就为最小值，所以 right 移到 mid 的位置
 *           3、mid 既不大于 left 指针的值，也不小于 right 指针的值，代表着 mid 可能等于 left 指针的值，或者 right 指针的值，这时候只能让 right 指针递减，一个一个找最小值了。
 * 
*/

const minArray = (numbers: number[]): number => {
  let left: number = 0 // 左边元素位置初始化（左指针）
  let right: number = numbers.length - 1 // 右边元素位置初始化（右指针）
  while (left < right) {
    const mid = Math.floor((left + right) / 2) // 中间位置
    if (numbers[mid] > numbers[right]) {
      // 当中间值 > 右边值时：最小数一定在中间值的右边，所以左边界变为中间值 +1 的位置
      left = mid + 1
    } else if(numbers[mid] < numbers[right]) {
      // 当中间值 < 右边值时：最小数一定在中间值左边或者就是中间值， 所以 右边界变为中间值所在位置
      right = mid
    } else {
      // 当值相等时，则只有将右边界递减 一个一个查找
      right--
    }
  }
  return numbers[left]
}