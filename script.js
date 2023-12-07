function eltunik() {
    document.getElementById("nyeremeny").style.display = "none";
    document.getElementById("csak_hir").style.display = "none";
    document.getElementById("nyer").style.display = "block";
    document.getElementById("esely").style.display = "none";

}

function elojon() {
    document.getElementById("nyeremeny").style.display = "block";
    document.getElementById("csak_hir").style.display = "block";
    document.getElementById("nyer").style.display = "none";
    document.getElementById("esely").style.display = "block";

}

function AdatokVissza() {

}

function resetForm() {
    // radio visszaállítása
    let radiok = nyeremeny.querySelectorAll('input[type="radio"]');
    radiok.forEach(function (radio) {
        radio.checked = false;
    });

    // checkboxes visszaállítása
    let checkboxok = nyeremeny.querySelectorAll('input[type="checkbox"]');
    checkboxok.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    // number visszaállítás
    document.getElementById("5").value = "";

    // date visszaállítás
    document.getElementById("7").value = "";

    // text visszaállítás
    document.getElementById("8").value = "";


    // kiirasok visszaállítás
    document.getElementById("pontok_ki1").innerText = "A pontszámod: ";
    document.getElementById("pontok_ki2").innerText = "A pontszámod: ";
    document.getElementById("pontok_ki3").innerText = "A pontszámod: ";
    document.getElementById("pontok_ki4").innerText = "Eredmény: ";
    document.getElementById("pontok_ki5").innerText = "";
    document.getElementById("pontok_ki6").innerText = "";
    document.getElementById("pontok_ki7").innerText = "";

    document.getElementById("5_mo").innerText = "";
    document.getElementById("7_mo").innerText = "";
    document.getElementById("8_mo").innerText = "";

    // esely visszaállítás
    document.getElementById("esely").style.display = "block";

    //fromázás visszaállítás
    document.getElementById("helyes1").style.color = "";
    document.getElementById("helyes2").style.color = "";
    document.getElementById("helyes3").style.color = "";
    document.getElementById("helyes4").style.color = "";
    document.getElementById("helyes6_1_span").style.color = "";
    document.getElementById("helyes6_2_span").style.color = "";
    document.getElementById("helyes6_3_span").style.color = "";
    document.getElementById("helyes9").style.color = "";
}




function befejez() {
    document.getElementById("helyes1").style.color = "green";
    document.getElementById("helyes2").style.color = "green";
    document.getElementById("helyes3").style.color = "green";
    document.getElementById("helyes4").style.color = "green";
    document.getElementById("helyes6_1_span").style.color = "green";
    document.getElementById("helyes6_2_span").style.color = "green";
    document.getElementById("helyes6_3_span").style.color = "green";
    document.getElementById("helyes9").style.color = "green";





    let pontok1 = 0;

    let egyes = document.getElementById("1").checked;

    if (egyes) {
        pontok1++
    }

    let kettes = document.getElementById("2").checked;

    if (kettes) {
        pontok1++
    }

    let harmas = document.getElementById("3").checked;

    if (harmas) {
        pontok1++
    }
    if (pontok1 == 3) {
        document.getElementById("pontok_ki1").innerText = "Pontszámod: 3/" + String(pontok1) + " Gratulalok, részt vehetsz a 20%-os kedvezmény sorsolásában!";
    }
    else {
        document.getElementById("pontok_ki1").innerText = "Pontszámod: 3/" + String(pontok1) + " Sajnos nem lett hibátlan, így a 20%-os kedvezményért nem fogunk sorsolni!";
    }

    let pontok2 = 0;

    let negyes = document.getElementById("4").checked;

    if (negyes) {
        pontok2++
    }

    let otos = document.getElementById("5").value;

    if (otos == 12) {
        pontok2++;
    }

    document.getElementById("5_mo").innerText = "A helyes válasz: 12";

    let hatos_jo_1 = document.getElementById("helyes6_1").checked;
    let hatos_jo_2 = document.getElementById("helyes6_2").checked;
    let hatos_jo_3 = document.getElementById("helyes6_3").checked;
    let hatos_rossz_4 = document.getElementById("helytelen6_1").checked;
    let hatos_rossz_5 = document.getElementById("helytelen6_2").checked;
    let hatos_rossz_6 = document.getElementById("helytelen6_3").checked;
    let hatos_rossz_7 = document.getElementById("helytelen6_4").checked;

    let reszpontok = 0

    if (hatos_jo_1) {
        reszpontok++;
    }

    if (hatos_jo_2) {
        reszpontok++;
    }

    if (hatos_jo_3) {
        reszpontok++;
    }

    if (hatos_rossz_4) {
        reszpontok--;
    }

    if (hatos_rossz_5) {
        reszpontok--;
    }

    if (hatos_rossz_6) {
        reszpontok--;
    }

    if (hatos_rossz_7) {
        reszpontok--;
    }

    if (reszpontok == 3) {
        pontok2++;
    }
    if (pontok2 == 3) {
        document.getElementById("pontok_ki2").innerText = "Pontszámod: 3/" + String(pontok2) + " Gratulalok, részt vehetsz a páros belépő sorsolásában!";
    }
    else {
        document.getElementById("pontok_ki2").innerText = "Pontszámod: 3/" + String(pontok2) + " Sajnos nem lett hibátlan, így a páros belépőért nem fogunk sorsolni!";
    }

    let pontok3 = 0
    let hetes = document.getElementById("7").value;

    if (hetes === "1957-10-04") {
        pontok3++;
    }

    document.getElementById("7_mo").innerText = "A helyes válasz: 1957. 10. 04.";

    let nyolcas = document.getElementById("8").value;

    if (nyolcas === "Sergei Krikalev") {
        pontok3++;
    }

    document.getElementById("8_mo").innerText = "A helyes válasz: Sergei Krikalev";


    let kilences = document.getElementById("9").checked;

    if (kilences) {
        pontok3++
    }

    if (pontok3 == 3) {
        document.getElementById("pontok_ki3").innerText = "Pontszámod: 3/" + String(pontok3) + " Gratulalok, részt vehetsz a családi belépő sorsolásában!";
    }
    else {
        document.getElementById("pontok_ki3").innerText = "Pontszámod: 3/" + String(pontok3) + " Sajnos nem lett hibátlan, így a családi belépőért nem fogunk sorsolni!";
    }

    if (pontok1 < 3 | pontok2 < 3 | pontok3 < 3) {

        document.getElementById("esely").style.display = "none";
    }
    if (pontok1 < 3 || pontok2 < 3 || pontok3 < 3) {

        document.getElementById("pontok_ki4").innerText = "Eredmény: Sajnos nem sikerült egyik részt sem hibátlanra kitöltened... Próbálkozz újra jövőhéten!";

    }
    if (pontok1 == 3 || pontok2 == 3 || pontok3 == 3) {
        document.getElementById("esely").style.display = "block";
        document.getElementById("pontok_ki4").innerText = "Eredmény: Gratulálunk! A vasárnapi esti sorsoláson, akár te is megnyerheted ajándékainkat:";

    }

    if (pontok1 == 3) {

        document.getElementById("pontok_ki5").innerText = " \t    - 20% kedvezmény a következő látogatásodkor";

    }

    if (pontok2 == 3) {

        document.getElementById("pontok_ki6").innerText = "     - Páros belépő";

    }
    if (pontok3 == 3) {

        document.getElementById("pontok_ki7").innerText = "     - Családi belépő";

    }
}

