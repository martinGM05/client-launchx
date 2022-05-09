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
              <label for="title">Lang</label>
              <input
                type="text"
                class="form-control"
                id="lang"
                required
                v-model="commander.lang"
                name="lang"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="title">Mission Commander</label>
              <input
                type="text"
                class="form-control"
                id="missionCommander"
                required
                v-model="commander.missionCommander"
                name="missionCommander"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="title">Enrollments</label>
              <input
                type="number"
                class="form-control"
                id="enrollments"
                required
                v-model="commander.enrollments"
                name="enrollments"
              />
            </div>
          </div>
        </div>

        <button @click="saveCommander" class="btn btn-success">Agregar</button>
      </div>
      <div v-else>
        <h4>Commander creado exitosamente.</h4>
        <button class="btn btn-success" @click="newCommander">Add</button>
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
  name: "add-command",
  data() {
    return {
      commander: {
        id: null,
        name: "",
        lang: "",
        missionCommander: "",
        enrollments: 0,
      },
      submitted: false,
    };
  },
  methods: {
    saveCommander() {
      var data = {
        name: this.commander.name,
        lang: this.commander.lang,
        missionCommander: this.commander.missionCommander,
        enrollments: this.commander.enrollments,
      };
      CommandService.create(data)
        .then((response) => {
          this.commander.id = response.data.id;
          this.submitted = true;
          this.$router.push({ name: "Commands" });
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