const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const currentAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
          );

        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

        return oldestAge < currentAge ? currentPerson : oldest;

    });
};
const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
// Do not edit below this line
module.exports = findTheOldest;
