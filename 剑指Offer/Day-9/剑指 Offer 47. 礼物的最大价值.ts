/*
 * 题目名称： 剑指 Offer 47. 礼物的最大价值

 * 题目描述： 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
 *           你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。
 *           给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
 * 
 * 示例：     输入: 
 *                  [
 *                    [1,3,1],
 *                    [1,5,1],
 *                    [4,2,1]
 *                  ]
 *                  输出: 12
 *                  解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物

 * 解题思路： 动态规划法。声明状态数组dp是一个 m*n 的二维数组。dp[i][j]的默认值是 0，它的含义是：在坐标点（i，j）处，能得到的最大价值礼物。
 *           所以，整个棋盘的最大价值礼物就是 dp[m-1][n-1] 的值。
 *           转移状态的过程：
 *           1、出发点是左上角，且只能向右/下移动，所以第一列和第一行中的 dp 值，就等于：当前礼物价值+上一个 dp 值
 *           2、对于一般坐标（i，j），dp[i][j] = grid[i][j] + max(dp[i - 1][j], dp[i][j - 1])
 */

const maxValue = (grid: number[][]): number => {
  const rowNum = grid.length  // 初始化列
  const colNum = grid[0].length // 初始化行
  const dp = [] // 初始化状态数组 dp
  // 遍历生成 dp 数组初始状态， rowNum 列 colNum 行每一项的值都为 0 的二维数组
  for (let i = 0; i < rowNum; i++) {
    dp[i] = []
    for (let j = 0; j < colNum; ++j) {
      dp[i][j] = 0
    }
  }
  dp[0][0] = grid[0][0] // 由于是从左上角开始的，所以dp的左上角第一项 等于 grid 左上角的第一项
  // dp第一列元素的值为 grid[i][0]的值加上 dp[i-1][0] 的值
  for (let i = 1; i < rowNum; ++i) {
    dp[i][0] = grid[i][0] + dp[i - 1][0]
  }
  // dp第一行元素的值为 grid[0][j] 的值加上 dp[0][j-1] 的值
  for (let j = 1; j < colNum; ++j) {
    dp[0][j] = grid[0][j] + dp[0][j - 1]
  }
  // 除去第一行第一列 dp 的其他坐标等于 gird 的当前值加上 上一个横坐标或者纵坐标较大的值
  for (let i = 1; i < rowNum; ++i) {
    for (let j = 1; j < colNum; ++j) {
      dp[i][j] = grid[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
  // 最终返回 dp 右下角的那个值
  return dp[rowNum - 1][colNum - 1]
}