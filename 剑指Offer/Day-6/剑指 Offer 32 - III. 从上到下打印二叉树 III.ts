
/*
 * 题目名称： 剑指 Offer 32 - III. 从上到下打印二叉树 III

 * 题目描述： 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

 * 示例：     给定二叉树: [3,9,20,null,null,15,7], 返回：[[3],[20,9],[15,7]]
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7         

 * 解题思路： 广度优先算法（BFS），1、初始化 queue 存储当前层的节点， 
 *                              2、检查 queue 是否为空，若为空直接跳出循环，若不为空则依次遍历queue中的节点，检查每个节点所包含的左右子节点
 *                                将不为空的子节点放入 queue，继续循环
 *                              3、借助 level 变量标记层数，当 level 为偶数的时候，镜像翻转遍历结果
*/

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

const levelOrderTwo = (root: TreeNode | null): number[][] => {
  if(!root) return []
  const queue = [root] // 初始化队列，存储当前层的节点
  const res = [] // 最终要返回的数组
  let level = 0 // 当前层数
  while(queue.length) {
    res[level] = [] // 第 level 层的遍历结果
    let levelNum = queue.length // 第 level 层的节点数量
    while(levelNum--) {
      const front = queue.shift() // 将队列第一个元素出队
      res[level].push(front.val) // 将元素添加至对应层的队列中
      front.left && queue.push(front.left) // 若有左子节点则将节点添加进入队列继续下面的遍历
      front.right && queue.push(front.right) // 若有右子节点则将节点添加进入队列继续下面的遍历
    }
    // 当行号是偶数时，翻转当前层的遍历结果
    (level % 2) && res[level].reverse()
    level++
  }
  return res
}