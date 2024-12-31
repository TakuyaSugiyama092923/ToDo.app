<template>
  <div>
    <!-- ページタイトル -->
    <h1 class="page-title">Todoリスト</h1>

    <!-- Todo入力フォーム -->
    <div class="todo-form">
      <form @submit.prevent="addTodo" style="display: flex; gap: 10px;">
        <el-input
          v-model="todo"
          placeholder="todo"
          clearable
          style="flex: 1;"
        ></el-input>
        <el-button type="primary" @click="addTodo">追加</el-button>
      </form>
    </div>

    <!-- Todoリスト -->
    <div class="todo-list">
      <el-row :gutter="20">
        <TodoItem
          v-for="(todo, index) in todos"
          :key="'todo-' + index"
          :item="todo"
          :type="'todo'"
          @remove="removeTodo(index)"
        />
      </el-row>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import axios from "axios";

export default {
  name: "TodosIssues",
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: ["APIの作成", "todo入力画面を作成する", "Routingを設定する"], // ToDoリスト
      todo: "", // 入力用
    };
  },
  methods: {
    // 新しいToDoを追加
    addTodo() {
      if (this.todo.trim() === "") {
        this.$message.error("ToDoを入力してください。");
        return;
      }
      this.todos.push(this.todo.trim());
      this.todo = ""; // 入力フォームをクリア
    },
    // ToDoを削除
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    // GitHubからIssueを取得してToDoリストに反映
    getIssues() {
      axios
        .get(`${process.env.VUE_APP_GITHUB_ENDPOINT}/issues`, {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_GITHUB_TOKEN}`,
          },
        })
        .then((response) => {
          // 取得したIssueをtodosリストに追加
          const issues = response.data.map((issue) => issue.title);
          this.todos = [...this.todos, ...issues];
        })
        .catch((error) => {
          console.error("Issue取得エラー:", error);
        });
    },
  },
  created() {
    this.getIssues(); // ページロード時にIssueを取得
  },
};
</script>

<style scoped>
/* ページ全体のスタイル */
.page-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
}

/* フォームのスタイル */
.todo-form {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}

/* Todoリストのスタイル */
.todo-list {
  display: flex;
  justify-content: center;
}

.el-row {
  width: 100%;
  max-width: 600px;
}

.el-card {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-button {
  background-color: #52c41a;
  border-color: #52c41a;
  color: white;
  border-radius: 50%;
}
</style>
