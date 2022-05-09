<template>
  <Header />
    <div class="container-list add">
      <div class="submit-form">
      <div v-if="!submitted">
      <h3>Nuevo Explorer</h3>
        <div class="form-group">
          <label for="title">Nombre </label>
          <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="explorer.name"
            name="title"
          />
        </div>
        <div class="form-group">
          <label for="title">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            required
            v-model="explorer.username"
            name="username"
          />
        </div>
        <div class="form-group">
          <label for="title">Misión</label>
          <input
            type="text"
            class="form-control"
            id="mission"
            required
            v-model="explorer.mission"
            name="mission"
          />
        </div>
        <button @click="saveExplorer" class="btn btn-success">Agregar</button>
      </div>
      <div v-else>
        <h4> Explorer creado exitosamente. </h4>
        <button class="btn btn-success" @click="newExplorer">Add</button>
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
    name: "add-explorer",
    data() {
        return {
            explorer: {
                id: null,
                name: "",
                username: "",
                mission: ""
            },
            submitted: false
        };
    },
    methods: {
        saveExplorer() {
            var data = {
                name: this.explorer.name,
                username: this.explorer.username,
                mission: this.explorer.mission
            };
            ExplorerService.create(data)
                .then(response => {
                this.explorer.id = response.data.id;
                this.submitted = true;
                this.$router.push({ name: "Explorers" });
            })
                .catch(e => {
                console.log(e);
            });
        },
        newExplorer() {
            this.submitted = false;
            this.explorer = {};
        }
    },
    components: { Header, Footer }
};
</script>
<style scoped>
  .add{
    margin-left: 150px;
  }
</style>