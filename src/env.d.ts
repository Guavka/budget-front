/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_TITLE: string
  readonly VITE_SHORT_TITLE: string
  readonly VITE_IS_MOCK: boolean
  readonly VITE_TOKEN_LENGTH: number
  readonly VITE_MIN_PASS_LEN: number
  readonly VITE_MAX_PASS_LEN: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}
