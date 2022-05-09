<template>

  <Header />
  <div class="containerExplorer">
    <div v-if="currentCommander" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentCommander.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Lang</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentCommander.lang"
        />
      </div>
      <div class="form-group">
        <label for="title">Mission Commander</label>
        <input type="text" class="form-control" id="title"
          v-model="currentCommander.missionCommander"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteCommander">
      Eliminar Explorer
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateCommander">
      Actualizar
    </button>
  </div>
  </div>
  <Footer />
</template>
<script>
import CommanderService from "../../services/CommandService";
import Header from "../Header.vue";
import Footer from "../Footer.vue";
export default {
    name: "commander",
    data() {
        return {
            currentCommander: null,
        };
    },
    methods: {
        getCommander(id) {
            CommanderService.get(id)
                .then(response => {
                this.currentCommander = response.data;
            })
                .catch(e => {
                console.log(e);
            });
        },
        deleteCommander() {
            CommanderService.delete(this.currentCommander.id)
                .then(response => {
                console.log(response.data);
                this.$router.push({ name: "Commands" });
            })
                .catch(e => {
                console.log(e);
            });
        },
        updateCommander() {
            CommanderService.update(this.currentCommander.id, this.currentCommander)
                .then(response => {
                console.log(response.data);
                this.message = "Se actualizó correctamente";
                this.$router.push({ name: "Commands" });
            })
                .catch(e => {
                console.log(e);
            });
        }
    },
    mounted() {
        this.message = "";
        this.getCommander(this.$route.params.id);
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
