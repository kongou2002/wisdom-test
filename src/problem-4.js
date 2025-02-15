"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTextProcessing = void 0;
var fs = require("fs");
// Function to clean a word (remove punctuation, convert to lowercase)
var cleanWord = function (word) {
    return word.replace(/[^a-zA-Z]/g, "").toLowerCase();
};
// Function to create the file if it does not exist
var createFileIfNotExists = function (filename) {
    if (!fs.existsSync(filename)) {
        var sampleText = "It was the best of times,\n\n    it was the worst of times,\n\n    it was the age of wisdom,\n\n    it was the age of foolishness,\n";
        fs.writeFileSync(filename, sampleText);
        console.log("File created with sample text: ".concat(filename));
    }
    else {
        console.log("File exists, reading from it...");
    }
};
// Function to read and process the file
var processFile = function (filename) {
    var wordMap = new Map();
    var lines = fs.readFileSync(filename, "utf-8").split("\n");
    lines.forEach(function (line, index) {
        line
            .split(/\s+/)
            .map(cleanWord)
            .filter(Boolean)
            .forEach(function (word) {
            var lineNumbers = wordMap.get(word) || new Set();
            lineNumbers.add(index + 1);
            wordMap.set(word, lineNumbers);
        });
    });
    return wordMap;
};
// Function to format and display word occurrences
var displayWordOccurrences = function (wordMap) {
    wordMap.forEach(function (lineNumbers, word) {
        var sortedLines = Array.from(lineNumbers).sort(function (a, b) { return a - b; });
        var formattedRanges = [];
        var start = sortedLines[0];
        var end = start;
        for (var i = 1; i < sortedLines.length; i++) {
            if (sortedLines[i] === end + 1) {
                end = sortedLines[i];
            }
            else {
                formattedRanges.push(start === end ? "".concat(start) : "".concat(start, "-").concat(end));
                start = end = sortedLines[i];
            }
        }
        formattedRanges.push(start === end ? "".concat(start) : "".concat(start, "-").concat(end));
        console.log("".concat(word, " ").concat(formattedRanges.join(" ")));
    });
};
// Main function
var runTextProcessing = function () {
    var filename = "text.txt";
    createFileIfNotExists(filename);
    var wordMap = processFile(filename);
    displayWordOccurrences(wordMap);
};
exports.runTextProcessing = runTextProcessing;
