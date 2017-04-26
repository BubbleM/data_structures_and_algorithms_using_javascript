//使用Dictionary类
load("Dictionary.js");
var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("Mike","13");//重写了datastore[Mike]的值为13
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
print("Number of entries: " + pbook.count());//Number of entries: 3
print("David's extension: " + pbook.find("David"));//David's extension: 345
pbook.remove("David");
pbook.showAll();//Mike -> 13
				//Cynthia -> 456
pbook.clear();
print("Number of entries: " + pbook.count());//Number of entries: 0
pbook.showAll();//无输出