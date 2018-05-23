//Insertion Sort
var insertarr=[20,12,45,1,36,4,5,7,11,75,42,25,16,18,0,2,55,725,100,-1];
var icnt=insertarr.length; 
for(var i=1;i<icnt;i++){
	var ival=insertarr[i];
	for(var j=i-1;j>=0 && insertarr[j]>ival;j--){
		insertarr[j+1]=insertarr[j];		
	}
	insertarr[j+1]=ival;	
}
console.log(" Insertion Sort => "+insertarr);
