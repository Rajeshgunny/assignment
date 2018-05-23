//Binary Search	

var bnsarr=[20,12,45,1,36,4,5,7,11,75,42,25,16,18,0,2,55,725,100];

	for(var i=1;i<bnsarr.length;i++){
		var bval=bnsarr[i];
		for(var j=i-1;j>=0 && bnsarr[j]>bval;j--){
			bnsarr[j+1]=bnsarr[j];		
		}
		bnsarr[j+1]=bval;	
	}
	var items=bnsarr;
	console.log(" Insertion Sort Order Values => "+ items);
	var check=75;
	console.log(" Search value "+ check);
        var findex  = 0;
        var lindex   = items.length - 1;
        var mindex = Math.floor((lindex + findex)/2);
    while(items[mindex] != check && findex < lindex)
    {
       if (check < items[mindex])
        {
            lindex = mindex - 1;
        } 
      else if (check > items[mindex])
        {
            findex = mindex + 1;
        }
        mindex = Math.floor((lindex + findex)/2);
    }
    
    if(items[mindex] != check) { 
		  var finalbval=-1;
	  }else{ 
		  var finalbval= mindex;
	}    
    console.log(" Binary Search => "+finalbval + " (position)");
