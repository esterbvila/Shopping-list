//1 WHEN ITEM CLICKED:
var shoppingList = document.querySelector('ol');
shoppingList.addEventListener('click', function changeStatus(ev) {
    if(ev.target.tagName === 'LI') {
        function changeTotalOfList(symbol){
            var getLastChild = ev.target.lastElementChild;
            var getPriceItem = parseFloat(getLastChild.lastElementChild.innerHTML)
            var getTotal= document.getElementById('totalPriceNum').innerHTML
            var parseTotal = parseFloat(getTotal)
            if(symbol == '+'){
                var setTotal = parseTotal + getPriceItem
            }if(symbol == '-'){
                var setTotal = parseTotal - getPriceItem - getPriceItem
            }
            document.getElementById('totalPriceNum').innerHTML = Math.round((setTotal + Number.EPSILON) * 100) / 100 + ' EUR'
            if(setTotal == 0){
                document.getElementById('resetListButton').style.opacity='0';
            }if(setTotal !== 0){
                document.getElementById('resetListButton').style.opacity='1';
            }
        }
        changeTotalOfList('+')
        ev.target.classList.toggle('checked');
        ev.target.firstElementChild.innerHTML = '<i class="fas fa-check-circle"></i>';
        setTimeout(function(){document.querySelector('ol').appendChild(ev.target)},500);
        const key = ev.target.id
        const value = ev.target.classList.value
        localStorage.setItem(key,value)
        if(ev.target.classList.contains('checked') == false){
            changeTotalOfList('-')
            ev.target.firstElementChild.innerHTML = '<i class="far fa-circle"></i>';
            setTimeout(function(){document.querySelector('ol').prepend(ev.target)},500);
        }
    }
});

//2 RESET LIST
var resetListButton = document.getElementById('resetListButton')
resetListButton.addEventListener('click', function resetList() {
    var liS = document.querySelectorAll('li')
    var liSArr = Array.from(liS);
    for(var i = 0 ; i < liSArr.length; i++){
       liSArr[i].classList.remove('checked')
       liSArr[i].firstElementChild.innerHTML = '<i class="far fa-circle"></i>';
       document.getElementById('totalPriceNum').innerHTML = 0 + ' EUR'
       document.getElementById('resetListButton').style.opacity='0';
    }
});

//3 FILTER LIST:
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

//4 CHANGES REMAIN WHEN RELOAD
if ("DOMContentLoaded") { 
    var bread = localStorage.getItem('bread')
    var milk = localStorage.getItem('milk')
    var peaches = localStorage.getItem('peaches')
    var apples = localStorage.getItem('apples')
    if(bread == 'checked'){
        checkItem('bread');
        increaseTotalOfList('bread');
    }if(milk == 'checked'){
        checkItem('milk');
        increaseTotalOfList('milk');
    }if(peaches == 'checked'){
        checkItem('peaches');
        increaseTotalOfList('peaches');
    }if(apples == 'checked'){
        checkItem('apples');
        increaseTotalOfList('apples');
    }
}
function checkItem(item){
    document.getElementById(item).classList.toggle('checked');
    document.getElementById(item).firstElementChild.innerHTML = '<i class="fas fa-check-circle"></i>';
    setTimeout(function(){document.querySelector('ol').appendChild(document.getElementById(item))},500);
}
function increaseTotalOfList(item){
    var getLastChild = document.getElementById(item).lastElementChild;
    var getPriceItem = parseFloat(getLastChild.lastElementChild.innerHTML)
    var getTotal= document.getElementById('totalPriceNum').innerHTML
    var parseTotal = parseFloat(getTotal)
    var setTotal = parseTotal +getPriceItem;
    document.getElementById('totalPriceNum').innerHTML = Math.round((setTotal + Number.EPSILON) * 100) / 100 + ' EUR'
        if(setTotal == 0){
            document.getElementById('resetListButton').style.opacity='0';
        }
        if(setTotal !== 0){
            document.getElementById('resetListButton').style.opacity='1';
        }
}