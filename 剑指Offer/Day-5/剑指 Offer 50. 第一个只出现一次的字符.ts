/*
 * 题目名称： 剑指 Offer 50. 第一个只出现一次的字符

 * 题目描述： 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 *
 * 示例：     1、输入：s = "abaccdeff"  输出：'b'
 *           2、 输入：s = ""  输出：' '  
 * 
 * 解题思路： 遍历找到第一个数的位置，再查询该位置以后是否还存在该元素相同的值，若存在则继续遍历，若不存在则直接输出
 * 
 * 
*/
const firstUniqChar = (s: string): string => {
  for (let i = 0; i < s.length; i++) {
    const first = s.indexOf(s[i])
    const second = s.indexOf(s[i], first + 1)
    if(second === -1) return s[i]
  }
  return " "
}