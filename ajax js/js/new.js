document.getElementById('btn1').addEventListener('click',try1)
document.getElementById('warning').addEventListener('click',try2)
document.getElementById('secondary').addEventListener('click',try3)


function try1(){
    console.log('clicked')
    xhr=new XMLHttpRequest();
    xhr.open('GET','simple.txt',true)
    xhr.onload=function(){

        if(this.status==200){
            console.log(xhr.responseText)
            document.getElementById('one').innerHTML=this.responseText;



        }
        if (this.status==404){
            console.log('file not found')
            document.getElementById('one').innerHTML='not found'

        }

    }
xhr.error=function()
{
    console.log("error")
}
xhr.send()
}

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"


function try2(){
    user= new XMLHttpRequest();
    user.open('GET','users.json',true)
    user.onload=function(){
        if (this.status=200) {
         var u=JSON.parse(this.responseText)
         console.log(u)
         outptut='<h1></h1>'
         u.forEach(function(q){
            outptut+=`
           <li>${q.id}</li>
           <li>${q.name}</li>
           <li>${q.email}</li>





            `;
              if (q.id==1) {

            console.log('hii',q.name)
        }
         }

         )

         document.getElementById('one').innerHTML=outptut;
    }

    }
    user.send()
}

function try3(){
    console.log('ii')

var x=new XMLHttpRequest()
x.open('GET','https://api.github.com/users',true)

x.onload=function(){
    if (this.status=200) {
        w=JSON.parse(this.responseText)
        output=''
        w.forEach(function(i){
        output+=
              '<div class="row">'+
              '<div class="col-lg-4">'+
              '<div class="user ">' +
              '<img src="'+i.avatar_url+'" width="70" height="70">' +
              '<ul>' +
              '<li>ID: '+i.id+'</li>' +
              '<li>Login: '+i.login+'</li>' +
              '</ul>' +
              '</div>'+
              '</div>'+
              '</div>'

              ;

        })

         document.getElementById('one').innerHTML=output;
    }
}

x.send()

}
