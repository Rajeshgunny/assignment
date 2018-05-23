//Merge Sort
var mergearr=[20,12,45,1,36,4,5,7,11,75,42,25,16,18,0,2,55,725,100,-1];
function merge(left, right) {
	var finalres=[];
	var lindex=0;
	var rindex=0;
	while(lindex<left.length && rindex<right.length){		
		if(left[lindex]<right[rindex]){
			finalres.push(left[lindex]);
			lindex++;
		}else{			
			finalres.push(right[rindex]);
			rindex++;
		}		
	}	
	return finalres.concat(left.slice(lindex)).concat(right.slice(rindex));	
}

function mergesort(mergearr) {
	if (mergearr.length>1) {
		var clc=Math.floor(mergearr.length/2);
		var left=mergearr.slice(0,clc);
		var right=mergearr.slice(clc);
		return merge(mergesort(left),mergesort(right));
   }
   return mergearr;
}
console.log(" Merge Sort => "+mergesort(mergearr));	
