
/*
 * 题目名称： 剑指 Offer 48. 最长不含重复字符的子字符串

 * 题目描述： 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
 * 
 * 示例1：      输入: "abcabcbb"
 *             输出: 3 
 *             解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 示例2：      输入: "bbbbb"
 *             输出: 1 
 *             解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 示例3：      输入: "pwwkew"
 *             输出: 3 
 *             解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

 * 解题思路： 滑动窗口
*/

const lengthOfLongestSubstring = (s: string): number => {
  const window = [] // 滑动窗口
  const len = s.length // 字符串长度
  let max = 0 // 最终返回的最大长度的值
  for (let i = 0; i < len; i++) {
    const targetIndex = window.indexOf(s[i]) // 当前字符在窗口的索引位置
    if (targetIndex !== -1) {
      // 如果返回值不为 -1 则代表已经在窗口出现过
      // 此时我们将之前的元素全部删掉 重新开始计算最大长度
      window.splice(0, targetIndex + 1)
    }
    window.push(s[i]) // 将字符添加进窗口
    max = max < window.length ? window.length : max // 更新最大长度的值
  }
  return max
}