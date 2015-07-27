console.log('a'.charCodeAt(0));
console.log('z'.charCodeAt(0));


function LetterChanges(str) { 
 return str.split('').map(function(char,i){
    if(/[a-z]/.test(char)) {
  		var code = char.charCodeAt(0) + 1;
  	    if(code ===123) code = 97;
  	    return String.fromCharCode(code).replace(/[aeiou]/,String.fromCharCode(code).toUpperCase());
    }
    return char;
  }).join('');
}

function simpleSymbol(str) {
	var res = true,
        splitted = str.split('');
        filt = splitted.filter(function(char,i){
          var re = /[a-z]/;
          	return re.test(char) || re.test(splitted[i-1]) || re.test(splitted[i+1]);
	 	});
  console.log(filt);
  return filt.every(function(char,i) {
    if(/[a-z]/i.test(char)) {
    	return !(filt[i-1] != '+' || filt[i+1] != '+');
    }
    return true;
  });
}

function timeConvert(num) {
	var time;

	while(num>0){
		time += num %60;
	}
}

function VowelCount(str) {
	return str.split('').filter(function(char){
		return 'aeiou'.indexOf(char.toLowerCase()) > -1;
	}).length;
}

function vowelCount(str) {
	var matches = str.match(/[aeiou]/ig);
  return !matches ? 0 : matches.length;

}

function longestWord(str) {
	return str.split(' ').sort(function(a,b){
		return a.length > b.length;
	})[0];
}

function numWords(str) { 
 
  // code goes here  
  return str ? str.split(' ').length : 0;
         
}

function Palindrome(str) { 
  var filt = str.toLowerCase().split('').filter(function(char) {
  		return /[a-z]/.test(char);
  });
  return filt.every(function(elem,i){
  	return elem == filt[filt.length-1-i];
  }); 
}

function ArithGeo(arr) { 
  if(arr.length <2) return -1;
  var diff = arr[1] - arr[0];
  var divis = arr[1] / arr[0];
  
  var arith = testAll(diff);
  var geo = testAll(divis);

  function testAll(el) {
  	return arr.every(function(elem,i) {
    	if(i==arr.length-1) return true;
    	return arr[i+1] / elem == el;
 	 });

  }
  
  if(arith) return "Arithmetic";
  else if(geo) return "Geometric";
  else return -1; 
         
}

function LetterCountI(str) { 
  var words = str.split(' '),
  
  	 mapped = words.map(function(word) {
    	var count = {}, 
    		max,
    		counts = [];

    word.split('').forEach(function(char){
      if(char in count) count[char]++;
      else count[char] = 1;
    });

    for(var prop in count) {
      counts.push(count[prop]);
    }
    return Math.max.apply(null,counts);
  });
  
  max = Math.max.apply(null,mapped);

  return max <= 1 ? -1 : words[mapped.indexOf(max)];
}
   
function numReps(arr) {
  var counter = 0,largest = 0;
  arr.forEach(function(char) {
    counter = 0;
    for(var i=0; i<arr.length; ++i) {
    	if(char===arr[i]) counter++;
    }
    if(counter > largest) largest = counter;
  });
  return largest;
}

function LetterCount(str) {
  var count = 0, largest = 0, words = str.split(" "), reps = [],index = null;
  var temp = words.map(function(word) {
  	return word.split("");
  });
  temp.forEach(function(word,i) {
  	count = numReps(word);
    reps.push({count:count, index:i});
  });        
}

function MeanMode(arr) { 
  var mean = arr.reduce(function(a,b){
    return a+b;
  },0)/arr.length;
  
  var nums = {},
      count = [],
      mode,
      max;
  
    arr.forEach(function(elem) {
      if(elem in nums) nums[elem]++;
      else nums[elem]=1;
    });
  
  Object.keys(nums).forEach(function(key) {
    count.push({num:key , count:nums[key]});
  });
  
  max = count.reduce(function(a,b) {
    return a.count > b.count ? a : b;
  },0);
	
  mode = +max.num;
    	
 return mean === mode ? 1 : 0;
         
}

function ThirdGreatest(strArr) { 
  var lengths = strArr.map(function(word,i){
    return {length:word.length,word:word};
  }).sort(function(a,b){
    return a.length < b.length;
  });;
  
  return lengths[2].word;
  
  
         
}