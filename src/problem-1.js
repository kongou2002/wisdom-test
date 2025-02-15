"use strict";
// logSorter.ts
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSortedByLocationAndTime = exports.getSortedByLocation = void 0;
// Comparator for sorting by location
var compareByLocation = function (a, b) {
    return a.location.localeCompare(b.location);
};
// Comparator for sorting by time (HH:MM:SS format assumed)
var compareByTime = function (a, b) {
    return a.time.localeCompare(b.time);
};
var records = [
    { location: "Chicago", time: "09:00:00" },
    { location: "Phoenix", time: "09:00:03" },
    { location: "Houston", time: "09:00:13" },
    { location: "Chicago", time: "09:00:59" },
    { location: "Houston", time: "09:01:10" },
    { location: "Chicago", time: "09:03:13" },
    { location: "Seattle", time: "09:10:11" },
    { location: "Seattle", time: "09:10:25" },
    { location: "Phoenix", time: "09:14:25" },
    { location: "Chicago", time: "09:19:32" },
    { location: "Chicago", time: "09:19:46" },
    { location: "Chicago", time: "09:21:05" },
    { location: "Seattle", time: "09:22:43" },
    { location: "Seattle", time: "09:22:54" },
    { location: "Chicago", time: "09:25:52" },
    { location: "Chicago", time: "09:35:21" },
    { location: "Seattle", time: "09:36:14" },
    { location: "Phoenix", time: "09:37:44" }
];
/**
 * Returns records sorted by location.
 */
var getSortedByLocation = function () {
    return __spreadArray([], records, true).sort(compareByLocation);
};
exports.getSortedByLocation = getSortedByLocation;
/**
 * Returns records sorted by location and then by time within each location.
 */
var getSortedByLocationAndTime = function () {
    return __spreadArray([], records, true).sort(function (a, b) { return compareByLocation(a, b) || compareByTime(a, b); });
};
exports.getSortedByLocationAndTime = getSortedByLocationAndTime;
