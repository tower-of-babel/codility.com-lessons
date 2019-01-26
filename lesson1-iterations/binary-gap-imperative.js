// binary gaps
// find length of longest series 0s surrounded by 1s in a number's binary form
// iterative, imperative style
function solution(N) {
    let n = (N >>> 0).toString(2)
    let A = [];
    let count = 0;
    for(let i = 0; i < n.length; i++) {
	if (n[i] === "0") {
	    count += 1;
	} else if (n[i] === "1"){
	    A.push(count);
	    count = 0;
	}
    }
    return A.length > 0 ? Math.max(...A) : 0;
}



// TODO: with reduce()
