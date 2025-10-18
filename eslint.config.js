import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*']
  },

  {
    name: 'app/unplugin-vue-router',
    files: ['src/pages/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  },

  {
    name: 'app/custom-rules',
    files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      'no-unref': 'off',
      'no-control-regex': 'off',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      'vue/no-unused-vars': 'warn'
    }
  },

  skipFormatting
)
