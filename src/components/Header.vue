<template>
  <div class="containerLogo">
        <img src="../assets/woopa.png" alt="Woopa.png" class="logo">
        <div class="descriptionLogo">
            <h1>Woopa</h1>
            <p>Actividad de la semana 5 de LaunchX</p>
            <div class="containerRoutes" v-if="$route.name !== 'Inicio'">
                <router-link to="/" class="opt">Home</router-link>
                <router-link to="/explorers" class="opt">Explorers</router-link>
                <router-link to="/commands" class="opt">Commands</router-link>
                <router-link to="/mission-commander" class="opt">Mission Commander</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            loQuSea: null
        }
    },
    props: {
        message: null
    }
}
</script>

<style>
    .containerLogo{
        border-bottom: 3px solid #000;
        position: absolute;
        top: -3%;
        left: 5%;
        right: 5%;
        display: flex;
        flex-direction: row;
    }

    .descriptionLogo{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .logo{
        width: 13%;
        height: 100%; 
    }

    .containerRoutes{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
    }

    .opt{
        font-size: 1.2rem;
        font-weight: bold;
        text-decoration: none;
        padding: 3px;
        border-bottom: 2px solid #000;
        border-radius: 5px;
        cursor: pointer;
        text-decoration: none;
    }
</style>