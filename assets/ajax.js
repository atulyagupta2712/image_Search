window.addEventListener("DOMContentLoaded", bindEvents);

function bindEvents(){
    console.log("bindevents");
    document.querySelector("#search").addEventListener("click", doAjax);
}
function doAjax(){
    var search = document.querySelector("#text").value;
    console.log("value");
    var url =  "https://api.giphy.com/v1/gifs/search?api_key=sL4OepJsRU56eTqPxw7AkWcmx6v0AOm6&q="+search+"&limit=4&offset=0&rating=G&lang=en";
    fetch(url).then(response=>{
        response.json().then(data=>{
            printImages(data);
        }).catch(err=>
            { 
                console.log("Invalid json",err)})
    }).catch(err=>{
        console.log("invalid url");
    })
}

function printImages(result){
    var div = document.querySelector("#images");
    div.innerHTML="";
    for(let image of result.data){
        var url= image.images.original.url;
        createImage(url);
    }
}
function createImage(url){
    var div = document.querySelector("#images");
    var img = document.createElement("img");
    img.src= url;
    img.className = "size";
    div.appendChild(img);
}