/*
 * 题目名称： 剑指 Offer 26. 树的子结构

 * 题目描述： 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)。B是A的子结构， 即 A中有出现和B相同的结构和节点值。

 * 示例：     给定的树 A:       给定树B：
 *                 3                   4 
 *                / \                 /
 *               4  5                1
 *              /  \
 *             1   2         

 * 解题思路： 递归：先序遍历树A中的每个节点nA
 *                判断树 A 中以 nA 为根节点的子树是否包含树 B
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

const isSubStructure = (A: TreeNode | null, B: TreeNode | null): boolean => {
  // 特殊情况处理，若任意一方为空树，直接返回 false
  if (!A || !B) {
    return false
  }
  // 若树 B 是树 A 的子结构，此处只要满足三种情况之一都返回 true：
  // 1、以节点A为根节点的子树包含B
  // 2、树B是树A左子树的子结构
  // 3、树B是树A右子树的子结构
  return (isSubTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
}

const isSubTree = (pRoot1: TreeNode, pRoot2: TreeNode): boolean => {
  // 当节点B为空，说明节点B已经遍历完且匹配完成，则返回 true
  if (!pRoot2) {
    return true
  }
  // 当节点A为空，说明已经越过树A叶子节点，返回 false
  if (!pRoot1) {
    return false
  }
  // 当节点A 和 节点B 的值不相同，说明匹配失败，返回 false
  if (pRoot1.val !== pRoot2.val) {
    return false
  }
  // 1、判断A和B的左子节点是否相等
  // 2、判断A和B的右子节点是否相等
  return (isSubTree(pRoot1.left, pRoot2.left) && isSubTree(pRoot2.right, pRoot2.right))
}