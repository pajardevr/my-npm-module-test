module.exports = function npmTest(string) {
    if (typeof string !== "string") throw new TypeError("npmTest wants a string!");
    return string.replace(/\s/g, "");
};