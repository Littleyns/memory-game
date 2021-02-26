let carre = document.getElementsByClassName("carre");
let remaining = 2;
values={12:"10",1:"3",2:"2",3:"3",4:"4",5:"4",6:"2",7:"9",8:"8",9:"9",10:"8",11:"10"}
cases=[1,2,3,4,5,6,7,8,9,10,11,12]
tourne=[false,false,false,false,false,false,false,false,false,false,false,false]
let last = null;
canchoose=true;
cases.sort(function() { return 0.5 - Math.random() });
for(let i = 0 ; i <12;i++){
    carre[i].addEventListener('click',function(event){
        if(remaining!=0){
        tourner(i);
        remaining--;
        last = cases[i];
        }
        setTimeout(function(){ if(remaining == 0){
            if(values[cases[i]]==values[last] && last!=null){
                remaining=2;
                last=null;
            }else{
                retourner(cases.indexOf(last));
                retourner(i);
                remaining=2;
                last=null;
            }
        } }, 3000);
        
        
        
        console.log(values[cases[i]])
      });
}


let tourner = (num) =>{
    link = "images/"+cases[num]+".jpg"
carre[num].style.backgroundImage ="url("+link+")";

}
let retourner = (num) =>{
    link = "images/dos.png"
carre[num].style.backgroundImage ="url("+link+")";

}
console.log(cases)

