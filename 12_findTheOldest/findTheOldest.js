const findTheOldest = function(array) {
    const now = new Date(Date.now());
    const thisYear = now.getFullYear();

    function getElder(elder, person) {     
        function getAge(person) {
            if (!person.yearOfDeath) {
                return thisYear - person.yearOfBirth;
            } else {
                return person.yearOfDeath - person.yearOfBirth;
            }
        }

        if (getAge(elder) >= getAge(person)) {
            return elder
        } else {
            return person
        }
    }

    return array.reduce(getElder);
};

// Do not edit below this line
module.exports = findTheOldest;
