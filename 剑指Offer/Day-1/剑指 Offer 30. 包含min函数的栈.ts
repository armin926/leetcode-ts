/*
 * 题目名称： 剑指 Offer 30. 包含min函数的栈

 * 题目描述： 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 * 
 * 问题分析： 在普通栈中，push()和pop()函数的复杂度都为O(1)，但要获取栈最小值min()函数需要遍历整个栈，复杂度为O(N),故我们需要一个方法来降低min()
 *           函数的复杂度
 * 
 * 解题思路： 1、声明两个栈(主栈和辅助栈)
 *           2、主栈只需按照正常逻辑，将元素push()和pop()即可
 *           3、辅助栈则需要与主栈压入元素进行对比：1）若辅助栈中没有元素，则随主栈一起将元素压入栈内；2）当辅助栈中存在元素时，我们需要将主栈压入的
 *              元素与辅助栈栈顶元素进行比对，若主栈栈顶元素小于辅助栈栈顶元素则将主栈栈顶元素压入辅助栈，这样始终保持辅助栈栈顶元素都是最小的；若主
 *              栈栈顶元素大于或等于辅助栈栈顶元素时，则只需将辅助栈当前栈顶元素拷贝一份作为新的栈顶元素以保持主栈和辅助栈长度一致
*/

class MinStack {
  private stack: number[] = [] // 初始化主栈
  private minStack: number[] = [] // 初始化辅助栈

  push(x:number):void {
    this.stack.push(x) // 主栈直接 push()
    if(this.minStack.length){
      // 若辅助栈不为空，则比较传入的值与当前辅助栈的栈顶，取最小值 push
      this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x))
    } else {
      // 若辅助栈为空则直接push元素入栈
      this.minStack.push(x)
    }
  }

  pop():void {
    // 直接将栈顶元素删除
    this.stack.pop()
    this.minStack.pop()
  }

  top():number {
    // 直接返回主栈栈顶元素
    return this.stack[this.stack.length - 1]
  }

  min():number {
    // 直接返回辅助栈栈顶元素
    return this.minStack[this.minStack.length - 1]
  }
}