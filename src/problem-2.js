"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Searching = void 0;
var TABLE_SIZE = 5;
var hashFunction = function (key) { return key.charCodeAt(0) % TABLE_SIZE; };
var createHashTable = function () {
    return new Map(Array.from({ length: TABLE_SIZE }, function (_, i) { return [i, []]; }));
};
var insert = function (table, key, value) {
    var _a;
    var index = hashFunction(key);
    (_a = table.get(index)) === null || _a === void 0 ? void 0 : _a.unshift([key, value]);
    return table;
};
var search = function (table, key) {
    var _a, _b, _c;
    var index = hashFunction(key);
    return (_c = (_b = (_a = table.get(index)) === null || _a === void 0 ? void 0 : _a.find(function (_a) {
        var storedKey = _a[0];
        return storedKey === key;
    })) === null || _b === void 0 ? void 0 : _b[1]) !== null && _c !== void 0 ? _c : null;
};
var display = function (table) {
    table.forEach(function (bucket, i) {
        console.log("Bucket ".concat(i, ":"), bucket.map(function (_a) {
            var k = _a[0], v = _a[1];
            return "[".concat(k, " -> ").concat(v, "]");
        }).join(" "));
    });
};
var Searching = function () {
    var table = createHashTable();
    var entries = [
        ["S", 0], ["E", 1], ["A", 2], ["R", 3], ["C", 4],
        ["H", 5], ["X", 7], ["M", 9], ["P", 10], ["L", 11]
    ];
    entries.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (table = insert(table, key, value));
    });
    display(table);
    var searchKey = "C";
    var result = search(table, searchKey);
    console.log(result !== null ? "\nKey ".concat(searchKey, " found with value: ").concat(result) : "\nKey ".concat(searchKey, " not found."));
};
exports.Searching = Searching;
