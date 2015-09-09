describe('translatesVowels', function() {
  it('translates words that start with vowels', function() {
    expect(translateVowels('aardvarks enter offices')).to.equal('aardvarksay enteray officesay');
  });
});

describe('translatesConsonants', function() {
  it('translates words that start with consonants', function() {
    expect(translateConsonants('Tigers hunt elephants')).to.equal('igerstay unthay elephants');
  });
});
