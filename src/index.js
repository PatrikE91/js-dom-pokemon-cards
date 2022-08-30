const cards = document.querySelector('.cards')

for(i = 0; i < data.length; i++){
    // const cards = document.createElement('ul')
    // cards.setAttribute('class', 'cards')
    // document.body.append(cards)

    const card = document.createElement('li')
    card.setAttribute('class', 'card')
    cards.append(card)
    
    const pokemonName = document.createElement('h2')
    pokemonName.innerText = data[i].name.toUpperCase();
    card.append(pokemonName)
    
    const pokemonImage = document.createElement('img')
    pokemonImage.setAttribute('src', data[i].sprites.other["official-artwork"].front_default)
    pokemonImage.setAttribute('class', 'card--img')
    pokemonImage.setAttribute('width', '256')
    card.append(pokemonImage)

    const text = document.createElement('ul')
    text.setAttribute('class', 'card--text')
    for (let j = 0; j < 6; j++) {
    const stats = document.createElement('li');
    stats.innerText = data[i].stats[j].stat.name.toUpperCase() +': '+ data[i].stats[j].base_stat;
    text.append(stats)
    }
    card.append(text)
   

    const versionHeader = document.createElement('p')
    // const versionGame = document.createElement('p')
    versionHeader.setAttribute('class', 'card--text version')
    const versionArray = []
    for (let k = 0; k < data[i].game_indices.length; k++) {
        versionArray.push(data[i].game_indices[k].version.name) 
    }
    let string = versionArray.toString()
    const spacedStr = string.replace(/,/g, ', ')
    versionHeader.innerText = 'Appeared in: ' + spacedStr
    // versionGame.innerText = versionArray
    card.append(versionHeader)
    // versionHeader.append(versionGame)
    
}