/**
 * JSON練習
 */
var json = '{"maker":"Toyota","name":"カローラ","tires":["RF","LF","RR","LR"]}';

var obj = JSON.parse(json);

console.log(obj);