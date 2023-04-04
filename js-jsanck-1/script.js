const utenti = [
{
    nome: 'davide',
    cognome: 'calaio',
    eta: 70,
},
{
    nome: 'davide',
    cognome: 'calaio',
    eta: 25,
},
{
    nome: 'davide',
    cognome: 'calaio',
    eta: 30,
},
{
    nome: 'davide',
    cognome: 'calaio',
    eta: 14,
},
{
    nome: 'davide',
    cognome: 'calaio',
    eta: 18,
},
{
    nome: 'davide',
    cognome: 'calaio',
    eta: 82,
},
{
    nome: 'davide',
    cognome: 'calaio',
    eta: 40,
}
]


const utente =  utenti.filter((age) => {
    if(age.eta <= 18){
        console.log(age.eta);
        return true
    }
    else if(age.eta >= 65) return true
    console.log(age.eta);
    return false
})

