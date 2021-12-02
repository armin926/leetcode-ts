/*
 * 题目名称： 剑指 Offer 28. 对称的二叉树

 * 题目描述： 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

 * 示例：     例如二叉树 [1,2,2,3,4,4,3] 是对称的。       但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 *                                              1                                                   1
 *                                            /   \                                               /   \ 
 *                                           2     2                                             2     2
 *                                          / \   / \                                             \     \
 *                                         3   4 4   3                                            3      3    

 * 解题思路： 利用层序遍历的思想，一层一层判断，是否对称。
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
//! 方法一：层序遍历
const isSymmetric = (root: TreeNode | null): boolean => {
  if (!root) return true
  const queue = [root.left, root.right] // 将根节点的左右节点添加进队列
  while (queue.length) {
    // 因为每次会比对两个节点，所以 i+=2
    for (let i = 0; i < queue.length; i += 2) {
      const left = queue.shift()
      const right = queue.shift()
      // 若左右节点有一个为空，都直接返回 false
      if (!left || !right) {
        return false
      } else {
        // 左右节点都存在，则判断是否相等, 若不相等则返回 false
        if (left.val !== right.val) return false
        // 若相等则按照顺序将左右节点的子节点添加进队列进行下一次遍历
        queue.push(left.left, right.right, left.right, right.left)
      }
    }
  }
  // 若上面的步骤都执行完了就说明是对称的二叉树
  return true
}

//! 方法二：递归遍历 
const isSymmetric2 = (root: TreeNode | null): boolean => {
  if (!root) return true
  // 判断树的两个子树是否镜像即可
  return check(root.left, root.right)
}

const check = (node1: TreeNode | null, node2: TreeNode | null): boolean => {
  // 若两个子树都为空，则返回 true
  if (!node1 && !node2) return true
  // 若有一个为空一个不为空，则返回 false
  if (!node1 || !node2) return false
  // 镜像条件：
  // 1、节点值相等
  // 2、node1的左子树和node2的右子树相等
  // 3、node1的右子树和node2的左子树相等
  return (
    node1.val === node2.val && check(node1.left, node2.right) && check(node1.right, node2.left)
  )
}