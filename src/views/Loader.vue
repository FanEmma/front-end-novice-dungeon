<template>
  <div class="loader-content">
    <div class="loader">
      <div class="dot" v-for="item in 36" :key="item"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$ballSize: 16px;
$containerSize: 250px;
$n: 36;
$pDeg: 360deg / $n;
$d: 2s;
.loader-content {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0px auto;
  padding: 20px;
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  background-color: #254174;
  background-image: radial-gradient(circle at center, #254174 0%, #142d5c 100%);
}
.loader {
  width: $containerSize;
  height: $containerSize;
  margin: 50px auto;
  position: relative;
  /* outline: 1px solid palevioletred; */
  border-radius: 50%;
  .dot {
    position: absolute;
    left: 50%;
    top: 0;
    width: $ballSize;
    height: $ballSize;
    margin-top: -$ballSize / 2;
    margin-left: -$ballSize / 2;
    perspective: 70px;
    /* background: blue; */
    perspective: 70px;
    transform-style: preserve-3d;
    transform-origin: center $containerSize / 2 + $ballSize / 2;
    @for $i from 1 through $n {
      &:nth-child(#{$i}) {
        transform: rotate($pDeg * ($i - 1));
        &::before,
        &::after {
          animation-delay: -$d / $n * ($i - 1) * 6;
        }
      }
    }
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    &::before {
      background: #5084be;
      top: 100%;
      animation: rotation-blue $d infinite;
      @keyframes rotation-blue {
        0% {
          animation-timing-function: ease-in;
        }
        25% {
          transform: translate3d(0, -100%, $ballSize);
          animation-timing-function: ease-out;
        }
        50% {
          transform: translate3d(0, -200%, 0);
          animation-timing-function: ease-in;
        }
        75% {
          transform: translate3d(0, -100%, -$ballSize);
          animation-timing-function: ease-out;
        }
      }
    }
    &::after {
      background: #ebc57c;
      bottom: 100%;
      animation: rotation-yellow $d infinite;
      @keyframes rotation-yellow {
        0% {
          animation-timing-function: ease-in;
        }
        25% {
          transform: translate3d(0, 100%, $ballSize);
          animation-timing-function: ease-out;
        }
        50% {
          transform: translate3d(0, 200%, 0);
          animation-timing-function: ease-in;
        }
        75% {
          transform: translate3d(0, 100%, -$ballSize);
          animation-timing-function: ease-out;
        }
      }
    }
  }
}
</style>