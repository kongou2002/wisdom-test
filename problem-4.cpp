#include <iostream>
#include <fstream>
#include <sstream>
#include <map>
#include <set>
#include <cctype>

// Function to clean a word (remove punctuation, convert to lowercase)
std::string cleanWord(const std::string &word) {
    std::string cleaned;
    for (size_t i = 0; i < word.length(); ++i) {
        char ch = word[i];
        if (std::isalpha(ch))  // Keep only letters
            cleaned += std::tolower(ch);
    }
    return cleaned;
}

// Function to create the file if it does not exist
void createFileIfNotExists(const std::string &filename) {
    std::ifstream fileCheck(filename.c_str());
    if (!fileCheck) {
        std::ofstream file(filename.c_str());
        file << "It was the best of times,\n"
             << "it was the worst of times,\n"
             << "it was the age of wisdom,\n"
             << "it was the age of foolishness,\n";
        file.close();
        std::cout << "File created with sample text: " << filename << "\n";
    } else {
        std::cout << "File exists, reading from it...\n";
    }
}

int main() {
    std::string filename = "text.txt";
    
    // Check and create the file if necessary
    createFileIfNotExists(filename);

    std::ifstream file(filename.c_str());
    if (!file) {
        std::cerr << "Error opening file.\n";
        return 1;
    }

    std::map<std::string, std::set<int> > wordMap;
    std::string line;
    int lineNumber = 0;

    while (std::getline(file, line)) {
        lineNumber++;
        std::stringstream ss(line);
        std::string word;

        while (ss >> word) {
            word = cleanWord(word);
            if (!word.empty()) {
                wordMap[word].insert(lineNumber);
            }
        }
    }

    file.close();

    // Print results
    for (std::map<std::string, std::set<int> >::const_iterator pair = wordMap.begin(); pair != wordMap.end(); ++pair) {
        std::cout << pair->first << " ";
        std::set<int>::const_iterator it = pair->second.begin();
        int first = *it, last = *it;
        ++it;
        for (; it != pair->second.end(); ++it) {
            if (*it == last + 1) {
                last = *it;
            } else {
                std::cout << first;
                if (first != last) std::cout << "-" << last;
                std::cout << " ";
                first = last = *it;
            }
        }
        std::cout << first;
        if (first != last) std::cout << "-" << last;
        std::cout << "\n";
    }

    return 0;
}
