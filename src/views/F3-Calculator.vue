<script setup>
import { ref, reactive } from 'vue';
const switchType = ref('Light');
const resultValue = ref(0);
const logs = ref([]);
const buttons = reactive({
	nums: [
		{ value: 7, label: '7' },
		{ value: 8, label: '8' },
		{ value: 9, label: '9' },
		{ value: 4, label: '4' },
		{ value: 5, label: '5' },
		{ value: 6, label: '6' },
		{ value: 1, label: '1' },
		{ value: 2, label: '2' },
		{ value: 3, label: '3' },
		{ value: 0, label: '0' },
		{ value: '00', label: '00' },
		{ value: '.', label: '.' },
	],
});
function handleSwitch() {
	switchType.value === 'Dark'
		? (switchType.value = 'Light')
		: (switchType.value = 'Dark');
}
function handleAdd(e) {
	if (Number.isInteger(resultValue.value)) {
		resultValue.value === 0
			? (resultValue.value = '')
			: (resultValue.value = String(resultValue.value));
	}
	resultValue.value += e;
}
function getResult() {
	let log = resultValue.value;
	resultValue.value = eval(resultValue.value);
	logs.value.push(log + `=${resultValue.value}`);
}
function handleClear() {
	resultValue.value = 0;
	logs.value = [];
}
function handleReturn() {
	// TODO: 尚未處理的小細節
	// console.log('resultValue.value', ...resultValue.value);
	resultValue.value
		? (resultValue.value = String(resultValue.value).slice(0, -1))
		: (resultValue.value = 0);
}
function formatNumber(str) {
	if (isNaN(str)) {
		return str;
	}
	let glue = ',';
	let digits = str.toString().split('.');
	let integerDigits = digits[0].split('');
	let threeDigits = [];
	while (integerDigits.length > 3) {
		threeDigits.unshift(
			integerDigits.splice(integerDigits.length - 3, 3).join('')
		);
	}

	threeDigits.unshift(integerDigits.join(''));
	digits[0] = threeDigits.join(glue);

	return digits.join('.');
}
</script>
<template>
  <div class="calculator-content" :class="switchType">
    <!-- 切換按鈕 -->
    <label class="switch">
      <input
        type="checkbox"
        :checked="switchType !== 'Dark'"
        @change="handleSwitch()"
      />
      <span class="slider round">
        <span :class="switchType === 'Dark' ? 'text-end' : 'text-start'">
          {{ switchType === "Dark" ? "Light" : "Dark" }}
        </span>
      </span>
    </label>
    <transition appear name="fade-down">
      <div class="calculator">
        <div class="display-area">
          <span class="formula" v-for="(log, index) in logs" :key="index">
            <span v-if="index === logs.length - 1">{{ log }}</span>
          </span>
          <p class="result">{{ formatNumber(resultValue) }}</p>
        </div>
        <div class="buttons">
          <div class="num">
            <button
              v-for="item in buttons.nums"
              :key="item.value"
              @click="handleAdd(item.value)"
            >
              {{ item.label }}
            </button>
          </div>
          <div class="symbol">
            <button @click="handleAdd('/')">&divide;</button>
            <button @click="handleAdd('*')">&times;</button>
            <button @click="handleAdd('+')">+</button>
            <button @click="handleAdd('-')">-</button>
          </div>
          <div class="return">
            <button @click="handleClear()">AC</button>
            <button @click="handleReturn()">⌫</button>
          </div>
          <div class="equal">
            <button @click="getResult()">=</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
$box-shadow: 0px 20px 40px #00000066;

.calculator-content {
  /* Light colors */
  --body-background-color: #E8E8E8;
  --primary-color: #062145;
  --primary-color-light: #00C4FF;
  --primary-color-dark: #041936;
  --secondary-color: #6C00FF;
  --text-color: #FFFFFF;

  &.Dark {
    /* Dark colors */
    --body-background-color: #062145;
    --primary-color: #E8E8E8;
    --primary-color-light: #82a7d1;
    --primary-color-dark: #dfdfdf;
    --secondary-color: #dbdbdb;
    --text-color: #062145;
    .calculator {
      .equal button {
        background: var(--primary-color-light);
        color: var(--primary-color);
      }
    }
  }

  font-family: "Roboto", sans-serif;
  background-color: var(--body-background-color);
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0px auto;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* 切換按鈕樣式 */
  .switch {
    position: relative;
    display: inline-block;
    width: 90px;
    height: 34px;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    input:checked + .slider {
      background-color: #062145;
    }
    input:focus + .slider {
      box-shadow: 0 0 1px #062145;
    }
    input:checked + .slider:before {
      -webkit-transform: translateX(55px);
      -ms-transform: translateX(55px);
      transform: translateX(55px);
    }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #E8E8E8;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      span {
        color: var(--body-background-color);
        line-height: 34px;
        width: 100%;
        display: inline-block;
        padding: 0px 15px;
        font-weight: bold;
      }
      &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        box-shadow: 0px 5px 10px #00000066;
      }
      &.round {
        border-radius: 34px;
        box-shadow: 0px 5px 10px #00000066;
      }

      &.round:before {
        border-radius: 50%;
      }
    }
  }

  /* 計算機樣式 */
  .calculator {
    margin: 1.5rem auto;
    width: 100%;
    max-width: 350px;
    height: 525px;
    box-shadow: 0px 20px 40px #00000066;
    border-radius: 20px;
    background-color: var(--primary-color-dark);
    overflow: hidden;
    .display-area {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 1rem;
      height: 109px;
      width: 100%;
      text-align: end;
      .formula {
        color: var(--primary-color-light);
        font-size: 1rem;
        width: 100%;
        display: inline-block;
        padding: 0 3px;
      }
      .result {
        color: var(--text-color);
        font-size: 56px;
        line-height: 100%;
        margin: 0;
      }
    }
    .buttons {
      padding: 1rem 0.5rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      gap: 1rem;
      grid-template-areas:
        "num num num symbol"
        "num num num symbol"
        "num num num symbol"
        "num num num symbol"
        "return return equal equal";
      background-color: var(--primary-color);
    }
    button {
      width: 72px;
      height: 64px;
      border-radius: 1rem;
      border: none;
      background: var(--primary-color);
      color: var(--text-color);
      font-size: 24px;
      font-weight: medium;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      &:hover {
        filter: brightness(80%);
      }
    }
    .equal {
      grid-area: equal;
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      button {
        padding: 18px 30px;
        width: 100%;
        background: transparent
          linear-gradient(90deg, var(--primary-color-light) 0%, var(--secondary-color) 100%) 0% 0% no-repeat
            padding-box;
        text-align: end;
        line-height: 100%;
      }
    }
    .num {
      grid-area: num;
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      button {
        font-weight: 300;
      }
    }
    .symbol {
      grid-area: symbol;
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      button {
        background: var(--primary-color-dark);
      }
    }
    .return {
      grid-area: return;
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      button {
        color: var(--primary-color-light);
      }
    }
  }
}

.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.5s;
}
.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>