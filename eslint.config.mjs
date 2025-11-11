import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import pluginVue from 'eslint-plugin-vue';

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
      braceStyle: '1tbs',
    },
  },
})
  .prepend({
    ignores: ['app/components/ui/**', 'app/lib/utils.ts'],
  })
  .append(...pluginVue.configs['flat/recommended'])
  .append({
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-import-compiler-macros': 'error',
      'vue/no-unused-vars': ['error', {
        ignorePattern: '^_',
      }],
      'vue/require-macro-variable-name': ['error', {
        defineProps: 'props',
        defineEmits: 'emit',
        defineSlots: 'slots',
        useSlots: 'slots',
        useAttrs: 'attrs',
      }],
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/define-emits-declaration': ['error', 'type-based'],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      }],
      '@typescript-eslint/unified-signatures': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],
    },

  });
