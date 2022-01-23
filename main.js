//inicialização dos elementos do front
const botao = document.getElementById('botao');
const UfInput = document.getElementById('UfInput');
const LocalidadeInput = document.getElementById('LocalidadeInput');
const LogradouroInput = document.getElementById('LogradouroInput'); 
const TabelaBody = document.getElementById('TabelaExibirBody');

//ao clicar o botão chamar a função
botao.addEventListener('click', getCep);

function getCep(){
  //Jquery para limpar tabela com pesquisa anterior
  $("#TabelaExibir tbody").empty();
  
    //chamada api viacep utilizando axios
    axios.get(`https://viacep.com.br/ws/${UfInput.value}/${LocalidadeInput.value}/${LogradouroInput.value}/json/`)
    .then(response => {
      //json retornado adicionado a variavel data
      const data = response.data
      //se ocorrer um erro na chamada da api alertar o usuario
      if(data.erro == true){
        alert("ERRO!");
      }else{
        //foreach para popular a tabela com todos possiveis ceps        
        data.forEach(endereco => {
          // Insere nova linha na tabela
          let newRow = TabelaBody.insertRow();

          // insere as novas celulas vazias na tabela
          let newCellCep = newRow.insertCell();
          let newCellUf = newRow.insertCell();
          let newCellLocalidade = newRow.insertCell();
          let newCellLogradouro = newRow.insertCell();

          // preenche as celulas com a informação retornada pela api
          let cep = document.createTextNode(endereco.cep);
          let uf = document.createTextNode(endereco.uf);
          let localidade = document.createTextNode(endereco.localidade);
          let logradouro = document.createTextNode(endereco.logradouro);
          newCellCep.appendChild(cep);
          newCellUf.appendChild(uf);
          newCellLocalidade.appendChild(localidade);
          newCellLogradouro.appendChild(logradouro);
          
        })        
      }      
    })
    .catch(error => alert(error)) 
    
}