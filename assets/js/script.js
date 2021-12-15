seccionimgs = document.getElementsByClassName('transform-scale')
let switch_scale =true

for(let transforsacle of seccionimgs){
    transforsacle.addEventListener('click', () => {
   
        if(switch_scale){
            transforsacle.style.transform = "scale(2)"
            switch_scale=false
        }else{
            transforsacle.style.transform = "scale(1)"
            switch_scale=true
        }
        
      
    })
};

