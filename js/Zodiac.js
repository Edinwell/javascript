/**
 * 適当な西暦の配列に対して, 対応する干支を格納した配列を作成, 表示する
 */
var yearsArray = [ 2016, 1928, 1823, 1923, 1482, 1527, 2428, 1057, 937, 253 ];
var zodiacArray = [ "申", "酉", "戌", "亥", "子", "丑", "寅", "卯", "辰", "巳", "午", "未" ];

var resultArray = yearsArray.map(function(element) {
	return zodiacArray[element % 12];
});

resultArray.forEach(function(element) {
	console.log(element);
});