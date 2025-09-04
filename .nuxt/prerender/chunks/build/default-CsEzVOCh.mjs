import { mergeProps, useSSRContext } from 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/h3/dist/index.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/ufo/dist/index.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/destr/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/hookable/dist/index.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/ohash/dist/index.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/klona/dist/index.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/defu/dist/defu.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/scule/dist/index.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/unctx/dist/index.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/pathe/dist/index.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/unhead/dist/server.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/devalue/index.js';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$1 = { name: "Footer" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-b8220ad6><div class="container" data-v-b8220ad6><p data-v-b8220ad6>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Agrim Sood</p><div class="social" data-v-b8220ad6><a href="mailto:agrim@ualberta.ca" data-v-b8220ad6>Email</a><a href="https://linkedin.com/in/agrim-sood" target="_blank" rel="noopener" data-v-b8220ad6>LinkedIn</a><a href="https://github.com/aggi000" target="_blank" rel="noopener" data-v-b8220ad6>GitHub</a><a href="/resume.pdf" target="_blank" rel="noopener" data-v-b8220ad6>Resume (PDF)</a></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b8220ad6"]]), { __name: "Footer" });
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Footer = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CsEzVOCh.mjs.map
