const createTodo = async function (todo) {
    let options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        // body: JSON.stringify({
        //     // title: 'foo',
        //     // body: 'bar',
        //     // userId: 1
        // }),

        //another way
        body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let res = await p.json()
    // console.log(res)
    return res;
}

const getTodo = async(id)=>{
// let p = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
// .then((response)=>{
// return response.json()
// }).then((json)=>{
//     console.log(json);  
// })
// }
let p = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
let res = await p.json()
return res;
}

const mainFunc = async function () {
    let todo = {
        title: 'Harshit',
        body: 'Engineer',
        userId: 2,
    }
    let todor = await createTodo(todo)
    console.log(todor);
    console.log(await getTodo(5 ));
    
}

mainFunc()