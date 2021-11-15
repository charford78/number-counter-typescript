let nbr = 0;

const change = (n: number): void => {
    nbr += n;
    display();
}

const display = (): void => {
    let inp = <HTMLInputElement>document.getElementById("number");
    if(inp != null) {
        inp.value = nbr.toString();
        inp.style.textAlign = "center";
        inp.style.width = "100px";
        inp.style.color = (nbr % 2 == 0) ? "red" : "black";
        inp.style.fontWeight = (nbr % 3 == 0) ? "bold" : "normal";
        inp.style.fontStyle = (nbr % 5 == 0) ? "italic" : "normal";
    }
}

