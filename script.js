function addTask(){
            let taskinput=document.querySelector(".taskinput")
            let taskValue=taskinput.value.trim()
            
            if(taskValue===""){
                alert("There Was a Great Saying---\n\n Dnot Skip From Life\nDo Some Work And Be Productivie\n\n--NagRaju Kummari")
            }else{
                let li=document.createElement("li")
            li.textContent=taskValue
            li.style.textTransform="capitalize"
            li.style.position="relative"
            document.querySelector(".list").appendChild(li)
            taskinput.value=""

            let reee=document.createElement("span")
            reee.innerText="✔️"
            li.appendChild(reee)
            reee.style.position="absolute"
            reee.style.left="225px"

                reee.style.cursor="pointer"
            reee.onclick=()=>{
                li.remove()

            }
            }

            
        }
