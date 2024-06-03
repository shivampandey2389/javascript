let Fname=document.getElementById("fName");
let Lname = document.getElementById("lName");
let Add =document.getElementById("Address");
let Mob = document.getElementById("Mno");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let confirm = document.getElementById("Confirm");
let btn = document.getElementById("submit");
// btn.addEventListener("click",()=>{
//   if(document.querySelector("input,textarea").value ===""){
//    alert("Fill all the detail");
//   }
//   else{
//     let para = document.createElement("p");
//     let node = document.createTextNode(`Name: ${Fname.value}`);
//     para.appendChild(node);
//     let div = document.getElementById("div1");
//     div.appendChild(para);
//     let para1 = document.createElement("p");
//     let node1 = document.createTextNode(`LastName: ${Lname.value}`);
//     para1.appendChild(node1);
//     div.appendChild(para1);
//     let para2 = document.createElement("p");
//     let node2 = document.createTextNode(`Address: ${Address.value}`);
//     para2.appendChild(node2);
//     div.appendChild(para2);
//     let para3 = document.createElement("p");
//     let node3 = document.createTextNode(`Mobile: ${Mob.value}`);
//     para3.appendChild(node3);
//     div.appendChild(para3);
//     let para4 = document.createElement("p");
//     let node4 = document.createTextNode(`Email: ${email.value}`);
//     para4.appendChild(node4);
//     div.appendChild(para4);
//     let para5 = document.createElement("p");
//     let node5 = document.createTextNode(`Password: ${pass.value}`);
//     para5.appendChild(node5);
//     div.appendChild(para5);
//   }
// })
btn.addEventListener("click",()=>{
  for(let i=0;i<12;i++){
    let div1=document.createElement("div");
    let para=document.createElement("span");
    let Names=document.getElementById("Names");
    let info=document.getElementById("info");
    let div2=document.createElement("div");
    div2.setAttribute("class","Values");
    let span=document.getElementsByClassName("span_cls");
    if(i==0){
      for(let j=0;j<6;j++){
        let span1=document.createTextNode(`${span[j].innerText}`);
        let span2=document.createElement("span");
        span2.append(span1);
        div1.appendChild(span2);
        Names.appendChild(div1);
      }
    }
    if(document.getElementById("form").children[i].value===undefined){
      continue;
    }else{
      let Node=document.createTextNode(document.getElementById("form").children[i].value);
      para.appendChild(Node);
      div2.appendChild(para);
      info.appendChild(div2);
    }
    
  }
})