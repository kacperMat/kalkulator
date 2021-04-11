const prompt = require("prompt-sync")({ sigint: true });



function wykonaj_dzialanie(dzialanie,liczba1,liczba2)
{
if (dzialanie==="dodawanie") {
    return liczba1 + liczba2;

}
else if (dzialanie==="odejmowanie") {
    return liczba1 - liczba2;

}
else if (dzialanie==="mnozenie") {
    return liczba1 * liczba2;

}
else if (dzialanie==="dzielenie") {
    return liczba1 / liczba2;

}
}

function jakie_dzialanie()
{
    let dzialanie = prompt("Jakie działanie chcesz wykonać? ");
    return dzialanie
}

function liczba_1()
{
    let liczba1 = prompt("Podaj pierwszą liczbę: ");
    return liczba1
}

function liczba_2()
{
    let liczba2 = prompt("Podaj drugą liczbę: ");
    return liczba2
}
function main()
{
 dzialanie = jakie_dzialanie();

 liczba1 = liczba_1();
 liczba2 = liczba_2();

 const wynik = wykonaj_dzialanie(dzialanie,liczba1,liczba2);

 console.log=(wynik);
}

main();