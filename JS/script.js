        let cards = document.querySelector('.cards')

        // API JSON
        fetch('pokemons.json')
            .then(response => response.json())
            .then(dados => {
                
                dados.forEach(elemento => {
                    // criando elementos
                    let card = document.createElement('div')
                    let img = document.createElement('img')

                    // pegando elemento DOM do HTML e colocando na div card criado em JS
                    cards.appendChild(card)
                    // colocando img dentro de card
                    card.appendChild(img)
                    // colocando css no card
                    card.classList.add('card')

                    // colando caminhos das img e nome
                    img.src = elemento.imagem
                    img.alt = elemento.nome

                    
                    // criando e colocando nome na caixa
                    let nomePokemon = document.createElement('p')
                    card.appendChild(nomePokemon)
                    nomePokemon.textContent = elemento.nome

                    
                    if(elemento.Tipo1 == 'Grass'){
                        let tipoPokemon = document.createElement('p')
                        card.appendChild(tipoPokemon)
                        tipoPokemon.textContent = elemento.Tipo1
                        tipoPokemon.classList.add('tipoPlanta')

                        if(elemento.Tipo2 == 'Poisen'){
                            
                            let tipoPokemon = document.createElement('p')
                            card.appendChild(tipoPokemon)
                            tipoPokemon.textContent = elemento.Tipo2
                            tipoPokemon.classList.add('tipoVeneno')

                        }
                    }
                    if(elemento.Tipo1 == 'Fire'){
                        let tipoPokemon = document.createElement('p')
                        card.appendChild(tipoPokemon)
                        tipoPokemon.textContent = elemento.Tipo1
                        tipoPokemon.classList.add('tipoFogo')

                        if(elemento.nome == 'Charizard'){
                            let tipoPokemon = document.createElement('p')
                            card.appendChild(tipoPokemon)
                            tipoPokemon.textContent = elemento.Tipo2
                            tipoPokemon.classList.add('tipoVoador')
                        }
                    }
                    if(elemento.Tipo1 == 'Water'){
                        let tipoPokemon = document.createElement('p')
                        card.appendChild(tipoPokemon)
                        tipoPokemon.textContent = elemento.Tipo1
                        tipoPokemon.classList.add('tipoAgua')
                    }
                    
                })
            })