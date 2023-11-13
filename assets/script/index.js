const numeroCartao = document.querySelector("#inNumeroCartao");
const codigoSeguranca = document.querySelector("#inCodigoSeguranca");
const dataValidade = document.querySelector("#inData");
const fotoCartao = document.querySelector("#uotFotoCartao");
const btnCadastro = document.querySelector("#btnCadastro");
const validacao = document.querySelector("#validacao");

numeroCartao.addEventListener("input", () => {
    const regexBandeiraMaster = /^(51|52|53|54|55|56)/;
    const regexBandeiraVisa = /^(4)/;
    const regexBandeiraAmex = /^(34|37)/;
    const regexBandeiraDiners = /^(301|305|36|38)/;
    const regexBandeiraElo = /^(636368|636369|438935|504175|451416|636297|5067|4576|4011|506699)/;
    const regexBandeiraDiscover = /^(6011|622|64|65)/;
    const regexBandeiraHiper = /^(384100|384140|384160|606282|637095|637568|637599|637609|637612)/;

    if (regexBandeiraMaster.test(numeroCartao.value.substring(0, 6))) {
        fotoCartao.innerHTML = '<img src="./assets/img/icone_mastecard.png" alt="" />';
    } else if (regexBandeiraVisa.test(numeroCartao.value.substring(0, 6))) {
        fotoCartao.innerHTML = '<img src="./assets/img/icone_visa.png" alt="" />';
    } else if (regexBandeiraAmex.test(numeroCartao.value.substring(0, 6))) {
        fotoCartao.innerHTML = '<img src="./assets/img/icone_amex.png" alt="" />';
    } else if (regexBandeiraDiners.test(numeroCartao.value.substring(0, 6))) {
        fotoCartao.innerHTML = '<img src="./assets/img/icone_diners.png" alt="" />';
    } else if (regexBandeiraElo.test(numeroCartao.value.substring(0, 6))) {
        fotoCartao.innerHTML = '<img src="./assets/img/icone_elo.svg" alt="" />';
    } else if (regexBandeiraDiscover.test(numeroCartao.value.substring(0, 6))) {
        fotoCartao.innerHTML = '<img src="./assets/img/icone_discover.png" alt="" />';
    } else if (regexBandeiraHiper.test(numeroCartao.value.substring(0, 6))) {
        fotoCartao.innerHTML = '<img src="./assets/img/icone_hiper.svg" alt="" />';
    } else {
        fotoCartao.innerHTML = "";
    }
});

function validaCartao() {
    const regexCartao = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;

    if (numeroCartao.value === "") {
        alert("preencha o número do cartão!");
        return;
    }

    if (regexCartao.test(numeroCartao.value)) {
        if (numeroCartao.value.length < 16) {
            validacao.textContent =
            "Número do cartão deve ter pelo menos 16 dígitos!";
            return false;
        } else {
            validacao.textContent = "";
            return true;
        }
    } else {
        validacao.textContent = "Número do cartão inválido!";
        fotoCartao.innerHTML = "";
        return false;
    }
}

function validaCodigoSeguranca() {
    const regexCodigoSeguranca = /^\d{3}$/;

    if (codigoSeguranca.value === "") {
        alert("Preencha o código do cartão!");
        return;
    }

    if (regexCodigoSeguranca.test(codigoSeguranca.value)) {
        validacao.textContent = "";
        return true;
    } else {
        validacao.textContent = "Código de segurança inválido!";
        return false;
    }
}

function validaDataValidade() {
    const regexDataValidade = /^(0[1-9]|1[0-2])\/\d{2}$/;

    if (dataValidade.value === "") {
        alert("Preencha a data!");
        return;
    }

    if (regexDataValidade.test(dataValidade.value)) {
        validacao.textContent = "";
        return true;
    } else {
        validacao.textContent = "Data de validade inválida!";
        return false;
    }
}

btnCadastro.addEventListener("click", () => {
    if (validaCartao() && validaCodigoSeguranca() && validaDataValidade()) {
        alert("Cartão cadastrado com sucesso!!");
        fotoCartao.innerHTML = "";
        numeroCartao.value = "";
        codigoSeguranca.value = "";
        dataValidade.value = "";
    }
});