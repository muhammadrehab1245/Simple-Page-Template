let btn=document.querySelector('.hamburger');
let main=document.querySelector('.navmain');
let search=document.querySelector('.example');
let items=document.querySelector('.navnames');

let burger= ()=>{
    main.classList.toggle('navopen');
    items.classList.toggle('navitems');
    search.classList.toggle('navitems');
}