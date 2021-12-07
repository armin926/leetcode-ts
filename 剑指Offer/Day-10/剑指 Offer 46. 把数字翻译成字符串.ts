/*
 * 题目名称： 剑指 Offer 46. 把数字翻译成字符串

 * 题目描述： 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。
 *           一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
 * 
 * 示例：     输入: 12258
 *           输出: 5
 *           解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi" 

 * 解题思路： 动态规划法。dp[i]含义：0~(i-1)范围的数字，能翻译的个数；当前 dp[i] 依赖于之前项，所以从前往后遍历
*/

const translateNum = (num: number): number => {
  const str = `${num}` // 将数字变为字符串
  const len = str.length // 获取字符串长度
  const dp = [1, 1] // 初始化数组，dp[0] 代表空字符串，所以结果为 1 种，dp[1]代表str[0]，单个字符，所以结果也为 1 种
  for (let i = 2; i < len + 1; i++) {
    const preNum = parseInt(str[i - 2] + str[i - 1]) // 得到当前值的前两位元素相加之和
    if (preNum >= 10 && preNum <= 25) {
      // 若满足条件，则dp[i]的值为前两项之和
      dp[i] = dp[i - 1] + dp[i - 2]
    } else {
      // 若不满足条件，则dp[i]的值为前一项的值
      dp[i] = dp[i - 1]
    }
  }
  // 返回字符串长度的dp项即为结果
  return dp[len]
}