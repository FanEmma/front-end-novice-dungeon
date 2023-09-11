<script setup>
import { useRoute } from 'vue-router';
// const router = useRouter();
const route = useRoute();

// const onSubmit = () => {
//   router.push({ name: "Home" });
// };
// const showParams = () => {
//   console.log(route);
// };
</script>
<template>
  <div class="container">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom"
    >
      <ul
        class="nav col-12 col-md-auto mb-2 gap-2 justify-content-center mb-md-0"
      >
        <li>
          <router-link
            class="nav-link px-2"
            :class="{ 'link-secondary': route.fullPath == '/' }"
            to="/"
            >首頁</router-link
          >
        </li>
        <li>
          <router-link
            class="nav-link px-2"
            :class="{
              'link-secondary': route.fullPath == '/MultiplicationTable',
            }"
            to="/MultiplicationTable"
            >九九乘法表</router-link
          >
        </li>
        <li>
          <router-link
            class="nav-link px-2"
            :class="{
              'link-secondary': route.fullPath == '/Clock',
            }"
            to="/Clock"
            >時鐘</router-link
          >
        </li>
        <li>
          <router-link
            class="nav-link px-2"
            :class="{
              'link-secondary': route.fullPath == '/Calculator',
            }"
            to="/Calculator"
            >計算機</router-link
          >
        </li>
        <li>
          <router-link
          class="nav-link px-2"
          :class="{
              'link-secondary': route.fullPath == '/Loader',
            }"
            to="/Loader"
            >Loader</router-link
            >
          </li>
          <li>
            <router-link
              class="nav-link px-2"
              :class="{
                'link-secondary': route.fullPath == '/WorldClock',
              }"
              to="/WorldClock"
              >時區</router-link
            >
          </li>
      </ul>
      </header>
  </div>
</template>
<style lang="scss" scoped>
$color: #ADC8E7;

.nav-link {
  display: inline-block;
  padding: 0.2rem 1.25rem;
  border-radius: 5px;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color;
    border-radius: 5px;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: darken($color, 15%);
    transition: all 0.3s;
    border-radius: 5px;
    z-index: -1;
  }
  &.link-secondary {
    color: #fff !important;
    &:before {
      width: 100%;
    }
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
}
</style>