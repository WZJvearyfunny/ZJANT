<template>
  <div class="menu">
    <div class="menu-nav__grou" v-for="(item,index) in menus" :key="index">
      <div class="menu-nav__title">
        {{item.title}}
      </div>
      <div class="menu-nav__item" v-for="(itemChild,indexChild) in item.items" :key="indexChild">
        <a :href="`#/zh-CN/${itemChild.path}`"
          style="display: block;font-size: 13px;margin: 8px 0;padding: 8px 0 8px 24px;color: #455a64;line-height: 20px;transition: color .2s;text-align: left;">
          {{itemChild.title}}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
interface MenuProps {
  title: String,
  id: String,
  items?: Array<MenuProps>
  path?: String
}

const menus: Array<MenuProps> = [];
menus.push({
  title: '开发指南',
  id: '1',
  items: [{
    id: '1-1',
    title: '介绍',
    path: 'home'
  }, {
    id: '1-2',
    title: '快速上手',
    path: 'quickstart'
  }, {
    id: '1-3',
    title: '进阶用法',
    path: 'advanced-usage'
  }, {
    id: '1-4',
    title: '常见问题',
    path: 'faq'
  }]
})

</script>
<style lang="scss" scoped>
@import '@/styles/variable.scss';

.menu {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: $white;
  color: $black;

  &-nav__grou {
    margin-bottom: 16px;
    padding-left: 6px;
  }

  &-nav__item {
    display: block;
  }

  &-nav__title {
    padding: 8px 0 8px 24px;
    color: #455a64;
    font-weight: 600;
    font-size: 15px;
    line-height: 28px;
    text-align: left;
  }
}
</style>