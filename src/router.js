import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import EplorerList from './components/Explorers/ExplorersList.vue'
import Explorer from './components/Explorers/Explorer'
import AddExplorer from "./components/Explorers/AddExplorer";
import CommanderList from './components/Commands/CommandsList'
import AddCommander from './components/Commands/AddCommander'
import Commander from './components/Commands/Commander'
import MissionCommanderList from './components/MissionCommanders/MCommanderList'
import MissionCommander from './components/MissionCommanders/MCommander'
import AddMCommander from './components/MissionCommanders/AddMCommander'

const routes =  [
  {
    path: "/",
    name: "Inicio",
    component: Home 
  },
  {
    path: "/explorers",
    name: "Explorers",
    component: EplorerList
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: Explorer
  },
  {
    path: "/add",
    name: "add-explorer",
    component: AddExplorer
  },
  {
    path: "/commands",
    name: "Commands",
    component: CommanderList
  },
  {
    path: "/add-command",
    name: "add-command",
    component: AddCommander
  },
  {
    path: "/commander/:id",
    name: "commander-details",
    component: Commander
  },
  {
    path: "/mission-commander",
    name: "mission-commander",
    component: MissionCommanderList
  },
  {
    path: "/mission-commander/:id",
    name: "mission-commander-details",
    component: MissionCommander
  },
  {
    path: "/add-mission-commander",
    name: "add-mission-commander",
    component: AddMCommander
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
