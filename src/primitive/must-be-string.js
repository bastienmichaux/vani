const mustBeString = x => {
    if (typeof x === 'string') {
        return true;
    }
    throw new TypeError(`type of parameter must be string; instead type was '${typeof x}'`)
};

module.exports = mustBeString;
