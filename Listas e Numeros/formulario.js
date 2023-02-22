
var empresa = document.querySelector(".tdEmpresa")

// empresa.textContent = "Bunda"


/*--------------------------------------- Incluir Itens ao Clique------------*/

var botao = document.querySelector(".botao")

botao.addEventListener("click",adEmpresa)
function adEmpresa(event){
    event.preventDefault();

        var form = document.querySelector("#formulario");

        var empresa = form.empresa.value;
        var btg12 = form.btg12.value;
        var faturamento = form.faturamento.value;

        var tabelaTr = document.createElement("tr");
        var empresaTd = document.createElement("td");
        var btg12Td = document.createElement("td");
        var faturamentoTd = document.createElement("td")

        empresaTd.textContent = empresa;
        btg12Td.textContent = btg12;
        faturamentoTd.textContent = faturamento;

        var tabelaEmpresas = document.querySelector("#tabela__empresas");

        tabelaEmpresas.appendChild(tabelaTr);
        tabelaTr.appendChild(empresaTd);
        tabelaTr.appendChild(btg12Td);
        tabelaTr.appendChild(faturamentoTd);
}