//Medium Challenges
/****************************
This is Crazy Inefficient Apparently, blows Call Stack
****************************/
function fillArr(num) {
  return Array.apply(null,new Array(num)).map(function(elem,i){
    return i +1;
  });
}

function getPrimes(num) {
  var nums = fillArr(num);
  
  function PrimeTime(num) {  
  if( num <= 1) return false;
  for(var i=2; i<=Math.ceil(Math.sqrt(num)); ++i) { 
    if(num%i === 0 && i != num) return false;
  }
  return true;
}
  return nums.filter(PrimeTime);
}


/****************************
Prime Factors
****************************/
function getPrimeFactors(n){
  var primeFactors = {};
  var primes = getPrimes(n);
  var count = 0;
  var cur = n ;
  while(cur != 1) {
    for(var i=0; i<primes.length; i++) {
      if(cur%primes[i] ==0) {
        primeFactors[primes[i]] ? primeFactors[primes[i]]++ : primeFactors[primes[i]] = 1;
        cur = cur/ primes[i];
        i = -1;
        
      }
    }
    
  }
  return primeFactors;
}
console.log(getPrimeFactors(205792));
//console.log(100%2);
/****************************
Prime Time: Determine if Prime Number
****************************/
function PrimeTime(num) {  //factors end up being rearangement after sqrt!
  if( num <= 1) return false;
  
  for(var i=2; i<=Math.ceil(Math.sqrt(num)); ++i) { //could save more time by using only prime factos
    if(num%i === 0 && i != num) return false;
    
  }
  return true;
}



/****************************
Run Length Encoding
****************************/ 
function RunLength(str) { //modified so no number count if equal to 1
  if(str === '') return '';
  var alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
  var alph = alphabet.split(",");
  var code = [];
  var reps = 0;

  function match(char,index) {
  var count = 0;
  while(str[index] == char) {
    count++;
    index++;
  }
  return count;
}

  for(var i=0; i<str.length; i+=reps) {
    for(var j =0; j<alph.length; ++j) {
      if(str[i] == alph[j]) {reps = match(alph[j],i);
         code.push(""+(reps > 1 ? reps : '') +alph[j]);
       }
    }
  }
  return code.join("");
}
console.log(RunLength("yesssssnomaybe")); 

//alt way to get alphabet
var alpa = [];
for (var i=97; i<123; i++){
alpa.push(String.fromCharCode(i));
}


/****************************
Return the nth prime number
****************************/
function Erastosthenes(n,nth) {
  var nums =[];
  var output = [];

  for(var i=0; i<n; i++) {// make arr of numbers
    nums.push(true);
  }
  
  for( i=2; i<n; ++i) {
    for(var j = i*i; j<n; j+=i) {
      nums[j] = false;
    }
  }
  
  for(i=2; i<nums.length; ++i) {
    if(nums[i]) output.push(i);
  }
  
  console.log(nums);
  console.log(output);
  return output[nth-1];
}

console.log(Erastosthenes(100,10));

