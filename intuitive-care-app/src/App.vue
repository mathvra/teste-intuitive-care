<template>
  <section class="area">
    
    <header class="head"></header>

    <main class="main">
      <aside class="main-top">
        <h1 class="title">Relação de Operadoras Ativas ANS</h1>
        <div class="input-group mb-2 search">
          <input type="text" class="form-control" placeholder="Faça uma pesquisa" aria-label="Small">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Pesquisar</button>
          </div>
        </div>
      </aside>

      <table class="table table-hover">
        <thead>
          <tr>
            <th v-for="(titulo, index) in titulos" :key="index">{{ titulo }}</th>            
          </tr>
        </thead>
        <tbody v-for="(dado, index) in dados" :key="index">
          <tr>
            <td>{{ dado[chaves[0]] }}</td>
            <td>{{ dado[chaves[1]] }}</td>
            <td>{{ dado[chaves[2]] }}</td>
            <td>{{ dado[chaves[3]] }}</td>
            <td>{{ dado[chaves[4]] }}</td>
            <td>{{ dado[chaves[5]] }}</td>
            <td>{{ dado[chaves[6]] }}</td>
            <td>{{ dado[chaves[7]] }}</td>
            <td>{{ dado[chaves[8]] }}</td>
            <td>{{ dado[chaves[9]] }}</td>
            <td>{{ dado[chaves[10]] }}</td>
            <td>{{ dado[chaves[11]] }}</td>
            <td>{{ dado[chaves[12]] }}</td>
            <td>{{ dado[chaves[13]] }}</td>
            <td>{{ dado[chaves[14]] }}</td>
            <td>{{ dado[chaves[15]] }}</td>
            <td>{{ dado[chaves[16]] }}</td>
            <td>{{ dado[chaves[17]] }}</td>
            <td>{{ dado[chaves[18]] }}</td>
          </tr>
        </tbody>
      </table>
    </main>

  </section>
</template>

<script>

  import './assets/bootstrap.min.css'
  import api from '@/services/api.js'

  const titulos = [ 
    "Registro ANS",
    "CNPJ",
    "Razão Social",
    "Nome Fantasia",
    "Modalidade",
    "Logradouro",
    "Número",
    "Complemento",
    "Bairro",
    "Cidade",
    "UF",
    "CEP",
    "DDD",
    "Telefone",
    "Fax",
    "Endereço eletrônico",
    "Representante",
    "Cargo Representante",
    "Data Registro ANS"
    ]

  const chaves = [ 
    "RegistroANS",
    "CNPJ",
    "RazaoSocial",
    "NomeFantasia",
    "Modalidade",
    "Logradouro",
    "Numero",
    "Complemento",
    "Bairro",
    "Cidade",
    "UF",
    "CEP",
    "DDD",
    "Telefone",
    "Fax",
    "Enderecoeletronico",
    "Representante",
    "CargoRepresentante",
    "DataRegistroANS"
    ]

  export default {
    data() {
      return {
        dados: [],
        titulos,
        chaves,
      }
    },
    mounted(){
      api.get('/').then(response => {
        this.dados = response.data
      })
    },
  }
</script>

<style scoped>
  
  .head{
    background-image: url("./assets/logo_ic.png");
    background-position: center;
    background-repeat: no-repeat;
    background-color: white;
    height: 70px;
    width: 100%;
    margin: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }

  .main{
    background-color: white;
    height: 85vh;
    padding: 12px;
    margin: 24px;
    border-radius: 4px;
    overflow-x: auto;
  }


  .area{
    background-color: #F1F1F1;
    height: 100%;
  }

  .title{
    font-size: 20px;
    width: 316px;
    height: 25px;
    color: #5161F1;
  }

  .search{
    width: 504px;
  }

  .main-top{
    display: flex;
    justify-content: space-between;
  }
</style>
