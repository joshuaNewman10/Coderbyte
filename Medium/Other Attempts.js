//Medium Challenges

//1: Prime Number

function IsPrime(n) {
  //prime except 2 and 3 is of form 6k-1 and 6k_1
  //only looks at divisors of this form
  if(n ==2) return true; // determine if n is even
  if(n ==3) return true;
  if(n%2 === 0) return false;
  if(n%3 === 0) return false;

  var i = 5;
  var w = 2;
  while(i*i <= n) {
    if (n*i === 0) return false;
    i+= w;
    w = 6 -w ;
  }
  return true;
}

//1: Related to this: Sieve of Erasosthenes
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

//2: Run Length Encoding
function RunLength(str) {
  var curLen = 1;
  var cur = str[0];
  var res = '';

  for(var i=1; i<str.length; ++i) {
    if(str[curLen]==cur)
      curLen++;
    else {
      res += curLen + cur;
      cur = str[curLen];
      curLen = 1;
    }
  }
  return res;
}
console.log(RunLength("yesssssnomaybe"));


//4:Palindrome
function PalindromeTwo(str) { 
  var lets = str.match(/[a-z]/ig).join('').toLowerCase();
  function isPalin(string){
    if(string <= 1) return true;
    if(string[0] != string[string.length-1]) return false
    return isPalin(string.substr(1,string.length-2));
  }
  return isPalin(lets);
}



//5:Division: GCF
function Division(num1,num2) { 

  var gcd = function (a, b) {
    console.log(a,b);
    return b == 0 ? a : gcd(b, a % b);
  };
  
  // code goes here
  return gcd(num1, num2);
            
}
console.log(Division(9,42));




//8:Repeated Chars
function aux(str){
    str=str.toLowerCase();
    var arr={};
    var n = str.length;
    for(i=0; i < n; i++){
        var char=str.charAt(i);
        if (arr[char]) arr[char]++
        else arr[char]=1;
    }
    var max=0;
    for (var k in arr)
    {
      if (arr[k]>max) max=arr[k];
    }
  return max;
}

function LetterCount(str) {
  str=str.split(" ");
  var max=0, maxi=0;
  for (var i=0;i<str.length;i++)
  {
     var total=aux(str[i]);
    if (total>max)
    {
      max=total;
      maxi=i;
    }
  }
  if(max>1) return str[maxi];
  return -1
}

//10: Mode

function Mode(arr) { 

  // code goes here
     var index = 0;
var sum = 0;
var mode = 0;
  var mean;

var obj = {};
  for(var i=0;i<arr.length;i++){
    sum += arr[i];
  }
  mean = sum/arr.length;
  
  
  
for(var i=0;i<arr.length;i++){
 obj[arr[i]] = 0;
}
  console.log(obj);
for(var i=0;i<arr.length;i++){
    obj[arr[i]] +=1;
}
console.log(obj);  
for(a in obj){
    console.log(index,mode);

    if(obj[a]>index){ index = obj[a]; mode = a; }
}
  if(index==1){return -1;}else{return mode;} 
         
}


//console.log(Mode([1,2,3,4,5]));
console.log(Mode([1,2,2,2,3,4,1,20]));

//11: Consectuive
function consecutive(arr) { 

  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i], 10);
  }
  console.log(arr);
  arr.sort(function (a, b) { return a > b; });
  
  var c = 0;
  
  for (var i = 1; i < arr.length; i++) {
    c += arr[i] - arr[i - 1] - 1;
  }
  
  // code goes here
  return c; 
            
}


/****************************
Most Free Time
****************************/ 

function toMinutes(str) {
  var h = str.split(":")[0];
  h = (h == 12) ? 0 : h;
  var m = str.split(":")[1];
  var t = str.slice(-2);
  m = m.split("").splice(0, 2).join("");
  t = (t == "AM") ? 0 : 1;
  
  return (h * 60) + (m * 1) + (t * 720);
}

function format(num) {
  var h = Math.floor(num / 60);
  if (h < 10) h = "0" + h;
  
  var m = num % 60;
  if (m < 10) m = "0" + m;
  
  return h + ":" + m;
}

function MostFreeTime(strArr) { 
  var times = [];
  strArr.map(function(time){
    times.push(time.split("-")[0]); //clever because flattens it, makes easier to work with!
    times.push(time.split("-")[1]);
  });
  
  times = times.map(toMinutes).sort(function(a,b){return a-b});
  
  var gaps = [];
  for (var i = 1; i < times.length - 2; i += 2) {
    gaps.push(times[i+1] - times[i]);
  }
 
  return format(Math.max.apply(null, gaps)); 
         
}
   
