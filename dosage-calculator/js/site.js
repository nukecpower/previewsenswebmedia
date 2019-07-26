document.addEventListener("DOMContentLoaded", function (event) {
    var cal = document.getElementsByClassName("dosage-calculator-container");
    if (cal.length < 1) {
        return;
    }

    function getDos() {
        var exp, lvl, wgh = null;
        if (document.querySelector('input[name=dosage-cal-field-1]:checked')) {
            var exp = document.querySelector('input[name=dosage-cal-field-1]:checked').value;
        }

        if (document.querySelector('input[name=dosage-cal-field-2]:checked')) {
            var lvl = document.querySelector('input[name=dosage-cal-field-2]:checked').value;
        }

        if (document.querySelector('input[name=dosage-cal-field-3]:checked')) {
            var wgh = document.querySelector('input[name=dosage-cal-field-3]:checked').value;
        }



        if (exp == null || lvl == null || wgh == null) {
            return false;
        } else {


            var dos;
            switch (exp) {
                case 'new':
                    switch (lvl) {
                        case 'none':
                            switch (wgh) {
                                case '34 - 45':
                                    dos = 9;
                                    break;
                                case '46 - 56':
                                    dos = 10;
                                    break;
                                case '57 - 86':
                                    dos = 14;
                                    break;
                                case '68 - 90':
                                    dos = 17;
                                    break;
                                case '91+':
                                    dos = 20;
                                    break;
                            }
                            break;
                        case 'med':
                            switch (wgh) {
                                case '34 - 45':
                                    dos = 12;
                                    break;
                                case '46 - 56':
                                    dos = 15;
                                    break;
                                case '57 - 86':
                                    dos = 18;
                                    break;
                                case '68 - 90':
                                    dos = 21;
                                    break;
                                case '91+':
                                    dos = 24;
                                    break;
                            }
                            break;
                        case 'sev':
                            switch (wgh) {
                                case '34 - 45':
                                    dos = 15;
                                    break;
                                case '46 - 56':
                                    dos = 17;
                                    break;
                                case '57 - 86':
                                    dos = 21;
                                    break;
                                case '68 - 90':
                                    dos = 24;
                                    break;
                                case '91+':
                                    dos = 28;
                                    break;
                            }
                            break;
                    }

                    break;
                case 'used':
                    switch (lvl) {
                        case 'none':
                            switch (wgh) {
                                case '34 - 45':
                                    dos = 10;
                                    break;
                                case '46 - 56':
                                    dos = 11;
                                    break;
                                case '57 - 86':
                                    dos = 15;
                                    break;
                                case '68 - 90':
                                    dos = 18;
                                    break;
                                case '91+':
                                    dos = 21;
                                    break;
                            }
                            break;
                        case 'med':
                            switch (wgh) {
                                case '34 - 45':
                                    dos = 13;
                                    break;
                                case '46 - 56':
                                    dos = 16;
                                    break;
                                case '57 - 86':
                                    dos = 19;
                                    break;
                                case '68 - 90':
                                    dos = 22;
                                    break;
                                case '91+':
                                    dos = 25;
                                    break;
                            }
                            break;
                        case 'sev':
                            switch (wgh) {
                                case '34 - 45':
                                    dos = 16;
                                    break;
                                case '46 - 56':
                                    dos = 18;
                                    break;
                                case '57 - 86':
                                    dos = 22;
                                    break;
                                case '68 - 90':
                                    dos = 25;
                                    break;
                                case '91+':
                                    dos = 29;
                                    break;
                            }
                            break;
                    }
                    break;
                case 'ext':
                    switch (lvl) {
                        case 'none':
                            switch (wgh) {
                                case '34 - 45':
                                    dos = 12;
                                    break;
                                case '46 - 56':
                                    dos = 13;
                                    break;
                                case '57 - 86':
                                    dos = 17;
                                    break;
                                case '68 - 90':
                                    dos = 20;
                                    break;
                                case '91+':
                                    dos = 23;
                                    break;
                            }
                            break;
                        case 'med':
                            switch (wgh) {
                                case '34 - 45':
                                    dos = 15;
                                    break;
                                case '46 - 56':
                                    dos = 18;
                                    break;
                                case '57 - 86':
                                    dos = 21;
                                    break;
                                case '68 - 90':
                                    dos = 24;
                                    break;
                                case '91+':
                                    dos = 27;
                                    break;
                            }
                            break;
                        case 'sev':
                            switch (wgh) {
                                case '34 - 45':
                                    dos = 17;
                                    break;
                                case '46 - 56':
                                    dos = 20;
                                    break;
                                case '57 - 86':
                                    dos = 24;
                                    break;
                                case '68 - 90':
                                    dos = 27;
                                    break;
                                case '91+':
                                    dos = 31;
                                    break;
                            }
                            break;
                    }
                    break;
            }


            if (dos !== 'undefined' && dos > 0) {
                var res = document.getElementById('dosage-cal-result-js');
                res.innerHTML = dos;
            }


        }


    }


    const exp = document.querySelectorAll('[name="dosage-cal-field-1"]');
    const lvl = document.querySelectorAll('[name="dosage-cal-field-2"]');
    const wgh = document.querySelectorAll('[name="dosage-cal-field-3"]');


    exp.forEach((el) => {
        el.addEventListener('change', getDos);
    });


    lvl.forEach((el) => {
        el.addEventListener('change', getDos);
    });

    wgh.forEach((el) => {
        el.addEventListener('change', getDos);
    });

    getDos();

    document.getElementById("dosage-cal-embed-click").onclick = function changeContent(e) {

        var embeddiv = document.getElementById('dosage-cal-embed-codes');
        var embedcode = '<textarea name="embed" class="embed-copy">' +
            '<iframe src="http://cbdassist.com.au/cbd-sssist-dosage-calculator.html" width="100%" height="900" frameborder="0"></iframe>' +
            '</textarea>';
        embeddiv.innerHTML = embedcode;

        return false;

    }

});
