const btn = document.getElementById('btn');
const ul = document.getElementById('ul');
const input = document.getElementById('input');
const text = document.getElementById('text');

let date = new Date()
let numberDate = date.toLocaleString('en-us', { day: 'numeric', month: 'short', year: 'numeric' });


btn.addEventListener('click', e => {
   let no = text.value;
   let two = input.value;
   if(confirm('Are Sure You want to add Your Note')){
       if(text.value === "" || input.value === ""){
    text.value = 'please write you note we got your back.';
    input.value = 'What\'s Your Title';

       }else{
     let li = document.createElement('li');
     let h2 = document.createElement('p');
     let p = document.createElement('p');
//cancle
let cancel = document.createElement('button');
cancel.textContent = 'X';
cancel.classList.add('can');
cancel.onclick = (e) => {
   if(confirm('Are Sure You want Remove This Note')){
   var li = e.target.parentElement;
   ul.removeChild(li);
      text.value = "";
      input.value = "";
   }
}
// The End for it

     p.textContent = numberDate;
     p.classList.add('som')
     h2.textContent = two;
     li.appendChild(cancel);
     li.appendChild(p);
     li.appendChild(h2);
     h2.addEventListener('click', myFunction);
     function myFunction(){
      let p = document.createElement('p');
      let h2 = document.createElement('h4');

      h2.textContent = two;
     input.value = h2.innerText;
     p.textContent = no;
      text.value = p.innerText;
   }
     ul.appendChild(li);
     text.value = "";
      input.value = "";
       }
   }
 
});
