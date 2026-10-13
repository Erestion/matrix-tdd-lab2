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