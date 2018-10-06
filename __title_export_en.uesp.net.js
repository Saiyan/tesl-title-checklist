//This Script can be run in the Browser at http://en.uesp.net/wiki/Legends:Titles
//and prints all Titles as JSON to the console

//gets the first char of each word in the card name
function getHashForCardName(name) {
    let hash = '';
    let words = name.split(' ');

    for(let i=0; i < words.length; i++){
        for(let j=0; j < 5; j++){
            if(words[i][j])
                hash += words[i][j];
        }
    }

    return hash;
}

let arrTitles = [];
$('.wikitable tbody tr').each(function(){
    let name = $(this).find('td:nth-child(1)').text();
    let objTitle = {
        hash: getHashForCardName(name),
        name: name,
        color: $(this).find('td:nth-child(2)').text(),
        desc: $(this).find('td:nth-child(5)').text()
    };

    arrTitles.push(objTitle);
});

console.log(JSON.stringify(arrTitles));