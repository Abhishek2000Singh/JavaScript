const loadScript = async function(src) {
    return new Promise((resolve, reject) => {

        let script_js = document.createElement("script")
        script_js.src = src
        script_js.onload = () => {
            resolve(src+ " Done Success")
        }
        document.head.append(script_js)
    })
}

// const loadScript2 = async function () {
// let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// console.log(a);
// }
// loadScript2()

//using then
let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js").then((value)=>{
    console.log(value);
    
})
