#include <iostream>
#include <list>
#include <vector>

class HashTable {
private:
    static const int TABLE_SIZE = 5; // Number of buckets (small for demonstration)
    std::vector<std::list<std::pair<char, int>>> table;

    // Hash function
    int hashFunction(char key) {
        return key % TABLE_SIZE;  // Simple modulo hash function
    }

public:
    // Constructor
    HashTable() {
        table.resize(TABLE_SIZE);
    }

    // Insert key-value pair
    void insert(char key, int value) {
        int index = hashFunction(key);
        table[index].push_front({key, value});  // Insert at the front of the list
    }

    // Search for a value by key
    int search(char key) {
        int index = hashFunction(key);
        for (const auto &entry : table[index]) {
            if (entry.first == key) {
                return entry.second;  // Return value if key is found
            }
        }
        return -1;  // Key not found
    }

    // Display the hash table
    void display() {
        for (int i = 0; i < TABLE_SIZE; i++) {
            std::cout << "Bucket " << i << ": ";
            for (const auto &entry : table[i]) {
                std::cout << "[" << entry.first << " -> " << entry.second << "] ";
            }
            std::cout << "\n";
        }
    }
};

int main() {
    HashTable ht;

    // Inserting values from the image example
    ht.insert('S', 0);
    ht.insert('E', 1);
    ht.insert('A', 2);
    ht.insert('R', 3);
    ht.insert('C', 4);
    ht.insert('H', 5);
    ht.insert('X', 7);
    ht.insert('M', 9);
    ht.insert('P', 10);
    ht.insert('L', 11);

    // Displaying the hash table
    ht.display();

    // Searching for keys
    char searchKey = 'C';
    int result = ht.search(searchKey);
    if (result != -1)
        std::cout << "\nKey " << searchKey << " found with value: " << result << "\n";
    else
        std::cout << "\nKey " << searchKey << " not found.\n";

    return 0;
}
