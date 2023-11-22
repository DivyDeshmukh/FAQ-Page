let para = document.querySelectorAll('.para');
let button = document.querySelectorAll('button');
let flag = 0;

button.forEach ( (val, i) => {

    val.addEventListener ('mouseenter', () => {
      val.style.transform = 'rotate(90deg)';
      val.addEventListener ('mouseleave', () => {
        val.style.transform = 'rotate(0deg)';
      });  
    });
    
    val.addEventListener('click', () => {

        if (flag === 0) {
            para.forEach ( (value, index) => {
                if(index === i) {
                    para[index].style.height = 'auto';
                }else {
                    para[index].style.height = '0';
                }
            })
            flag = 1;
        }else{
            para[i].style.height = '0';
            flag = 0;
        }
    });
} );

