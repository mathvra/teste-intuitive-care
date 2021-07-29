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
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody v-for="person in people" :key="person.email">
          <tr>
            <td>{{ person.name }}</td>
            <td>{{ person.email }}</td>
          </tr>
        </tbody>
      </table>
    </main>

  </section>
</template>

<script>
  import './assets/bootstrap.min.css'
  import api from '@/services/api.js'

  const people = [
    {
      name: 'Calvin Hawkins',
      email: 'calvin.hawkins@example.com',
    },
    {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
    },
    {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
    },
    {
      name: 'Gésio de Moura',
      email: 'iajm@gmail.com',
    },
  ]

  export default {
    mounted(){
      api.get('/').then(response => {
        console.log(response)
      })
    },
    data() {
      return {
        people,
      }
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
    height: fit-content;
    padding: 12px;
    margin: 24px;
    border-radius: 4px;
  }

  .area{
    background-color: #F1F1F1;
    height: 100vh;
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
