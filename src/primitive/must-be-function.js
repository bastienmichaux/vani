const mustBeFunction = x => {
    if (typeof x === 'function') {
        return true;
    }
    throw new TypeError(`type of parameter must be function; instead type was '${typeof x}'`)
};

module.exports = mustBeFunction;
