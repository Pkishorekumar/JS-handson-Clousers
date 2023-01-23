//   function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// console.log(counter()); //1
// console.log(counter()); //2
// console.log(counter()); //3
// console.log(counter()); //4

// let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // 1
//   }
//   console.log(count); // 0
// })();

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); 
//     }, 1000);
//   }
// // 3
// // 3
// // 3

//   let a=12;
//   (function (){
//     console.log(a);
    
//   })();

// var  gl ="xyz";

// (function outerFunc(outerAvg){
//     var outerVar = 'a';

//     (function innerFunc(innerAvg){
//         var innerVar = 'b';

//         console.log(
//             "outerAvg = " + outerAvg + "\n"+ 
//             "outerAvg = " + innerAvg + "\n"+
//             "outerVar = " + outerVar + "\n"+
//             "outerVar = " + innerVar + "\n"+
//             "gl = + " + gl
//         );
//     })(456);
// })(123);



// var a = 12;
// (function () {
//   console.log(a); //12
// })();

// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     console.log(a); //12
//   };
// })();
// x();


// function area(length) {
//     return function(breadth) {
//     return length * breadth;
//     }
//     }

//     const area1 = area(5);
//     console.log(area1(5)); // Output: 25

//  function outerFunc() {
//     let sum = 1;
//     return function innerFunction() {
//     sum++;
//     return sum;
//     }
//     }

//     const MyFunc = outerFunc();
//     console.log(MyFunc()); // Output: 2
//     console.log(MyFunc()); // Output: 3
//     console.log(MyFunc()); // Output: 4
//     console.log(MyFunc()); // Output: 5