
/*
 * 题目名称： 剑指 Offer 04. 二维数组中的查找

 * 题目描述： 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 *           请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 
 * 示例：     [
 *              [1,   4,  7, 11, 15],
 *              [2,   5,  8, 12, 19],
 *              [3,   6,  9, 16, 22],
 *              [10, 13, 14, 17, 24],
 *              [18, 21, 23, 26, 30]
 *           ]
 * 给定 target = 5 ,  返回 true
 * 给定 target = 20, 返回 false


 * 
 * 解题思路： 坐标轴法
 *           将二维数组看做是一个坐标轴， 我们以这个二维数组的左下角作为起始点，由题可知，每一行从左到右递增，每一列从上到下递增，
 *           故：每一行中，右边一定大于左边，每一列中，下面一定大于上面，根据这个原理我们可以得出
 *           若当前值大于目标值，则直接上移一位；若当前值小于目标值，则右移一位
 * 
*/

const findNumberIn2DArray = (matrix: number[][], target: number): boolean => {
  if(!matrix.length) return false
  let x:number = matrix.length - 1 // 二维数组中第几个数组
  let y:number = 0 // 二维数组中第几个数组的第几个元素
  while(x >= 0 && y < matrix[0].length) {
    if(matrix[x][y] === target) {
      // 若当前位置等于目标值则直接返回true
      return true
    } else if (matrix[x][y] > target) {
      // 若当前位置大于目标值，则说明当前数组元素往右的所有元素都大于目标值，则直接将x--
      x--
    } else {
      // 若当前位置小于目标值，则说明当前数组元素以左的所有元素都小于目标值，则将y++
      y++
    }
  }
  return false
}