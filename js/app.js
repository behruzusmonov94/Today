const addList = document.getElementById('add-list');
const asideList = document.getElementById('aside-list');



// save list data
addList.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = addList.name.value;

    db.collection("worklist").add({
        listName: input
    })

    addList.name.value = '';
})



//get real time list data



function renderList(doc) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    let set = document.createElement('button');
    li.setAttribute('data-id', doc.id);
    a.setAttribute('href', '#');
    a.innerText = doc.data().listName;
    set.textContent = '=';
    


    let menu = document.createElement('div');
    let deleteItem = document.createElement('div');
    let renameItem = document.createElement('div');
    menu.setAttribute('class', 'dropdown-menu');
    menu.style.display = 'none';
    deleteItem.textContent = 'Delete';
    renameItem.textContent = 'Rename';

    menu.appendChild(deleteItem);
    menu.appendChild(renameItem);
    li.appendChild(menu);


    li.appendChild(a);
    li.appendChild(set);
    asideList.appendChild(li);
    

    set.addEventListener('click', (e) => {
        let show = menu.style.display;
        if (show == 'none') {
            menu.style.display = 'inline';
        } else{
            menu.style.display = 'none';
        }

    })
    deleteItem.addEventListener('click', (e)=>{
        e.stopPropagation();
        const id = e.target.parentElement.parentElement.getAttribute('data-id');
        db.collection('worklist').doc(id).delete();
        menu.style.display = 'none';

    })    

}


// db.collection('worklist').onSnapshot(snapshot =>{
//     let changes = snapshot.docChanges();
//     changes.forEach(change => {
//         renderList(change.doc);
//     })
// })

db.collection("worklist")
    .onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
            if (change.type === "added") {
                renderList(change.doc);
            }
            if (change.type === "modified") {

            }
            if (change.type === "removed") {
                let id = document.querySelector(`[data-id=${change.doc.id}]`);
                asideList.removeChild(id);
            }
        });
    });



//set button