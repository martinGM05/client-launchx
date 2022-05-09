<template>
  <Header />
  <div class="container-list">
    <div class="list row">
      <div class="col-md-6">
        <div class="containerTitle">
          <h4> Commanders </h4>
          <router-link :to="'/add-command'" class="btn-plus"> Agregar Nuevo</router-link>
        </div>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(commander, index) in commanders"
            :key="index"
            @click="setActiveCommander(commander, index)"
          >
            {{ commander.name }}
          </li>
  
        </ul>
      </div>
      <div class="col-md-6">
        <div v-if="currentCommander">
          <h4>Commander</h4>
          <div>
            <br><label><strong>Nombre:</strong></label> {{ currentCommander.name}}
            <br><label><strong>Lang:</strong></label> {{ currentCommander.lang}}
            <br><label><strong>Mission Commander:</strong></label> {{ currentCommander.missionCommander}}
          </div>
          <router-link :to="'/commander/' + currentCommander.id" class="btn btn-info"> Editar</router-link>
        </div>
        <div v-else>
          <br />
          <p> Selecciona un commander.</p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>

import CommandService from "../../services/CommandService";
import Header from "../Header.vue";
import Footer from "../Footer.vue";

export default {
    name: "commander-list",
    data() {
        return {
            tutorials: [],
            commanders: [],
            currentTutorial: null,
            currentCommander: null,
            currentIndex2: -1,
            title: "",
            commanderId: ""
        };
    },
    methods: {
        getAllCommanders() {
            CommandService.getAll()
                .then(response => {
                this.commanders = response.data;
            })
                .catch(e => {
                console.log(e);
            });
        },
        setActiveCommander(commander, index) {
            this.currentCommander = commander;
            this.currentIndex = commander ? index : -1;
        }
    },
    mounted() {
        this.getAllCommanders();
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
