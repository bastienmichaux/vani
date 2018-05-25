const mustBeNull = x => {
    if (x === null) {
        return true;
    }
    throw new TypeError(`parameter must be null; instead parameter was '${x}'`)
};

module.exports = mustBeNull;
