const remove_first = (x, a) => {
    if (a.length === 0) {
	return [];
    } else {
	if (x == a[0]) {
	    return a.slice(1);
	} else {
	    return [a[0], ...remove_first(x, a.slice(1))];
	}
    }
}

function solution(A) {
    if (A.length === 0) { // TODO: consider remove this block
	return undefined;
    } else {
	if (A.slice(1).includes(A[0])) {
	    return solution(remove_first(A[0], A.slice(1)));
	} else {
	    return A[0];
	}
    }   
}
