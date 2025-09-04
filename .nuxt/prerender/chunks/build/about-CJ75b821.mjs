import { resolveComponent, mergeProps, useSSRContext } from 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/vue/server-renderer/index.mjs';
import { A as AboutSection } from './AboutSection-BhoexKWd.mjs';
import './server.mjs';
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

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_header_component = resolveComponent("header-component");
      const _component_footer_component = resolveComponent("footer-component");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_header_component, null, null, _parent));
      _push(ssrRenderComponent(AboutSection, null, null, _parent));
      _push(ssrRenderComponent(_component_footer_component, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-CJ75b821.mjs.map
