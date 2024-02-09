function maaki(e){
     document.getElementById('display').value += e
}
function eq(){
      a = document.getElementById('display')
      a.value = eval(a.value)
}
function clr(){
      document.getElementById('display').value = ''
}
function clr1(){
      var display1 = document.getElementById('display') 
      var currentText = display1.value
      var slic = currentText.slice(0,-1)
      display1.value = slic
}
// document.getElementById('button1').addEventListener('click', function() {
//       // Change the background color to red
//       this.style.backgroundColor = 'red';
  
//       // Remove the changed background color after 1 second using setTimeout
//       setTimeout(() => {
//         this.style.backgroundColor = 'white'; // Default background color
//       }, 1000); // 1000 milliseconds = 1 second
//     });

let buttons = document.querySelectorAll('#button1')
for(let i=0 ;i<buttons.length ; i++){
      buttons[i].addEventListener('click',function(){
            buttons[i].style.backgroundColor = 'rgb(15, 232, 243)' ;
            buttons[i].style.color = 'red' ;
            buttons[i].style.boxShadow = '3px 3px 3px rgba(40, 40, 40, 50)';
  
      // Remove the changed background color after 1 second using setTimeout
      setInterval(() => {
        buttons[i].style.backgroundColor ='rgb(172, 170, 169)'; // Default background color
        buttons[i].style.color = '' ;
        buttons[i].style.boxShadow = ''
      }, 600);
            
      })
}