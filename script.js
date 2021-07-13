//· 1 ITEM CLICKED:
var shoppingList = document.querySelector('ol');

shoppingList.addEventListener('click', function changeStatus(ev) {
    if(ev.target.tagName === 'LI') {
        //* 1.1 BG COLOR CHANGES
        ev.target.classList.toggle('checked');

        //* 1.2 ITEM STATUS ICON CHANGES
        var checked = ev.target.firstElementChild.innerHTML = '<i class="fas fa-check-circle"></i>';
        checked

        //* 1.3 MOVE ITEM UNDER LIST
        setTimeout(function(){document.querySelector('ol').appendChild(ev.target)},500);

        //* 1.4 TOTAL INCREASES
        var getLastChild = ev.target.lastElementChild;

        var getLastGrandChild = getLastChild.lastElementChild.innerHTML

        var getNumOfLGC = parseFloat(getLastGrandChild)

        var getTotalOfList = parseFloat(document.getElementById('totalPriceNum').innerHTML)

        var updateTotalOfList = getTotalOfList +getNumOfLGC;

        console.log(updateTotalOfList)

        document.getElementById('totalPriceNum').innerHTML = Math.round((updateTotalOfList + Number.EPSILON) * 100) / 100 + ' EUR'

    if(ev.target.classList.contains('checked')==false){
        var unChecked = ev.target.firstElementChild.innerHTML = '<i class="far fa-circle"></i>';
        unChecked

        setTimeout(function(){document.querySelector('ol').prepend(ev.target)},500);

        //* 1.4 TOTAL DECREASE
        var getLastChild = ev.target.lastElementChild;

        var getLastGrandChild = getLastChild.lastElementChild.innerHTML

        var getNumOfLGC = parseFloat(getLastGrandChild)

        var getTotalOfList = parseFloat(document.getElementById('totalPriceNum').innerHTML)

        var updateTotalOfList = getTotalOfList -getNumOfLGC -getNumOfLGC;

        console.log(updateTotalOfList)

        document.getElementById('totalPriceNum').innerHTML = Math.round((updateTotalOfList + Number.EPSILON) * 100) / 100 + ' EUR'

    //* 1.5 RESET BUTTON DIS/APPEARS
    }if(updateTotalOfList == 0){
        document.getElementById('resetListButton').style.opacity='0';
    }if(updateTotalOfList !== 0){
        document.getElementById('resetListButton').style.opacity='1';
    } 
}

     
});

//· 2 RESET LIST
var resetListButton = document.getElementById('resetListButton');

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
    var input, filter, ol, li, i, id, starts;
    input = document.getElementById('filterBar')
    filter = input.value.toUpperCase();
    ol = document.querySelector('ol');
    li = ol.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        id = li[i].id.toUpperCase();
        starts = id.startsWith(filter);
        if(starts){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }
}

//· 4 CHANGES REMAIN WHEN RELOAD 
  