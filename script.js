//· 1 ITEM CLICKED:
var shoppingList = document.querySelector('ol');

shoppingList.addEventListener('click', function changeStatus(ev) {
  if (ev.target.tagName === 'LI') {

    //* 1.1 BG COLOR CHANGES
    ev.target.classList.toggle('checked');

    //* 1.2 ITEM STATUS ICON CHANGES
    var checked = ev.target.firstElementChild.innerHTML = '<i class="fas fa-check-circle"></i>';
    checked

    //* 1.3 MOVE ITEM UNDER LIST
    setTimeout(function(){document.querySelector('ol').appendChild(ev.target)},1000);

    //* 1.4 TOTAL INCREASES
    var getLastChild = ev.target.lastElementChild;

    var getGrandChild = getLastChild.lastElementChild.innerHTML

    var price = parseFloat(getGrandChild)

    var totalSenseEur = parseFloat(document.getElementById('totalPriceNum').innerHTML)

    var total = totalSenseEur +price;

    console.log(total)

    document.getElementById('totalPriceNum').innerHTML = Math.round((total + Number.EPSILON) * 100) / 100 + ' EUR'


        if(ev.target.classList.contains('checked')==false){
            var unChecked = ev.target.firstElementChild.innerHTML = '<i class="far fa-circle"></i>';
            unChecked
            setTimeout(function(){document.querySelector('ol').prepend(ev.target)},1000);

            //* 1.4 TOTAL DECREASES
            var getLastChild = ev.target.lastElementChild;

            var getGrandChild = getLastChild.lastElementChild.innerHTML

            var price = parseFloat(getGrandChild)

            var totalSenseEur = parseFloat(document.getElementById('totalPriceNum').innerHTML)

            var total = totalSenseEur -price - price;

            console.log(total)

            document.getElementById('totalPriceNum').innerHTML = Math.round((total + Number.EPSILON) * 100) / 100 + ' EUR'

        }   
     }  
  
});

/*var children = document.querySelector('ol').children;
console.log(children);
for(var i = 0; i<children.length;i++){
    console.log(children[i])

    document.getElementById(`${children[i].id}`).addEventListener('click', function(ev) {
        console.log('hola')
        ev.target.parentElement.classList.toggle('checked');
        console.log('adeu')
}*/


//* 1.4 TOTAL INCREASES



//* 1.5 RESET BUTTON APPEARS

//· 2 FILTERED LIST:

//· 3 CHANGES REMAIN WHEN RELOAD (SESSION STORAGE)
