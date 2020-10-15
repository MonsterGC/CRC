/*
 * crc.cpp
 * Copyright (C) 2020 root <root@tw.com>
 *
 * Distributed under terms of the MIT license.
 */
#include <iostream>
#include <iomanip>
#include <cstring>
#include <string>
#include "crc.h"
#include "loadfile.h"
#include "stdlib.h"
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
    // 读取文件
    loadfile str_vec(filename);
    vector<string> mid = str_vec.readfileline();
    for (vector<string>::iterator it = mid.begin(); it != mid.end(); ++it)
    {
        cout << *it << endl;
    }
    return 0;
}