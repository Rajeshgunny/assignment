 //Selection Sort
var selectionarr=[20,12,45,1,36,4,5,7,11,75,42,25,16,18,0,2,55,725,100,-1];
var scnt=selectionarr.length; 
for(var i=0;i<scnt;i++){
	var min=i;
	for(var j=i+1;j<scnt;j++){
		if(selectionarr[j]<selectionarr[min]){
			min=j;
		}		
	}
	   var sval=selectionarr[i];
		selectionarr[i]=selectionarr[min];
		selectionarr[min]=sval;
}
console.log(" Selection Sort => "+selectionarr);
