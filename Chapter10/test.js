function prArray(arr) {
	putstr(arr[0].toString() + ' ');
	for (var i = 1; i < arr.length; ++i) {
		putstr(arr[i].toString() + ' ');
		if (i % 10 == 0) {
			putstr("\n");
		}
	}
}
function genArray(length) {
	var arr = [];
	for (var i = 0; i < length; ++i) {
		arr[i] = Math.floor(Math.random() * 101);
	}
	return arr;
}

load("BST.js");
/*
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

print("Inorder traversal: ");
inOrder(nums.root);

// Inorder traversal:
// 3 16 22 23 37 45 99

print();
print("preOrder traversal: ");
preOrder(nums.root);
// preOrder traversal:
// 23 16 3 22 45 37 99

print();
print("postOrder traversal: ");
postOrder(nums.root);
// postOrder traversal:
// 3 22 16 37 99 45 23

print();
var min = nums.getMin();
print("The minimum value of the BST is: " + min);
//The minimum value of the BST is: 3
print("\n");
var max = nums.getMax();
print("The maximum value of the BST is: " + max);
// The maximum value of the BST is: 99


print("\n");
putstr("Enter a value to search for: ");
var value = parseInt(readline());
var found = nums.find(value);
if (found != null) {
	print("Found " + value + " in the BST.");
}
else {
	print(value + " was not found in the BST.");
}
// Enter a value to search for: 22
// Found 22 in the BST.
*/
var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for (var i = 0; i < grades.length; ++i) {
	var g = grades[i];
	var grade = gradedistro.find(g);
	if (grade == null) {
		gradedistro.insert(g);
	}else {
		gradedistro.update(g);
	}
}
var cont = "y";
while (cont == "y") {
	putstr("\n\nEnter a grade: ");
	var g = parseInt(readline());
	var aGrade = gradedistro.find(g);
	if (aGrade == null) {
		print("No occurrences of " + g);
	}else {
		print("Occurrences of " + g + ": " + aGrade.count);
	}
	putstr("Look at another grade (y/n)? ");
	cont = readline();
}
