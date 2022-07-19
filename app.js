(function() {
    let input  = document.querySelector('.input');
    let buttons  = document.querySelectorAll('.btn');
    let clear  = document.querySelector('.btn-clear');
    let equal  = document.querySelector('.btn-equal');
    let del = document.querySelector('.btn-delete');


    buttons.forEach(function(button){
        button.addEventListener('click', function type(e){
            let value = e.target.innerText;
            if(input.value!='Please enter') {
                input.value += value
            }else {
                input.value='';
                type(e)
            }
        })
    });
    equal.addEventListener('click', function(e){
        if(input.value === '') {
            input.value = "Please enter";
        }else {
            let answer = eval(input.value);
            input.value  = answer;

        }
    })
    clear.addEventListener('click', function(e){
        input.value = '';

    })
     del.addEventListener('click', function(e){
        let val = input.value
        input.value = val.slice(0,val.length-1);

    })
})();
