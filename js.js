

    function kerroMikaPaivaOn() {

        let options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        var nykyinenpaiva = (new Intl.DateTimeFormat("fi-FI", options).format(new Date()));

        return nykyinenpaiva;
    }

    function paljonkoKelloOn(i) {
        if (i < 10) {i = "0" + i};  // pienille kellonajoille se etunolla
        return i;
    }

    function paivitaObs() {

        var nykyinenpaiva = kerroMikaPaivaOn();

        h = paljonkoKelloOn(new Date().getHours());
        m = paljonkoKelloOn(new Date().getMinutes());

        const kellonaika = h + ":" + m;

        var kellonaikalista = localStorage.getItem(nykyinenpaiva);
        if (kellonaikalista) {
            kellonaikalista = kellonaikalista + "," + kellonaika;
            localStorage.setItem(nykyinenpaiva, kellonaikalista);
        } else {
            localStorage.setItem(nykyinenpaiva, kellonaika);
        }    
    }

    function paivitaObsMerkinta() {
        var nykyinenpaiva = kerroMikaPaivaOn();
        let merkinta = document.getElementById('merkinta').value;
        let paivitettavaMerkinta = localStorage.getItem(nykyinenpaiva);
        if (paivitettavaMerkinta) {
            paivitettavaMerkinta += ", "; 
            paivitettavaMerkinta += merkinta;
            localStorage.setItem(nykyinenpaiva, paivitettavaMerkinta);
        } else {
            localStorage.setItem(nykyinenpaiva, merkinta);
        }
        naytaObs();
    }
 
    function paivitaObs10lla() {

        var nykyinenpaiva = kerroMikaPaivaOn();

        h = paljonkoKelloOn(new Date().getHours());
        m = paljonkoKelloOn(new Date().getMinutes());

        const kellonaika = h + ":" + m;

        var kellonaikalista = localStorage.getItem(nykyinenpaiva);
        if (kellonaikalista) {
            kellonaikalista = kellonaikalista + "," + kellonaika;
            localStorage.setItem(nykyinenpaiva, kellonaikalista);
        } else {
            localStorage.setItem(nykyinenpaiva, kellonaika);
        }        
    }

    function tyhjennaObs() {
        if(confirm("Varma?")) {
            localStorage.clear();
        } else {
        }
    };

    function naytaObs() {
        let loki = document.getElementById("aikaloki");
        loki.innerHTML = "";
        var teksti = "<br />";
        for (let i = 0; i < localStorage.length; i++) {     
            let key = localStorage.key(i);
            teksti = "<br>";
            teksti = teksti + key + "<br>";
            teksti = teksti + "<br>";

            teksti = teksti + localStorage.getItem(key);
            let lkm = ((teksti.split(",").length))
            teksti = teksti + "(" + lkm + ")";
            teksti = teksti + "<br><br>";
            loki.innerHTML += teksti;
        }
    }

    function inkrementoiLaskuri1() {
        const dateField1 = document.createElement("span");
        dateField1.innerText = new Date().toISOString().split('.')[0].split('T').join(' ');
        document.body.appendChild(dateField1);
        document.body.appendChild(document.createElement("br"));
        paivitaObs();
    }

    function inkrementoilaskuriidealisointi() {
        const dateField2 = document.createElement("span");
        dateField2.innerText = new Date().toISOString().split('.')[0].split('T').join(' ');
        document.body.appendChild(dateField2);
        document.body.appendChild(document.createElement("br"));
        paivitaObs();
    }


    function tyhjennaLaskurit() {
        tyhjennaObs();
    }

    document.getElementById('laskuriidealisointi').addEventListener('click', inkrementoilaskuriidealisointi);
    document.getElementById('merkinta1').addEventListener('click', paivitaObsMerkinta);
    document.getElementById('tyhjenna').addEventListener('click', tyhjennaObs);
    document.getElementById('loki').addEventListener('click', naytaObs);

