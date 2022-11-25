//interface que devemos fazer todo component que usa ela assinar
export interface Pensamento{
    id?: number //O interrogação deixa o ID como opcional
    conteudo: string
    autoria: string
    modelo: string
    favorito: boolean
}