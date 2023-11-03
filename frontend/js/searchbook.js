function searchbook(){
    var bookName=document.getElementById("search").value;
    console.log(bookName)
    window.location.assign('search.html?bookName='+ bookName ) ;
}