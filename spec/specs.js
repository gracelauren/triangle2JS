describe('triangle', function() {
  it('it returns false if not a triangle', function() {
    expect(triangle(2,2,8)).to.equal('NOT A TRIANGLE!');
  });

  it('it returns equilateral for equilateral triangles', function() {
    expect(triangle(3,3,3)).to.equal('Equilateral');
  });
});
