from pymongo import MongoClient
from tianyi03_BackCode.settings import DBCONFIG
import csv

class detailInfo:
    filename = 'detailInfo.csv'
    path = '.\\DataCsv\\'
    detailInfo = 'detailInfo'
    colname = ['SourseFrom', 'SenstiKind', 'Class','time']
    res = []
    max_len = 100000
    i = 1

    def __init__(self):
        self.files = []
        self.files.append(self.filename)
        self.client = MongoClient(DBCONFIG['HOST'], DBCONFIG['PORT'])
        self.db = self.client.__getattr__(DBCONFIG['NAME'])
        self.dst_detailInfo = self.db[self.detailInfo]

    def __del__(self):
        self.client.close()

    @staticmethod
    def convert_fileaffix(fileaffix):
        if len(fileaffix) == 0:
            return ''
        while fileaffix[0] == '.':
            fileaffix = fileaffix[1:]
        if '.' in fileaffix:
            return None
        else:
            return fileaffix

    def detailInfodata(self):
        self.dst_detailInfo.remove({})
        self.res.clear()
        print('正在处理文件：%s' % (self.path + self.filename))
        with open(self.path + self.filename, 'r', encoding='UTF-8') as infile:
                reader = csv.reader(infile)
                next(reader)
                for row in reader:
                    self.res.append({
                        'SourseFrom': str(row[0]),
                        'SenstiKind': str(row[1]),
                        'Class': str(row[2]),
                        'time':str(row[3]),
                        'title':str(row[4]),
                        'keys':"0"
                    })
                    if self.res.__len__() == self.max_len:
                        self.dst_detailInfo.insert_many(self.res)
                        self.res.clear()
        if self.res.__len__() > 0:
            self.dst_detailInfo.insert_many(self.res)
            self.res.clear()