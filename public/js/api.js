



const findThings = () => {

    fetch("https://www.dnd5eapi.co/api/races")
        .then(function (response) {
            if (!response.ok) {
                return console.log(response);
            }
            return response.json();
        })
        .then(function (data) {
            
        })
}
const findRaces = () => {

    fetch("https://www.dnd5eapi.co/api/races")
        .then(function (response) {
            if (!response.ok) {
                return console.log(response);
            }
            return response.json();
        })
        .then(function (data) {
            races = data.results
            races.forEach(races => {
                console.log(races.name);
                console.log("--------");

                
            });
        })
}
const findClasses = () => {

    fetch("https://www.dnd5eapi.co/api/classes")
        .then(function (response) {
            if (!response.ok) {
                return console.log(response);
            }
            return response.json();
        })
        .then(function (data) {
            classes = data.results
            classes.forEach(classes => {
                console.log(classes.name);
                console.log("--------");

                
            });
        })
}
const findAlignment = () => {

    fetch("https://www.dnd5eapi.co/api/alignments")
        .then(function (response) {
            if (!response.ok) {
                return console.log(response);
            }
            return response.json();
        })
        .then(function (data) {
            alignment = data.results
            alignment.forEach(alignment => {
                console.log(alignment.name);
                console.log("--------");

                
            });
        })
}
findThings();
// findRaces();
// findClasses();
// findAlignment();