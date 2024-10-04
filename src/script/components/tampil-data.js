class tampilData extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }
    
    render(){
        this.innerHTML = `
        <style>
        #tampil-data {
            margin:auto;
            width:75%;
            display:block;
        }
        .column , .ket {
            display:flex;
            flex:1;
        }
        .column {
            flex-direction:column;
        }
        .ket {
            font-size:24px;
        }
        .jadwalKet {
            margin-top:5em;
        }
        .jadwalWaktu {
            margin:6em auto;
            padding:10px;
        }
        .jadwalWaktu div {
            padding:5px;
            text-align:center;
            flex-basis:20%;
        }
        .waktuTop {
            background-color:white;
        }
        .waktuBottom {
            background-color:rgb(29, 29, 29);
            font-size:36px;
            color:white;
        }
        footer p {
            margin:0;
            padding:15px;
            opacity:0.75;
            background-color:rgba(214, 241, 217, 0.966);
        }
        </style>
        <div id="tampil-data">
                    <div class="column jadwalKet">
                        <div class="ket">
                            <label>Kota</label>
                            <label>&nbsp;&nbsp;:&nbsp;</label>
                            <label id="tampilKota">...</label>
                        </div>
                        <div class="ket">
                            <label>Tanggal</label>
                            <label>&nbsp;&nbsp;:&nbsp;</label>
                            <label id="tampilTgl">...</label>
                        </div>
                    </div>
                    <div class="column jadwalWaktu">
                        <div class="ket waktuTop">
                            <div>Subuh</div>
                            <div>Dhuhur</div>
                            <div>'Asar</div>
                            <div>Maghrib</div>
                            <div>Isya</div>                        
                            </ul>
                        </div>
                        <div class="ket waktuBottom" id="jadwal">
                         <div id="subuh"></div>
                         <div id="dzuhur"></div>
                         <div id="ashar"></div>
                         <div id="maghrib"></div>
                         <div id="isya"></div>
                        </div>
                    </div>
                </div>
        `;
    }
}

customElements.define("tampil-data", tampilData);