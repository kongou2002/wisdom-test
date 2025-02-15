const compareByLocation = (a, b) => a.location.localeCompare(b.location);
const compareByTime = (a, b) => a.time.localeCompare(b.time);
const records = [
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
export const getSortedByLocation = () => [...records].sort(compareByLocation);
export const getSortedByLocationAndTime = () => [...records].sort((a, b) => compareByLocation(a, b) || compareByTime(a, b));
//# sourceMappingURL=problem-1.js.map