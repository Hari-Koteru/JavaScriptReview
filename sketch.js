var num = 45;
console.log(num);
var string = "thing";
console.log(string);
console.log(string.length);
console.log(string.toUpperCase());
console.log(parseInt("123"));
console.log(10+30);
console.log(10*1010);
console.log(65*67);
console.log(56/7);
console.log(565656-56);
console.log(87%2);
console.log("Hello " + "Hari");
console.log("a"/"b"); //NaN ---Not A Number
console.log(45/0);//Infinity
var bool = true;
console.log(bool);
console.log(2===3);
console.log(5>20);
console.log(100<500);
console.log(50>=100);
console.log(20<=100);
console.log(20 !== 21);
var x = null;
console.log(x);
var y;
console.log(y);
//Conditional Programming
if(3<2){
    console.log("Yes")
}
else{
    console.log("No")
}


var name = "Hari";
switch(name) {  
case  "Aish":  
    console.log("Condition 1");  
    break;  
case  "Hari":  
    console.log("Condition 2");  
    break;  
default:  
    console.log("None of the conditions are true");
}

//For Loops
for(var i=0;i<8;i++){
    console.log(i);
}

//While loop
var j = 4; 
while(j<9){
    console.log(j);
    j++;
}

//Arrays
var fruits = ["orange", "banana", "mango", "apple"];
console.log(fruits);
console.log(fruits.length);
fruits.push("guava", "cherry", "strawberry"); // adding new elements into the array 
console.log(fruits);
fruits.pop(); //remove the last element from the array 
console.log(fruits);

//Functions
function area(side){
    var area = side * side;
    return area;
}

console.log(area(5));

function perimeter(radius){
    var perimeter = radius * 2 * 3.14;
    return perimeter;
}
console.log(perimeter(5));


//Object
//Internally JavaScript creates a new object using new Object()
var paddle = new Object();
paddle.length = 60;
paddle.showLength = function(){
	console.log(paddle.length);
}
console.log(paddle.showLength());

console.log(paddle);