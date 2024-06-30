const notesContainer=document.querySelector('.notesContainer');
const btn=document.querySelector('.btn');

btn.addEventListener('click',(e)=>{
    let inputBox=document.createElement('p');
    let img=document.createElement('img');
    img.src="delete.jpeg";
    inputBox.appendChild(img);
    inputBox.className='inputBox';
    inputBox.setAttribute('contenteditable','true')
    notesContainer.appendChild(inputBox);
    saveData();
})

notesContainer.addEventListener('click',(e)=>{
    if (e.target.tagName==='IMG') {
        e.target.parentElement.remove();
        saveData();
    }
    else if (e.target.tagName==='P') {
        const notes=document.querySelectorAll('.inputBox')
        notes.forEach(nt=>{
            nt.onkeyup=function() {
                saveData();
            }
        })
    }
},false)

function saveData() {
    localStorage.setItem('notess',notesContainer.innerHTML);
}

function showtask() {
    notesContainer.innerHTML=localStorage.getItem('notess');
}
showtask();

document.addEventListener('keydown',(e)=>{
    if (e.key==='Enter') {
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})