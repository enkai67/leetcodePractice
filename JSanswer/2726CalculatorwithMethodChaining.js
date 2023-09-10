class Calculator {

  /** 
   * @param {number} value
   */
  constructor(value) {
      this.result = value
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  add(value){
    this.result += value
    return this
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value){
    this.result -= value
    return this
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */  
  multiply(value) {
    this.result *= value
    return this
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    //處理value===0情況, 可用throw new Error(‘提示字串’)
    if (value === 0) {
      throw new Error('Division by zero is not allowed')
    }
    this.result /= value
    return this
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    // **= value為次方數
    this.result **= value
    return this
  }
    
  /** 
   * @return {number}
   */
  getResult() {
    return this.result
  }
}