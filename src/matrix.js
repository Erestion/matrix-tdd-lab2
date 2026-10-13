class Matrix {
    // Initialize matrix dimensions and 2D array data
    constructor(data) {
      if (!Array.isArray(data) || data.length === 0 || !Array.isArray(data[0])) {
        throw new TypeError('Invalid matrix data');
      }
  
      this.rows = data.length;
      this.cols = data[0].length;
      this.data = data;
    }
  }
  
  module.exports = Matrix;