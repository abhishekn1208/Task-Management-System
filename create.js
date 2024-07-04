let URL = `http://localhost:3000/tickets`;

document.querySelector("form").addEventListener("submit",function(){
    getData();
})

async function getData(){
    try {
        event.preventDefault();
        let title = document.getElementById("input1").value;
        let description = document.getElementById("input2").value;
        let status = document.getElementById("input3").value;
        let dueDate = document.getElementById("input4").value;
    
        let obj = {
            title,
            description,
            status,
            dueDate
        }
    
        let response = await fetch(`${URL}`,{
            method : "POST",
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