#include <iostream>
#include <vector>
#include <algorithm>

struct Record {
    std::string location;
    std::string time;  // Keeping time as string in HH:MM:SS format

    // Constructor
    Record(std::string loc, std::string t) : location(loc), time(t) {}
};

// Comparator for stable sorting by location
bool compareByLocation(const Record &a, const Record &b) {
    return a.location < b.location;
}

// Comparator for sorting by time (HH:MM:SS format assumed)
bool compareByTime(const Record &a, const Record &b) {
    return a.time < b.time;
}

int main() {
    std::vector<Record> records = {
        {"Chicago", "09:00:00"},
        {"Phoenix", "09:00:03"},
        {"Houston", "09:00:13"},
        {"Chicago", "09:00:59"},
        {"Houston", "09:01:10"},
        {"Chicago", "09:03:13"},
        {"Seattle", "09:10:11"},
        {"Seattle", "09:10:25"},
        {"Phoenix", "09:14:25"},
        {"Chicago", "09:19:32"},
        {"Chicago", "09:19:46"},
        {"Chicago", "09:21:05"},
        {"Seattle", "09:22:43"},
        {"Seattle", "09:22:54"},
        {"Chicago", "09:25:52"},
        {"Chicago", "09:35:21"},
        {"Seattle", "09:36:14"},
        {"Phoenix", "09:37:44"}
    };

    // Stable sort by location
    std::vector<Record> sortedByLocation = records;
    std::stable_sort(sortedByLocation.begin(), sortedByLocation.end(), compareByLocation);

    // Print sorted by location
    std::cout << "Sorted by location:\n";
    for (const auto &record : sortedByLocation) {
        std::cout << record.location << " " << record.time << "\n";
    }
    std::cout << "\n";

    // Sort by time within each location
    std::vector<Record> sortedByLocationAndTime = sortedByLocation;
    auto start = sortedByLocationAndTime.begin();
    while (start != sortedByLocationAndTime.end()) {
        auto end = std::find_if(start, sortedByLocationAndTime.end(), [start](const Record &r) {
            return r.location != start->location;
        });
        std::sort(start, end, compareByTime);
        start = end;
    }

    // Print sorted by location and time
    std::cout << "Sorted by location and time:\n";
    for (const auto &record : sortedByLocationAndTime) {
        std::cout << record.location << " " << record.time << "\n";
    }

    return 0;
}
