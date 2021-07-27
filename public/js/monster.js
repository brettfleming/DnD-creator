const findMonster = (event) => {
    event.preventDefault();
    let searchedMonster = document.querySelector('#monster').value.trim();
    //searchedMonster = searchedMonster.replace(' ', '-');

    let textArr = searchedMonster.split(" ");
    let finalTxt = textArr.join("-");

    window.location.href = `/monster/${finalTxt}`
}

document
  .querySelector('.monster-search')
  .addEventListener('submit', findMonster);