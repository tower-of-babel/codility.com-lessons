// recursive, functional style
function solution(N) {
    let bin = (N >>> 0).toString(2);
    let gap_lens = zeroes(bin, 0);
    if(gap_lens.length > 0) {
	return Math.max(...gap_lens);
    } else {
	return 0;
    }
}

function zeroes(bin, n) {
    if (bin.length === 0) {
	return [];
    } else {
	if (bin[0] == "0") {
	    return zeroes(bin.slice(1), n+1);
	} else if(bin[0] == "1") {
	    return [n, ...zeroes(bin.slice(1), 0)];
	}
    }
}

const bin = N => (N>>>0).toString(2); 

function zeroes(bin, n) {
    if (bin.length === 0) {
		return [];
    } else {
		let next = bin.slice(1)[0];
		if (bin[0] == next) {
	    	return zeroes(bin.slice(1), n+1);
		} else {
			if(bin[0] == "0") {
	    		return [n, ...zeroes(bin.slice(1), 1)];
        	} else {
	    		return zeroes(bin.slice(1), 1);
        	}
		}
    }
}
