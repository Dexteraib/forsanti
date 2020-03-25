async function searchGif (keyword){
    let searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=tJWi8tEPTSzGXx9YJZqiXT9QFc5M0wsS&q=${keyword}&limit=30&offset=0&rating=R&lang=en`
    let result = await fetch(searchUrl);
    let jsonResult = await result.json();
    renderImage(jsonResult)
}

function renderImage(imageData){
    
    for (var i=0;i<10;i++){
    document.getElementById('gifs-grid').innerHTML += `<div class="gif">
    <img id=${i} src=${imageData.data[i].images.fixed_height_small.url} width="145" > </div>` 
}
    for (var i=10;i<20;i++){
    document.getElementById('gifs-grid2').innerHTML += `<div class="gif">
    <img id=${i} src=${imageData.data[i].images.fixed_height_small.url} width="145"> </div>` } 

   for (var i=20;i<30;i++){
    document.getElementById('gifs-grid3').innerHTML += `<div class="gif">
    <img id=${i} src=${imageData.data[i].images.fixed_height_small.url} width="145" > </div>`} 

}


document.getElementById('search-button').addEventListener('click', function(){
    searchGif('cat');
})

/* document.getElementById('g'+i.toString() ).style.margin = `${(-1*document.getElementById('g'+i.toString() ).offsetTop)+10}px 0px 0px 0px`;
    console.log(document.getElementById('g'+i.toString() ).offsetTop); */