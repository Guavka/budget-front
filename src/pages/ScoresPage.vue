<template>
  {{ $t('money.name') }}: {{ balance }} {{ currency }}
  <v-scores-widget :scores-data="scoreDataMock"></v-scores-widget>
</template>

<script setup lang="ts">
import { ScoreData } from 'modules/widgets/types';

const balance = ref(0);
const currency = 'USD';

const scoreDataMock: ScoreData[] = [
  {
    name: 'Test',
    balance: 500,
    type: 'card',
    currency: 'RUB',
  },
  {
    name: 'Test2',
    balance: 1000,
    type: 'money',
    currency: 'USD',
  },
  {
    name: 'Test2',
    balance: 1000,
    type: 'money',
    currency: 'USD',
  },
  {
    name: 'Test',
    balance: 500,
    type: 'card',
    currency: 'RUB',
  },
  {
    name: 'Test2',
    balance: 1000,
    type: 'money',
    currency: 'USD',
  },
  {
    name: 'Test',
    balance: 500,
    type: 'card',
    currency: 'RUB',
  },
  {
    name: 'Test2',
    balance: 1000,
    type: 'money',
    currency: 'USD',
  },
  {
    name: 'Test',
    balance: 500,
    type: 'card',
    currency: 'RUB',
  },
  {
    name: 'Test2',
    balance: 1000,
    type: 'money',
    currency: 'USD',
  },
  {
    name: 'Test',
    balance: 500,
    type: 'card',
    currency: 'RUB',
  },
  {
    name: 'Test2',
    balance: 1000,
    type: 'money',
    currency: 'USD',
  },
  {
    name: 'Test',
    balance: 500,
    type: 'card',
    currency: 'RUB',
  },
  {
    name: 'Test2',
    balance: 1000,
    type: 'money',
    currency: 'USD',
  },
  {
    name: 'Test',
    balance: 500,
    type: 'card',
    currency: 'RUB',
  },
  {
    name: 'Test2',
    balance: 1000,
    type: 'money',
    currency: 'USD',
  },
  {
    name: 'Test',
    balance: 500,
    type: 'card',
    currency: 'RUB',
  },
  {
    name: 'Test2',
    balance: 1000,
    type: 'money',
    currency: 'USD',
  },
  {
    name: 'Test',
    balance: 500,
    type: 'card',
    currency: 'RUB',
  },
  {
    name: 'Test2',
    balance: 1000,
    type: 'money',
    currency: 'USD',
  },
  {
    name: 'Test',
    balance: 500,
    type: 'card',
    currency: 'RUB',
  },
  {
    name: 'Test2',
    balance: 1000,
    type: 'money',
    currency: 'USD',
  },

];

</script>

<style scoped></style>
