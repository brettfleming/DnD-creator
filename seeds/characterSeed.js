const { Character} = require("../models");

const characterData = [
    {
        character_name: "Beavis",
        character_background: "Reel swell dood",
        character_race: "Dragonborn",
        character_alignment: "Chaotic Evil", 
        character_class: "Barbarian",
        str: 9,
        dex: 11,
        chr: 12,
        cons: 14, 
        int: 14,
        wis: 16,
        user_id: 8
    },
    {
        character_name: "Chairface",
        character_background: "Has poor personal hygeine",
        character_race: "Fighter",
        character_alignment: "Neutral Good", 
        character_class: "Rogue",
        str: 11,
        dex: 11,
        chr: 11,
        cons: 13, 
        int: 14,
        wis: 14,
        user_id: 5
    },
    {
        character_name: "Tick",
        character_background: "Is wanted on numerous felony counts",
        character_race: "druid",
        character_alignment: "Chaotic Good", 
        character_class: "Sorcerer",
        str: 10,
        chr: 10,
        dex: 11,
        cons: 12, 
        int: 14,
        wis: 15,
        user_id: 6
    },
    {
        character_name: "Arthur",
        character_background: "Has no grip on reality whatsoever",
        character_race: "half-elf",
        character_alignment: "Lawful Neutral", 
        character_class: "Monk",
        str: 7,
        dex: 9,
        chr: 10,
        cons: 12, 
        int: 12,
        wis: 15,
        user_id: 1
    },
    {
        character_name: "Fry",
        character_background: "Literally voted for Donald Trump",
        character_race: "elf",
        character_alignment: "Chaotic Evil", 
        character_class: "bard",
        str: 4,
        dex: 12,
        chr: 12,
        cons: 12, 
        int: 13,
        wis: 14,
        user_id: 9
    },
    {
        character_name: "Leela",
        character_background: "Has gigantic effing feet",
        character_race: "Dragonborn",
        character_alignment: "Lawful Good", 
        character_class: "cleric",
        str: 8,
        dex: 9,
        chr: 11,
        cons: 13, 
        int: 13,
        wis: 14,
        user_id: 2
    },
    {
        character_name: "Hermes",
        character_background: "Looks like spiders is meeting on his head",
        character_race: "human",
        character_alignment: "Neutral Evil", 
        character_class: "Ranger",
        str: 8,
        dex: 9,
        chr: 12,
        cons: 12, 
        int: 14,
        wis: 15,
        user_id: 7
    },
    {
        character_name: "Barbados Slim",
        character_background: "Doesn't smell great",
        character_race: "tiefling",
        character_alignment: "Neutral", 
        character_class: "Paladin",
        str: 9,
        dex: 9,
        chr: 11,
        cons: 13, 
        int: 14,
        wis: 14,
        user_id: 4
    },
    {
        character_name: "Amy",
        character_background: "Can eff RIGHT off",
        character_race: "gnome",
        character_alignment: "Chaotic Neutral", 
        character_class: "Fighter",
        str: 8,
        dex: 8,
        chr: 11,
        cons: 12, 
        int: 12,
        wis: 16,
        user_id: 3
    },
    {
        character_name: "Bender",
        character_background: "Has VERY poor posture",
        character_race: "gnome",
        character_alignment: "Lawful Evil", 
        character_class: "druid",
        str: 9,
        dex: 10,
        chr: 12,
        cons: 12, 
        int: 16,
        wis: 18,
        user_id: 8
    }
]

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;
