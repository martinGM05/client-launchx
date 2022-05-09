<template>
  <Header />
  <div class="container-list">
    <div class="list row">
      <div class="col-md-6">
        <div class="containerTitle">
          <h4> Missions Commanders </h4>
          <router-link :to="'/add-mission-commander'" class="btn-plus"> Agregar Nuevo</router-link>
        </div>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(commander, index) in commanders"
            :key="index"
            @click="setActiveMCommander(commander, index)"
          >
            {{ commander.name }}
          </li>
  
        </ul>
      </div>
      <div class="col-md-6">
        <div v-if="currentMCommander">
          <h4>Commander</h4>
          <div>
            <br><label><strong>Nombre:</strong></label> {{ currentMCommander.name}}
            <br><label><strong>Username:</strong></label> {{ currentMCommander.username}}
            <br><label><strong>Main Stack:</strong></label> {{ currentMCommander.mainStack}}
          </div>
          <router-link :to="'/mission-commander/' + currentMCommander.id" class="btn btn-info"> Editar</router-link>
        </div>
        <div v-else>
          <br />
          <p> Selecciona un Mission Commander.</p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>

import MCommandService from "../../services/MCommanderService";
import Header from "../Header.vue";
import Footer from "../Footer.vue";

export default {
    name: "mcommander-list",
    data() {
        return {
            tutorials: [],
            commanders: [],
            currentTutorial: null,
            currentMCommander: null,
            currentIndex2: -1,
            title: "",
            commanderId: ""
        };
    },
    methods: {
        getAllMCommanders() {
            MCommandService.getAll()
                .then(response => {
                this.commanders = response.data;
            })
                .catch(e => {
                console.log(e);
            });
        },
        setActiveMCommander(commander, index) {
            this.currentMCommander = commander;
            this.currentIndex = commander ? index : -1;
        }
    },
    mounted() {
        this.getAllMCommanders();
    },
    components: { Header, Footer }
};
</script>
<style>
.container-list{
  margin-top: 150px;
  width: 80%;
  overflow-y: scroll;
}
  .list{
    /* background: #000; */
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    /* height: auto; */
  }
</style>
