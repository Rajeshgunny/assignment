	//Bubble Sort
var bubblearr=[20,12,45,1,36,4,5,7,11,75,42,25,16,18,0,2,55,725,100,-1];
var bcnt=bubblearr.length;
for(var i=0;i<bcnt;i++){
  for(j=0;j<bcnt-i;j++){	  
	  if(bubblearr[j]>bubblearr[j+1]){
		  var bval=bubblearr[j];		  
		  bubblearr[j]=bubblearr[j+1];
		  bubblearr[j+1]=bval;		  
	  }	  
  }		
}
console.log(" Bubble Sort => "+bubblearr);
