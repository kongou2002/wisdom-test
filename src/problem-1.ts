// logSorter.ts

type LogRecord = {
  location: string;
  time: string; // Time in HH:MM:SS format
};

// Comparator for sorting by location
const compareByLocation = (a: LogRecord, b: LogRecord): number =>
  a.location.localeCompare(b.location);

// Comparator for sorting by time (HH:MM:SS format assumed)
const compareByTime = (a: LogRecord, b: LogRecord): number =>
  a.time.localeCompare(b.time);

const records: LogRecord[] = [
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
export const getSortedByLocation = (): LogRecord[] =>
  [...records].sort(compareByLocation);

/**
 * Returns records sorted by location and then by time within each location.
 */
export const getSortedByLocationAndTime = (): LogRecord[] =>
  [...records].sort((a, b) => compareByLocation(a, b) || compareByTime(a, b));
