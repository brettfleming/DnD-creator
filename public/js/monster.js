const actionsEl = document.getElementById('actions');
const nameEl = document.getElementById('name');
const typeEl = document.getElementById('type');
const acEl = document.getElementById('ac');
const hpEl = document.getElementById('hp');
const LanguagesEl = document.getElementById('Languages');
const challengeEl = document.getElementById('challenge');
const speedEl = document.getElementById('speed');
const msEl = document.getElementById('ms');
const sAbilitiesEl = document.getElementById('s-abilities'); 
const dResistancesEl = document.getElementById('d-resistances'); 
const dVulnerabilitiesEl = document.getElementById('d-vulnerabilities'); 
const cImminitiesEl = document.getElementById('c-imminities'); 
const dImminitiesEl = document.getElementById('d-imminities'); 



const findMonster = (event) => {
    event.preventDefault();
    let searchedMonster = document.querySelector('#monster').value.trim();
    //searchedMonster = searchedMonster.replace(' ', '-');


    let textArr = searchedMonster.split(" ");
    let finalTxt = textArr.join("-");


    console.log(finalTxt)
    fetch(`https://www.dnd5eapi.co/api/monsters/${finalTxt}`)
        .then(function (response) {
            if (!response.ok) {
                return console.log(response);
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            let actions = data.actions;
            let sAbilities = data.special_abilities;
            let dImminities = data.damage_immunities;
            let cImminities = data.condition_immunities;
            let dResistances = data.damage_resistances;
            let dVulnerabilities = data.damage_vulnerabilities;
            let liTagstr = document.createElement('li');
            let liTagdex = document.createElement('li');
            let liTagchr = document.createElement('li');
            let liTagcons = document.createElement('li');
            let liTagint = document.createElement('li');
            let liTagwis = document.createElement('li');
            nameEl.textContent = data.name;
            typeEl.textContent = data.type + ', ' + data.alignment;
            acEl.textContent = data.armor_class;
            hpEl.textContent = data.hit_points + ' (' + data.hit_dice + ')';
            challengeEl.textContent = data.challenge_rating + ' (' + data.xp + ' xp)';
            LanguagesEl.textContent = data.languages;
            liTagstr.textContent = "Str: " + data.strength;
            msEl.append(liTagstr);
            liTagdex.textContent = "Dex: " + data.dexterity;
            msEl.append(liTagdex);
            liTagchr.textContent = "Chr: " + data.charisma;
            msEl.append(liTagchr);
            liTagcons.textContent = "Const: " + data.constitution;
            msEl.append(liTagcons);
            liTagint.textContent = "Int: " + data.intelligence;
            msEl.append(liTagint);
            liTagwis.textContent = "Wis: " + data.wisdom;
            msEl.append(liTagwis);
            speedEl.textContent = data.speed.walk;
            if (dImminities.length != 0) {
                dImminities.forEach(imminities => {
                    dImminitiesEl.textContent += imminities + ", "
                });
            } else {
                dImminitiesEl.textContent = "none"
            }
            if (cImminities.length != 0) {
                cImminities.forEach(imminities => {
                    cImminitiesEl.textContent += imminities.name + ", "
                });
            } else {
                cImminitiesEl.textContent = "none"
            }
            if (dResistances.length != 0) {
                dResistances.forEach(imminities => {
                    dResistancesEl.textContent += imminities + ", "
                });
            } else {
                dResistancesEl.textContent = "none"
            }
            if (dVulnerabilities.length != 0) {
                dVulnerabilities.forEach(imminities => {
                    dVulnerabilitiesEl.textContent += imminities + ", "
                });
            } else {
                dVulnerabilitiesEl.textContent = "none"
            }
            actions.forEach(action => {
                let actionH4 = document.createElement('h4');
                let actionP = document.createElement('p');
                actionH4.textContent = action.name;
                actionP.textContent = action.desc;
                actionsEl.append(actionH4);
                actionsEl.append(actionP);
            });
            sAbilities.forEach(ability => {
                let abilityH4 = document.createElement('h4');
                let abilityP = document.createElement('p');
                abilityH4.textContent = ability.name;
                abilityP.textContent = ability.desc;
                sAbilitiesEl.append(abilityH4);
                sAbilitiesEl.append(abilityP);
            });
        })
}

function test() {
    fetch('/monster')
        .then
}




document
  .querySelector('.monster-search')
  .addEventListener('submit', findMonster);