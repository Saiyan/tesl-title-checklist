let arrTitles = [{"hash":"ArchmofTelva","name":"Archmagister of Telvanni","color":"Blue","desc":"Sacrifice 200 creatures with Betray."},{"hash":"ArchmofRedor","name":"Archmaster of Redoran","color":"Blue","desc":"Rally 200 creatures."},{"hash":"AundaClanBlood","name":"Aundae Clan Bloodkin","color":"Blue","desc":"Draw 10 Blood Magic Spells with Aundae Clan Sorcerer."},{"hash":"BerneClanStalk","name":"Berne Clan Stalker","color":"Blue","desc":"Destroy 20 creatures with Berne Clan Nightstalker."},{"hash":"CaptaofHooks","name":"Captain of Hooks","color":"Brown","desc":"Move 20 creatures with Grappling Hook."},{"hash":"ChildofHirci","name":"Child of Hircine","color":"Brown","desc":"Become a Werewolf at the Sightless Pit."},{"hash":"ColleMasteWizar","name":"College Master Wizard","color":"Blue","desc":"Complete 30 College of Winterhold Quests."},{"hash":"ColleSchol","name":"College Scholar","color":"Brown","desc":"Complete 3 College of Winterhold Quests."},{"hash":"ColleTrain","name":"College Trainer","color":"Brown","desc":"Complete 10 College of Winterhold Quests."},{"hash":"CompaHarbi","name":"Companions Harbinger","color":"Blue","desc":"Complete 30 Companions Quests."},{"hash":"CompaIniti","name":"Companions Initiate","color":"Brown","desc":"Complete 3 Companions Quests."},{"hash":"CompaTrain","name":"Companions Trainer","color":"Brown","desc":"Complete 10 Companions Quests."},{"hash":"CouncofDagot","name":"Councilor of Dagoth","color":"Blue","desc":"Summon 200 creatures with 5 power or more."},{"hash":"FightGuildAssoc","name":"Fighters Guild Associate","color":"Brown","desc":"Complete 3 Fighters Guild Quests."},{"hash":"FightGuildGuard","name":"Fighters Guild Guardian","color":"Brown","desc":"Complete 30 Fighters Guild Quests."},{"hash":"FightGuildMaste","name":"Fighters Guild Master","color":"Blue","desc":"Complete 60 Fighters Guild Quests."},{"hash":"FightGuildProte","name":"Fighters Guild Protector","color":"Brown","desc":"Complete 10 Fighters Guild Quests."},{"hash":"FrientoAnima","name":"Friend to Animals","color":"Brown","desc":"Aided by wolves at Bleakcoast Ridge."},{"hash":"GrandofHlaal","name":"Grandmaster of Hlaalu","color":"Blue","desc":"Trigger Plot effects on 200 cards."},{"hash":"HeroofthePeopl","name":"Hero of the People","color":"Purple","desc":"Complete Cunning, Mighty, Nimble, Resolute, and Stalwart."},{"hash":"HouseHlaalCousi","name":"House Hlaalu Cousin","color":"Brown","desc":"Win 30 games with an Agility, Strength, and Willpower deck."},{"hash":"HouseRedorKinsm","name":"House Redoran Kinsman","color":"Brown","desc":"Win 30 games with an Endurance, Strength, and Willpower deck."},{"hash":"HouseTelvaSpell","name":"House Telvanni Spellwright","color":"Brown","desc":"Win 30 games with an Agility, Endurance, and Intelligence deck."},{"hash":"JackofTrade","name":"Jack of Trades","color":"Purple","desc":"Complete Master Wizard, Blademaster, Captain, and Seer."},{"hash":"MagesGuildArchm","name":"Mages Guild Archmage","color":"Blue","desc":"Complete 60 Mages Guild Quests."},{"hash":"MagesGuildAssoc","name":"Mages Guild Associate","color":"Brown","desc":"Complete 3 Mages Guild Quests."},{"hash":"MagesGuildEvoke","name":"Mages Guild Evoker","color":"Brown","desc":"Complete 10 Mages Guild Quests."},{"hash":"MagesGuildMasteWizar","name":"Mages Guild Master Wizard","color":"Brown","desc":"Complete 30 Mages Guild Quests."},{"hash":"NerevRebor","name":"Nerevar Reborn","color":"Purple","desc":"Collect 100% of the Morrowind Set."},{"hash":"PatrioftheTribu","name":"Patriarch of the Tribunal","color":"Blue","desc":"Pay the Exalt cost on 200 cards."},{"hash":"SixthHouseDagot","name":"Sixth House Dagoth","color":"Brown","desc":"Win 30 games with an Agility, Intelligence, and Strength deck."},{"hash":"QuarrClanReave","name":"Quarra Clan Reaver","color":"Blue","desc":"Drain 20 health with Quarra Clan Bloodkin."},{"hash":"TheAbomi","name":"The Abominator","color":"Purple","desc":"Use Mecinar to create an Abomination with 13 or more power."},{"hash":"TheAdora","name":"The Adorable","color":"Brown","desc":"Summon 20 Vvardvarks."},{"hash":"TheAlche","name":"The Alchemist","color":"Purple","desc":"Complete Skirmisher, Deflector, Defender, Light Footed [sic], and Vigorous."},{"hash":"TheAnimaLover","name":"The Animal Lover","color":"Brown","desc":"Complete Master Wayrest Plains."},{"hash":"TheArchm","name":"The Archmage","color":"Blue","desc":"Draw a 5-cost action with the College of Winterhold."},{"hash":"TheAssas","name":"The Assassin","color":"Brown","desc":"Use Lethal creatures to kill 200 creatures."},{"hash":"TheAssasBane","name":"The Assassin's Bane","color":"Purple","desc":"Defeat Alisanne at the Night Mother's Crypt on Master."},{"hash":"TheBlackMarshLeade","name":"The Black Marsh Leader","color":"Brown","desc":"Summon 300 Argonians."},{"hash":"TheBlade","name":"The Blademaster","color":"Brown","desc":"Play 200 items."},{"hash":"TheBloodMagicLord","name":"The Blood Magic Lord","color":"Blue","desc":"Play 50 Blood Magic Spells."},{"hash":"TheCapta","name":"The Captain","color":"Brown","desc":"Play 100 Guards."},{"hash":"TheCarto","name":"The Cartographer","color":"Blue","desc":"Complete 3 or more Treasure Hunts with one Treasure Map."},{"hash":"TheCentu","name":"The Centurion","color":"Purple","desc":"Win 100 games with an all-Neutral deck."},{"hash":"TheCeleb","name":"The Celebrity","color":"Brown","desc":"Play the Adoring Fan card."},{"hash":"TheChambofSheog","name":"The Chamberlain of Sheogorath","color":"Brown","desc":"Complete 1 Chaos Arena event."},{"hash":"TheCity'Destr","name":"The City's Destroyer","color":"Brown","desc":"Destroy the Heart of Lorkhan."},{"hash":"TheCity'Savio","name":"The City's Savior","color":"Brown","desc":"Use the Heart of Lorkhan."},{"hash":"TheChampoftheArena","name":"The Champion of the Arena","color":"Brown","desc":"Complete 1 Versus Arena event with no losses."},{"hash":"TheClanChief","name":"The Clan Chieftain","color":"Brown","desc":"Summon 300 Orcs."},{"hash":"TheCleve","name":"The Clever","color":"Brown","desc":"Defeat your opponent in six turns or less."},{"hash":"TheClone","name":"The Clonemaster","color":"Blue","desc":"Summon 20 Daughters of Fyr."},{"hash":"TheConqu","name":"The Conqueror","color":"Brown","desc":"Win 500 games."},{"hash":"TheCreat","name":"The Creator","color":"Purple","desc":"Complete Clonemaster, Master of Assassins, and Blood Magic Lord."},{"hash":"TheCryptRaide","name":"The Crypt Raider","color":"Blue","desc":"Defeat Alisanne at the Night Mother's Crypt."},{"hash":"TheCunni","name":"The Cunning","color":"Brown","desc":"Win 100 games with an Intelligence deck."},{"hash":"TheDaedrMaste","name":"The Daedric Master","color":"Purple","desc":"Complete Supreme Atromancer, Ironmonger, and Master of Flesh."},{"hash":"TheDawnb","name":"The Dawnbreaker","color":"Blue","desc":"Destroy 30 Undead with Dawnbreaker's ability."},{"hash":"TheDeadl","name":"The Deadly","color":"Brown","desc":"Kill 1,000 creatures."},{"hash":"TheDefen","name":"The Defender","color":"Blue","desc":"Give 50 creatures Guard with Elixir of the Defender."},{"hash":"TheDefia","name":"The Defiant","color":"Brown","desc":"Win a game at 1 health."},{"hash":"TheDefle","name":"The Deflector","color":"Blue","desc":"Give 50 Wards with Elixir of Deflection."},{"hash":"TheDestr","name":"The Destructive","color":"Brown","desc":"Deal 10000 damage."},{"hash":"TheDirecofDespa","name":"The Director of Despair","color":"Brown","desc":"Send 50 creatures to the Altar of Despair."},{"hash":"TheDovah","name":"The Dovahkiin","color":"Purple","desc":"A mortal warrior with the soul of a dragon."},{"hash":"TheDrago","name":"The Dragonborn","color":"Purple","desc":"Complete Dragonslayer, Master of Dragons, and Thu'um Master."},{"hash":"TheDrago","name":"The Dragonslayer","color":"Brown","desc":"Kill 50 Dragons."},{"hash":"TheEarthBone","name":"The Earth Bone","color":"Blue","desc":"Ehlnofey, ancestor of Men and Mer."},{"hash":"TheEngin","name":"The Engineer","color":"Blue","desc":"Assemble a Factotum with 10 or more power and health."},{"hash":"TheEscapArtis","name":"The Escape Artist","color":"Brown","desc":"Free Sails-Through-Storms in Mistveil Dungeon."},{"hash":"TheFishe","name":"The Fisherman","color":"Brown","desc":"Kill 10 Slaughterfish."},{"hash":"TheForge","name":"The Forger","color":"Blue","desc":"Play 30 items with Wrothgar Forge."},{"hash":"TheForgoHero","name":"The Forgotten Hero","color":"Brown","desc":"Starting title."},{"hash":"TheFound","name":"The Founder","color":"Purple","desc":"Early supporter of the game."},{"hash":"TheGener","name":"The General","color":"Brown","desc":"Have 8 Imperial Grunts in play at the same time."},{"hash":"TheGeniuGarde","name":"The Genius Gardener","color":"Brown","desc":"Cultivate 50 items with Gardener of Swords."},{"hash":"TheGiantSlaye","name":"The Giant Slayer","color":"Blue","desc":"Complete Master Hilltop Shrine by reducing your opponent's health to 0."},{"hash":"TheGodoftheMachi","name":"The God of the Machine","color":"Purple","desc":"Use the Heart of Lorkhan on Master."},{"hash":"TheGodSlaye","name":"The God Slayer","color":"Purple","desc":"Destroy the Heart of Lorkhan on Master."},{"hash":"TheGladi","name":"The Gladiator","color":"Purple","desc":"Complete Master of the Arena, Champion of the Arena, and Master of Prowess."},{"hash":"TheGolde","name":"The Golden","color":"Blue","desc":"Deal 8 damage with a Goldbrand activation."},{"hash":"TheGrandSapia","name":"The Grand Sapiarch","color":"Brown","desc":"Summon 300 High Elves."},{"hash":"TheGrave","name":"The Gravedigger","color":"Purple","desc":"Have 50 or more creatures in your discard pile."},{"hash":"TheGreatMane","name":"The Great Mane","color":"Brown","desc":"Summon 300 Khajiit."},{"hash":"TheHeale","name":"The Healer","color":"Brown","desc":"Gain 500 health."},{"hash":"TheHighKing","name":"The High King","color":"Brown","desc":"Summon 300 Bretons."},{"hash":"TheHistMage","name":"The Hist Mage","color":"Brown","desc":"Reach 15 max magicka in a game."},{"hash":"TheHorta","name":"The Hortator","color":"Purple","desc":"Complete Unite the Houses."},{"hash":"TheHouseLeade","name":"The House Leader","color":"Brown","desc":"Summon 300 Dark Elves."},{"hash":"TheImmor","name":"The Immortal","color":"Purple","desc":"Have 100 health at some point in a game."},{"hash":"TheImperCapta","name":"The Imperial Captain","color":"Brown","desc":"Summon 300 Imperials."},{"hash":"TheIngen","name":"The Ingenious","color":"Purple","desc":"Complete the Sun-in-Shadow puzzle."},{"hash":"TheIronm","name":"The Ironmonger","color":"Blue","desc":"Deal 120 damage with Iron Atronach."},{"hash":"TheKeepeoftheGreenPact","name":"The Keeper of the Green Pact","color":"Brown","desc":"Summon 300 Wood Elves."},{"hash":"TheKingofOrsin","name":"The King of Orsinium","color":"Blue","desc":"Summon 30 Orcs with Gortwog gro-Nagrom."},{"hash":"TheKing'Prote","name":"The King's Protector","color":"Brown","desc":"Spared the King of Wayrest."},{"hash":"TheKings","name":"The Kingslayer","color":"Brown","desc":"Assassinated the King of Wayrest."},{"hash":"TheLight","name":"The Lightfooted [sic]","color":"Blue","desc":"Give 50 creatures cover with Elixir of Light Feet."},{"hash":"TheListe","name":"The Listener","color":"Blue","desc":"Defeat Uther at the Night Mother's Crypt."},{"hash":"TheLoneWarri","name":"The Lone Warrior","color":"Brown","desc":"Win a game dealing damage with one creature."},{"hash":"TheLuckyLady","name":"The Lucky Lady","color":"Blue","desc":"Deal 20 damage with The Night Mother."},{"hash":"TheMad","name":"The Mad","color":"Purple","desc":"Complete Forger, Walker of Mundus, and King of Orsinium."},{"hash":"TheMasteofAssas","name":"The Master of Assassins","color":"Blue","desc":"Play 30 Brotherhood Assassins."},{"hash":"TheMasteofDrago","name":"The Master of Dragons","color":"Blue","desc":"Summon 20 Dragons in one game."},{"hash":"TheMasteofFlesh","name":"The Master of Flesh","color":"Blue","desc":"Summon a 20 or more power Flesh Atronach."},{"hash":"TheMasteofMirro","name":"The Master of Mirrors","color":"Blue","desc":"Get three copies of a unique creature in play."},{"hash":"TheMasteofProwe","name":"The Master of Prowess","color":"Brown","desc":"Complete 5 Solo Arena events with no losses."},{"hash":"TheMasteofSteal","name":"The Master of Stealth","color":"Blue","desc":"Complete Castle Wayrest, Grand Hall without a disguise, and Eclipse Hideout by sneaking."},{"hash":"TheMasteoftheArena","name":"The Master of the Arena","color":"Blue","desc":"Complete 5 Versus Arena events with no losses."},{"hash":"TheMasteWizar","name":"The Master Wizard","color":"Brown","desc":"Play 500 Actions."},{"hash":"TheMaste","name":"The Mastermind","color":"Blue","desc":"Trigger 50 Last Gasps with Necrom Mastermind."},{"hash":"TheMemorMaste","name":"The Memory Master","color":"Purple","desc":"Complete on Master difficulty: Last Stand, Apprentice, Red Mountain, Betrayal, and Tools."},{"hash":"TheMight","name":"The Mighty","color":"Brown","desc":"Win 100 games with a Strength deck."},{"hash":"TheMirac","name":"The Miraculous","color":"Purple","desc":"Win a game at negative health."},{"hash":"TheMonstHunte","name":"The Monster Hunter","color":"Brown","desc":"Kill 150 Undead and Daedra."},{"hash":"TheNecro","name":"The Necromancer","color":"Brown","desc":"Bring 30 creatures back from the dead."},{"hash":"TheNerev","name":"The Nerevarine","color":"Purple","desc":"The chosen one of Azura's Prophecy."},{"hash":"TheNightMotheKeepe","name":"The Night Mother's Keeper","color":"Purple","desc":"Defeat Uther at the Night Mother's Crypt on Master."},{"hash":"TheNimbl","name":"The Nimble","color":"Brown","desc":"Win 100 games with an Agility deck."},{"hash":"ThePackLeade","name":"The Pack Leader","color":"Blue","desc":"Change 50 Beast Form creatures to Werewolves."},{"hash":"ThePastrChef","name":"The Pastry Chef","color":"Blue","desc":"Make a Sweet Roll."},{"hash":"ThePersi","name":"The Persistent","color":"Brown","desc":"Reach the gold limit for a day for versus battle."},{"hash":"ThePickp","name":"The Pickpocket","color":"Brown","desc":"Pilfer 100 times."},{"hash":"ThePlund","name":"The Plunderer","color":"Blue","desc":"Complete 100 Treasure Hunts."},{"hash":"TheProph","name":"The Prophet","color":"Purple","desc":"Hit a prophecy off all 5 runes in a game."},{"hash":"TheQuick","name":"The Quick","color":"Brown","desc":"Starting title."},{"hash":"TheRedMount","name":"The Red Mountain","color":"Purple","desc":"Deal 100 damage at once with Red Year."},{"hash":"TheRelicHunte","name":"The Relic Hunter","color":"Purple","desc":"Early supporter of Return to Clockwork City"},{"hash":"TheResol","name":"The Resolute","color":"Brown","desc":"Win 100 games with a Willpower deck."},{"hash":"TheRespl","name":"The Resplendent","color":"Purple","desc":"Win a game with an all-premium deck."},{"hash":"TheRihadWarri","name":"The Rihad Warrior","color":"Brown","desc":"Summon 300 Redguards."},{"hash":"TheRisen","name":"The Risen","color":"Blue","desc":"Reanimate a 1/1 Odahviing at the Cultist Meeting Place."},{"hash":"TheRuneb","name":"The Runebreaker","color":"Brown","desc":"Destroy 500 runes."},{"hash":"TheSavioofCyrod","name":"The Savior of Cyrodiil","color":"Brown","desc":"Complete Chapter 20."},{"hash":"TheSeer","name":"The Seer","color":"Brown","desc":"Play 100 Prophecies."},{"hash":"TheSilen","name":"The Silencer","color":"Purple","desc":"Early supporter of the Dark Brotherhood."},{"hash":"TheSkirm","name":"The Skirmisher","color":"Blue","desc":"Deal 30 player damage with creatures buffed by Skirmisher's Elixir."},{"hash":"TheSmart","name":"The Smart","color":"Brown","desc":"Starting title."},{"hash":"TheSmugg","name":"The Smuggler","color":"Brown","desc":"Complete Chapter 8."},{"hash":"TheSpeak","name":"The Speaker","color":"Purple","desc":"Early supporter of the Dark Brotherhood."},{"hash":"TheStalw","name":"The Stalwart","color":"Brown","desc":"Win 100 games with an Endurance deck."},{"hash":"TheStron","name":"The Strong","color":"Brown","desc":"Starting title."},{"hash":"TheSupreAtrom","name":"The Supreme Atromancer","color":"Blue","desc":"Summon 40 Atronachs."},{"hash":"TheTacti","name":"The Tactician","color":"Brown","desc":"Move 30 Creatures [sic]."},{"hash":"TheTemplChose","name":"The Temple's Chosen","color":"Brown","desc":"Reach 40 health at the Temple of Akatosh."},{"hash":"TheThiefofDream","name":"The Thief of Dreams","color":"Blue","desc":"Use Orb of Vaermina 10 times to get a card that costs 8 or more."},{"hash":"TheThu'uMaste","name":"The Thu'um Master","color":"Blue","desc":"Play 100 Shouts."},{"hash":"TheTorme","name":"The Tormentor","color":"Brown","desc":"Shackle 50 enemy creatures."},{"hash":"TheTreasHunte","name":"The Treasure Hunter","color":"Purple","desc":"Complete Golden, Thief of Dreams, and Dawnbreaker."},{"hash":"TheTriumJarl","name":"The Triumphant Jarl","color":"Brown","desc":"Summon 300 Nords."},{"hash":"TheTrueHighKing","name":"The True High King","color":"Blue","desc":"Draw 50 Nords with Ulfric Stormcloak."},{"hash":"TheUntou","name":"The Untouchable","color":"Brown","desc":"Win a game of 5 turns or longer without taking damage."},{"hash":"TheUnvan","name":"The Unvanquished","color":"Blue","desc":"Win 1000 games."},{"hash":"TheVicto","name":"The Victorious","color":"Brown","desc":"Win 100 games."},{"hash":"TheVigor","name":"The Vigorous","color":"Blue","desc":"Give 100 points of health with Elixir of Vigor."},{"hash":"TheWalkeofMundu","name":"The Walker of Mundus","color":"Blue","desc":"Give 50 keywords with Mundus Stone."},{"hash":"ThievGuildBandi","name":"Thieves Guild Bandit","color":"Brown","desc":"Complete 10 Thieves Guild Quests."},{"hash":"ThievGuildMaste","name":"Thieves Guild Master","color":"Blue","desc":"Complete 60 Thieves Guild Quests."},{"hash":"ThievGuildPickp","name":"Thieves Guild Pickpocket","color":"Brown","desc":"Complete 3 Thieves Guild Quests."},{"hash":"ThievGuildRecru","name":"Thieves Guild Recruiter","color":"Blue","desc":"Gain 30 magicka with Brynjolf."},{"hash":"ThievGuildShado","name":"Thieves Guild Shadowfoot","color":"Brown","desc":"Complete 30 Thieves Guild Quests."},{"hash":"TribuTemplAdept","name":"Tribunal Temple Adept","color":"Brown","desc":"Win 30 games with an Endurance, Intelligence, and Willpower deck."},{"hash":"WarHero","name":"War Hero","color":"Purple","desc":"Complete Untouchable, Lone Warrior, and Unvanquished."}];
let mainTableBody = document.querySelector('.main-table tbody');
let htmlMainTableBody = '';

