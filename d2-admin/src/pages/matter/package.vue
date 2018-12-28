<template>
  <d2-container :filename="filename">
    <template slot="header">成果包</template>
    <el-tabs v-model="activeName">
      <el-tab-pane :label="v.label" :name="v.key" :key="i" v-for="(v, i) in tabItem">
        <keep-alive>
          <d2-crud :columns="columns" :data="data" :options="options"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
    <template slot="footer">Footer</template>
  </d2-container>
</template>

<script>
import menu from "@/menu/modules/demo-business";
export default {
  name: 'matter-package',
  data() {
    return {
      filename: "/matter/package",
      activeName: "1",
      columns: [
        {
          title: "日期",
          key: "date",
          width: "180"
        },
        {
          title: "姓名",
          key: "name",
          width: "180"
        },
        {
          title: "地址",
          key: "address"
        }
      ],
      data: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      options: {
        border: true
      },
      tabItem: [
        {
          label: "用户管理",
          key: "1"
        },
        {
          label: "配置管理",
          key: "2"
        }
      ]
    };
  }
};
</script>
