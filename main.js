const fs = require('fs');
const messageModule = require('./message');
require('dotenv').config();

// 「message」モジュールの「create」メソッドを実行して結果を取得
const name = process.env.NAME;
const number = process.env.NUMBER;
const result = messageModule.create(name, number);

// 結果を外部ファイル「result.txt」に書き出す
fs.writeFile('result.txt', result, (err) => {
  if (err) {
    console.error('ファイル書き込みエラー:', err);
  } else {
    console.log('結果を「result.txt」に書き出しました。');
  }
});