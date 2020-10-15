/*
 * loadfile.h
 * Copyright (C) 2020 root <root@tw.com>
 *
 * Distributed under terms of the MIT license.
 */

#ifndef LOADFILE_H
#define LOADFILE_H

#include <iostream>
#include <string>
#include <fstream>
#include <vector>
using namespace std;

class loadfile
{
private:
    string filename;
    ifstream fin;

public:
    loadfile(string name);
    vector<string> readfileline();
    ~loadfile();
};

loadfile::loadfile(string name) : filename(name.c_str())
{
    fin.open(name.c_str());
    if (!fin.is_open())
    {
        cerr << "err: connot open file:" << name << endl;
        cerr << "Please check the path and file name is true." << endl;
        return;
    }
}

loadfile::~loadfile()
{
    fin.close();
}

vector<string> loadfile::readfileline()
{
    string str;
    vector<string> mid;
    while (getline(fin, str))
    {
        mid.push_back(str);
    }
    return mid;
}

#endif /* !LOADFILE_H */
