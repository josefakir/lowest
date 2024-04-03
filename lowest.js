function lowest(arr){
	if(arr.length === 0){ // if the array is empty, return undefined
		return undefined;
	}
	let lowest = arr[0];  // we define the first position of the array to be the lowest value
	for(let i = 1; i < arr.length; i++){ //well iterate the array from the first position to avoid one more iteration
		if(arr[i] < lowest){
			lowest = arr[i];  // if the next value is lower, then we define the variable to be it
		}
	}
	return lowest;
}

const numbers = [8, 2, 5, 6, 2];

console.log(lowest(numbers));

