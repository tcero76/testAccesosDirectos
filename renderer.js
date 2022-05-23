window.addEventListener('load', function(event) {
    var iniInput = document.getElementById('idIniInput');
    var lblRes = document.getElementById('idLblRes');
    var iniBtn = document.getElementById('idIniBtn');
    var finBtn = document.getElementById('idFinBtn');
    var iniInput2 = document.getElementById('idIniInput2');
    var lblRes2 = document.getElementById('idLblRes2');
    var tasa = document.getElementById('idTasa');
    const sufijo = "% del tiempo original"

    var start = 0, start2 = 0, diff1=0,diff2=0;
    iniBtn.addEventListener('click', e => {
        start = new Date().getTime();
        lblRes.textContent = '';
        lblRes.classList.add('hidden')
        iniInput.value = '';
    })
    finBtn.addEventListener('click', e => {
        let end = new Date().getTime();
        diff1=(end-start)/1000;
        lblRes.textContent = diff1 + "s";
        lblRes.classList.remove('hidden');
        if(diff2>0) {
            tasa.textContent = (diff2/diff1*100).toFixed(2)+sufijo;
        }
    });
    iniInput2.addEventListener('keypress', e => {
        if(e.ctrlKey) {
            if(e.code=== 'KeyS') {
                start2 = new Date().getTime();
                lblRes2.textContent = '';
                iniInput2.value = '';
                lblRes2.classList.add('hidden')
            }
            if(e.code=== 'KeyF') {
                let end2 = new Date().getTime();
                diff2=(end2-start2)/1000;
                lblRes2.textContent = diff2 + "s";
                lblRes2.classList.remove('hidden');
                if(diff1>0) {
                    tasa.textContent = (diff2/diff1*100).toFixed(2)+sufijo;
                }
            }
        }
    });
    iniInput2.addEventListener('keyup', e => {
        if(iniInput2.value==='inicio') {
            iniInput2.classList.add('isValid');
        } else {
            iniInput2.classList.remove('isValid');
        }
    })
    iniInput.addEventListener('keyup', e => {
        if(iniInput.value==='inicio') {
            iniInput.classList.add('isValid');
        } else {
            iniInput.classList.remove('isValid');
        }
    })
}); 



