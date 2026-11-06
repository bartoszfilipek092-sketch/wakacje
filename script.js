const DATA_WAKACJI= new Date(2027,5,26);

function dopiszZero(liczba) {
    if (liczba<10){
        return "0" + x;
    }
    return String(x);

}


function pokazZegar(){
    const teraz = new Date();
    const godziny = dopiszZero(teraz.getHours());
    const minuty = dopiszZero(teraz.getMinutes());
    const sekundy = dopiszZero(teraz.getSeconds());
    document.getElementById("zegar").textContent = godziny+ ";" + minuty+ ":" + sekundy;
}

function pokazDate() {
    const teraz = new  Date();
    document.getElementById("data").textContent = teraz.toLocaleDateString("pl-PL");

}

function IleDniDo(dataOd,dataDo) {
    const roznicaMs = dataOd-dataDo;
    const msWDniu = 1000*60*60*24;
    return Math.ceil(roznicaMs/msWDniu);


}
/**
 * Oblicza ile dni zostało do wakacji 
 * @param (number) data kiedy sa wakacje 
 * @param (number) data dzisiejsza
 * @retun (number) ile zostało wakacji
 * @author Bartosz

 */
    
function pokazDni(){
    const teraz = new Date();
    const dni = IleDniDo(teraz, DATA_WAKACJI);
    document.getElementById("dni").textContent = dni;

}
pokazDate();
pokazZegar();
pokazDni();
setInterval(pokazZegar,1000);