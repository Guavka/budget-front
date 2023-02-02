<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props" :size="size" variant="outlined">
        <v-avatar :size="size" color="brown">
          <span class="text-h5">{{ userData.initials }}</span>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <v-avatar color="brown">
            <span class="text-h5">{{ userData.initials }}</span>
          </v-avatar>
          <h3>{{ userData.fullName }}</h3>
          <p class="text-caption mt-1">
            {{ userData.email }}
          </p>
          <v-divider class="my-3"></v-divider>
          <v-btn rounded variant="text" prepend-icon="mdi-clipboard-account-outline">
            {{ $t('accountMenu.edit') }}
          </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn rounded variant="text" prepend-icon="mdi-logout-variant">
            {{ $t('accountMenu.logout') }}
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>

</template>

<script setup lang="ts">
import { VButtonsSize, AccountMenuData } from './types';

export interface AccountWidgetProps {
  userData: AccountMenuData,
  icon?: string,
  size?: VButtonsSize,
}

withDefaults(defineProps<AccountWidgetProps>(), {
  size: 'large',
});

</script>

<style lang="scss" scoped>

</style>
