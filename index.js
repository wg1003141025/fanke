window.onload = function(){
    let banna = document.getElementsByClassName('banner')[0];
    let img = document.querySelectorAll('.he>a>img');
    let dian = document.querySelectorAll('.dian')
    console.log(dian)
    let left = document.querySelector('.leftjian');
    let right = document.querySelector('.rightjian');
    console.log(banna,img,dian,left,right)
    let now = 0;
    let next = 0;
    let flag = true;
    for(let i = 1;i < img.length;i++){
        img[i].style.left = 1200+'px';
    }
    let t = setInterval(move,2000);
    function move(type){
        type = type || 'right';
        if(type == 'right'){
            next++;
            if(next == img.length){
                next = 0;
            }
            img[next].style.left = 1200+'px';
            animate(img[now],{left:-1200},function(){flag = true});
        }else if(type == 'left'){
            next--;
            if(next < 0){
                next = img.length-1;
            }
            img[next].style.left = -1200+'px';
            animate(img[now],{left:1200},function(){flag = true});
        }
        animate(img[next],{left:0},function(){flag = true});
        dian[next].style.background = 'red';
        dian[now].style.background = '#fff';
        now = next;

    }
    left.onclick = function(){
        if(flag == true){
            move('left')
            flag = false;
        }

    }
    right.onclick = function(){
        if(flag == true){
            move('right')
            flag = false;
        }
    }
    banna.onmouseover = function(){
        clearInterval(t)
    }
    banna.onmouseout = function(){
        t = setInterval(move,2000);
    }
    for(let j = 0;j < dian.length;j++){
        dian[j].aa = j;
        dian[j].onclick = function(){
            if(j > now){
                if(flag == true){
                    next = this.aa-1;
                    move('right')
                    flag = false;
                }
            }else if(j < now){
                if(flag == true){
                    next = this.aa+1;
                    move('left')
                    flag = false;
                }
            }
        }
    }
}
