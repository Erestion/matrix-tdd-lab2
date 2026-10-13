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

  // Add another matrix to the current one
  add(other) {
    if (this.rows !== other.rows || this.cols !== other.cols) {
      throw new Error('Dimension mismatch');
    }

    const resultData = [];
    for (let i = 0; i < this.rows; i++) {
      const row = [];
      for (let j = 0; j < this.cols; j++) {
        row.push(this.data[i][j] + other.data[i][j]);
      }
      resultData.push(row);
    }

    return new Matrix(resultData);
  }
}

module.exports = Matrix;