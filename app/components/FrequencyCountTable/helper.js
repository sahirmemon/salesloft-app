// Get the frequency of each character in the email addresses of all the
// people.
// Returns a Map(key, value) where key is the character and value is the
// count.
function getFrequencyCount(people) {
  let counts = new Map();
  people.forEach(person => {
    if (person.emailAddress) {
      counts = countCharacters(person.emailAddress, counts);
    }
  });
  const countsDescending = new Map(
    [...counts.entries()].sort((a, b) => b[1] - a[1]),
  );
  return countsDescending;
}

// Returns the count of the characters in the string provided
function countCharacters(emailAddress, counts) {
  const characters = emailAddress.split('');
  characters.forEach(char => {
    if (counts.has(char)) {
      counts.set(char, counts.get(char) + 1);
    } else {
      counts.set(char, 1);
    }
  });
  return counts;
}

export { getFrequencyCount };
