var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
filter.addEventListener('keyup',func2)
form.addEventListener('submit',func);
itemList.addEventListener('click',func1)
function func(e){
  e.preventDefault();
  var input=document.getElementById('item').value;
  var li=document.createElement('li');
  li.className='list-group-item';
  li.appendChild(document.createTextNode(input));
  itemList.appendChild(li)
var button=document.createElement('button')
button.className='btn btn-danger btn-sm float-right delete'
button.appendChild(document.createTextNode('X'))
li.appendChild(button)
}
function func1(e){
if (e.target.classList.contains('delete')) {
  if(confirm('r u sure')){
    var li=e.target.parentElement
    itemList.removeChild(li)
  }
}
}

function func2(e){
  var text=e.target.value.toLowerCase()
  console.log(text)
  list=itemList.getElementsByTagName('li')
  Array.from(list).forEach(function(l){
    var name=l.firstChild.textContent;
    console.log(name)
      if(name.toLowerCase().indexOf(text) != -1){
      l.style.display = 'block';
    } else {
      l.style.display = 'none';
    }
  });
}
