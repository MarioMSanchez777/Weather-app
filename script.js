function GetInfo() {
    const newName = document.getElementById("citySearch");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--" + newName.value + "--";


    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + newName.value + '&appid=e9a674cc39ea5df01f0a3bbccc5ad959&units=imperial')
        .then(response => response.json())
        .then(data => {
            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min - 45.36).toFixed(1) + "°";
            }

            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max - 46.63).toFixed(1) + "°";
            }

            for (i = 0; i < 5; i++) {
                document.getElementById("picture" + (i + 1)).src = "http://openweathermap.org/img/wn/" +
                    data.list[i].weather[0].icon
                    + ".png";
            }

            console.log(data)
        })


}

function DefaultScreen() {
    document.getElementById("citySearch").defaultValue = "Vegas";
    GetInfo();
}


const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function CheckDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    }
    else {
        return day + d.getDay();

    }
}

for (i = 0; i < 5; i++) {
    document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];

}