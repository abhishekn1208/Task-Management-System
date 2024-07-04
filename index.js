let URL = `http://localhost:3000/tickets`;

let container = document.getElementById("container");
getData();

async function getData(){
    try {
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);
        displayData(data)
        
    } catch (error) {
        console.log("something went wrong")
    }
   function displayData(arr){
    container.innerHTML = "";
    arr.forEach((ele) => {
        let card = document.createElement("div");
        card.style.border = "1px solid black";
        card.style.textAlign = "center"
        let dltBtn = document.createElement("button");
        dltBtn.innerText = "Delete"
        dltBtn.addEventListener("click", async function(){
        
            let response = await fetch(`${URL}/${ele.id}`,{
                method: "DELETE"
            })
            getData()
        })


        let editBtn = document.createElement("button")
        editBtn.innerText = "Edit"

        editBtn.addEventListener("click",function(){
            localStorage.setItem("EditID",ele.id);
            window.location.href = "edit.html"
        })
        card.innerHTML = `<h3>${ele.title}</h3>
        <p>${ele.description}</p>
        <p>${ele.status}</p>
        <p>${ele.dueDate}</p>`

        container.appendChild(card)
        card.append(editBtn,dltBtn)
    });
   }
}