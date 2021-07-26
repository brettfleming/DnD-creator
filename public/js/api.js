const selectTag = document.getElementById('character_race');
const selectTag2 = document.getElementById('character_class');
const selectTag3 = document.getElementById('character_alignment');



// const findThings = () => {

//     fetch("https://www.dnd5eapi.co/api/monsters/fire-elemental")
//         .then(function (response) {
//             if (!response.ok) {
//                 return console.log(response);
//             }
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//         })
// }
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
                let optionTag = document.createElement('option');
                optionTag.textContent = races.name;
                optionTag.setAttribute("value", races.name)
                selectTag.append(optionTag);

                // console.log(races.name);
                // console.log("--------");

                
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
                let optionTag = document.createElement('option');
                optionTag.textContent = classes.name;
                optionTag.setAttribute("value", classes.name)
                selectTag2.append(optionTag);
                // console.log(classes.name);
                // console.log("--------");

                
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
                let optionTag = document.createElement('option');
                optionTag.textContent = alignment.name;
                optionTag.setAttribute("value", alignment.name)
                selectTag3.append(optionTag);
                // console.log(alignment.name);
                // console.log("--------");

                
            });
        })
}
// findThings();
findRaces();
findClasses();
findAlignment();