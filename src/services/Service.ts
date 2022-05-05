import axios from "axios";

export const api = axios.create({
    baseURL:'https://blog-pess.herokuapp.com'
})

export const cadastroUsuario = async(url: any, dados: any, setDados: any) => {      // requisição para cadastro do usuário
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
}

export const login = async(url: any, dados: any, setDados: any) => {        // requisição parao meu login
    const resposta = await api.post(url,dados)
    setDados(resposta.data.token)
}

export const busca = async(url: any, setDados: any, header: any) => {    // requisição para a busca das minhas postagens
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const buscaId = async(url: any, setDados: any, header: any) => {    // requisição para a busca das minhas postagens
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const post = async(url: any, dados:any, setDados: any, header: any) => {    // requisição para a busca das minhas postagens
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const put = async(url: any, dados:any, setDados: any, header: any) => {    // requisição para a busca das minhas postagens
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const deleteId = async(url: any, header: any) => {    // requisição para a busca das minhas postagens
     await api.post(url, header)
    
}