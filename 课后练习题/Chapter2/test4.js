// 创建这样一个对象，它将字母存储在一个数组中，
// 并且用一个方法可以将字母连在一起，显示成一个单词。
var Word = {
	letters:['H','e','l','l','o'],
	getWord:function(){
		return this.letters.join('');//Hello
	}
};
print(Word.getWord());