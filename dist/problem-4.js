import * as fs from "fs";
const cleanWord = (word) => word.replace(/[^a-zA-Z]/g, "").toLowerCase();
const createFileIfNotExists = (filename) => {
    if (!fs.existsSync(filename)) {
        const sampleText = `It was the best of times,\n
    it was the worst of times,\n
    it was the age of wisdom,\n
    it was the age of foolishness,\n`;
        fs.writeFileSync(filename, sampleText);
        console.log(`File created with sample text: ${filename}`);
    }
    else {
        console.log("File exists, reading from it...");
    }
};
const processFile = (filename) => {
    const wordMap = new Map();
    const lines = fs.readFileSync(filename, "utf-8").split("\n");
    lines.forEach((line, index) => {
        line
            .split(/\s+/)
            .map(cleanWord)
            .filter(Boolean)
            .forEach((word) => {
            const lineNumbers = wordMap.get(word) || new Set();
            lineNumbers.add(index + 1);
            wordMap.set(word, lineNumbers);
        });
    });
    return wordMap;
};
const displayWordOccurrences = (wordMap) => {
    wordMap.forEach((lineNumbers, word) => {
        const sortedLines = Array.from(lineNumbers).sort((a, b) => a - b);
        const formattedRanges = [];
        let start = sortedLines[0];
        let end = start;
        for (let i = 1; i < sortedLines.length; i++) {
            if (sortedLines[i] === end + 1) {
                end = sortedLines[i];
            }
            else {
                formattedRanges.push(start === end ? `${start}` : `${start}-${end}`);
                start = end = sortedLines[i];
            }
        }
        formattedRanges.push(start === end ? `${start}` : `${start}-${end}`);
        console.log(`${word} ${formattedRanges.join(" ")}`);
    });
};
export const runTextProcessing = () => {
    const filename = "text.txt";
    createFileIfNotExists(filename);
    const wordMap = processFile(filename);
    displayWordOccurrences(wordMap);
};
//# sourceMappingURL=problem-4.js.map