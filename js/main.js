var addTask = document.getElementById('addTask');
var addHere = document.getElementById('addHere');

const addThis = `
<tr>
<td>
    <input type="text">
</td>
<td>
    <select>
        <option value="" selected></option>
        <option>Wedding</option>
        <Option>BM</Option>
    </select>
</td>
<td>
    <select name="" id="">
        <option value="" selected></option>
        <option value="">Robinson Studios</option>
        <option value="">Mendel</option>
        <option value="">Gordi studio</option>
        <option value="">Creative studio</option>
    </select>
</td>
<td>
    <select name="" id="">
        <option value="" selected></option>
        <option value="">Alisher</option>
        <option value="">Behruz</option>
        <option value="">Islom</option>
        <option value="">Ruslan</option>
    </select>
</td>
<td>
    <input type="date" class="endDate">
</td>
<td>
    <select name="" id="">
        <option value="" selected></option>
        <option value="">Done</option>
        <option value="">Working on it</option>
        <option value="">Missing files</option>
    </select>
</td>
<td>
    <select name="" id="">
        <option value="" selected></option>
        <option value="">Uploaded</option>
        <option value="">Not uploaded</option>
    </select>
</td>
<td><button class="chat-button"></button></td>
</tr>`

function addTaskFn(){
    document.querySelector('table').innerHTML += addThis;
}

var addInBt = document.getElementById('addInnerList');


function addInListFn(){
    var inPut = document.querySelector('#addInput')
    inPut.addEventListener('submit', (e) => {
        e.preventDefault();
    })
    inPut.style.display = "inline-block";
    addInBt.style.display = "none";
    inPut.firstElementChild.focus();
}


var listValue = document.getElementById('listValue');


function addListIn(){
    var innerListAdd = `<a href="#">`+listValue.value+`</a>`;
    document.querySelector('#inList').innerHTML += innerListAdd;
    document.querySelector('#addInput').style.display = "none";
    addInBt.style.display = "inline-block";
    listValue.value = "";

}

var listVal = document.getElementById('listVal');

function addAsideList(){
    var asList = `<a href="#">`+listVal.value+`</a>`;
    

}