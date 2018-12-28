<template>
  <d2-container type="full" class="page">
    <template slot="header">新事项</template>
    <d2-grid-layout v-bind="layout">
      <d2-grid-item v-for="(item, index) in layout.layout" :key="index" v-bind="item">
        <el-card shadow="never" class="page_card">
          <div
            size="mini"
            type="info"
            slot="header"
            style="display: flex;justify-content: space-between;align-items: center;"
          >
            {{item.title}}
            <el-button v-if="item.i === '0' ? false:true">新事项</el-button>
          </div>
          <template v-if="item.i === '0'">
            <el-tree
              :data="data21"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[2, 3]"
              :default-checked-keys="[5]"
              :props="defaultProps1"
            ></el-tree>
          </template>
          <template v-if="item.i === '1'">
            <Etable></Etable>
            <el-pagination background layout="prev, pager, next" :total="10"></el-pagination>
          </template>
        </el-card>
      </d2-grid-item>
    </d2-grid-layout>
  </d2-container>
</template>

<script>
import Etable from "./compoents/table";
export default {
  data() {
    return {
      filename: __filename,
      layout: {
        layout: [
          { x: 0, y: 0, w: 2, h: 10, i: "0", title: "人员选择" },
          { x: 2, y: 0, w: 10, h: 10, i: "1", title: "事项管理" }
        ],
        colNum: 12,
        rowHeight: 30,
        isDraggable: true,
        isResizable: true,
        isMirrored: false,
        verticalCompact: true,
        margin: [10, 10],
        useCssTransforms: true
      },
      data21: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                },
                {
                  id: 11,
                  label: "三级 1-1-1"
                },
                {
                  id: 12,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
      defaultProps1: {
        children: "children",
        label: "label"
      }
    };
  },
  mounted() {
    // 加载完成后显示提示
    this.showInfo();
  },
  methods: {
    log(arg1 = "log", ...logs) {
      if (logs.length === 0) {
        console.log(arg1);
      } else {
        console.group(arg1);
        logs.forEach(e => {
          console.log(e);
        });
        console.groupEnd();
      }
    },
    // 显示提示
    showInfo() {
      this.$notify({
        title: "提示",
        message:
          "你可以按住卡片拖拽改变位置；或者在每个卡片的右下角拖动，调整卡片大小"
      });
    }
  },
  components: {
    Etable
  }
};
</script>

<style lang="scss" scoped>
.page {
  .vue-grid-layout {
    background-color: $color-bg;
    border-radius: 4px;
    margin: -10px;
    .page_card {
      height: 100%;
      @extend %unable-select;
    }
    .vue-resizable-handle {
      opacity: 0.3;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
