/*
 * 题目名称： 剑指 Offer 27. 二叉树的镜像

 * 题目描述： 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

 * 示例：     例如输入：       镜像输出：
 *                  4              4
 *                /   \          /   \ 
 *               2     7        7     2
 *              / \   / \      / \   / \
 *             1   3 6   9    3  1  9   6    

 * 解题思路： 镜像输出就是将从上到下依次交换每个节点的左右节点
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

const mirrorTree = (root: TreeNode | null): TreeNode | null => {
  if(!root) return null
  const leftCopy = root.left // 将左子节点拷贝一份
  // 左右节点进行交换
  root.left = root.right 
  root.right = leftCopy
  // 递归遍历左右节点，重复上面的操作
  mirrorTree(root.left)
  mirrorTree(root.right)

  return root
}