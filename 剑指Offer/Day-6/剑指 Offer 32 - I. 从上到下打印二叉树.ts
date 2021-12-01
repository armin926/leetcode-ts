
/*
 * 题目名称： 剑指 Offer 32 - I. 从上到下打印二叉树

 * 题目描述： 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

 * 示例：     给定二叉树: [3,9,20,null,null,15,7], 返回：[3,9,20,15,7]
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7         

 * 解题思路： 广度优先算法（BFS），一层一层查找，按照 3->9->20->15->7的顺序入队
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

const levelOrder = (root: TreeNode | null): number[] => {
  if(!root) return []
  const queue = [root] // 将根节点入队
  const res = [] // 返回的结果队列
  while(queue.length) {
    const n = queue.shift() // 出队
    res.push(n.val) // 将出队节点添加到返回结果的队列中
    n.left && queue.push(n.left) // 若当前节点有左子节点则入队
    n.right && queue.push(n.right) // 若当前节点有右子节点则入队
  }
  return res
}