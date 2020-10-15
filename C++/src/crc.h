/*
 * crc.h
 * Copyright (C) 2020 root <root@tw.com>
 *
 * Distributed under terms of the MIT license.
 */

#ifndef CRC_H
#define CRC_H
#include <string>
#include <vector>
using namespace std;
#define CRC_MAX_ENCODE = 1500

class crc
{
private:
    string str;
    vector<string> mid;

public:
    crc(string str)
        : str(str){};
    string crcCut(string str, int start, int end);
    vector<string> crcEncode(string str);
    string crcDecode(string);
    string crcMerge(vector<string>);
};

// 分割字符串
string crc::crcCut(string str, int start, int end) {}
// 编码字符串
vector<string> crc::crcEncode(string) {}
// 解码字符串
string crcDecode(string str) {}
// 合并字符串
string crcMerge(vector<string>) {}
#endif /* !CRC_H */