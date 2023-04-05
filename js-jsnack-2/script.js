const studenti = [
    {
        nome:'davide',
        cognome : 'calaio',
        numeroMatricola : '73816',
        esami: [
            matematica = 28,
            fisica = 29,
            elettronica = 26
        ]
    },
    {
        nome:'samuele',
        cognome : 'bumbello',
        numeroMatricola : '32116',
        esami: [
            italiano = 27,
            storia = 26,
            filosofia = 25,
            arte = 30
        ]
    },
    {
        nome:'filippo',
        cognome : 'trere',
        numeroMatricola : '32116',
        esami: [
            italiano = 27,
            filosofia = 25,
            matematica = 20,
        ]
        
    },
    {
        nome:'andrea',
        cognome : 'ciccio',
        numeroMatricola : '32116',
        esami: [
            storia = 23,
            filosofia = 30,
            arte = 30,
            chimica = 27
        ]
        
    }
]

 const nuovoElenco = [];

studenti.forEach(studente => {
    let somma = 0;
    studente.esami.forEach(esame => somma += esame);
    nuovoElenco.push({
        nome: studente.nome,
        cognome: studente.cognome,
        media: somma / studente.esami.length,
    });
});

console.log(nuovoElenco);


