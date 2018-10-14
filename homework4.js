const theStar = function(xput){		//for stars

	let i = "";
  
	while(xput > 0){
		i = i + "*";
		xput--;
	}
	
	return i;
	
	}
	
const theSpace = function(yput){		// for spacing

	let i = "";
  
	while(yput > 0){
		i = i + " ";
		yput--;
	}
	
	return i;
	
	}
  
  
const triangleStars = function(n){		//for printing space and stars

	let x = (n*2) - 1;
	let y = 0;
  
	while(x > 0){
	
		console.log(theSpace(y) + theStar(x))
		x--;
		x--;
		y++;
    }
	
	}

console.log("Exercise 2: Input 4")			// just for information, can be removed
triangleStars(4);


	
	  
 
//3. Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays. Example:  multiToSingle([[1, 2, 3], [4, 5, 6]]);  // will return [1, 2, 3, 4, 5, 6] 

console.log("Exercise 3:");
function addElement(a, newElement){
  a[a.length] = newElement;
  return(a);
}


function multiToSingle(inputArray){
  let x = 0;
  let y = 0;
  let outputArr = [];
  while(x < inputArray.length){
    let row = inputArray[x];
      while(y < row.length){
        addElement(outputArr, row[y]);
        y++;
      }
    y=0;
    x++;
  }
  return outputArr;
}
console.log(multiToSingle([[1, 2, 3], [4, 5, 6]])); 
	  
	  
	  
// ex4

const findMinMax = function(arrBolean, bolean) {
	
	if(bolean === true){			//for true part only
		
		let lenOfAr = arrBolean.length;
		let i = 0;
		let j = 0;
		
		while(lenOfAr != 0){
			
			lenOfAr--;
			if(i === 0){			//this is important since it replaces the first number with the first index number(if we have minus number only)
			
			i = arrBolean[lenOfAr];
			
			}
			j = arrBolean[lenOfAr];		//replaces j with the index number to comapare with i
			
			if(i < j) {					//compares with i
			i = j;						//if i is bigger than the next index number(j), it replaces i with j
			} 
			
		}
		console.log(i);
	}
	
	if(bolean === false){			//for false part only
	
		let lenOfAr = arrBolean.length;
		let x = 0;
		let y = 0;
		
		while(lenOfAr != 0){
			
			lenOfAr--;
			y = arrBolean[lenOfAr];
			if(x === 0){			//this is important since it replaces the first number with the first index number(if we don't have this part it will not compare the minus numbers in correct way)
			
			x = arrBolean[lenOfAr];
			
			}
			
			if(x > y) {
			x = y;
			} 
			
		}
		
		console.log(x);
	
	}
	
	
}

console.log("Exercise 4: Input [4,2,66,-44,8],true")	// just for information, can be removed
findMinMax([4,2,66,-44,8],true)   //should log 66
console.log("Exercise 4: Input [4,2,66,-44,8],false")		// just for information, can be removed
findMinMax([4,2,66,-44,8],false)   //should log -44



	  
	  
//ex5
const forEach = function(arr, functionval){
		len = arr.length;	
		while(len != 0){
			  len--;						//since index numbers start from 0(so for 4 indexed array we start from 3(as index 3 is 4th number))
			  functionval(arr[len]);		//it takes the len(number) index number and later on next lines which we say console.log it prints it
		  }
	}

	
console.log("Exercise 5: Input [1,2,3,4], function (val)")	

	forEach([1,2,3,4], function (val){
		console.log(val);				//we were talking about this console.log which prints the number
	});
	  



// ex6
const sum = function(num) {
	
	let n = 0;					//our starting point
	let len = num.length; 
	
	
	while(len != 0){
    	len--;				//and same as we mentioned in EX05. we put len-- here because indexes start from 0 as it will be 1st number
		n = n + num[len]; 			//keeps adding the indexed number to n
	}
	console.log(n)
}

console.log("Exercise 6: Input [4,3,2]")		// just for information, can be removed
sum([4,3,2]);

	  
	  

//ex7
const reverse = function(str){
		  let lenStr = str.length;
		  let x = "";
		  
		  while(lenStr != 0){
			  lenStr--;				// same as we mentioned in EX05 and EX06
			  x = x + str[lenStr];		//keeps adding the last letter to x
			  
		  }
		  console.log(x);			//when finished, logs x
	  }

console.log("Exercise 7: Input 'abcd'")	  	// just for information, can be removed
reverse('abcd');

// ex8
const checkerboard = function(n){
	let newN = n;		//we don't want n to decrease in everytime the loop runs so we make new variable called newN equal to n
	let line = 1;
	let t = "";
	let finalText = "";
		  
	while(n != 0){
			  
		line++;			//it makes line even number
			  
		if (line % 2 === 0) {			//if its the first line which we made the odd NO line as even
			while(newN != 0){
				newN--;
				t = t + "*";   //print n number of *
			} 
				  finalText = finalText + t;
		}
			  
			else {				//if its a even line which the changes we made it reads as line NO is odd
				while(newN != 0){
					newN--;
					t = t + "*";
				}
				finalText = finalText + " " + t;   //it prints the same text as the first if just with a space
			}
			  
		finalText = finalText + "\n"; 		//adds the final text to finaltext and then enters(to next line) with "\n"
		n--;
					  
		} console.log(finalText);
	}
		  
console.log("Exercise 8: Input 5")     // just for information, can be removed
checkerboard(5);