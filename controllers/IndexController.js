

const fs = require('fs');

var IpSubnetCalculator = require('ip-subnet-calculator');
var rez;
var forFile = new Array()

exports.index = async function (req, res) {

    let temp = await readTofile();

    return res.sendStatus(200);
};

async function readTofile() {
    fs.readFile('diapozon.csv', 'utf8', function (err, data) {
        dataArray = data.split(/\r?\n/);
        //  for(let i=0;i<dataArray.length-2;i++){
        for (let i = 0; i < 30 - 2; i++) {
            rez = dataArray[i].split(",");
            calcMask(rez[0], rez[1]);
        }
        writeTOfile();
    });
    return true;
}

async function writeTOfile() {
    let file = fs.createWriteStream('ip_array.txt');
    file.on('error', function (err) { /* error handling */ });
    forFile.forEach(function (v) { file.write(forFile + '\n'); });
    file.end();
    return true;
}


//
async function calcMask(first, last) {
    let sbnet = IpSubnetCalculator.calculate(first, last);
    forFile.push(first + "/" + sbnet[0].prefixSize);
}

