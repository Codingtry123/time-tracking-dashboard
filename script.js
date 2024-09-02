let day = document.getElementsByClassName('day')[0];
let week = document.getElementsByClassName('week')[0];
let month = document.getElementsByClassName('mon')[0];
let blist = document.querySelectorAll('.b2, .b3, .b4, .b5, .b6, .b7');
let barray = Array.from(blist);
function select(item, class1, class2, class3){
    item.classList.add(class1);
    item.classList.remove(class2);
    item.classList.remove(class3);

}
day.addEventListener('click', ()=>{
    day.classList.remove('hidden');
    week.classList.add('hidden');
    month.classList.add('hidden');
    blist.forEach(item=>{select(item, "da1", "we1", "mo1")});

})
week.addEventListener('click', ()=>{
    week.classList.remove('hidden');
    day.classList.add('hidden');
    month.classList.add('hidden');
    blist.forEach(item=>{select(item, "we1", "da1", "mo1")});
})
month.addEventListener('click', ()=>{
    month.classList.remove('hidden');
    day.classList.add('hidden');
    week.classList.add('hidden');
    blist.forEach(item=>{select(item, "mo1", "we1", "da1")});
})