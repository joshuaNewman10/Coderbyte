/****************************
Pattern Chaser
****************************/

function PatternChaser(str) {
	var strArr = str.split("");
  	var charRepeat = [];
  
  for(var i=2; i<=str.length/2; i++) {
  	pattern(i);
  }
  
  function pattern(numChars) {
    var maxl = str.length  - numChars*2;
    for(var j=0; j<=maxl; j++) {
    var checkStr = str.slice(j,j+numChars);
      if(str.indexOf(checkStr,j+1) >-1) {charRepeat.push(checkStr.split(''));}
    }
  }
  var longest = charRepeat.reduce(function(a,b){
    return a.length > b.length ? a : b;
  },0);
  return charRepeat.length > 0  ? "yes " + longest.join('') : "no null";
}

/****************************
Really Nice Pattern Chaser
****************************/
function PatternChaser(str) { 
  var len = Math.floor(str.length / 2);
  while (len > 1) {
    for (var i = 0; i < str.length - len; i++) {
      var candidate = str.slice(i, i + len);
      console.log(candidate,i);
      if (str.match(new RegExp(candidate, 'g')).length > 1) {
        return 'yes ' + candidate;
      }
    }
    len -= 1;
  }
  return 'no null';
}

/****************************
Another Really Nice One
****************************/
function PatternChaser(str) { 

  // code goes here
  var MaxPatLength = str.length - 1;
  var MinPatLength = 2;
  for (i=MaxPatLength; i>=MinPatLength; i--) {
    for (s=0; s<=str.length-i; s++) {
      lookingfor = str.substr(s,i);
      before = str.substring(0,Math.max(0,s));
      after = str.substr(s+i);
      console.log("target: "+lookingfor, 'before: '+ before, "after: " + after);
      if ((before.search(lookingfor) != -1) || (after.search(lookingfor) != -1)) { 
        return "yes "+lookingfor;
      }
    }
  }
  return "no null"; 
}