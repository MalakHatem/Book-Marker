var siteNameInput=document.getElementById("siteName");
var siteURLInput=document.getElementById("SiteURL");
var tableContentInput=document.getElementById("tableContent");

var bookmarkList= [];
if(localStorage.getItem("bookmarker")!=null){
    // JSON.parse to convert string to array
    bookmarkList=JSON.parse(localStorage.getItem("bookmarker"));
    displayBookmark();
}
function addBookmark(){
    if(validationName() && validationURL()){
    var bookmarker={
        name:siteNameInput.value,
        url:siteURLInput.value,
    }
    bookmarkList.push(bookmarker);
    //JSON.stringify to convert array to string
    localStorage.setItem("bookmarker",JSON.stringify(bookmarkList));
    displayBookmark();
}
}
function displayBookmark(){
    var cartona="";
    for (let i = 0; i < bookmarkList.length; i++) {
        cartona+=`<tr>
            <td>${i+1}</td>
            <td>${bookmarkList[i].name}</td>
            <td><button onclick="visitBookmark(${i})" class="btn btn-success"><i class="fa-solid fa-eye"></i> Visit</button></td>
            <td><button onclick="deleteBookmark(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i> Delete</button> </td>
        </tr> `; 
    }
    tableContentInput.innerHTML=cartona;
}
function deleteBookmark(index){
    // splice(start,count) -> to delete the elemnt
    bookmarkList.splice(index,1);
    displayBookmark();
}
function visitBookmark(index){
    window.open(bookmarkList[index].url,"_blank");
}
 
function validationName(){
var nameRegex=/^[A-za-z]{2,20}$/;
if(nameRegex.test(siteNameInput.value)){
    siteNameInput.classList.add("is-valid");
    siteNameInput.classList.remove("is-valid")
    return true;
}else{
    siteNameInput.classList.add("is-invalid");
    siteNameInput.classList.remove("is-valid")
    return false;
}
}
function validationURL(){
var URLRegex=/^(https:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-z]{2,}$/;
if(URLRegex.test(siteURLInput.value)){
    siteURLInput.classList.add("is-valid");
    siteURLInput.classList.remove("is-invalid")
    return true;
}else{
    siteURLInput.classList.add("is-invalid");
    siteURLInput.classList.remove("is-valid")
    return false;
}
}


