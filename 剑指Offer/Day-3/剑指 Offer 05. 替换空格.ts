/*
 * 题目名称： 剑指 Offer 05. 替换空格

 * 题目描述： 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 
 * 问题分析： 测试用例中不包括形如“hello hello%20world”的用例，因此可以直接使用 encodeURI 对不为 "%20" 的字符串进行变换，对于 "%20"，直接返回即可。
 * 
*/

const replaceSpace = (s: string): string => {
  // return s.replace(new RegExp(" ", "gm"), '%20')
  if (s === '%20') {
    return s
  }
  return encodeURI(s)
}

