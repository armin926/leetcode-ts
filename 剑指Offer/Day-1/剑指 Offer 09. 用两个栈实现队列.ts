/*
 * 题目名称： 剑指 Offer 09. 用两个栈实现队列

 * 题目描述： 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 *           分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 * 
 * 问题分析： 栈是先进后出，队列是先进先出，我们用两个栈实现，将一个栈当作输入栈，另一个栈当作输出栈。当删除元素时，判断输出栈是否有值，
 *           若无值，将输入栈依次出栈放入输出栈中，这样输出栈顶元素就是输入栈中先进入的元素，然后将输出栈顶弹出即可。
 * 解题思路： 1、声明两个栈
 *           2、appendTail操作，向输入栈中添加元素
 *           3、删除操作时，我们不需要每次都将输入栈元素放入输出栈，只需要对输出栈进行判断，若输出栈中有值，则说明已经进行过移入操作，
 *              我们可以直接将输出栈栈中元素移除栈顶即可。如果输出栈为空，再将输入栈元素依次放入输出栈，再移除输出栈的栈顶元素
*/

class CQueue {
  protected inStack:number[] = [] // 初始化输入栈
  protected outStack:number[] = [] // 初始化输出栈

  appendTail(value: number):void {
    // 输入栈尾部插入元素
    this.inStack.push(value)
  }

  deleteHead():number {
    // 判断输出栈是否为空
    if(!this.outStack.length) {
      // 判断输入栈是否为空
      while(this.inStack.length) {
        // 输出栈将输入栈元素依次放入
        this.outStack.push(this.inStack.pop())
      }
    }
    // 经过上述操作后若输出栈有值则返回移除的栈顶元素，若没有值则返回 -1
    // PS： ?? 操作符： 若左边元素为null或undefined则直接返回右边元素，若左边元素有值则直接返回左边元素
    return this.outStack.pop() ?? -1
  }
}