/****************************
Bracket Matcher
****************************/ 
function MultipleBrackets(str) { 
  
  // code goes here  
  var possible = {"(": 0,")": 0,"[": 0,"]": 0};
  
  var t = 0;
  
  for (var i = 0; i < str.length; i++) {
    for (var bit in possible) {
      if (str[i] === bit) {
        if ((str[i] === ")" && (possible[")"] < possible["("])) || (str[i] === "]" && (possible["]"] < possible["["])) || (str[i] === "(") || (str[i] === "[")) {
          possible[bit]++;
        } else {
          return 0;
        }
      }
    }
  }
  
  t = possible["("] + possible["["];
  
  if (t === 0) {
    return 1;
  } else {
    return 1 + " " + t;
  }
}

/****************************
Nicer Version of My One...Works because can't have brackets spanning other closing bracket! Clever!
****************************/ 
function MultipleBrackets(str) { 
  var p=[];
  var cont=0;
  for (var i=0,n=str.length;i<n;i++)
  {
    switch(str[i])
    {
      case "(":
      case "[":
        p.push(str[i]);
        cont++;
        break;
      case ")":
        if (p.pop()!="(") return 0;
        break;
      case "]":
        if (p.pop()!="[") return 0;
        break; 
    }
  }
  
  return (p.length==0?1+" "+cont:0);      
}


function OverlappingRectangles(strArr) {
  var c = strArr[0].match(/[-\d]+/g);
  var r1x1 = Math.min(c[0],c[2],c[4],c[6]);
  var r1x2 = Math.max(c[0],c[2],c[4],c[6]);
  var r1y1 = Math.min(c[1],c[3],c[5],c[7]);
  var r1y2 = Math.max(c[1],c[3],c[5],c[7]);
  
  var r2x1 = Math.min(c[8],c[10],c[12],c[14]);
  var r2x2 = Math.max(c[8],c[10],c[12],c[14]);
  var r2y1 = Math.min(c[9],c[11],c[13],c[15]);
  var r2y2 = Math.max(c[9],c[11],c[13],c[15]);
  
  var ox = Math.max(0, Math.min(r1x2,r2x2) - Math.max(r1x1,r2x1))
  var oy = Math.max(0, Math.min(r1y2,r2y2) - Math.max(r1y1,r2y1))
  
  var xd = (r1x2 - r1x1)
  var yd = (r1y2 - r1y1);
  var fitx = (ox == 0) ? 0 : Math.floor(xd / ox);
  var fity = (oy == 0) ? 0 : Math.floor(yd / oy);
  
  return fitx * fity;     
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
OverlappingRectangles(readline());           



function OverlappingRectangles(strArr) { 

  // code goes here  
  

var str =   strArr.join('');
var recX = [],rec1X = [],rec1Y = [],recY = [],rec2X = [],rec2Y = [];

var intersect1 = false;
var intersect2 = false;
var match = str.match(/-?[0-9]+/g);

for(var i=0;i<match.length;i++){
    if(i%2 == 0){ recX.push(match[i]);}
    else{ recY.push(match[i]);}
}

rec1X = recX.slice(0,recX.length/2).sort(function(a,b){return a-b;});
rec2X = recX.slice(recX.length/2).sort(function(a,b){return a-b;});
rec1Y = recY.slice(0,recY.length/2).sort(function(a,b){return a-b;});
rec2Y = recY.slice(recY.length/2).sort(function(a,b){return a-b;});



if(Number(rec1X[3])>Number(rec2X[0])){ intersect1 = true; var lenX =Math.abs(Number(rec1X[3]))-Math.abs(Number(rec2X[0])); }
else if(rec1X.join('') === rec2X.join(''))
{ intersect1 = true; var lenX = Math.abs(Number(rec2X[3]))- Math.abs(Number(rec2X[0])); }
else{ intersect1=false;}


if(Number(rec1Y[3])>Number(rec2Y[0])){ intersect2 = true; var lenY =Math.abs(Number(rec1Y[3]))-Math.abs(Number(rec2Y[0])); }
else if(rec1Y.join('') === rec2Y.join(''))
{ intersect2 = true; var lenY = Math.abs(Number(rec2Y[3]))- Math.abs(Number(rec2Y[0])); }
else{ intersect2 = false;}

var rec1lenX = Number(rec1X[3])-Number(rec1X[0]); 
var rec1lenY = Number(rec1Y[3])-Number(rec1Y[0]);

if(intersect1&&intersect2){
var result = Math.floor(rec1lenX/lenX)*Math.floor(rec1lenY/lenY);
    if(Math.abs(result) === Infinity){  return 0;}
    else{return Math.abs(result);}
}else{return 0;}

}
                            
                            
                            
             

