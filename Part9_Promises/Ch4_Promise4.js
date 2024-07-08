async function Harshit() {

    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 2000);
    })
    let KolkataWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 deg")
        }, 5000);
    })

    // delhiWeather.then(function (value) {
    //     console.log(value); 
    // })
    // KolkataWeather.then(function (value) {
    //     console.log(value); 
    // })

    console.log("Fetching Delhi weather...");

    let delhiW = await delhiWeather
    console.log("Delhi Weather has been fetched" + delhiW);


    console.log("Fetching Kolkata weather...");
    let KolW = await KolkataWeather
    console.log("Kolkata Weather has been fetched" + KolW);

    return [delhiW, KolW]

}
// const cherry = ()=>{
//     console.log("Hey i AM cherry and i am not waiting");
// }
// console.log("Weather control room")
// let a = Harshit()
// let b = cherry()
// a.then((value)=>{
//     console.log(value);
// })
// console.log(a);
const cherry = async () => {
    console.log("Hey i AM cherry and i am not waiting");
}
const main1 = async function () {

    console.log("Weather control room")
    let a = await Harshit()
    let b = await cherry()

}
main1()
// Harshit().then((value) => {
//     console.log(value);
// })