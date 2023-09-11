<script setup>
// import { ref, reactive } from 'vue';
// interface data {
//   city: string,
//   date: string,
//   time: string,
// }
// const arr: data[] = [
//   {
//     city: 'NEW YORK',
//     date: 'NEW',
//     time: 'NEW'
//   },

// ];
</script>
<template>
  <div class="worldClock-content">
    <div class="table-content">
      <div class="title">
        <h1>WORLD CLOCK</h1>
      </div>
      <ul class="list">
        <li v-for="(item, index) in 5"
            :key="index">
          <div class="city">
            NEW YORK
          </div>
          <div class="date">
            27 JAN. 2019
          </div>
          <div class="time">
            02:46
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;0,800;1,700&display=swap');

.worldClock-content {
  font-family: 'Open Sans', sans-serif;
  background-color: #F0F0F0;
  width: 100%;
  max-width: 1280px;
  margin: 0px auto;
  padding: 30px;

  .table-content {
    margin: 0px auto;
    width: 540px;

    .title {
      margin: 0 auto;
      margin-bottom: 32px;
      border-top: 10px solid #000;
      border-bottom: 10px solid #000;

      h1 {
        font-weight: 900;
        font-size: 70px;
        margin: 0;
        color: #000;
      }
    }

    .list {
      list-style: none;
      margin: 0;
      padding: 0;
      border: 2px solid #000;

      li {
        padding: 16px 40px;
        height: 104px;
        background: white;
        border-bottom: 2px solid #000;
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 8px;
        grid-template-areas:
          "city time"
          "date time";

        .time {
          grid-area: time;
          font-size: 72px;
          text-align: center;
          font-weight: bold;
          line-height: 100%;
        }

        .city {
          grid-area: city;
          font-size: 36px;
          text-align: start;
          font-weight: bold;
          line-height: 100%;
          padding-top: 8px;
        }

        .date {
          grid-area: date;
          font-size: 16px;
          text-align: start;
          font-weight: bold;
          line-height: 100%;
          padding-bottom: 10px;
          font-style: italic;
        }

        &:first-child,
        &:last-child {
          background: #000;
          color: white;
        }

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>