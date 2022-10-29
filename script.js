
let subminbtn = document.getElementById('submit')
console.log(subminbtn)

subminbtn.addEventListener('click',(e)=>{
  e.preventDefault()
  submit();

}
 )

 // creating a function 
 
function submit(){
 
  let one = document.getElementById('fname').value
  console.log('firstname :',one);

  let one1 = document.getElementById('lname').value
  console.log('lastname :',one1);

  let one2 = document.getElementById('Address').value
  console.log('Address :',one2);

  let one3 = document.getElementById('Pincode').value
  console.log('Pincode :',one3);

  // Create Element and stored history data 

let t = document.createElement('tr')

let tds = document.createElement('td')
let tds1 = document.createElement('td')
let tds2 = document.createElement('td')
let tds3 = document.createElement('td')
document.querySelectorAll('table tbody')[1].appendChild(t)

t.appendChild(tds);
t.appendChild(tds1);
t.appendChild(tds2);
t.appendChild(tds3);
tds.append(one);
tds1.append(one1);
tds2.append(one2);
tds3.append(one3);

//  Form data into table 

  let second = document.getElementsByClassName('tdata')
  console.log(second.length);

for(let i=0;i<=second.length;i++)
{
  if(i == 0){
    second[i].innerText = one;
  }
  else if(i == 1){
    second[i].innerText = one1;
  }else if(i == 2){
    second[i].innerText = one2;
  }else if(i == 3){
    second[i].innerText = one3;
  }
}
  
}





