const mustBeBoolean = x => {
    if (typeof x === 'boolean') {
        return true;
    }
    throw new TypeError(`type of parameter must be boolean; instead type was '${typeof x}'`)
};

module.exports = mustBeBoolean;
