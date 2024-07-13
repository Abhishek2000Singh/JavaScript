let a = [
    "Initialising Hack Tool....",
    "Connecting to facebook....",
    "Connecting to Server 1....",
    "Connection Failed. Retrying.....",
    "Connecting to Server 2....",,
    "Connected Successfully...",
    "Username iamharshit....",
    "Trying Bruteforce....",
    "20k passwords tried...",
    "Match Not Found....",
    "Another 20k passwords tried...",
    "Match Not Found....",
    "Another 20k passwords tried...",
    "Match Not Found....",
    "Another 20k passwords tried...",
    "Match  Found....",
    "Accessing Account....",
    "Hacked Successfully...."
]
const sleep = async(seconds)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
            }, seconds * 1000);
    })
}
const showHack = async (messages)=>{
    await sleep(2) 
    text.innerHTML = text.innerHTML + messages + "<br>"
}
(async ()=>{
for (let i = 0; i < a.length; i++) {
    await showHack(a[i])   
}
})()

