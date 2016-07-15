/**
 * 適当な西暦の配列からウサギ年の西暦だけに絞った配列を求め、表示する。
 */
var yearsArray = [ 2016, 1928, 1823, 1923, 1482, 1447, 1527, 2428, 1057, 937, 253, 7, 1663, 1845, 1977, 2013];
//var zodiacArray = [ "申", "酉", "戌", "亥", "子", "丑", "寅", "卯", "辰", "巳", "午", "未" ];

var resultArray = yearsArray.filter(function(element) {
	return (element % 12) === 7;
});

resultArray.forEach(function(element) {
	console.log(element);
});