<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <span>|</span>
        <router-link to="/todolist">TodoList</router-link>
        <span>|</span>
        <router-link to="/issues">IssueList</router-link> <!-- IssueListへのリンク追加 -->
        <router-link to="/todos-issues">Todos-Issues</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 10px 0;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  font-size: 18px;
  font-weight: bold;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #2c3e50;
}

nav a:hover {
  color: #42b983;
}

main {
  margin: 20px auto;
  max-width: 800px;
  padding: 20px;
  text-align: center;
}
</style>
