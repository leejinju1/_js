class Counter {
    #num;
    #btn1;
    #btn2;
    #numberSpen;
    
    constructor(num, btn1, btn2, numberSpen) {
        this.#num = num;
        this.#btn1 = btn1;
        this.#btn2 = btn2;
        this.#numberSpen = numberSpen;

        this.checkDisable();
    }

    checkDisable() {
        if (this.#num === 0) {
            this.#btn2.disabled = true;
        } else {
            this.#btn2.disabled = false;
        }
    }
    
    
    increase() {
        this.#num++;

        this.checkDisable();
    }

    decrease() {
        if (this.#num > 0) {
            this.#num--;
        }
        this.checkDisable();
    }

    start() {
        this.#numberSpen.innerText = this.#num;
        
        this.#btn1.addEventListener("click", (e) => {
            this.increase();
            this.#numberSpen.innerText = this.#num;
        });
        
        this.#btn2.addEventListener("click", (e) => {
            this.decrease();
            this.#numberSpen.innerText = this.#num; 
        });
    }
}
    window.addEventListener("load", function (e) {
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        let numberSpen = document.getElementById("number-spen");
    
        let counter = new Counter(0, btn1, btn2, numberSpen);
        counter.start();
    });
