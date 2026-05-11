
    function paljonkoKelloOn(i) {
        if (i < 10) {i = "0" + i};  // pienille kellonajoille se etunolla
        return i;
    }

    function paivitaObs() {

        let options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        var nykyinenpaiva = (new Intl.DateTimeFormat("fi-FI", options).format(new Date()));

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
 
    function paivitaObs10lla() {

        let options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        var nykyinenpaiva = (new Intl.DateTimeFormat("fi-FI", options).format(new Date()));

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
        var teksti = "";
        for (let i = 0; i < localStorage.length; i++) {     
            let key = localStorage.key(i);
            teksti = key + ",";
            teksti = teksti + localStorage.getItem(key);
            let lkm = ((teksti.split(",").length - 1))
            teksti = teksti + "(" + lkm + ")";
            teksti = teksti + "<br \><br \>";
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

    function inkrementoiLaskuri2() {
        const dateField2 = document.createElement("span");
        dateField2.innerText = new Date().toISOString().split('.')[0].split('T').join(' ');
        document.body.appendChild(dateField2);
        document.body.appendChild(document.createElement("br"));
        paivitaObs();
    }

    function inkrementoiLaskuri3() {
        i = 0;
        do {
            const dateField1 = document.createElement("span");
            dateField1.innerText = new Date().toISOString().split('.')[0].split('T').join(' ');
            document.body.appendChild(dateField1);
            document.body.appendChild(document.createElement("br"));
            paivitaObs();
          i++;
        }
        while (i < 10); 
    }

    function inkrementoiLaskuri4() {
        i = 0;
        do {
            const dateField2 = document.createElement("span");
            dateField2.innerText = new Date().toISOString().split('.')[0].split('T').join(' ');
            document.body.appendChild(dateField2);
            document.body.appendChild(document.createElement("br"));
            paivitaObs();
            i++;
        }
        while (i < 10);        
    }

    function tyhjennaLaskurit() {
        tyhjennaObs();
    }

    document.getElementById('laskuri1').addEventListener('click', inkrementoiLaskuri1);
    document.getElementById('laskuri2').addEventListener('click', inkrementoiLaskuri2);
    document.getElementById('laskuri3').addEventListener('click', inkrementoiLaskuri3);
    document.getElementById('laskuri4').addEventListener('click', inkrementoiLaskuri4);    
    document.getElementById('tyhjenna').addEventListener('click', tyhjennaObs);
    document.getElementById('loki').addEventListener('click', naytaObs);

