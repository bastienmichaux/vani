const mustBeObject = x => {
    if (typeof x === 'object') {
        return true;
    }
    throw new TypeError(`type of parameter must be object; instead type was '${typeof x}'`)
};

module.exports = mustBeObject;
