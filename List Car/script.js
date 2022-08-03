var data=[];
var count=0;





function AddTask(){




    var taskValue=document.getElementById('task').value;

    var task={
        id:count,
        task:taskValue,
        statu:'brand',
      
 
    }
    if(taskValue == ''){
       alert("Lütfen Boş Bırakmayınız!")
    }

    function save (){
    
        //////////
        if(localStorage.getItem('data') == null){
            localStorage.setItem('data', '[]');
            localStorage.setItem('data2', '[]');
            localStorage.setItem('data3', '[]');
        
        }else if(data.statu='brand'){  
        
            var old_data = JSON.parse(localStorage.getItem('data'));
             old_data.push(task);
             localStorage.setItem('data', JSON.stringify(old_data));
     
        } else if(data.statu='completed'){
        
            var old_data = JSON.parse(localStorage.getItem('data2'));
            old_data.push(task);
            localStorage.setItem('data2', JSON.stringify(old_data));
        
        }

        
        /*else if(data.statu='completed'){
        
            var old_data = JSON.parse(localStorage.getItem('data2'));
            old_data.push(task);
            localStorage.setItem('data2', JSON.stringify(old_data));
        
        } else{
            var old_data = JSON.parse(localStorage.getItem('data3'));
            old_data.push(task);
            localStorage.setItem('data3', JSON.stringify(old_data));
            
        }return old_data;*/

       
    }
    


 

    data.push(task);
    document.getElementById('task').value=null;
    FillData();
    count++;
    save();
}


function FillData(){
    var tempHTML="";
    var tempHTMLCompleted="";
    var tempHTMLDelivered="";

    for(var i=0;i<data.length;i++){
        if(data[i].statu=='brand'){
            tempHTML+='<div class="input-group-1 mb-3">'+
            '<div class="input-group-prepend">'+
              '<div class="input-group-text">'+
                '<input class="todo_cb" type="checkbox" aria-label="Checkbox for following text input" onclick="ClickCheck('+data[i].id+')">'+
              '</div>'+
            '</div>'+
            '<p type="text" class="form-control" aria-label="Text input with checkbox">'+data[i].task+'</p>'+
            '<div class="input-group-append">'+
               // '<button class="btn btn-outline-primary" id="task-edit" type="button" onclick="ClickEdit('+data[i].id+');"><i class="fas fa-edit"></i></button>'+
                '<button class="btn btn-outline-danger" type="button" onclick="DeleteTask('+data[i].id+');"><i class="fas fa-trash-alt"></i></button>'+
              '</div>'+
        '</div>';
            }else if(data[i].statu=='completed'){
                tempHTMLCompleted+='<div class="input-group-1 mb-3">'+
                '<p type="text" class="form-control" aria-label="Text input with checkbox">'+data[i].task+'</p>'+
                '<div class="input-group-append">'+
                    '<button class="btn btn-outline-primary" type="button" onclick="UndoTask('+data[i].id+');"><i class="fas fa-undo"></i></button>'+
                    '<button class="btn btn-outline-okey" type="button" onclick="CheckTask('+data[i].id+');"><i class="fas fa-check" onclic></i></button>'+
                '</div>'+
            '</div>';
            }else{
                tempHTMLDelivered+='<div class="input-group-1 mb-3">'+
                '<p type="text" class="form-control" aria-label="Text input with checkbox">'+data[i].task+'</p>'+
                '<div class="input-group-append">'+
                    '<button class="btn btn-outline-primary" type="button" onclick="UndooTask('+data[i].id+');"><i class="fas fa-undo"></i></button>'+
                     '<button class="btn btn-outline-danger" type="button" onclick="DeleteTask('+data[i].id+');"><i class="fas fa-trash-alt"></i></button>'+
                '</div>'+
            '</div>';
            }    
                   
    }
    document.getElementById('brand').innerHTML=tempHTML;
    document.getElementById('completed').innerHTML=tempHTMLCompleted;
    document.getElementById('delivered').innerHTML=tempHTMLDelivered;
}



// Checkbox için 
function ClickCheck(id){
    var index=data.findIndex(x=>x.id==id);

    data[index].statu='completed';

    setTimeout(function(){
        FillData();
    },500);
}
//checkTask
function CheckTask(id){
    var index=data.findIndex(x=>x.id==id);

    data[index].statu='Delivered';

    setTimeout(function(){
        FillData();
    },300);
}

// Silme Fonksiyonu
function DeleteTask(id){
    var index = data.findIndex(x=>x.id==id);
    data.splice(index,1);

    FillData();
}

// Geri Alma Fonksiyonu
function UndoTask(id){
    var index=data.findIndex(x=>x.id==id);
    data[index].statu='brand';

    FillData();
}
function UndooTask(id){
    var index=data.findIndex(x=>x.id==id);
    data[index].statu='completed';

    FillData();
}

//Edit fonksiyonu

function ClickEdit(id) {

    document.getElementById('task-edit').value=data[id].task;
   
    

  
}

function edit(id){
    var index=data.findIndex(x=>x.id==id);
    data[index].task=document.getElementById('task-edit').value;

    findIndex();
}
