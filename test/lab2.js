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