
// // // adding
// // function addTodo(item){

// // }
// // //delete
// // function deleteTodo(id){

// // }
// // //update
// // function updateTodo(id){

// // }


// //  var addData= function (demo){
// //    console.log(demo);
// // }
// // 

// //callback 
// // function demo(fun_demo){
// //     var value=20;
// //     fun_demo(value)
// // }
// // demo(function(value){
// //     console.log(value);
// // });

// //closer
// // function addition(num1){
// //    return function (num2){
// //        return num1+num2;
// //    }
// // }
// //var add=addition(10);
// //  add(20);
// //console.log(add(20));
// //  console.log(addition(10)(20));----currinhg





// function calculator(op) {
//     switch (op) {
//         case '+':

//             return function (num1, num2) {
//                 //  console.log(num1);
//                 return num1 + num2;

//             }
       

//         case '-':

//             return function (num1, num2) {
//                 return num2 - num1;
//             }


//         case '*':

//             return function (num1, num2) {
//                 return num1 * num2;
//             }

//         case '/':

//             return function (num1, num2) {
//                 return num1 / num2;
//             }

//             default:
//                 break;


//     }
    

// }

// console.log(calculator(10, 20, '+'));


// var arr=[1,2,3,4,5];
// var obj={}
//  for(i=0;i<=arr.length;i++){
//      obj[i]=arr[i]
//  }
//  console.log(obj);
// var arry=[1,2,3,4,5,6,7,8]
// function customeforeach(arry,foreach){
//     for(var i=0;i<arry.length;i++){
//         // foreach(arry[i],i,arry);
//         foreach(arry[i]*2);
//     }
// }

// customeforeach(arry,function(element,index,self){
//     console.log(element);
// })

// var arr=[1,5,8,9,10,81,91,101,85];
// arr.sort(function(num1,num2){
//     return num1 - num2;
// })
// console.log(arr);


// var obj=[{name:'abc', year:2018},
//         {name:'efg',year:2020},
//         {name:'pqr',year:2021},
//         {name:'wer' ,year:2018}
// ]
// obj.map((value)=>{
//    var x= value.year
//    console.log(x);
// })




var employeeDetails = [{
    name:"Ram",
    salary:2000,
    year: 2020
},
{
    name:"Shaym",
    salary:4000,
    year: 2018
},
{
    name:"Sheeta",
    salary:4000,
    year: 2019
},
{
    name:"Geeta",
    salary:6000,
    year: 2018
},
{
    name:"Jash",
    salary:7000,
    year: 2000
},
{
    name:"John",
    salary:20000,
    year: 2018
},
{
    name:"Jimy",
    salary:12800,
    year: 2016
},
];

// const result = employeeDetails.filter( value => value.year === 2018);


// result.map(mp=>{
//     var x=mp.year
//     var newsalary=100 
//     mp.salary= mp.salary+newsalary 
   
// })

// console.log(result);
// document.getElementById('demo').innerHTML+=result;
//step 1:
(function(){
   //step2:
   document.addEventListener("DOMContentLoaded",function(){
    var yearselect=document.getElementById('years');
   
    var yearArry=employeeDetails.map(value=> value.year);
    var uniqueyaear= yearArry.filter((Element,index,self)=>self.indexOf(Element)===index);
    populatDropdown(uniqueyaear);
    populateTabel(employeeDetails);

    //step7:
    yearselect.addEventListener('change',function(event){
        var selectedvalue=event.currentTarget.value;
        var filterData=employeeDetails.filter(value=> value.year== selectedvalue);
        populateTabel(filterData)
    })
   })
   //step6:
   function populatDropdown(data){
       var yearselectelement=document.getElementById('years');
       data.forEach(element => {
        return yearselectelement.innerHTML += optionTemplate(element);
       });
   }

   
 //step:5
   function populateTabel(data){
       
    var tabelbody=document.getElementById('tab');
    tabelbody.innerHTML="";
    data.forEach((element,index) => {
        var tabelData=element;
        tabelData["index"]=index+1;
        tabelbody.innerHTML +=populateTableData(tabelData);
    });
   }
 //step3:
   function optionTemplate(detail){
      var option= '<option value=" '+detail+' ">'+detail +'</option>';
      return option;
   }
//step4:
   function populateTableData(data){
    var tabelData = '<tr>'+
    '                <th scope="row">'+data.index+'</th>'+
    '                <td>'+data.salary+'</td>'+
    '                <td>'+data.year+'</td>'+
    '                <td>'+data.name+'</td>'+
    '             </tr>';
    return tabelData;     
   }
  

})();

