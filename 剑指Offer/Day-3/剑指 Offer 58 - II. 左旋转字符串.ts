/*
 * 题目名称： 剑指 Offer 58 - II. 左旋转字符串

 * 题目描述： 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。
 *           比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 * 
 * 解题思路： 1、先将字符串重复一次，拼接在结尾
 *           2、计算 n = k % len
 *           3、然后再从双倍字符串的 n 处截取，截取 len 个即可
 * 
*/

const reverseLeftWords = (s:string, k: number):string => {
  const len = s.length
  const n = k % len
  const double = `${s}${s}`
  return double.slice(n, n+len)
}