// let s = "anagram" ;
// let t = "nagaram" ;

// let s = "rat";
// let t = "car";

// let sum1 = 0;
// let sum2 = 0;
// // console.log(s);
// for (i =0; i<s.length ; i++){
//     sum1 += s.charCodeAt(i);
// }

// for (j =0; j<s.length ; j++){
//     sum2 += t.charCodeAt(j);
// }
// if (sum1 === sum2){
//     console.log("true");
// } else {
// console.log("false");

// }

// var isAnagram = function (s, t) {
//     var sum1 = 0;
//     var sum2 = 0;

//     // function conde() {
//     //  //include

//     // //  s.includes (t[0])? return true : return false;
//     //  if (s.includes (t[0])){
//     //      return true;
//     //  } else {
//     //         return false;
//     //     }
//     //  // for (i = 0; i < s.length; i++) {
//     //     //         if (s[i] !== t[0]) {
//     //     //             return false;
//     //     //         }else{
//     //     //             return true;
//     //     //         }
//     //     //     }
//     // }

//   for (i = 0; i < s.length; i++) {
//     sum1 += s.charCodeAt(i);
//   }
//   for (j = 0; j < t.length; j++) {
//     sum2 += t.charCodeAt(j);
//   }

// //   console.log(sum1);
// //     console.log(sum2);
//   if (sum1 == sum2  ) {
//     // return true;
//     if (s.includes (t[0])){
//         return true;
//     } else {
//            return false;
//        }

//   } else {
//     return false;
//   }

// };

// function isAnagram3 (s, t) {
//   for (i = 0; i < s.length; i++) {
//     if (t.includes (s[i])) {
//       return true;
//     }else{
//       return false;
//     }
//   }

// }

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat","car" ));
// console.log(isAnagram("a","a" ));
// console.log(isAnagram("a","ab" ));
// console.log(isAnagram("ac","bb" ));
// console.log(isAnagram("anagtam", "nbgbram"));

// console.log(isAnagram3("anagram", "nagaram"));
// console.log(isAnagram3("rat","car" ));
// console.log(isAnagram3("a","a" ));
// console.log(isAnagram3("a","ab" ));
// console.log(isAnagram3("ac","bb" ));
// console.log(isAnagram3("anagtam", "nbgbram"));

// var isAnagram2 = function(s, t) {

//     var fc ={}
//     if(s.length != t.length) return false;

//     for(let val of s){
//         fc[val]?fc[val]+=1:fc[val]=1
//     }

//     for(let val of t){
//         if(!fc[val]) return false
//         fc[val]-=1
//     }
//     return true

// };
// console.log(isAnagram2("anagram", "nagaram"));

// let s = "anagram" ;
// let t = "nagaram" ;
// x= s.split(/(.)/).sort().join('');
// y= t.split(/(.)/).sort().join('');
// console.log(x);
// console.log(y);

// if (x == y){
//     console.log("true");
// } else {
//     console.log("false");
// }

var isAnagram = function (s, t) {
  x = s.split(/(.)/).sort().join("");
  y = t.split(/(.)/).sort().join("");
  if (x == y) {
    return true;
    // console.log("true");
  } else {
    return false;
    // console.log("false");
  }
};
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("a", "a"));
console.log(isAnagram("a", "ab"));
console.log(isAnagram("ac", "bb"));
console.log(isAnagram("anagtam", "nbgbram"));
