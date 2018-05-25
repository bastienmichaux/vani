const mustBeSymbol = x => {
    if (typeof x === 'symbol') {
        return true;
    }
    throw new TypeError(`type of parameter must be symbol; instead type was '${typeof x}'`)
};

module.exports = mustBeSymbol;
