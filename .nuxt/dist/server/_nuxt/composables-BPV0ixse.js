import { hasInjectionContext, inject } from "vue";
import { useHead as useHead$1, headSymbol } from "/Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/@unhead/vue/dist/index.mjs";
import { u as useNuxtApp } from "../server.mjs";
function injectHead(nuxtApp) {
  const nuxt = nuxtApp || useNuxtApp();
  return nuxt.ssrContext?.head || nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      const head = inject(headSymbol);
      if (!head) {
        throw new Error("[nuxt] [unhead] Missing Unhead instance.");
      }
      return head;
    }
  });
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  return useHead$1(input, { head, ...options });
}
export {
  useHead as u
};
//# sourceMappingURL=composables-BPV0ixse.js.map
