describe('translateVowels', function() {
  it('translates words that start with vowels', function() {
    expect(translateVowels('aardvarks enter offices')).to.equal('aardvarksay enteray officesay');
  });
});

describe('translateConsonants', function() {
  it('translates words that start with consonants', function() {
    expect(translateConsonants('Tigers hunt elephants')).to.eql('igerstay unthay elephants');
  });
});

describe('pigLatin', function() {
  it('translates words beginning with consonants and vowels into pig latin', function() {
    expect(pigLatin('Tigers hunt elephants')).to.eql('igerstay unthay elephantsay');
  });
});
