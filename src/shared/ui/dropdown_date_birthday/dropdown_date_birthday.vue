<template>
  <div class="dropdown-date-birthday">
    <div class="date-input-wrapper">
      <label for="date-of-birth">Дата рождения</label>
      <div class="input-container">
        <input
          id="date-of-birth"
          type="text"
          :value="formattedDate"
          placeholder="дд.мм.гггг"
          @focus="showCalendar = true"
          @input="handleInput"
        />
        <img src="/icons/calendar-icon.svg" alt="Календарь" class="calendar-icon" />
      </div>
    </div>

    <div v-if="showCalendar" class="calendar-dropdown">
      <div class="calendar-header">
        <select v-model="currentMonth">
          <option v-for="(month, index) in months" :key="index" :value="index">{{ month }}</option>
        </select>
        <select v-model="currentYear">
          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>
      </div>
      <div class="weekdays">
        <span v-for="day in weekdays" :key="day">{{ day }}</span>
      </div>
      <div class="days">
        <span
          v-for="(day, index) in calendarDays"
          :key="index"
          :class="{ 'day-in-month': day.inMonth, 'selected': day.selected }"
          @click="selectDate(day.date)"
        >
          {{ day.date ? day.date.getDate() : '' }}
        </span>
      </div>
      <div class="calendar-actions">
        <button @click="cancel">Отменить</button>
        <button @click="select">Выбрать</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const showCalendar = ref(false);
const selectedDate = ref<Date | null>(null);
const currentMonth = ref(new Date().getMonth());
const currentYear = ref(new Date().getFullYear());

const months = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];
const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const formattedDate = computed(() => {
  if (selectedDate.value) {
    const day = String(selectedDate.value.getDate()).padStart(2, '0');
    const month = String(selectedDate.value.getMonth() + 1).padStart(2, '0');
    const year = selectedDate.value.getFullYear();
    return `${day}.${month}.${year}`;
  }
  return '';
});

const years = computed(() => {
  const yearsArray = [];
  const current = new Date().getFullYear();
  for (let i = current - 100; i <= current; i++) {
    yearsArray.push(i);
  }
  return yearsArray.sort((a, b) => b - a);
});

const calendarDays = computed(() => {
  const days = [];
  const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1);
  const lastDayOfMonth = new Date(currentYear.value, currentMonth.value + 1, 0);
  const startDay = (firstDayOfMonth.getDay() + 6) % 7; // Adjust to start on Monday

  // Previous month's days
  const prevMonthLastDay = new Date(currentYear.value, currentMonth.value, 0);
  for (let i = startDay - 1; i >= 0; i--) {
    days.push({
      date: new Date(prevMonthLastDay.getFullYear(), prevMonthLastDay.getMonth(), prevMonthLastDay.getDate() - i),
      inMonth: false
    });
  }

  // Current month's days
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const date = new Date(currentYear.value, currentMonth.value, i);
    days.push({
      date,
      inMonth: true,
      selected: selectedDate.value && date.toDateString() === selectedDate.value.toDateString()
    });
  }

  // Next month's days
  const totalDays = days.length;
  for (let i = 1; totalDays + i <= 42; i++) { // Ensure 6 rows of 7 days
    days.push({
      date: new Date(currentYear.value, currentMonth.value + 1, i),
      inMonth: false
    });
  }
  return days;
});

const selectDate = (date: Date) => {
  selectedDate.value = date;
};

const handleInput = (event: Event) => {
  const input = (event.target as HTMLInputElement).value;
  // Basic validation/parsing for dd.mm.yyyy
  const parts = input.split('.');
  if (parts.length === 3) {
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // Months are 0-indexed
    const year = parseInt(parts[2]);
    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      const date = new Date(year, month, day);
      if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
        selectedDate.value = date;
        currentMonth.value = month;
        currentYear.value = year;
      }
    }
  }
};

const cancel = () => {
  showCalendar.value = false;
  selectedDate.value = null; // Clear selected date on cancel
};

const select = () => {
  showCalendar.value = false;
};
</script>

<style scoped lang="scss">
.dropdown-date-birthday {
  position: relative;
  width: 250px; /* Adjust as needed */
  font-family: Arial, sans-serif;

  .date-input-wrapper {
    margin-bottom: 10px;

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    .input-container {
      position: relative;

      input {
        width: 100%;
        padding: 8px 12px;
        padding-right: 30px; /* Space for icon */
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      .calendar-icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }

  .calendar-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: 15px;

    .calendar-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      select {
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }

    .weekdays {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      text-align: center;
      font-weight: bold;
      margin-bottom: 5px;

      span {
        padding: 5px;
      }
    }

    .days {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      text-align: center;

      span {
        padding: 8px;
        cursor: pointer;
        border-radius: 50%;
        margin: 2px;

        &:hover {
          background-color: #f0f0f0;
        }

        &.day-in-month {
          color: #333;
        }

        &.selected {
          background-color: #aed581; /* Green color from screenshot */
          color: #fff;
        }
      }
    }

    .calendar-actions {
      display: flex;
      justify-content: space-around;
      margin-top: 15px;

      button {
        padding: 8px 15px;
        border: 1px solid #ccc;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;

        &:first-child {
          background-color: #fff;
          color: #333;
          border-color: #ccc;
        }

        &:last-child {
          background-color: #aed581; /* Green color from screenshot */
          color: #fff;
          border-color: #aed581;
        }
      }
    }
  }
}
</style> 