function onClickBtnCalcularParcelas(){
    const valorTotalCasa = document.getElementById("valorTotalCasa").value;
    const numeroDeParcelas = document.getElementById("numeroDeParcelas").value;
    const inicioPagamento = document.getElementById("inicioPagamento").value;
    const mesCorrente = document.getElementById("mesCorrente").value;
    const valorDaParcela = document.getElementById("valorDaParcela").value;

    const dataInicio = new Date(inicioPagamento);
    const dataAtual = new Date(mesCorrente);
    const totalMesesDoAno = 12;
    
    let mesesPagos;
    if (dataInicio.getFullYear() === dataAtual.getFullYear()){
        const mesesPagosDoAnoAtual = (dataAtual.getMonth() - dataInicio.getMonth()) + 1;
        mesesPagos = mesesPagosDoAnoAtual;    
    }else{
        const mesesPagosDoAnoAtual = dataAtual.getMonth() + 1;
        const mesesPrimeiroAno = totalMesesDoAno - dataInicio.getMonth();
        const mesesTotalAnos = ((dataAtual.getFullYear() - dataInicio.getFullYear()) - 1) * 12;
        mesesPagos = mesesPagosDoAnoAtual + mesesPrimeiroAno + mesesTotalAnos;
    }
    const mesesRestantes = numeroDeParcelas -  mesesPagos;
    
    const saldoPago = (valorDaParcela * mesesPagos);
    const saldoDevedor = valorTotalCasa - saldoPago;
    
    document.getElementById("mesesPagos").value = mesesPagos;
    document.getElementById("mesesRestantes").value = mesesRestantes;
    document.getElementById("saldoPago").value = saldoPago;
    document.getElementById("saldoDevedor").value = saldoDevedor;
}

function onKeyPressValidaCampos(){
    const valorTotalCasa = document.getElementById("valorTotalCasa").value;
    const numeroDeParcelas = document.getElementById("numeroDeParcelas").value;
    const inicioPagamento = document.getElementById("inicioPagamento").value;
    const mesCorrente = document.getElementById("mesCorrente").value;
    const valorDaParcela = document.getElementById("valorDaParcela").value;

    
    if(valorTotalCasa != "" && numeroDeParcelas != "" && inicioPagamento != "" && mesCorrente != "" && valorDaParcela){
        const btnCalcularParcelas = document.getElementById("btnCalcularParcelas");
        btnCalcularParcelas.disabled = false;
        btnCalcularParcelas.setAttribute("class", "");
    }
}