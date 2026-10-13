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

  // Add another matrix using immutable map transformation
  add(other) {
    if (this.rows !== other.rows || this.cols !== other.cols) {
      throw new Error('Dimension mismatch');
    }

    const resultData = this.data.map((row, i) =>
      row.map((val, j) => val + other.data[i][j])
    );

    return new Matrix(resultData);
  }
}

module.exports = Matrix;