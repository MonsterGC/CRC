/*
 * crc.cpp
 * Copyright (C) 2020 root <root@tw.com>
 *
 * Distributed under terms of the MIT license.
 */
#include <iostream>
#include <iomanip>
#include <fstream>
#include <cstring>
#include <string>
#include "crc.h"
using namespace std;

int main(int argc, char *argv[])
{
    // 打开输入文件
    string filename;
    if (argc > 1)
    {
        filename = argv[1];
    }
    else
    {
        cout << "Please enter the input file name:";
        cin >> filename;
    }
    ifstream fin;
    fin.open(filename.c_str());
    
    // 读取数据
    string str;
    vector<string> mid;
    while (getline(fin, str))
    {
        mid.push_back(str);
    }
    cout<<"读出的文件是:"<<endl;
    for(int i = 0; i < mid.size(); ++i) {
        cout<<mid[i]<<endl;
    }
    if (!fin.is_open())
    {
        cerr << "err: connot open file:" << filename << endl;
        cerr << "Please check the path and file name is true." << endl;
        return 0;
    }
    ofstream fout;
    if (argc > 2)
    {
        fout.open(argv[2]);
    }
    else
    {
        fout.open("output.txt");
    }
    fout.close();
    fin.close();
    return 0;
}