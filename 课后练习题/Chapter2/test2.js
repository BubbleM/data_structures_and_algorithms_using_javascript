// 将一组单词存储在一个数组中，
// 并按正序和倒序分别显示这些单词。

// var str = ["Hello","Java","and","JavaScript"];
// print(str.join(" "));//Hello Java and JavaScript  //正序输出
// print(str.reverse().join(" "));//JavaScript and Java Hello //倒序输出

var SortWord = function(){
	var _this = this;
	_this.wordStore = ["David","Mike","Cynthia","Clayton","Bryan","Raymond","And","and"];
	var strategy = {
		//正序
		asc:function(){
			_this.wordStore.sort();
		},
		//倒序
		desc:function(){
			// _this.wordStore.sort(function(a,b){
			// 	return b>a;
			// });  //方法1
			_this.wordStore.sort().reverse();  //方法2
		}
	};
	_this.sort = function(rule){
		strategy[rule]();
		return _this.wordStore;
	}
}
print(new SortWord().sort('asc'));//And,Bryan,Clayton,Cynthia,David,Mike,Raymond,and
print(new SortWord().sort('desc'));//and,Raymond,Mike,David,Cynthia,Clayton,Bryan,And
