//· 1 ITEM CLICKED:
//* 1.1 CHANGE BG COLOR & 1.2 TIC ICON

var shoppingList = document.querySelector('ol');
shoppingList.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');

    var checked = ev.target.firstElementChild.innerHTML = '<i class="fas fa-check-circle"></i>';
    checked
        if(ev.target.classList.contains('checked')==false){
            var unChecked = ev.target.firstElementChild.innerHTML = '<i class="far fa-circle"></i>';
            unChecked
        
        }      
    }
});


//* 1.3 UNDER LIST
//* 1.4 TOTAL INCREASES

//* 1.5 RESET BUTTON APPEARS

//· 2 FILTERED LIST:

//· 3 CHANGES REMAIN WHEN RELOAD (SESSION STORAGE)
