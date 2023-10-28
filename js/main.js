let openn = document.getElementById('open');
let closee = document.getElementById('close');
let list=document.getElementById('bright-future')
openn.onclick = function () {
 
        openn.classList.add('hide')
    closee.classList.remove('hide')
  
   
}
closee.onclick = function () {
 
    this.classList.add('hide')
    openn.classList.remove('hide')

}
