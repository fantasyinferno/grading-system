#include <iostream>
#include <fstream>
#include <string>

int main (int argc, char** argv) {
    // read input file from argument vector 1
    std::ifstream myStringFile(argv[1]);
    // print output file form argument vector 2
    std::ofstream myStringOut(argv[2]);

    // string for reading input file
    std::string temp;

    // string for reverse original string and print to output
    std::string anotherTemp = "";

    // index of string character
    int count = 0;
    if (myStringFile.is_open()) {
        while (myStringFile >> temp) {
            // continously read input file
            while (temp[count] != '\0') {
                // with each word, reverse and assign to anotherTemp, prepare for printing to output file
                anotherTemp = temp[count] + anotherTemp;
                count++;
            }
            // another requirement, delete the mean character of each word(roof)
            for (int index = count / 2 - 1; index < count - 1; index++) {
                anotherTemp[index] = anotherTemp[index + 1];
            }
            // skip the last word
            anotherTemp[count - 1] = ' ';

            // restart all value needed for loops
            count = 0;
            anotherTemp = "";

            // print to output file the stirng has been reversed and deleted the mean character
            myStringOut << anotherTemp;
        }
    }
    return 0;
}