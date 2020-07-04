"use strict";

const https = require('https');
const cron = require("node-cron");

var options = {
    hostname: 'typetalk.com',
    path: '/api/v1/topics/xxxxxx',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-TYPETALK-TOKEN': 'xxxxxxxxxxxx'
    }
};

//Node cronのテスト用
function timeTest(){
    //秒 分 時　日 月　曜日
    cron.schedule("00 00 09 04 July *", () => {
        console.log("cronが動いているか確認");
    });
}

function postNotice(){
    cron.schedule("00 30 18 04 July *", () => {
        var req = https.request(options, function(res) {
            console.log('STATUS: ' + res.statusCode);
            res.on('data', function(chunk){
                console.log('BODY: ' + chunk);
            });
        });
        req.write(JSON.stringify({'message': '30分後にZoomの接続テストがあります！'}));
        req.end();
    });
}

function main(){
    //timeTest();
    postNotice();
    console.log("botを起動しました。");
}

main();

