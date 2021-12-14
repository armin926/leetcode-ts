/*
 * 题目名称： 剑指 Offer 58 - I. 翻转单词顺序

 * 题目描述： 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。
 * 
 * 示例1：  输入: "the sky is blue"
 *         输出: "blue is sky the"
 * 
 * 示例2：  输入: "  hello world!  "
 *         输出: "world! hello"
 *         解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
 * 
 * 示例3： 输入: "a good   example"
 *        输出: "example good a"
 *        解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 *
 * 解题思路： 双指针。1、定义双指针
 *                  2、遍历数组：若两数相加大于目标值，则右指针自减
 *                              若两数相加小于目标值，则左指针自加
 *                              若两数相加等于目标值，则返回两数
*/

const reverseWords = (s: string): string => {
  const arr = s.split(' ') // 根据空格将字符串分割为数组
  const res = [] // 初始化倒序数组
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] && res.push(arr[i]) // 首先判断 arr[i] 是否为空，这样可以减少空格；然后将有值的项添加进数组
  }
  return res.join(' ') // 将数组按照空格，转换为字符串返回
}