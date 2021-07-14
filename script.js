//· 1 ITEM CLICKED:
var shoppingList = document.querySelector('ol');
shoppingList.addEventListener('click', function changeStatus(ev) {

    //* TOTAL INCREASES/DECREASES
    var getLastChild = ev.target.lastElementChild;
    var getPriceItem = parseFloat(getLastChild.lastElementChild.innerHTML)
    var getTotal= document.getElementById('totalPriceNum').innerHTML
    var parseTotal = parseFloat(getTotal)
    var setTotal;

    if(ev.target.tagName === 'LI') {
        //* TOTAL INCREASES
        setTotal = parseTotal +getPriceItem;
        document.getElementById('totalPriceNum').innerHTML = Math.round((setTotal + Number.EPSILON) * 100) / 100 + ' EUR'
        //* BG COLOR CHANGES
        ev.target.classList.toggle('checked');
        //* ITEM STATUS ICON CHANGES
        ev.target.firstElementChild.innerHTML = '<i class="fas fa-check-circle"></i>';
        //* MOVE ITEM UNDER LIST
        setTimeout(function(){document.querySelector('ol').appendChild(ev.target)},500);

    if(ev.target.classList.contains('checked')==false){
        //* TOTAL DECREASES
        setTotal = parseTotal -getPriceItem;
        document.getElementById('totalPriceNum').innerHTML = Math.round((setTotal + Number.EPSILON) * 100) / 100 + ' EUR'
        //* ITEM STATUS ICON CHANGES
        ev.target.firstElementChild.innerHTML = '<i class="far fa-circle"></i>';
        //* MOVE ITEM UNDER LIST
        setTimeout(function(){document.querySelector('ol').prepend(ev.target)},500);

    //* RESET BUTTON DIS/APPEARS
    }if(setTotal == 0){
        document.getElementById('resetListButton').style.opacity='0';
    }if(setTotal !== 0){
        document.getElementById('resetListButton').style.opacity='1';
    } 
}     
});

//· 2 RESET LIST
var resetListButton = document.getElementById('resetListButton')
resetListButton.addEventListener('click', function resetList(ev) {
    var liS = document.querySelectorAll('li')
    var liSArr = Array.from(liS);
    for(var i = 0 ; i < liSArr.length; i++){
       liSArr[i].classList.remove('checked')
       liSArr[i].firstElementChild.innerHTML = '<i class="far fa-circle"></i>';
       document.getElementById('totalPriceNum').innerHTML = 0 + ' EUR'
       document.getElementById('resetListButton').style.opacity='0';
    }
});

//· 3 FILTERED LIST:
function filterShoppingList(){
    var input = document.getElementById('filterBar')
    var filter = input.value.toUpperCase();
    var ol = document.querySelector('ol');
    var li = ol.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        var id = li[i].id.toUpperCase();
        var starts = id.startsWith(filter);
        if(starts){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }
}

//· 4 CHANGES REMAIN WHEN RELOAD

localStorage.setItem("age",50);
localStorage.setItem("name","Domenic");

/*localStorage.removeItem("name");*/
console.log(localStorage.key(1))




