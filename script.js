const baseUrl = "http://127.0.0.1:5000/"
const aleatorio = "charada"
let per = document.querySelector('#per')
let res = document.querySelector('#res')
let input_res = document.querySelector('#input-res')
let res_charada = ''


async function getCharada() {
    try {
        const charada = await fetch(baseUrl + aleatorio,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
        })
        console.log(charada)

        const charadaJson = await charada.json()
        per.innerHTML = `<p>${charadaJson.pergunta}</p> `
        res_charada = charadaJson.resposta
        console.log(res_charada)
    } catch (error){
        console.log('Erro ao chamar a API:'+error)
    }
}

function revealCharada() {
    input_res.readOnly = true
    res_input = input_res.value.toLowerCase().replace(/\s/g, '').replace('.', '').replace('-', '')
    res_charada_baixa = res_charada.toLowerCase().replace(/\s/g, '').replace('.', '')
    
    

    if (res_charada_baixa == res_input) {
        res.innerHTML =` <p class="text-green-500">Acertou! A resposta é "${res_charada}"</p> `
    }else {
        res.innerHTML =` <p class="text-red-500">Você errou!! A resposta é "${res_charada}"</p> `
    }

}

getCharada()
