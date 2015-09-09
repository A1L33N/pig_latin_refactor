describe('pigLatin', function() {
  it('translates words that start with vowels', function() {
    expect(translateVowels('aardvarks enter offices')).to.equal('aardvarksay enteray officesay');
  });
});
