class cariData extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector("#kota", "#tanggal").value;
    }

    render(){
        this.innerHTML = `
            <style>
            #cari-data {
                margin:auto 0;
            }
            h2 {
                margin:10px;
            }
            #cari-btn {
                padding:5px 7px;
                background-color:white;
                border:none;
                color:black;
            }
            #tanggal {
                padding:2px;
            }
            </style>
            <div id="cari-data">
                <div id="messages"></div>
                <select name="kota" id="kota"></select>
                <input type="date" name="tanggal" id="tanggal" />
                <button id="cari-btn" type="submit">Cari</button>
            </div>
        `;

        this.querySelector("#cari-btn").addEventListener("click", this._clickEvent);
    }
}

customElements.define("cari-data", cariData);