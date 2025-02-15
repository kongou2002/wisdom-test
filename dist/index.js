import { getSortedByLocation, getSortedByLocationAndTime } from "./problem-1";
import { Searching } from "./problem-2";
import { runGraphDemo } from "./problem-3";
import { runTextProcessing } from "./problem-4";
const main = () => {
    console.log("Sorted by location:");
    getSortedByLocation().forEach(record => console.log(record.location, record.time));
    console.log("\nSorted by location and time:");
    getSortedByLocationAndTime().forEach(record => console.log(record.location, record.time));
    console.log("Running Directed Graph...");
    runGraphDemo();
    console.log("\nRunning Hash Table...");
    Searching();
    console.log("\nRunning Text Processing...");
    runTextProcessing();
};
main();
//# sourceMappingURL=index.js.map