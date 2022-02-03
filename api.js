// var newapi = new XMLHttpRequest();
// newapi.open('GET','https://teknopointstaging.com/api/mock/users.json',true)
// newapi.onreadystatechange = function(){
//     if(this.readyState===4 && this.status===200 ){
//         var data = JSON.parse(this.response)
//     
//        var arryInfo = data.items;  
//         var table = document.getElementById('tab');
//         arryInfo.forEach(element => { table.innerHTML += getData(element); });

//         function getData(data){
//             var tabelData = '<tr>'+
//             '                <th scope="row">'+data.id+'</th>'+
//             '                <td>'+data.name+'</td>'+
//             '                <td>'+data.avatar+'</td>'+
//             '                <td>'+data.createdAt+'</td>'+
//             '             </tr>';
//             return tabelData;
//         }
//        }else{
//            this.status=404
//        }
    
// }
// newapi.send()

// function printdata(data){
//     console.log(data);
// }


var promise= new Promise(function(resolve,reject){
    var newapi = new XMLHttpRequest();
    newapi.open('GET','https://teknopointstaging.com/api/mock/users.json',true)
    newapi.onreadystatechange = function(){
        if(this.readyState===4 && this.status===200 ){
            var data = JSON.parse(this.response)
        
           var arryInfo = data.items;  
           
            var table = document.getElementById('tab');
            arryInfo.forEach(element => { table.innerHTML += getData(element); });
    
            function getData(data){
                var tabelData = '<tr>'+
                '                <th scope="row">'+data.id+'</th>'+
                '                <td>'+data.name+'</td>'+
                '                <td>'+data.avatar+'</td>'+
                '                <td>'+data.createdAt+'<button>n</button></td>'+
                '             </tr>';
                return tabelData;
            }
           }else{
               this.status=404
           }
        
    }
    newapi.send()
});
promise.then(function(data){
  console.log(data)
}).catch(function(error){
 console.log(error);
});


