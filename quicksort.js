//Quick Sort	
var qcarr=[20,12,45,1,36,4,5,7,11,75,42,25,16,18,0,2,55,725,100,-1];
function quick(qcarr) {
	if (qcarr.length>1) {
		var left = [];
		var right = [];
		var finalres = [];
		var pivot = qcarr.pop();
		var qcnt = qcarr.length;
		for (var i = 0; i < qcnt; i++) {
			if (qcarr[i] <= pivot) {
				left.push(qcarr[i]);
			} else {
				right.push(qcarr[i]);
			}
		}
		return finalres.concat(quick(left), pivot, quick(right));
	}
	return qcarr;
}

console.log(" Quick Sort => " + quick(qcarr));
