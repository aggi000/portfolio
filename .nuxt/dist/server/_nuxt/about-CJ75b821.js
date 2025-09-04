import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { A as AboutSection } from "./AboutSection-BhoexKWd.js";
import "../server.mjs";
import "/Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/hookable/dist/index.mjs";
import "/Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/unctx/dist/index.mjs";
import "/Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/radix3/dist/index.mjs";
import "/Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/defu/dist/defu.mjs";
import "/Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/ufo/dist/index.mjs";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=about-CJ75b821.js.map
