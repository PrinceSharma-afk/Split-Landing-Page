const splits = document.querySelectorAll('.split');
splits.forEach(split=>{
    split.addEventListener('mouseenter',()=>{
    splits.forEach(s => s.classList.remove('active')); 
    split.classList.add('active'); 
    });
});