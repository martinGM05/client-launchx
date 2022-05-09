<template>
    <Header />
  <div class="container-home">
      <div class="row">
        <div class="btn col-md-4">
            <button class="btn btn-primary">
                <router-link to="/explorers" class="text-button">Explorers</router-link>
            </button>
        </div>  
        <div class="btn col-md-4">
            <button class="btn btn-warning">
                <router-link to="/explorers" class="text-button">Commander</router-link>
            </button>
        </div>
        <div class="btn col-md-4">
            <button class="btn btn-success">
                <router-link to="/explorers" class="text-button">MissionCommander</router-link>
            </button>
        </div>
      </div>
  </div>
  <Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
    components: { Header, Footer }
}
</script>

<style>

    .container-home{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .row{
        width: 100%;
        height: 10%;
    }

    .btn{
        width: 100%;
        border-radius: 16px;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .text-button{
        font-size: 2.5rem;
        color: #000;
        font-weight: bold;
    }

    
</style>