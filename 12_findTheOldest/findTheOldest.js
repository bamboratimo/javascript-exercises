const findTheOldest = function(arr) {
    const d = new Date();
    let year = d.getFullYear();
    arr.forEach(dude => {
        if (!dude.yearOfDeath) {
            dude.yearOfDeath = year;
        }
        dude.age = dude.yearOfDeath - dude.yearOfBirth;
    });
    arr.sort((a, b) => a.age - b.age);
    return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
