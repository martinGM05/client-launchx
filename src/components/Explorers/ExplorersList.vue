<template>
  <Header />
  <div class="container-list">
    <div class="list row">
      <div class="col-md-6">
        <div class="containerTitle">
          <h4> Explorers Inscritos </h4>
          <router-link :to="'/add'" class="btn-plus"> Agregar Nuevo</router-link>
        </div>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex2 }"
            v-for="(explorer, index) in explorers"
            :key="index"
            @click="setActiveExplorer(explorer, index)"
          >
            {{ explorer.username }}
          </li>
  
        </ul>
      </div>
      <div class="col-md-6">
        <div v-if="currentExplorer">
          <h4>Explorer</h4>
          <div>
            <br><label><strong>Nombre:</strong></label> {{ currentExplorer.name}}
            <br><label><strong>Username:</strong></label> {{ currentExplorer.username}}
            <br><label><strong>Mission:</strong></label> {{ currentExplorer.mission}}
          </div>
          <router-link :to="'/explorer/' + currentExplorer.id" class="btn btn-info"> Editar</router-link>
        </div>
        <div v-else>
          <br />
          <p> Selecciona un explorer.</p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>

import ExplorerService from "../../services/ExplorerService";
import Header from "../Header.vue";
import Footer from "../Footer.vue";

export default {
    name: "explorer-list",
    data() {
        return {
            tutorials: [],
            explorers: [],
            currentTutorial: null,
            currentExplorer: null,
            currentIndex2: -1,
            title: "",
            explorerId: ""
        };
    },
    methods: {
        getAllExplorers() {
            ExplorerService.getAll()
                .then(response => {
                this.explorers = response.data;
            })
                .catch(e => {
                console.log(e);
            });
        },
        setActiveExplorer(explorer, index) {
            this.currentExplorer = explorer;
            this.currentIndex2 = explorer ? index : -1;
        }
    },
    mounted() {
        this.getAllExplorers();
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
  .containerTitle{
    display: flex;
    justify-content: space-between;
  }
  .btn-plus{
    background: #00a8ff;
    color: #fff;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    height: 35px;
    margin: 0 auto;
  }
</style>
