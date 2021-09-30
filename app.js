var checkdateofbirth  = document.querySelector("#date-of-birth");
var checkluckynumbers = document.querySelector("#luckynumber");
const checknumberbutton = document.querySelector("#checknumber");
var  output  = document.querySelector("#output");


checknumberbutton.addEventListener('click', checknumberislucky);


function comparevalues(newvar,checkluckynumber)
{
  if(newvar%checkluckynumber === 0)
  {
  
     output.innerText = "  Your birthday is lucky Bro  ";
     
  
  }
   else
  {
  
    output.innerText = "OOPs! Your birthday is not Lucky";
    
  
  }
}

function checknumberislucky()
 {

    dobvalueaccess = checkdateofbirth.value;
    const newvar =  calculateinternalsum(dobvalueaccess);
     comparevalues(newvar,checkluckynumbers.value);
   
 }
 
 function calculateinternalsum(dobvalueaccess)
 {
 
    dobvalueaccess = dobvalueaccess.replaceAll("-","");
    let sum = 0;
    for(let index=0;index<dobvalueaccess.length;index++)
    {
       sum = sum + Number(dobvalueaccess.charAt(index));
        
    }
   return sum;
  
 }