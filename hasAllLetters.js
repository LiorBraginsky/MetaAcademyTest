/**
 * Return true if all the letters in the `phrase`
 * are present in the `pattern`.
 *
 * Comparison should be case insensitive. Meaning
 * phrase 'A' contains pattern 'a'.
 */
function hasAllLetters(pattern, phrase) {
  // Only change code below this line
  phrase = phrase.toLowerCase().split('');
  pattern = pattern.toLowerCase().split('');
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === ' ') i++;
    if (pattern.indexOf(phrase[i]) === -1) return false;
    else return true;
  }
  // Only change code above this line
}

// Tests
test(hasAllLetters('abcdef', 'Dead Beef'), true, 'Dead Beef');
test(hasAllLetters('abcdef', 'Some phrase'), false, 'Some phrase');
test(hasAllLetters('Happy New Year', 'nyh'), true, 'nyh');

function test(actual, expected, testName = '') {
  if (actual !== expected) {
    const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
    console.error(errorMessage);
  } else {
    console.log(`Test ${testName} passed!`);
  }
}
