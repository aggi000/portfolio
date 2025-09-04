import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "section about"
  }, _attrs))} data-v-ff59b2ee><h2 data-v-ff59b2ee>About me</h2><div class="about-copy" data-v-ff59b2ee><span data-v-ff59b2ee><strong data-v-ff59b2ee>I’m Agrim.</strong> —driven to turn messy, ambiguous problems into things people actually use. I’m hungry for feedback and keep a high bar—not for perfection’s sake, but to earn trust through clarity, reliability, and follow-through. I believe no one is a know-it-all, so I learn by doing: pick things up fast on the job, ship in small steps, measure what matters, write things down, and share learnings. I favor simple solutions that scale and own outcomes, aiming to leave teams and code a little better than I found them. Outside work, I keep a competitive streak in athletics—distance running in the summer, snowboarding in the winter—and unwind by cooking for friends; those habits keep me curious, disciplined, and energized for the next challenge.</span></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ff59b2ee"]]), { __name: "AboutSection" });
export {
  AboutSection as A
};
//# sourceMappingURL=AboutSection-BhoexKWd.js.map
