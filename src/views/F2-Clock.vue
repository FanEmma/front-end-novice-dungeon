<script setup>
import { ref, onBeforeUnmount } from 'vue';

const useCurrentTime = () => {
	const currentTime = ref(new Date());
	const hour = ref(currentTime.value.getHours() * 30);
	const minute = ref(currentTime.value.getMinutes() * 6);
	const second = ref(currentTime.value.getSeconds() * 6);
	const updateCurrentTime = () => {
		currentTime.value = new Date();
		hour.value = ref(currentTime.value.getHours() * 30);
		minute.value = ref(currentTime.value.getMinutes() * 6);
		second.value = ref(currentTime.value.getSeconds() * 6);
	};
	const updateTimeInterval = setInterval(updateCurrentTime, 1000);
	onBeforeUnmount(() => {
		clearInterval(updateTimeInterval);
	});
	return {
		currentTime,
		hour,
		minute,
		second,
	};
};

const { currentTime, hour, minute, second } = useCurrentTime();
</script>
<template>
  <div class="clock-content">
    <div class="clock">
      <ul class="hours-systems">
        <li
          class="circle second"
          style="--pointer-color: #c3c990"
          :style="`transform: rotateZ(${second.value - 30}deg)`"
        >
          <span></span>
        </li>
        <li
          class="circle minute"
          style="--pointer-color: #61dad0"
          :style="`transform: rotateZ(${minute.value - 30}deg)`"
        >
          <span></span>
        </li>
        <li
          class="circle hour"
          style="--pointer-color: #8466b5"
          :style="`transform: rotateZ(${
            hour.value + minute.value / 12 - 30
          }deg)`"
        >
          <span></span>
        </li>
        <li
          class="twelve"
          :style="`--i:${index}`"
          v-for="(item, index) in 12"
          :key="item"
        >
          <span>
            {{ item }}
          </span>
        </li>
        <li
          class="twenty-four"
          :style="`--i:${index}`"
          v-for="(item, index) in 12"
          :key="item + 12"
        >
          <span>
            {{ item + 12 }}
          </span>
        </li>
      </ul>
      <ul class="hours-systems dotted">
        <li :style="`--d:${index}`" v-for="(item, index) in 60" :key="item">
          <span></span>
        </li>
      </ul>
      <ul class="hours-systems star">
        <li :style="`--s:${index}`" v-for="(item, index) in 12" :key="item">
          <svg viewBox="0 0 20 20">
            <path
              d="M 10 0 L 10 0 L 13 7  L 20 10 L 20 10 L 13 13 L 10 20 L 10 20 L 7 13 L 0 10 L 0 10 L 7 7 L 10 0"
            ></path>
          </svg>
        </li>
      </ul>
      <ul class="hours-systems line">
        <li :style="`--l:${index}`" v-for="(item, index) in 12" :key="item">
          <span></span>
        </li>
      </ul>
      <div class="clock-text">
        <span>{{ currentTime.toLocaleTimeString() }}</span>
        <span>{{ currentTime.toLocaleDateString() }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.clock-content {
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
  background-color: #363E46;
  background-image: linear-gradient(130deg, #485563 0%, #29323c 100%);
  .clock {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 750px;
    height: 400px;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    border-radius: 250px 50px 50px 250px;
    box-shadow: 45px 45px 45px -10px rgba(0, 0, 0, 0.15),
      inset 15px 15px 10px rgba(255, 255, 255, 0.9),
      -15px -15px 35px rgba(0, 0, 0, 0.05),
      inset -2px -2px 15px rgba(0, 0, 0, 0.15);
      .clock-text {
        right: 30px;
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 30px;
        span {
          width: 100%;
          min-width: 310px;
          padding: 10px 30px;
          font-size: 2.5rem;
          font-weight: bold;
          border-radius: 50px;
          color: #fff;
          background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
          box-shadow: 3px 3px 8px 0px #29323c96,
            inset 5px 5px 7px rgba(0, 0, 0, 0.25), 
            -3px -6px 4px rgba(255, 255, 255);
         border: 5px solid #c3c990;
        }
      }
    .hours-systems {
      overflow: hidden;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      left: 30px;
      width: 100%;
      max-width: 350px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
      box-shadow: 3px 3px 8px 0px #29323c96,
        inset 5px 5px 7px rgba(0, 0, 0, 0.25), 
        -3px -6px 4px rgba(255, 255, 255);
      margin: 0;
      padding: 0;
      list-style: none;
      transform: rotate(30deg);
      border: 5px solid #c3c990;
      li {
        position: absolute;
        text-align: center;
        color: #fff;
        transform: rotate(calc(30deg * var(--i)));
        span {
          display: inline-block;
          transform: rotate(calc(-30deg * (var(--i) + 1) ));
        }
      }
      li.circle {
        width: 280px;
        height: 280px;
        border: 1px solid rgba(0, 0, 0, 0.09);
        border-radius:  50%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        transform: rotate(-30deg);
        &.second:before {
          content: '';
          position: absolute;
          top: -25px;
          left: 50%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--pointer-color);
          transform: translateX(-55%);
          opacity: 0.5;
        }
        span {
          height: 100%;
          background: var(--pointer-color);
          transform-origin: top;
          transform: scaleY(0.5);
        }
        &.hour {
          width: 110px;
          height: 110px;
          span {
            width: 6px;
            border-radius: 500px;
          }
        }
        &.minute {
          width: 160px;
          height: 160px;
          span {
            width: 4px;
            border-radius: 500px;
          }
        }
        &.second {
          width: 230px;
          height: 230px;
          border: none;
          opacity: 0.5;
          span {
            width: 2px;
            border-radius: 500px;
          }
        }
      }
      li.twelve {
        inset: 55px;
        font-size: 0.9rem;
      }
      li.twenty-four {
        inset: 3px;
        font-size: 1rem;
      }
      &.dotted, &.star, &.line {
        background-image: none;
        box-shadow:none;
        border: none;
      }
      &.dotted {
          transform: rotate(0deg);
        li {
          inset: 25px;
          transform: rotate(calc(6deg * var(--d) ));
          span {
            width: 2px;
            height: 2px;
            border-radius: 50%;
            background-color: #81909f;
          }
          &:nth-of-type(5n - 4) {
            span {
              display: none;
            }
          }
        }
        
      }
      &.line {
          transform: rotate(0deg);
        li {
          inset: 26px;
          transform: rotate(calc(30deg * var(--l)));
          span {
            width: 20px;
            height: 1px;
            background-color: #c3c990;
            transform: rotate(90deg);
          }
        }
      }
      &.star {
          transform: rotate(45deg);
        li {
          inset: 5px;
          transform: rotate(calc(30deg * var(--s)));
          svg {
            width: 8px;
            height: 8px;
            fill: #61dad0;
          }
        }
      }
    }
  }
}
  @media screen and (max-width: 800px) {
    .clock-content {
      display:block;
      .hours-systems {
        left: auto !important;
        top: 30px;
      }
      .clock {
        right: auto;
        width: 100%;
        max-width: 400px;
        height: 700px;
        max-height: 700px;
        margin: 50px auto;
        border-radius: 250px 250px 50px 50px;
      }
      .clock-text {
        right: auto !important;
        bottom: 60px;
      }
    }
  }
</style>