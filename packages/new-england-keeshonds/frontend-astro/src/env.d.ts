/// <reference types="astro/client-image" />

interface ImportMetaEnv {
  readonly PUBLIC_APPCHECK_DEBUG_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
