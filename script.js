const cardContainer = document.querySelector(".container"); 
const button = document.querySelector("#delete"); 
const singleCard = document.querySelector(".singleCard"); 
const image = document.querySelector(".images");  
const body = document.querySelector(".cardBody"); 
const title = document.querySelector("cardTitle"); 
const price = document.querySelector("price"); 


const url = "https://striveschool-api.herokuapp.com/books"; 
window.onload = () => {
fetch(url)
.then(fileObj => { 
//console.log(fileObj);
if (fileObj.ok){
    return fileObj.json()             
}
})
.then(objData => { 
//console.log(objData); 
const divBlock = document.getElementById("singleCard");
objData.forEach(book => {

const div = document.createElement("div"); 

div.innerHTML += `<img src="${book.img}" class="card-img-top images" alt="...">
    <div class="card-body cardBody">
    <h5 class="card-title cardTitle">${book.title}</h5>
    <span class="price">${book.price}</span>
    <button type="button" class="btn btn-primary" id="delete" onclick="removeCard(this)">scarta</button>` 
    
divBlock.appendChild(div); 

});
})
.catch(error => console.log(error));
} 

//delete button
const removeCard = (el) => { 
    
    el.parentElement.parentElement.remove();
        }