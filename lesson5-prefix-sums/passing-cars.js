function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = solut(A, 0);
    return n > 1000000000 ? -1 : n; 
}

function solut(A, n) {
    if (A.length === 0) {
        // return 0;
	// TODO:
	return n;
    } else {
        if (A[0] === 0) {
            // if first is zero total number of passing cars is:
	    // number of passing cars with respect to (wrt) the first car plus..
	    // ..number of passing cars wrt the rest of the first cars
            // return non_occur(A[0], A.slice(1), 0) + solut(A.slice(1));
	    // TODO:
	    return solut(A.slice(1), n + non_occur(A[0], A.slice(1), 0));
        } else {
            // number of passing cars wrt the rest of the first cars
            // return solut(A.slice(1));
	    // TODO:
	    return solut(A.slice(1), n);
        }
    }
}
// can be made tail recursive solut can carry around current some as an argument

function non_occur(elt, A, n) {
    return A.length - occur(elt, A, n);
}

function occur(elt, A, n) {
    if(A.length === 0) {
        return n;
    } else {
        if (elt === A[0]) {
            return occur(elt, A.slice(1), n+1);
        } else {
            return occur(elt, A.slice(1), n);
        }
    }
}