/****************************
Pallindrone
****************************/
function PalindromeTwo(str) { 
  var split = str.replace(/[\s,'".-/!]/g,''), splitRev = [];
      split =split.toLowerCase().split("");
  
  for(var i = split.length-1; i>=0; i--) {
    splitRev.push(split[i]);
  }
  console.log(split,splitRev);
  for(var j=0; j<split.length; ++j) {
    if(split[j] != splitRev[j]) return false;
  }
  return true;
  

}

/****************************
Division (Greatest Common Factor)
****************************/
function Division(num1,num2) { 
  cf = [];
  for(var i=1; i<=num1; ++i) {
    if (num1% i ===0 && num2%i===0) cf.push(i);
  }
 return cf[cf.length-1];
}

/****************************
Arithmatic, Geometric Sequences
****************************/
function ArithGeoII(arr) {
        var diff = arr[1]-arr[0],mult = arr[1] / arr[0];
        arith = true,geo = true;
  for(var i=1; i<arr.length-1; ++i) {
      if(arr[i+1] - arr[i] != diff) arith = false;
      if(arr[i+1] / arr[i] != mult) geo = false;
        diff = arr[i+1] - arr[i];
      mult = arr[i+1] / arr[i];
    
  }
  if(arith) return "Arithmetic";
  else if(geo) return "Geometric";
  else return -1;
  
}


/****************************
Repeated Char Counter
****************************/
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

function repeat(str) {
  var count = 0, largest = 0, words = str.split(" "), reps = [], index = null;
  var temp = words.map(function(word) {
    return word.split("");
  });
  temp.forEach(function(word,i) {
    count = numReps(word);
    reps.push({count:count, index:i});
  });
  
  reps.forEach(function(word) {
    if(word.count > largest) {largest = word.count; index = word.index;}
  });
  if(largest === 1) return -1; 
  return words[index];
}



/****************************
Caser Cypher (NEEDS WORK)
****************************/
function arrInit(start,end) {
  var arr = [];
  for(start; start <=end; ++start) {
    arr.push(start);
  }
  return arr;
}


function wrapBound(num,over,upCas) {
  var lC = arrInit(97,122);
    var uC = arrInit(65,90);
    inc = 0;
  if(upCas) {
  while(inc < over) {
    if(num=== uC[uC.length-1]) {
      num = uC[0]; inc++
    } else {
      inc++; num++;
    }
  }
      
  } else {
  while(inc < over) {
    if(num=== lC[lC.length-1]) {
      num = lC[0]; inc++
    } else {
      inc++; num++;
    }
  }
  }
  return num;
}
function charChange(ch,upCas,num) {
 
  if(upCas) {
    if(ch.charCodeAt(0)+num >90)
      return String.fromCharCode(wrapBound(ch.charCodeAt(0),num,upCas));
    else return String.fromCharCode(ch.charCodeAt(0)+num);
  }
  else {
    if(ch.charCodeAt(0)+num >122)
       return String.fromCharCode(wrapBound(ch.charCodeAt(0),num,upCas));
  else return String.fromCharCode(ch.charCodeAt(0)+num);
  }
 
}

function CaesarCipher(str,num) {
  var mssg = str.split(""),res = [];
  res = mssg.map(function(lett){
    if(/[a-z]/.test(lett)) return charChange(lett,false,num);
    else if (/[A-Z]/.test(lett)) return charChange(lett,true,num);
    else return lett;
  });
  return res.join("")
}




/****************************
Caser Cypher (FIXED)
****************************/
function charChange(ch,upCas,num) {
 
  if(upCas) {
    if(ch.charCodeAt(0)+num >90)
      return String.fromCharCode(ch.charCodeAt(0)-26+num);
    else return String.fromCharCode(ch.charCodeAt(0)+num);
  }
  else {
    if(ch.charCodeAt(0)+num >122)
       return String.fromCharCode(ch.charCodeAt(0)-26+num);
  else return String.fromCharCode(ch.charCodeAt(0)+num);
  }
 
}

function CaesarCipher(str,num) {
  var mssg = str.split(""),res = [];
  res = mssg.map(function(lett){
    if(/[a-z]/.test(lett)) return charChange(lett,false,num);
    else if (/[A-Z]/.test(lett)) return charChange(lett,true,num);
    else return lett;
  });
  return res.join("")
}
console.log(CaesarCipher("Zelly",2));
/****************************
Simple Mode
****************************/
function SimpleMode(arr){
  var counter = 0, largest = 0,reps = [];

  arr.forEach(function(num){
    counter = 0;
    for(var i=0; i<arr.length; ++i) {
      if(num===arr[[i]]) counter++;
    }
    reps.push({num:num,counter:counter});
  });
  var num = null;
  reps.forEach(function(comb) {
    if(comb.counter > largest) {largest = comb.counter; num = comb.num;} 
  });
 if(largest >1) return num;
  return -1;

}


/****************************
Consecutive Array
****************************/
function Consecutive(arr){
  arr.sort(function(a,b) {return a-b;});
  var numSteps = 0;
  
  for(var i=0; i<arr.length-1; i++) {
    if(arr[i+1] -arr[i] != 1) 
     numSteps += arr[i+1]-arr[i]-1;
  }
return numSteps;
}

consecutive([5,10,15]);//8
consectuive([-2,10,4]); //10



/****************************
Formatted Division (NEES ALOT OF WORK)
****************************/
function padSigs(val,times) {
  var counter = 0;
  
  while(counter <times) {
    val += "0";
    counter++;
  }
  return val;
}

function round(num,dec) {
  var arr = num.split("");
  var last = arr[arr.length-1];
  if (last <5) { arr.pop(); return arr.join("");}
  else {
    var rounded = arr.map(function(elem,i) {
      if(i === arr.length-2) return (+elem) +1;
      return elem;
    });
  }
  rounded.pop(); return rounded.join("");
}
function formDivis(num1,num2) {
  var res = num1/num2, temp;
  res = res + "";
  var dec = res.indexOf('.')
  if(dec===-1) {res += '.';res = padSigs(res,4); return res;}

  var preDec = res.match(/(\d*)./);
  var postDec = res.match(/\.(\d*)/);
  preDec = preDec[1] || "";
  postDec = postDec[1] || "";
  if(postDec.length > 5 ) {
    temp = postDec.slice(0,5);
    return round(preDec + '.'+temp,dec);
  }
  else {
    temp = padSigs("."+postDec,5-postDec.length);
    return round(preDec + temp,dec);
  }


  return res;
}
console.log(formDivis(101077282,21123));
console.log(formDivis(10,10));
console.log(formDivis(40,2.5));


//console.log(formDivis(8,2.5));

/****************************
Time Difference: My slightly icky code
****************************/
function millitTime(t) {
  var firstSplitKey = 5, secondSplitKey = 5;
  if(t[0].length == 6) firstSplitKey = 4;
  if(t[1].length ==6) secondSplitKey = 4;
  
  var first = t[0].substring(firstSplitKey), second = t[1].substring(secondSplitKey); //fix
    t[0] = t[0].substring(0,firstSplitKey), t[1] = t[1].substring(0,secondSplitKey);
  
  var t = t.map(function(time){
    return time.split(':');
  });
  if(first === "pm") t[0][0] = Number(t[0][0]) + 12;
  if(second === "pm") t[1][0] = Number(t[1][0]) + 12;

  for(var i=0; i<t.length; ++i) {
    for(var j=0; j<t[i].length; ++j) {
      t[i][j] = Number(t[i][j]);
    }
  }
  return t;
  
 }
function minConv(times) {
  var temp = times.map(function(t,i) {
    for(var j =0; j<t.length; ++j) {
      if(j===0) return (t[j] * 60) + t[j+1];
    }
    
  });
  return temp;

}
function CountingMinutes(str) { 
  var times = str.split('-');
  times = millitTime(times);
  times = minConv(times);
  var first = times[0], second = times[1];
  if(second > first) return second-first;
  else return 1440+(second-first);
}

/****************************
Dash Inserter
****************************/
function checkEven(first,second) {
    if(first ==0 || second ==0) return false;
  return first % 2 === 0 && second %2 === 0;
}

function checkOdd(first,second) {
  return first % 2 !== 0 && second % 2 !== 0;
}
function DashInsertII(num) {
  str = String(num);
  var split = str.split(''),
  dash = '-', 
  star = '*',
  output = [];
  
  for(var i=0; i<split.length-1; ++i) {
    output.push(split[i]);
    if(checkEven(split[i],split[i+1])) output.push(star);
    if(checkOdd(split[i],split[i+1])) output.push(dash);
  }
  output.push(split[split.length-1]);
  return output.join("");
}
/****************************
Aside: Permutations
****************************/
    var count=0;
    function permute(pre,cur){  
        var len=cur.length;
        for(var i=0;i<len;i++){
            var p=clone(pre);
            var c=clone(cur);
            p.push(cur[i]);
            remove(c,cur[i]);
            if(len>1){
                permute(p,c);
            }else{
                print(p);
                count++;
            }
        }
    }
    function print(arr){
        var len=arr.length;
        for(var i=0;i<len;i++){
            console.log(arr[i]+" ");
        }
        console.log("\n");
    }
    function remove(arr,item){
        if(contains(arr,item)){
            var len=arr.length;
            for(var i = len-1; i >= 0; i--){ // STEP 1
                if(arr[i] == item){             // STEP 2
                    arr.splice(i,1);              // STEP 3
                }
            }
        }
    }
    function contains(arr,value){
        for(var i=0;i<arr.length;i++){
            if(arr[i]==value){
                return true;
            }
        }
        return false;
    }
    function clone(arr){
        var a=new Array();
        var len=arr.length;
        for(var i=0;i<len;i++){
            a.push(arr[i]);
        }
        return a;
    }
permute([],[1,2,3]);


/****************************
Triple Double
****************************/
function TripleDouble(num1,num2) { 
  var word1 = {},
      word2 = {},
      first = false,
      num,
      second = false;
        
  
  num1 = String(num1);
  num2 = String(num2);
  
 var iie = function() {
   var current = num1.charAt(0);
   word1[current] = 0;
  num1.split('').forEach(function(char) {
    if(char == current) word1[current]++;
    else {
      word1[char]=1;
      current = char;
    }
  });
}();
  
   iie = function() {
   var current = num2.charAt(0);
     word2[current] = 0;
  num2.split('').forEach(function(char) {
    if(current == char) word2[current]++;
    else {
      word2[char]=1;
      current = char;
    }
    
  });
  }();
  var possible = [];
  for(var word1Prop in word1) {
    if (word1[word1Prop] >= 3) {
      first = true;
      possible.push(word1Prop);
    }
   }
  if(!first) return 0;
  
  possible.forEach(function(num){
    if (word2 && word2[num] >=2) second = true;
  });
  
  return first && second ? 1 : 0;
         
}

console.log(TripleDouble(555666 ,5589));


/****************************
Reduction
****************************/
function reduction(str) {
  console.log(str);
  var combos = ['ab','ba','ca','ac','cb','bc'];
  var comboReplace = ['c','c','b','b','a','a'];
  
  var found = [];

  combos.forEach(function(elem,i){
    if(str.indexOf(elem) >-1) {
      found.push(i); 
     }
  });
  if(found.length ==0) return str.length;
  else {
     comboIndex = found[Math.floor(Math.random()*found.length)];
    return reduction(str.replace(combos[comboIndex],comboReplace[comboIndex]));
  }
}

console.log(reduction("bcab"));
/****************************
Ugly/Clever Brcket Mathcer--check of length solves nearly all
****************************/
function BracketMatcher(str) { 
  function charFilter(arr,matchChar) {
    return arr.filter(function(char){
       return matchChar==char;
    });
  }
  
  var openingBrack = charFilter(str.split(''),'(');
  var closingBrack = charFilter(str.split(''),')');

  var equalNum = openingBrack.length === closingBrack.length ? true : false;
  if(!equalNum) return 0;
  var equalParen = true;
  var currOpen = 0;
  var currClose = 0;
  var nextclose;
  var nextnextclose;
  var nextOpen;
  var currIndex = 0;
  str = str.split('');
  
  for(var i=0; i<str.length; ++i) {
    console.log(str.join(''));
    if(str[i] == '(') {
      nextclose = str.indexOf(')',i);
        nextnextclose = str.indexOf(')',nextclose+1);
        nextOpen = str.indexOf('(',i);
      if(nextclose < nextOpen && nextnextclose < nextOpen) equalParen = false;
      if(nextclose == -1) equalParen =false;
      else {str[nextclose] = '$'; str[i] = '&';}
    }
    
  }
  
  return equalParen && equalNum ? 1 : 0;
         
}
/****************************
Clever BracketMatcher--asks if there is a bracket left to pop or not!
****************************/
function BracketMatcher(str) { 
  var br=[];
  for (var i=0;i<str.length;i++)
  {
    if (str[i]=="(")
    {
      br.push(1);
    }
    else if (str[i]==")")
    {
      if (br.pop()==null) return 0;
    }
  }  
  return (br.length==0)?1:0;       
}

/****************************
Prime Checker-I need to learn permutations..
****************************/
function PrimeChecker(num) { 

  var primes = Array.apply(null,new Array(1000)).map(function(_elem,i) {
    return i+1;
  }).filter(function(elem){
    return PrimeTime(elem);
  });
  num = String(num).split('');
  var count = 0,
      res = false,
      arrange = [],
      index = 0,
      i = 0;
  while(count < 100) {
    index = Math.floor(Math.random()*num.length);
    for(i=0; i<num.length; i++) {
      arrange.push(num[index]);
       index+=1;
      if(index === num.length) index = 0;
    }
    if(primes.indexOf(Number(arrange.join(''))) > -1) return 1;
    arrange.length = 0;
    count++;
  }
  return 0;
         
}

function PrimeTime(num) {  //factors end up being rearangement after sqrt!
  if( num <= 1) return false;
  
  for(var i=2; i<=Math.ceil(Math.sqrt(num)); ++i) { //could save more time by using only prime factos
    if(num%i === 0 && i != num) return false;
    
  }
  return true;
}

/****************************
PermutationStep-Me
****************************/
function PermutationStep(num) { 
    function permutator(input) {
      var perms = [];
      function permute(arr,data) {
        var cur, memo = data || [];
    
        for(var i=0; i<arr.length; ++i) {
            cur = arr.splice(i,1)[0];
            if(arr.length == 0) perms.push(memo.concat(cur));
            permute(arr.slice(), memo.concat(cur));
            arr.splice(0,0,cur);
        }
    
      }
  permute(input);
  return perms;
}
  var permutations = permutator(String(num).split(''));
  sortedPerms = permutations.map(function(elem) {
    return Number(elem.join(''));
  }).sort(function(a,b){
    return a-b;
  });
  
  
  
  var filt =  sortedPerms.filter(function(elem){
    return elem > num;
  });
  return filt[0] || -1;
         
}

console.log(PermutationStep(11121));

/****************************
Another Perm Step
****************************/
function PermutationStep(num) {
    var str = num.toFixed(),
        arra = str.split(''),
        perms = [],
        len = arra.length,
        last = len - 1,
        store = arra.join('');
    for (var z = 0; z < 10000; z += 1) {
        arra = store.split('');
        var comb = [];
        for (var i = 0; i < len; i += 1) {
            var pos = Math.floor(Math.random()*arra.length);
            var m = arra.splice(pos, 1);
            comb.push(m);
            if (comb.length === len) {
                var number = parseInt(comb.join(''));
                if (perms.indexOf(number) < 0) {
                    perms.push(number);
                }
            }
        }
    }

    perms.sort(function (a,b) {return a-b;});
    var index = perms.indexOf(num) + 1;
    if (num === perms[perms.length - 1]) {
        return - 1;
    }
    return perms[index];
}
 
 /****************************
Recursive Fib Algorithm
****************************/  
function genFib(target) { 
  var count = 1;
  function getNext(nth,step,curr) {
    if(nth === count) return curr;
    curr = curr + step;
    step = curr-step;
    count = count + 1;
    return getNext(nth,step,curr);
    
  
  }

 return getNext(target,1,0);
         
}
   
/****************************
Most Free Time
****************************/ 
   function convTimes(time) {
  var hr = time.slice(0,2); //lil bit of ugly hardcoding here
  var min = time.slice(3,5);
  var partDay = time.slice(5);
  if(partDay == 'PM' && hr !='12') hr = Number(hr) + 12;
  hr = +hr, min = +min;
  return [hr*60+min];
}

function MostFreeTime(str) {
  var mapped = str.map(function(event){
    return event.split('-');
  });
  

  var convertedTimes = mapped.map(function(timeRange){
    return timeRange.map(function(time) {
      return convTimes(time);
    });
  });

  var sortedTimes = convertedTimes.sort(function(a,b) {
    return a[0] - b[0];
  });

  var freeTimeIntervals = [];
  
  for(var i=1, l=sortedTimes.length; i<l; ++i) {
    freeTimeIntervals.push(sortedTimes[i][0]-sortedTimes[i-1][1]);
  }
  var convTime,
       maxTime = Math.max.apply(null,freeTimeIntervals);
  var mins = maxTime % 60,
      hrs  = maxTime / 60;
  if(mins <10) mins = "" + '0' + mins;
  if(hrs  <10) mins = "" + '0' + hrs;
  convTime =  hrs + ':' + mins;
  return convTime;
}

/****************************
Bracket/Paren Matcher
****************************/ 
function MultipleBrackets(str) { 

   var paren = [],
       numParen = 0,
       p  = '(',
       cp = ')',
       brack = [],
       b  = '[',
       cb = ']',
       numBrack = 0;
      strArr = str.split('');
  
  
  for(var i=0; i<strArr.length; ++i) {
    if(str.charAt(i) == p) {paren.push(p); numParen++;}
    if(str.charAt(i) == b) {brack.push(b); numBrack++;}
    
    if(str.charAt(i) == cp) {
      if(paren.pop() === undefined) return 0;
    }
    if(str.charAt(i) == cb) {
      if(brack.pop() === undefined) return 0;
  }
  
 } 
  return paren.length > 0 || brack.length > 0 ? 0 : "1 "  + (numParen + numBrack);
         
}

console.log(MultipleBrackets("()code[rb]yte() yes()[ss][[" ));
  


/****************************
Overlapping Rectangles
****************************/   
function Point(x,y) {
  this.x = x;
    this.y = y;
}

function Rectangle(pointArr) {
  var convPoints = pointArr.map(convToPoints);
    this.tl = convPoints[3];
    this.tr = convPoints[1];
    this.br = convPoints[2];
    this.bl = convPoints[0];
    this.horizSide = this.br.x-this.bl.x;
    this.vertSide = this.tl.y - this.bl.y;
    this.area = this.horizSide * this.vertSide;
    
}

function convToPoints(strPoint) {
  if(strPoint.indexOf('-') <0) {
    return new Point(Number(strPoint.slice(1,2)),Number(strPoint.slice(3,4)));
  }
  else if(strPoint.indexOf('-') > 2) {
    return new Point(Number(strPoint.slice(1,2)),Number(strPoint.slice(3,5)));
  }
  else {
      return new Point(Number(strPoint.slice(1,3)),Number(strPoint.slice(3,4)));
 }
    
}

function checkOverlap(rectOne,rectTwo) {
  var rectOneRangeX = [],
        rectOneRangeY = [];
  for(var i=rectOne.bl.x; i<=rectOne.br.x; i++) {
    rectOneRangeX.push(i);
  }
  for(var i=rectOne.bl.y; i<=rectOne.tl.y; i++) {
    rectOneRangeY.push(i);
  }
  
  var overlapX = 0;
  var overLapY = 0;
  console.log(rectOne,rectOneRangeX,rectOneRangeY);
  
return 0;
  
}

function Point(x,y) {
  this.x = x;
    this.y = y;
}

function Rectangle(pointArr) {
  var convPoints = pointArr.map(convToPoints),
        temp;
  this.x = [];
    this.y = [];
    var rect = this;
  convPoints.forEach(function(point) {
    rect.x.push(point.x);
    rect.y.push(point.y);
  });
  this.x.sort(function(a,b){return a-b;});
  this.y.sort(function(a,b){return a-b;});
  this.horiz = this.x[2] - this.x[0];
  this.vert = this.y[2] - this.y[0];
  this.area = this.horiz*this.vert;
}

function convToPoints(strPoint) {
    return new Point(Number(strPoint.slice(1,2)),Number(strPoint.slice(3,4)));
 }

function checkOverlap(rectOne,rectTwo) {
  var rectOneRangeX = [],
        rectOneRangeY = [];
  
  var xMax = Math.max.apply(null,rectOne.x.concat(rectTwo.x));
  var xMin = Math.min.apply(null,rectOne.x.concat(rectTwo.x));
  var yMax = Math.max.apply(null,rectOne.y.concat(rectTwo.y));
  var yMin = Math.min.apply(null,rectOne.y.concat(rectTwo.y));

  var overlapX = 0;
  var overLapY = 0;
  
  
return 0;
  
}

function OverlappingRectangles(strArr) {
  var first = new Rectangle(strArr.slice(0,4));
    var second = new Rectangle(strArr.slice(4));
    var res = checkOverlap(first,second);
    return Math.floor(first.area/res);
}

console.log(OverlappingRectangles(["(0,0)","(5,0)","(0,2)","(5,2)","(2,1)","(5,1)","(2,1)","(5,1)"]));



/****************************
Min Coins-Well Done J 
****************************/  
function arrCopy(arr1) {
  var arr2 = [];
  arr1.forEach(function(elem) {
    arr2.push(elem);
  });
  return arr2;
}

function CoinDeterminer(target) {
    var coins = [11,9,7,5,1];
    var currNums = [],
        curr = target,
        sucess = [];


 
  coins.forEach(function(coin,index,coinArr) {
    currNums.length = 0;
    curr = target;
    
    for(var i=index; i<coinArr.length; i++) {
      if(curr - coinArr[i] >= 0) {
      currNums.push(coinArr[i]);
          curr = curr - coinArr[i];
          i = index-1;
      }
    }
    sucess.push(arrCopy(currNums));
  });
  var lengths = sucess.map(function(cont) {
    return cont.length;
  });
  return Math.min.apply(null,lengths);
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CoinDeterminer(readline());           


/****************************
Recursive Coin Determiner-Really well DOne J!
****************************/  

function minCoin(target,coins) {
    if(coins.length <1) return Infinity;
  
    var currNums = [],
        curr = target,
        sucess = [];
    
    for(var i=0; i<coins.length; i++) {
      if(curr - coins[i] >= 0) {
      currNums.push(coins[i]);
          curr = curr - coins[i];
          i = -1;
      }
    }
    var l = currNums.length,
        nextL = minCoin(target,coins.slice(1));
  
  return l < nextL ? l : nextL;
  
}

var coins = [11,9,7,5,1];
console.log(minCoin(100,coins));



