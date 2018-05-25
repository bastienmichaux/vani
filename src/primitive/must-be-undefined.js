const mustBeUndefined = x => {
    if (typeof x === 'undefined') {
        return true;
    }
    throw new TypeError(`type of parameter must be undefined; instead type was '${typeof x}'`)
};

module.exports = mustBeUndefined;
