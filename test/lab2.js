const { expect } = require('chai');
const Matrix = require('../src/matrix');

describe('Matrix - Creation', () => {
  it('should correctly initialize matrix dimensions and data', () => {
    // Arrange & Act
    const m = new Matrix([
      [1, 2],
      [3, 4]
    ]);

    // Assert
    expect(m.rows).to.equal(2);
    expect(m.cols).to.equal(2);
    expect(m.data).to.deep.equal([[1, 2], [3, 4]]);
  });

  it('should throw TypeError when initialized with non-array or empty data', () => {
    expect(() => new Matrix(null)).to.throw(TypeError);
    expect(() => new Matrix([])).to.throw(TypeError);
  });
});

describe('Matrix - Addition', () => {
  it('should correctly sum two matrices of identical dimensions', () => {
    // Arrange
    const a = new Matrix([[1, 2], [3, 4]]);
    const b = new Matrix([[5, 6], [7, 8]]);

    // Act
    const result = a.add(b);

    // Assert
    expect(result.data).to.deep.equal([[6, 8], [10, 12]]);
    expect(result.rows).to.equal(2);
    expect(result.cols).to.equal(2);
  });

  it('should throw Error when adding matrices with mismatched dimensions', () => {
    const a = new Matrix([[1, 2], [3, 4]]);
    const b = new Matrix([[1, 2, 3], [4, 5, 6]]);

    expect(() => a.add(b)).to.throw(Error, 'Dimension mismatch');
  });
});

describe('Matrix - Transpose', () => {
  it('should transpose a rectangular matrix (2x3 -> 3x2)', () => {
    // Arrange
    const m = new Matrix([
      [1, 2, 3],
      [4, 5, 6]
    ]);

    // Act
    const transposed = m.transpose();

    // Assert
    expect(transposed.rows).to.equal(3);
    expect(transposed.cols).to.equal(2);
    expect(transposed.data).to.deep.equal([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });
});