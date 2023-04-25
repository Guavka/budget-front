<template>
  <div>
    <v-card>
      <v-list>
        <v-list-item v-for="item in scoresData" :key="item.name" rounded="xl" :value="item">
          <v-btn variant="plain">
            {{ item.name }}
            {{ item.type }}
            {{ item.balance }}
            {{ item.currency }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ScoreData } from './types';

export interface ScoreWidgetProps {
  scoresData: ScoreData[],
}

defineProps<ScoreWidgetProps>();
</script>

<style scoped></style>
