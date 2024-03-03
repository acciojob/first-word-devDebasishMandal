function firstWord(s) {
  // your code here
	if(s!=" "){
		let arr=s.split(" ");
	return arr[0];
	}else{
		return s;
	}
}

// Do not change the code 
const s = prompt("Enter String:");
alert(firstWord(s));
