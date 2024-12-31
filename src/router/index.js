import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TodoList from "../views/TodoList.vue";
import IssueList from "../views/IssueList.vue"; // IssueListをインポート
import TodosIssues from '../views/TodosIssues.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/", // ホームページ
    name: "Home",
    component: Home,
  },
  {
    path: "/todolist", // Todoリスト
    name: "TodoList",
    component: TodoList,
  },
  {
    path: "/issues", // Issueリスト
    name: "IssueList",
    component: IssueList,
  },
  {
    path: "/todos-issues", // 新しいルート
    name: "TodosIssues",
    component: TodosIssues,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;
