const acc_header = document.querySelectorAll('.accordion-header');

acc_header.forEach(item => {
    item.addEventListener('click', function(){
        acc_header.forEach(item => {
            
            if( item != this ){
                item.classList.remove('active');
                item.nextElementSibling.style.height = '0px';
            } 

        });

        item.classList.toggle('active');
        
        if(item.classList.contains('active')){
            item.nextElementSibling.style.height =  item.nextElementSibling.scrollHeight + 'px';
        }else{
            item.nextElementSibling.style.height = '0px';
        }

        
    });
});