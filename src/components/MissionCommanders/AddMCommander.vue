<template>
  <Header />
  <div class="container-list add">
    <div class="submit-form">
      <div v-if="!submitted">
        <h3>Nuevo Commander</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="title">Nombre </label>
              <input
                type="text"
                class="form-control"
                id="title"
                required
                v-model="commander.name"
                name="title"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="title">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                required
                v-model="commander.username"
                name="username"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="title">Main Stack</label>
              <input
                type="text"
                class="form-control"
                id="mainStack"
                required
                v-model="commander.mainStack"
                name="mainStack"
              />
            </div>
          </div>
        </div>

        <button @click="saveCommander" class="btn btn-success">Agregar</button>
      </div>
      <div v-else>
        <h4>Mission Commander creado exitosamente.</h4>
        <button class="btn btn-success" @click="newCommander">Add</button>
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
  name: "add-command",
  data() {
    return {
      commander: {
        id: null,
        name: "",
        username: "",
        mainStack: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveCommander() {
      var data = {
        name: this.commander.name,
        username: this.commander.username,
        mainStack: this.commander.mainStack,
      };
      MCommandService.create(data)
        .then((response) => {
          this.commander.id = response.data.id;
          this.submitted = true;
          this.$router.push({ name: "mission-commander" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newCommander() {
      this.submitted = false;
      this.commander = {};
    },
  },
  components: { Header, Footer },
};
</script>
<style scoped>
.add {
  margin-left: 150px;
}
</style>