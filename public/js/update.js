const updateCharacter = async (event) => {
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
    const id = submitBtn.getAttribute('data-characterId');
    console.log(character_race);



    if (character_name && character_background && character_class && character_race && character_alignment && str && dex && chr && cons && int && wis) {
        const response = await fetch(`/api/character/update/${id}`, {
            method: 'PUT',
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

document
  .querySelector('.update-character')
  .addEventListener('submit', updateCharacter);