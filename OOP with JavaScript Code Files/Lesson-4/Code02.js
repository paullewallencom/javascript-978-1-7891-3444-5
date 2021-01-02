function square(n) {
	var result;
  
	if (typeof n === "number") {
		result = n*n;
	} else {
		throw new Error("Wrong data type!")
	}
  
	return result;
}

console.log(square("three"));		//result: Error: Wrong data type!
