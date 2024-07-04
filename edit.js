let URL = `http://localhost:3000/tickets`;

document.getElementById("edit").addEventListener("click",function(){
    getData();
  
})

async function getData(){
    try {
        let id = localStorage.getItem("EditID");
        let Inp1 = document.getElementById("input1").value;
        let Inp2 = document.getElementById("input2").value;
        let Inp3 = document.getElementById("input3").value;
        let Inp4 = document.getElementById("input4").value;
    
        let obj = {
            title : Inp1,
            description : Inp2,
            status : Inp3,
            dueDate : Inp4
        }
         let response = await fetch(`${URL}/${id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(obj)
         })
         window.location.href = "index.html"
    } catch (error) {
        console.log("Something went wrong")
    }
   
}