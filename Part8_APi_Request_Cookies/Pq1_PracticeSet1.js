let url = "https://kontests.net/api/v1/all"
let response =  fetch(url)

response.then((contest)=>{
    return contest.json();
}).then((contest)=>{
    console.log(contest);
    ihtml = ""
    for(item in contest){
        console.log(contest[item]);
        ihtml += `
        <div class="card" style="width: 18rem; color: black;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${contest[item].Nation}</h5>
                <p class="card-text"> <a href="${contest[item].url}">Visit here</a></p>
                <p> Starts at : ${contest[item].Year}</p>
                <p> Population at : ${contest[item].Population}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `    
    }
    cardContainer.innerHTML = ihtml
})