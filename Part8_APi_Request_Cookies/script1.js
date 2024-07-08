let p = fetch("https://goweather.herokuapp.com/weather/Ny")
    p.then((value) => {
        console.log(value.status);
        console.log(value.ok);
        return value.json();
    }).then((value2) => {
        console.log(value2);
    })