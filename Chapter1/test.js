// function factorial(number){
// 	if(number == 1){
// 		return number;
// 	}else{
// 		return number * factorial(number-1);
// 	}
// }
// print(factorial(5));

// function compare(num1, num2) {
// return num1 - num2;
// }
// var nums = [3,1,2,100,4,200];
// nums.sort(compare);
// print(nums); // 1,2,3,4,100,200


// Array.matrix = function(numrows,numcols,initial){
// 	var arr = [];
// 	for(var i=0;i<numrows;i++){
// 		var columns = [];
// 		for(var j=0;j<numcols;++j){
// 			columns[j]=initial;
// 		}
// 		arr[i]=columns;
// 	}
// 	return arr;
// }

// var nums = Array.matrix(5,5,[1,2,3]);
// print(nums);


var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
print(grades[0][0]);
print(grades[0][1]);
print(grades[0][2]);