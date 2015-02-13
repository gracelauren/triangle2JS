describe('triangle', function() {
  it('returns false if not a triangle', function() {
    expect(triangle(2,2,8)).to.equal('NOT A TRIANGLE!');
  });

  it('returns equilateral for equilateral triangles', function() {
    expect(triangle(3,3,3)).to.equal('Equilateral');
  });

  it('returns scalene for scalene triangles', function() {
    expect(triangle(6,12,14)).to.equal('Scalene');
  });

  it('returns isosceles for isosceles triangles', function() {
    expect(triangle(3,3,2)).to.equal('Isosceles')
  });
});
