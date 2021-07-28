const throwdice = document.getElementById('throwdice');
    throwdice.addEventListener('click', throwdembonez);

const createCharacter = async (event) => {
    event.preventDefault();
    const character_name = document.getElementById('character_name').value;
    const character_background = document.getElementById('character_background').value;
    const character_class = document.getElementById('character_class').value;
    const character_race = document.getElementById('character_race').value;
    const character_alignment = document.getElementById('character_alignment').value;
    const str = document.getElementById('str').value;
    const dex = document.getElementById('dex').value;
    const chr = document.getElementById('chr').value;
    const cons = document.getElementById('const').value;
    const int = document.getElementById('int').value;
    const wis = document.getElementById('wis').value;
    console.log(character_race);


    if (character_name && character_background && character_class && character_race && character_alignment && str && dex && chr && cons && int && wis) {
        const response = await fetch('/api/character/create', {
            method: 'POST',
            body: JSON.stringify({character_name, character_background, character_class, character_race, character_alignment, str, dex, chr, cons, int, wis}),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.replace('/profile')
        } else {
            alert(response.statusText);
        }
    }
}

function throwdembonez () {
    console.log("Entering throw function");
    const strthrow = document.getElementById('str');
    const dexthrow = document.getElementById('dex');
    const chrthrow = document.getElementById('chr');
    const conthrow = document.getElementById('const');
    const intthrow = document.getElementById('int');
    const wisthrow = document.getElementById('wis');

    let strRand = Math.floor(Math.random() * 20);
    let dexRand = Math.floor(Math.random() * 20);
    let chrRand = Math.floor(Math.random() * 20);
    let conRand = Math.floor(Math.random() * 20);
    let intRand = Math.floor(Math.random() * 20);
    let wisRand = Math.floor(Math.random() * 20);

    strthrow.setAttribute('value',strRand);
    dexthrow.setAttribute('value',dexRand);
    chrthrow.setAttribute('value',chrRand);
    conthrow.setAttribute('value',conRand);
    intthrow.setAttribute('value',intRand);
    wisthrow.setAttribute('value',wisRand);
}

document
  .querySelector('.create-character')
  .addEventListener('submit', createCharacter);