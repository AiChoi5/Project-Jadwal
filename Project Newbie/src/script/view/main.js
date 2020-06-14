import './script/components/tampil-data.js';
import './script/components/cari-data.js';
import './script/components/clock.js';

//Get All Kota
const main = () => {

_getKota();
function _getKota(){
    fetch(`https://api.banghasan.com/sholat/format/json/kota`)
    .then(res => {
        return res.json();
    })
    .then(json => {
        if (json.status != 'ok') return;
        let kota = document.getElementById('kota');
        for (let index = 0; index < json.kota.length; index++){
            const r = json.kota[index];
            let option = document.createElement("option");
                option.text = r.nama;
                option.value = r.id;
                kota.appendChild(option);
        }
    })
    .catch(err => {
        console.log("err", err);
        document.getElementById("messages").html = 'Maaf, tidak bisa';
    });
}

//Search jadwal by kota ID & tanggal
const searchJadwal = () => {
    let kota = document.getElementById('kota');
    let tanggal = document.getElementById('tanggal');

    document.getElementById("messages").html = 'Tunggu sebentar';

    fetch(`https://api.banghasan.com/sholat/format/json/jadwal/kota/${kota.value}/tanggal/${tanggal.value}`)
    .then(res => {
        return res.json();
    })
    .then(json => {
        if (json.jadwal.status != 'ok') return;
        const subuh = document.getElementById('subuh');
        subuh.innerHTML = `${json.jadwal.data.subuh}`;
        const dzuhur = document.getElementById('dzuhur');
        dzuhur.innerHTML = `${json.jadwal.data.dzuhur}`;
        const ashar = document.getElementById('ashar');
        ashar.innerHTML = `${json.jadwal.data.ashar}`;
        const maghrib = document.getElementById('maghrib');
        maghrib.innerHTML = `${json.jadwal.data.subuh}`;
        const isya = document.getElementById('isya');
        isya.innerHTML = `${json.jadwal.data.isya}`;
    })
    .catch(err => {
        document.getElementById("messages").html = '';
        console.log("err", err);
    })
}

const search = document.querySelector("cari-data");
const view = document.querySelector("tampil-data");

search.clickEvent = searchJadwal;
}
export default main;
