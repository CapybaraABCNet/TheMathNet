function pos(op) {
    const chislo1 = Number(document.getElementById("chislo1").value);
    const chislo2 = Number(document.getElementById("chislo2").value);
    var otvet;

    switch (op) {
        case "+":
            otvet = chislo1 + chislo2;
            break;
        case "-":
            otvet = chislo1 - chislo2;
            break;
        case "*":
            otvet = chislo1 * chislo2;
            break;
        case "/":
            if (chislo2 === 0) {
                otvet = "На ноль делить нельзя!";
            } else {
                otvet = chislo1 / chislo2;
            }
            break;
        default:
            otvet = "Неверный оператор";
    }

    document.getElementById("otvet").innerHTML = otvet;
}

function pos1(op) {
    var cel1 = Number(document.getElementById("cel1").value);
    var cel2 = Number(document.getElementById("cel2").value);
    var chisl1 = Number(document.getElementById("chisl1").value);
    var znam1 = Number(document.getElementById("znam1").value);
    var chisl2 = Number(document.getElementById("chisl2").value);
    var znam2 = Number(document.getElementById("znam2").value);
    var result;
    
    switch (op) {
        case "+":
            if (znam1 === znam2) {
                result = `${chisl1 + chisl2}/${znam1}`;
            } else {
                var new1 = chisl1 * znam2;
                var new2 = chisl2 * znam1;
                var new3 = znam1 * znam2;
                result = `${cel1 + cel2} ${new1 + new2}/${new3}`;
            }
            break;
    }
    document.getElementById("result").innerHTML = result;
}

function sravn() {
    var cel11 = Number(document.getElementById("cel11").value);
    var cel22 = Number(document.getElementById("cel22").value);
    var chisl11 = Number(document.getElementById("chisl11").value);
    var znam11 = Number(document.getElementById("znam11").value);
    var chisl22 = Number(document.getElementById("chisl22").value);
    var znam22 = Number(document.getElementById("znam22").value);
    var result1;
    var chisl3 = cel11 * znam11 + chisl11;
    var chisl4 = cel22 * znam22 + chisl22;
    if (znam11 === znam22) {
        if (chisl3 > chisl4) {
            result1 = `${cel11} ${chisl11}/${znam11} > ${cel22} ${chisl22}/${znam22}`;
    }
    else if (chisl4 > chisl3) {
        result1 = `${cel11} ${chisl11}/${znam11} < ${cel22} ${chisl22}/${znam22}`;
    }
    else {
        result1 = `${cel11} ${chisl11}/${znam11} = ${cel22} ${chisl22}/${znam22}`;
    }
    document.getElementById("result1").innerHTML = result1;
}
else {
    if (chisl3 === chisl4) {
        if (znam11 > znam22) {
            result1 = `${cel11} ${chisl11}/${znam11} > ${cel22} ${chisl22}/${znam22}`;
        }
        else if (znam1 < znam2) {
            result1 = `${cel11} ${chisl11}/${znam11} < ${cel22} ${chisl22}/${znam22}`;
        }
        else {
            result1 = `${cel11} ${chisl11}/${znam11} = ${cel22} ${chisl22}/${znam22}`;
        }
    }
    else {
        var new11 = chisl3 * znam22;
        var new3 = chisl4 * znam11;
        if (new11 > new3) {
            result1 = `${cel11} ${chisl11}/${znam11} > ${cel22} ${chisl22}/${znam22}`;
        }
        else if (new3 > new1) {
            result1 = `${cel11} ${chisl11}/${znam11} < ${cel22} ${chisl22}/${znam22}`;
        }
        else {
            result1 = `${cel11} ${chisl11}/${znam11} = ${cel22} ${chisl22}/${znam22}`;
        }
    }
}
document.getElementById("result1").innerHTML = result1;
}

function stepen() {
    var chisslo = Number(document.getElementById("chisslo").value);
    var chisslo1 = Number(document.getElementById("chisslo1").value);
    let otvet1;

    otvet1 = Math.pow(chisslo, chisslo1);
    document.getElementById("otvet1").innerHTML = otvet1;
}

function resh() {
    var nepr = Number(document.getElementById("nepr").value);
    var nepr1 = Number(document.getElementById("nepr1").value);
    var nepr2;

    var nepr3 = nepr / nepr1;
    nepr3 = Math.round(nepr3)
    nepr = nepr % nepr1;
    if (nepr === 0) {
        nepr2 = `${nepr3}`;
    } else {
        nepr2 = `${nepr3} ${nepr}/${nepr1}`;
    }
    document.getElementById("nepr2").innerHTML = nepr2;
}

function resh1() {
    var celll = Number(document.getElementById("celll").value);
    var chisl10 = Number(document.getElementById("chisl10").value);
    var znam10 = Number(document.getElementById("znam10").value);
    var ot;

    chisl10 = celll * znam10 + chisl10;
    ot = `${chisl10}/${znam10}`;
    document.getElementById("ot").innerHTML = ot;
}