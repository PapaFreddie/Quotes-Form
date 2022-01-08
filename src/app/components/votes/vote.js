let likebtn = document.querrySelector('#likebtn');
        let dislikebtn = document.querrySelector('#dislikebtn');
        let input0 = document.querrySelector('#input0');
        let input1 = document.querrySelector('#input1');
    
    
        likebtn.addEventLister('click', () =>{
            input0.value = parseInt(input0.value) + 1;
        })
        dislikebtn.addEventLister('click', () =>{
            input1.value = parseInt(input1.value) + 1;
        })