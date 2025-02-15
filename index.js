"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var problem_1_1 = require("./src/problem-1");
var problem_2_1 = require("./src/problem-2");
var problem_3_1 = require("./src/problem-3");
var problem_4_1 = require("./src/problem-4");
var main = function () {
    console.log("Sorted by location:");
    (0, problem_1_1.getSortedByLocation)().forEach(function (record) {
        return console.log(record.location, record.time);
    });
    console.log("\nSorted by location and time:");
    (0, problem_1_1.getSortedByLocationAndTime)().forEach(function (record) {
        return console.log(record.location, record.time);
    });
    console.log("Running Directed Graph...");
    (0, problem_3_1.runGraphDemo)();
    console.log("\nRunning Hash Table...");
    (0, problem_2_1.Searching)();
    console.log("\nRunning Text Processing...");
    (0, problem_4_1.runTextProcessing)();
};
main();
