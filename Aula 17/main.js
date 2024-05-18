const filmes = document.querySelector("#sec1")


async function buscar(){
        const requisicao = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR")
        const resposta = await requisicao.json()
        console.log(resposta.results);
        if(resposta.erro){
            console.log("Busca inválida")
        }else{
            resposta.results.forEach((filme) =>{

            const card = document.createElement("div") 
            const title = document.createElement("p")
            const imagem = document.createElement("img")
            const overview = document.createElement("p")
            const section = document.createElement("div")

            filmes.appendChild(section)
            section.classList.add("section")
                
            imagem.src = `https://image.tmdb.org/t/p/w500${filme.poster_path}`
            imagem.alt = "|Poster|"
            imagem.width = "300"
            imagem.classList.add("imagem_filme")

            title.textContent = `Nome: ${filme.title}`

            // overview.textContent = `Sinopse: ${filme.overview}`

            section.appendChild(card)

            card.append(imagem,title,overview)
            card.classList.add("card")

            })

        }
   
}
buscar()