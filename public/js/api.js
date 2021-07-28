
const submitBtn = document.getElementById('submitBtn');
const selectTag = document.getElementById('character_race');
const selectTag2 = document.getElementById('character_class');
const selectTag3 = document.getElementById('character_alignment');
const id = submitBtn.getAttribute('data-characterId');
let characterObj

const getCharacter = () => {
    fetch(`/api/character/${id}`)
    .then(function (response) {
        if (!response.ok) {
            return console.log(response);
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        characterObj = data
    })
}

// const findThings = () => {

//     fetch("https://www.dnd5eapi.co/api/monsters/animated-armor")
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
// characterObj = null
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
            
            races.forEach(race => {
                let optionTag = document.createElement('option');
                optionTag.textContent = race.name;
                optionTag.setAttribute("value", race.name)
                if( characterObj && characterObj.character_race === race.name){
                    
                    optionTag.setAttribute("selected", true);

                }

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
                if( characterObj && characterObj.character_class === classes.name){
                    
                    optionTag.setAttribute("selected", true);

                }
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
                if( characterObj && characterObj.character_alignment === alignment.name){
                    
                    optionTag.setAttribute("selected", true);

                }
                selectTag3.append(optionTag);
                // console.log(alignment.name);
                // console.log("--------");

                
            });
        })
}
// findThings();
getCharacter();
findRaces();
findClasses();
findAlignment();