<script setup>
</script>
<template>
  <div class="multiplicationTable-content">
    <ul class="table-content">
      <li class="title">
        <div class="border-top"></div>
        <div class="content">
          <h2>九九乘法表</h2>
          <p>MULTIPLICATION CHART</p>
        </div>
        <div class="border-bottom"></div>
      </li>
      <li
        v-for="(firstNum, index) in 9"
        :key="index"
        class="card"
        :class="'card' + index"
      >
        <ul>
          <li>
            <h2>{{ firstNum }}</h2>
          </li>
          <li v-for="lastNum in 9" :key="lastNum">
            <p>{{ firstNum }} x {{ lastNum }} = {{ firstNum * lastNum }}</p>
          </li>
        </ul>
      </li>
    </ul>
    <footer>Copyright © 2019 HexSchool. All rights reserved.</footer>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");

.multiplicationTable-content {
  --primary: #2EB738;

  font-family: "Helvetica Neue", sans-serif;
  background-color: #F0F0F0;
  width: 100%;
  max-width: 1280px;
  margin: 0px auto;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  footer {
    text-align: end;
    background: var(--primary);
    color: #fff;
    padding: 8px 85px;
  }
  .table-content {
    color: var(--primary);
    padding: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px 30px;

    .card {
      padding: 50px 40px;
      background: #FFFFFF;
      border: none;
      width: 350px;
      height: 366px;
      box-shadow: 0px 3px 10px #D8D8D8;
      border-radius: 100px 0px 30px 0px;
      ul {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        li {
          width: 50%;
          margin: 0;
          h2 {
            position: relative;
            top: -15px;
            font-size: 128px;
            text-shadow: 4px 3px 0px #F0F0F0;
            margin: 0;
            padding: 0;
            height: 130px;
            color: var(--primary);
          }
          p {
            width: 100%;
            font-size: 24px;
            margin: 0;
            padding: 0 10px 0 18px;
            text-align: justify;
            color: var(--primary);
          }
        }
      }
      &.card0 {
        display: none;
      }
    }
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 350px;
      height: 366px;
      padding: 0.5em;
      background-position: 0 0, 0 0, 100% 0, 0 100%;
      background-size: 1px 0%, 100% 1px, 1px 0%, 100% 1px;
      background-repeat: no-repeat;
      background-image: none, // left
        linear-gradient(90deg, transparent 10%, var(--primary) 10%, var(--primary) 90%, transparent 90%), // top
        none, // right
        linear-gradient(270deg, transparent 10%, var(--primary) 10%, var(--primary) 90%, transparent 90%); // bottom;
      position: relative;
      .border-top,
      .border-bottom {
        &::before {
          content: "ｘ";
          position: absolute;
          right: 5px;
        }
        &::after {
          content: "ｘ";
          position: absolute;
          left: 5px;
        }
      }
      .border-top {
        &::before {
          top: -12px;
        }
        &::after {
          top: -12px;
        }
      }
      .border-bottom {
        &::before {
          bottom: -12px;
        }
        &::after {
          bottom: -12px;
        }
      }
      .content {
        h2 {
          margin: 0;
          font-size: 56px;
          font-weight: bold;
          font-family: "PingFangTC-Medium", sans-serif;
        }
        p {
          margin: 0;
          font-size: 24px;
        }
      }
    }
  }
  @media screen and (max-width: 535px) {
    footer {
      text-align: center;
      padding: 1rem;
    }
    .table-content {
      padding: 40px 1rem;
      .title {
        height: 150px;
        .content {
          h2 {
            font-size: 30px;
          }
          p {
            font-size: 13px;
          }
        }
      }
      .card {
        height: 100%;
        padding: 20px;
        ul {
          justify-content: center;
          li {
            width: 100%;
            h2 {
              font-size: 6rem;
              height: 100%;
              border-bottom: 1px solid #2EB738;
            }
            p {
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>