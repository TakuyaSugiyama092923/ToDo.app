<template>
  <el-col :span="6">
    <el-card class="box-card" shadow="hover">
      <p v-if="type === 'todo'">{{ item }}</p>
      <p v-else-if="type === 'issue'">{{ item.title }}</p>
      <el-button
        @click="handleRemove"
        type="success"
        icon="el-icon-check"
        circle
      ></el-button>
    </el-card>
  </el-col>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    item: {
      type: [String, Object],
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleRemove() {
      this.$emit("remove");
    },
  },
};
</script>
