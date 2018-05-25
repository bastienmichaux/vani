const mustBeNumber = x => {
    if (typeof x === 'number') {
        return true;
    }
    throw new TypeError(`type of parameter must be number; instead type was '${typeof x}'`)
};

module.exports = mustBeNumber;
