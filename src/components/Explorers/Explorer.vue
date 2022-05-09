<template>

  <Header :message="Explorers" />
  <!-- <h4>Explorer</h4> -->
  <div class="containerExplorer">
    <div v-if="currentExplorer" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentExplorer.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentExplorer.username"
        />
      </div>
      <div class="form-group">
        <label for="title">Misión</label>
        <input type="text" class="form-control" id="title"
          v-model="currentExplorer.mission"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteExplorer">
      Eliminar Explorer
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateExplorer">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  </div>
  <Footer />
</template>
<script>
import ExplorerService from "../../services/ExplorerService";
import Header from "../Header.vue";
import Footer from "../Footer.vue";
export default {
    name: "explorer",
    data() {
        return {
            currentExplorer: null,
            message: ""
        };
    },
    methods: {
        getExplorer(id) {
            ExplorerService.get(id)
                .then(response => {
                this.currentExplorer = response.data;
            })
                .catch(e => {
                console.log(e);
            });
        },
        deleteExplorer() {
            ExplorerService.delete(this.currentExplorer.id)
                .then(response => {
                console.log(response.data);
                this.$router.push({ name: "Explorers" });
            })
                .catch(e => {
                console.log(e);
            });
        },
        updateExplorer() {
          // console.log(this.currentExplorer);
            ExplorerService.update(this.currentExplorer.id, this.currentExplorer)
                .then(response => {
                console.log(response.data);
                this.message = "Se actualizó correctamente";
                this.$router.push({ name: "Explorers" });
            })
                .catch(e => {
                console.log(e);
            });
        }
    },
    mounted() {
        this.message = "";
        this.getExplorer(this.$route.params.id);
    },
    components: { Header, Footer }
};
</script>

<style>
.containerExplorer{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
}
.edit-form {
  max-width: 300px;
}

.btn{
  margin-top: 10px;
}
</style>
