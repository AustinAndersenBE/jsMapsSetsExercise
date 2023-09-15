new Set([1,1,2,2,3,4]) // {1,2,3,4}

[...new Set("referee")].join("") // "ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// it would look like 
// [1,2,3] => true
// [1,2,3] => false
// each key is a separate array object even though they look the same

const hasDuplicate = arr => {
    const set = new Set();
    for (const element of arr) {
        if (set.has(element)) {
            return true;
        }
        set.add(element);
    }
    return false;
};

const vowelCount = (str) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const countTotal = new Map();

    for (const char of str) {
        const lowerCaseChar = char.toLowerCase();
        if (vowels.has(lowerCaseChar)) {
            const countCurrent = countTotal.get(lowerCaseChar) || 0;
            countTotal.set(lowerCaseChar, countCurrent + 1);
        }
    }
    return countTotal;
};