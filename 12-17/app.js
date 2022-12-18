
// array1 = [3,5,6,7,8,14];
// var t
// function check(arg){
//     for(var i = 0; i<arg.length;i++){
//         if(i%2==0 && arg[i]%2==0 || i%2==1 && arg[i]%2==1){
//             t=true
//         }else  t=false
//     } 
//    return t
// }
// var res = check(array1);
// console.log(res)



// function niilber(arg){
//     var sum=0;
//     for(var i = 0; i < arg.length; i++){
//         sum+=i
//       }
//       return sum
// }
// var respons = niilber(array1);
// console.log(respons);
// var sum = 0
// var res = array1.forEach(function(element,index,array){
//     return sum+=index
// });

// var too = [10,20,10,40,50,60,70];
// var target = 50;
// function find(arg,arg1){
//     var t = ""
//     for(var i = 0 ; i<arg.length; i++){
//         if(arg[i]+arg[i+1]==arg1){
//             t+=i+" "+(i+1);
//         }
//     }
//     return t
// }
//  var respons = find(too,target);

//  console.log(respons)
// var arr = [2, 5, 9, 6]; 
// var target = 5;
// function Delete(arg1,arg2){
//     for(var i = 0; i<arg1.length;i++){
//         if(arg1[i]==arg2){
//          arg1.splice(i,1)
         
//         }
//     }
//     return arg1;
// }
// var respons = Delete(arr,target);
// console.log(respons);
// function Delete(arg1,arg2){
// var t = arg1.filter((el)=>{
//     return el != arg2
// })
// return t
// }
// var respons = Delete(arr,target);
// console.log(respons);

// function newarr(arg){
//     var t = arg.map((el,index)=>{
//         return el*index
//     })
//     return t
// }
// var respons = newarr(arr);
// console.log(respons);


var obj = {
   name:"bazraa",
   age:15 ,
   print:function(){
    console.log(this.name)
   }
}
var obj1 = {
    name:"amoi",
    age:15 
 }
 for(var x in obj1){
    console.log(obj1[x])
 }
 