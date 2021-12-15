
/*
 * 题目名称： 剑指 Offer 12. 矩阵中的路径

 * 题目描述： 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
 *           单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
 *           同一个单元格内的字母不允许被重复使用。
 * 
 * 示例1：   输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 *          输出：true
 * 
 * 示例2：   输入：board = [["a","b"],["c","d"]], word = "abcd"
 *          输出：false
 *
 * 解题思路： DFS深度优先遍历。先从头遍历矩阵，找到第一个符合的字符，开始深度优先遍历
 *           深度优先遍历： 1、定义 index 代表索引，或者说已经匹配了多少个字符
 *           2、要写递归的出口：i,j越界或字符不匹配
 *           3、匹配成功：index 等于 word.length - 1，匹配成功，直接返回 true
 *           4、为了同一个单元格内的字母不允许被重复使用，遍历到某字符后，将当前字符设置为 ‘’，防止四个方向 dfs 再次遍历到
 *           5、四个方向遍历完毕后，再恢复这个字符
 *           最后若一直匹配失败，返回 false
*/

const exist = (board: string[][], word: string): boolean => {
  const [m, n] = [board.length, board[0].length] // 初始化边界以便于遍历

  const dfs = (i: number, j: number, index: number): boolean => {
    // 越界或字符不匹配的情况直接返回 false
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) return false
    // 索引长度等于单词长度 -1 说明全匹配上了
    if (index === word.length - 1) return true
    // 保存当前字符
    const temp = board[i][j]
    // 将当前字符设为 ''，防止遍历的时候再次被遍历到
    board[i][j] = ''
    // 四个方向遍历
    const res = dfs(i + 1, j, index + 1) || dfs(i, j + 1, index + 1) || dfs(i - 1, j, index) || dfs(i, j - 1, index)
    // 恢复当前字符
    board[i][j] = temp
    return res
  }


  // 从第一个匹配的字符处开始 dfs
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true
    }
  }
}