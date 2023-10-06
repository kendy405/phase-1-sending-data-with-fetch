// Add your code here
const dogUrl= "http://localhost:3000/dogs"

const catUrl= "http://localhost:3000/cats"

const userUrl= "http://localhost:3000/users"

const robotUrl= "http://localhost:3000/robots"

const nameInput= document.querySelector("name")

const configureTheForm = () => {
    const form =document.querySelector("form")
    form.addEventListener("submit",(event)=>{
     event.preventDefault()
     const name = event.target.name.value
     const email = event.target.email.value
     const userName = event.target.userName.value
     const password = event.target.password.value
     const customer = {name,email,userName,password}

     fetch(user, {
        method:"POST",
        headers:{
            "contentType":"application/json"
        },
        body:JSON.stringify(customer)
     })
     .then((response) =>response.json())
     .then((customer) => {
        renderUser(customer)
     })
    })
}
const renderUser = (liUser) =>{
    const userLi = document.createElement("li")
    userLi.innerText = liUser.name
    const userUl = document.querySelector("#user-list")
    userUl.append(userLi)
}

function submitData(name, email)
{
    return fetch(userUrl, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"

        },

        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(object =>{document.body.innerHTML = object["id"]})
    .catch(error => {document.body.innerHTML = error.message})
}