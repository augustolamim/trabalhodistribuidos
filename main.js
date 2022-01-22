const botao = document.getElementById('botao');
const CepInput = document.getElementById('CepInput');
const userBairro = document.getElementById('userBairro');
const userComplemento = document.getElementById('userComplemento');
const userLocalidade = document.getElementById('userLocalidade');
const userLogradouro = document.getElementById('userLogradouro');
const userUf = document.getElementById('userUf');
botao.addEventListener('click', getEndereço);

function getEndereço(){
  userBairro.value ="";
  let cep =  CepInput.value;
  cep = cep.replace('.', '');
  cep = cep.replace('-', ''); 
  if(cep.length !=8){
    alert("O CEP REQUER 8 DIGITOS!")
  }else{
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      const data = response.data
      if(data.erro == true){
        alert("CEP INVALIDO!");
      }else{
        userBairro.value = data.bairro 
        userComplemento.value = data.complemento
        userLocalidade.value = data.localidade 
        userLogradouro.value = data.logradouro
        userUf.value = data.uf   
        
      }
      
    })
    .catch(error => alert(error))  
    
  }
    
    
 
}