buildTable();
loadCheckboxValues();
initEventListeners();

function buildTable() {
    for (let i = 0; i < arrTitles.length; i++) {
        let title = arrTitles[i];
        htmlMainTableBody += '<tr>';
        htmlMainTableBody += '<td> <input type="checkbox" name="' + title.hash + '" /></td>';
        htmlMainTableBody += '<td>' + title.name + '</td>';
        htmlMainTableBody += '<td data-color="'+ title.color + '"><div class="color"></div></td>';
        htmlMainTableBody += '<td>' + title.desc + '</td>';
        htmlMainTableBody += '</tr>';
    }
    mainTableBody.innerHTML = htmlMainTableBody;
}

function loadCheckboxValues() {
    if(!location.hash) return;
    try {
        let strHashes = atob(location.hash.substr(1));
        let hashes = strHashes.split(',');

        for (let i = 0; i < hashes.length; i++) {
            let h = hashes[i];
            let checkbox = document.querySelector('input[name="' + h +'"]');
            if(checkbox) {
                checkbox.checked = true;
                checkbox.parentElement.parentElement.setAttribute('data-checked', checkbox.checked);
            }
        }
    }catch(e){
        location.hash = '';
    }
}

function initEventListeners() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let tableCells = document.querySelectorAll('.main-table tbody td');
    let btn_hide = document.querySelectorAll('.btn_hide');

    for(let i=0; i < checkboxes.length; i++){
        checkboxes[i].onclick = function(){
            buildURLHash();
        }
    }

    for(let i=0; i < tableCells.length; i++){
        tableCells[i].onclick = function(e){
            e.stopPropagation();
            e.preventDefault();
            let cb = this.parentElement.querySelector('input[type="checkbox"]');
            cb.checked = !cb.checked;
            this.parentElement.setAttribute('data-checked', cb.checked);
            buildURLHash();
        }
    }

    for(let i=0; i < btn_hide.length; i++){
        btn_hide[i].onclick = function(e){
            e.preventDefault();
            mainTableBody.className = this.value;
        }
    }

}

function buildURLHash() {
    let checked_checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let hash = '';
    for(let i=0; i < checked_checkboxes.length; i++){
        hash += checked_checkboxes[i].name + ',';
    }
    location.hash = btoa(hash);
}