import { a as buildAssetsURL } from '../_/renderer.mjs';
import { ref, mergeProps, nextTick, computed, withCtx, createVNode, toDisplayString, unref, reactive, useSSRContext } from 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/vue/server-renderer/index.mjs';
import { A as AboutSection } from './AboutSection-BhoexKWd.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BsfybM0k.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/h3/dist/index.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/ufo/dist/index.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/destr/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/hookable/dist/index.mjs';
import 'file:///Users/AgrimSood/Desktop/portfolio/agrim_portfolio/agrim_portfolio/node_modules/ofetch/dist/node.mjs';
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

const _sfc_main$7 = {
  __name: "ProjectFlipCard",
  __ssrInlineRender: true,
  props: {
    project: { type: Object, required: true },
    expanded: { type: Boolean, default: false }
  },
  emits: ["toggle"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["card", {
          expanded: __props.expanded,
          flipped: __props.expanded,
          interactive: true
        }],
        tabindex: "0",
        role: "button",
        "aria-pressed": __props.expanded ? "true" : "false",
        "aria-expanded": __props.expanded ? "true" : "false"
      }, _attrs))} data-v-3d90e239><div class="inner" data-v-3d90e239><div class="face front" data-v-3d90e239><header class="head" data-v-3d90e239><h3 class="title" data-v-3d90e239>${ssrInterpolate(__props.project.title)}</h3><span class="year" data-v-3d90e239>${ssrInterpolate(__props.project.year)}</span></header><h4 class="desc" data-v-3d90e239>${ssrInterpolate(__props.project.short)}</h4>`);
      if ((_a = __props.project.tags) == null ? void 0 : _a.length) {
        _push(`<div class="tags" data-v-3d90e239><!--[-->`);
        ssrRenderList(__props.project.tags, (t, i) => {
          _push(`<span class="tag" data-v-3d90e239>${ssrInterpolate(t)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<footer class="hint" data-v-3d90e239><span data-v-3d90e239>Click to see more</span></footer></div><div class="face back" data-v-3d90e239><header class="head" data-v-3d90e239><h3 class="title" data-v-3d90e239>${ssrInterpolate(__props.project.title)}</h3><span class="year" data-v-3d90e239>${ssrInterpolate(__props.project.year)}</span></header><p class="detail" data-v-3d90e239>${ssrInterpolate(__props.project.details)}</p>`);
      if ((_b = __props.project.points) == null ? void 0 : _b.length) {
        _push(`<ul class="bullets" data-v-3d90e239><!--[-->`);
        ssrRenderList(__props.project.points, (b, i) => {
          _push(`<li data-v-3d90e239>${ssrInterpolate(b)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="stack" data-v-3d90e239><strong data-v-3d90e239>Tech:</strong><span class="tech" data-v-3d90e239>${ssrInterpolate(__props.project.tech)}</span></div><div class="links" data-v-3d90e239>`);
      if (__props.project.link) {
        _push(`<a${ssrRenderAttr("href", __props.project.link)} target="_blank" rel="noopener" class="btn" data-v-3d90e239>Live Demo</a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.project.repo) {
        _push(`<a${ssrRenderAttr("href", __props.project.repo)} target="_blank" rel="noopener" class="btn outline" data-v-3d90e239>Source</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="btn ghost" data-v-3d90e239>Close</button></div></div></div></article>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectFlipCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ProjectFlipCard = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-3d90e239"]]);
const _sfc_main$6 = {
  __name: "SkillsSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const pins = [
      { icon: "\u{1F40D}", name: "Python" },
      { icon: "\u{1F7E9}", name: "Vue 3" },
      { icon: "\u{1F9E0}", name: "PyTorch" },
      { icon: "\u{1F9EA}", name: "Playwright" },
      { icon: "\u{1F343}", name: "MongoDB" },
      { icon: "\u2601\uFE0F", name: "AWS" },
      { icon: "\u{1F5C3}\uFE0F", name: "SQL" },
      { icon: "\u{1F986}", name: "DuckDB" },
      { icon: "\u{1F4CA}", name: "Pandas" },
      { icon: "\u{1F522}", name: "NumPy" },
      { icon: "\u{1F680}", name: "CI/CD" }
    ];
    const groups = [
      { title: "Languages", items: ["Python", "JavaScript/TypeScript", "Java", "C/C++", "MATLAB", "HTML/CSS"] },
      { title: "Frameworks", items: ["Vue 3", "Playwright", "PyTorch", "TensorFlow", "OpenCV", "Streamlit"] },
      { title: "Data & ML", items: ["Pandas", "NumPy", "scikit-learn", "Matplotlib", "DuckDB"] },
      { title: "Backend & Cloud", items: ["Node.js", "GraphQL", "AWS", "S3", "MongoDB/DocumentDB", "SQL", "Docker", "CI/CD", "WebSockets"] },
      { title: "Tools", items: ["Git & GitHub", "Android Studio", "Power BI", "Tableau"] }
    ];
    const open = reactive({
      Languages: true,
      Frameworks: true,
      "Data & ML": false,
      "Backend & Cloud": false,
      Tools: false
    });
    function idFor(title) {
      return "acc-" + title.toLowerCase().replace(/\s+/g, "-");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: "skills-card",
        "aria-labelledby": "skills-heading"
      }, _attrs))} data-v-355b0e2f><header class="head" data-v-355b0e2f><h2 id="skills-heading" data-v-355b0e2f>Skills</h2><p class="muted" data-v-355b0e2f>Most-used stacks &amp; tools</p></header><div class="scroll" data-v-355b0e2f><div class="pins" role="list" data-v-355b0e2f><!--[-->`);
      ssrRenderList(pins, (s) => {
        _push(`<span class="pill" role="listitem"${ssrRenderAttr("title", s.name)} data-v-355b0e2f><span class="i" data-v-355b0e2f>${ssrInterpolate(s.icon)}</span><span class="t" data-v-355b0e2f>${ssrInterpolate(s.name)}</span></span>`);
      });
      _push(`<!--]--></div><div class="divider" role="separator" aria-hidden="true" data-v-355b0e2f></div><div class="accordions" data-v-355b0e2f><!--[-->`);
      ssrRenderList(groups, (g) => {
        _push(`<section class="group" data-v-355b0e2f><button class="acc"${ssrRenderAttr("aria-expanded", open[g.title] ? "true" : "false")}${ssrRenderAttr("aria-controls", idFor(g.title))} data-v-355b0e2f><span class="label" data-v-355b0e2f>${ssrInterpolate(g.title)}</span><span class="count" aria-hidden="true" data-v-355b0e2f>${ssrInterpolate(g.items.length)}</span><span class="${ssrRenderClass([{ open: open[g.title] }, "chev"])}" data-v-355b0e2f>\u25BE</span></button><div${ssrRenderAttr("id", idFor(g.title))} class="panel" style="${ssrRenderStyle(open[g.title] ? null : { display: "none" })}" data-v-355b0e2f><div class="chips" data-v-355b0e2f><!--[-->`);
        ssrRenderList(g.items, (it) => {
          _push(`<span class="chip" data-v-355b0e2f>${ssrInterpolate(it)}</span>`);
        });
        _push(`<!--]--></div></div></section>`);
      });
      _push(`<!--]--></div></div></aside>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillsSidebar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SkillsSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-355b0e2f"]]);
const _sfc_main$5 = {
  __name: "SectionNav",
  __ssrInlineRender: true,
  setup(__props) {
    const sections = [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "certifications", label: "Certifications" }
    ];
    const activeId = ref("about");
    const theme = ref("dark");
    const isLight = computed(() => theme.value === "light");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "toc",
        "aria-label": "Page sections"
      }, _attrs))} data-v-1e2a7570><h2 class="title" data-v-1e2a7570>Sections</h2><ul data-v-1e2a7570><!--[-->`);
      ssrRenderList(sections, (s) => {
        _push(`<li data-v-1e2a7570>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `#${s.id}`,
          class: ["item", { active: activeId.value === s.id }],
          "aria-current": activeId.value === s.id ? "true" : "false"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="bullet" data-v-1e2a7570${_scopeId}></span><span data-v-1e2a7570${_scopeId}>${ssrInterpolate(s.label)}</span>`);
            } else {
              return [
                createVNode("span", { class: "bullet" }),
                createVNode("span", null, toDisplayString(s.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><footer class="nav-footer" data-v-1e2a7570><button class="theme-toggle"${ssrRenderAttr("aria-pressed", isLight.value)}${ssrRenderAttr("title", isLight.value ? "Switch to dark" : "Switch to light")} data-v-1e2a7570><span class="icon" aria-hidden="true" data-v-1e2a7570>${ssrInterpolate(isLight.value ? "\u2600\uFE0F" : "\u{1F319}")}</span><span class="label" data-v-1e2a7570>${ssrInterpolate(isLight.value ? "Light" : "Dark")}</span><span class="track" aria-hidden="true" data-v-1e2a7570><span class="${ssrRenderClass([{ on: isLight.value }, "knob"])}" data-v-1e2a7570></span></span></button></footer></nav>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionNav.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SectionNav = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-1e2a7570"]]), { __name: "SectionNav" });
const _sfc_main$4 = {
  __name: "CertificationSection",
  __ssrInlineRender: true,
  setup(__props) {
    const certs = [
      {
        id: 1,
        icon: "\u2601\uFE0F",
        title: "AWS Cloud Practitioner Essentials",
        issuer: "Amazon Web Services",
        when: "2024",
        summary: "Foundational cloud, security/IAM, billing, and core services.",
        skills: ["AWS", "Security & IAM", "Costing"],
        verify: ""
      },
      {
        id: 2,
        icon: "\u{1F4CA}",
        title: "Data Science & Statistics",
        issuer: "Udemy",
        when: "2021",
        summary: "EDA, inference, A/B testing, and ML fundamentals.",
        skills: ["Pandas", "NumPy", "scikit-learn"],
        verify: ""
      },
      {
        id: 3,
        icon: "\u{1F393}",
        title: "Innovation & Entrepreneurship",
        issuer: "University of Alberta",
        when: "2025",
        summary: "Venture discovery, MVP experiments, pitching & finance basics.",
        skills: ["Product Thinking", "Experimentation"],
        verify: ""
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "certifications",
        class: "certs section"
      }, _attrs))} data-v-bede65d1><h2 data-v-bede65d1>Certifications</h2><div class="grid" data-v-bede65d1><!--[-->`);
      ssrRenderList(certs, (c) => {
        _push(`<article class="card cert" data-v-bede65d1><header class="row" data-v-bede65d1><span class="badge" data-v-bede65d1>${ssrInterpolate(c.icon)}</span><div class="meta" data-v-bede65d1><h3 data-v-bede65d1>${ssrInterpolate(c.title)}</h3><p class="sub" data-v-bede65d1>${ssrInterpolate(c.issuer)} \u2022 ${ssrInterpolate(c.when)}</p></div>`);
        if (c.verify) {
          _push(`<a${ssrRenderAttr("href", c.verify)} target="_blank" rel="noopener" class="btn outline small" data-v-bede65d1>Verify</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</header><p class="summary" data-v-bede65d1>${ssrInterpolate(c.summary)}</p><div class="chips" data-v-bede65d1><!--[-->`);
        ssrRenderList(c.skills, (s, i) => {
          _push(`<span class="chip" data-v-bede65d1>${ssrInterpolate(s)}</span>`);
        });
        _push(`<!--]--></div></article>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CertificationSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CertificationSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-bede65d1"]]);
const _sfc_main$3 = {
  __name: "ExperienceFlipCard",
  __ssrInlineRender: true,
  props: {
    item: { type: Object, required: true },
    expanded: { type: Boolean, default: false }
  },
  emits: ["toggle"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const visibleTags = computed(() => props.expanded ? props.item.tags : (props.item.tags || []).slice(0, 3));
    const hiddenCount = computed(() => {
      var _a;
      return Math.max(0, (((_a = props.item.tags) == null ? void 0 : _a.length) || 0) - 3);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["exp card", { expanded: __props.expanded }],
        tabindex: "0",
        role: "button",
        "aria-expanded": __props.expanded ? "true" : "false"
      }, _attrs))} data-v-6cc9b174><header class="head" data-v-6cc9b174><div class="titles" data-v-6cc9b174><h3 class="role" data-v-6cc9b174>${ssrInterpolate(__props.item.role)}</h3><div class="sub" data-v-6cc9b174><span class="place" data-v-6cc9b174>${ssrInterpolate(__props.item.company)}</span><span class="dot" aria-hidden="true" data-v-6cc9b174>\u2022</span><span class="time" data-v-6cc9b174>${ssrInterpolate(__props.item.time)}</span></div></div><button class="chev"${ssrRenderAttr("aria-label", __props.expanded ? "Collapse" : "Expand")} data-v-6cc9b174> \u25BE </button></header><p class="${ssrRenderClass([{ clamped: !__props.expanded }, "summary"])}" data-v-6cc9b174>${ssrInterpolate(__props.item.summary)}</p><div class="chips" data-v-6cc9b174><!--[-->`);
      ssrRenderList(unref(visibleTags), (t, i) => {
        _push(`<span class="chip" data-v-6cc9b174>${ssrInterpolate(t)}</span>`);
      });
      _push(`<!--]-->`);
      if (unref(hiddenCount) > 0 && !__props.expanded) {
        _push(`<span class="chip ghost" data-v-6cc9b174>+${ssrInterpolate(unref(hiddenCount))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div style="${ssrRenderStyle(__props.expanded ? null : { display: "none" })}" class="details" data-v-6cc9b174>`);
      if ((_a = __props.item.points) == null ? void 0 : _a.length) {
        _push(`<ul class="bullets" data-v-6cc9b174><!--[-->`);
        ssrRenderList(__props.item.points, (p, i) => {
          _push(`<li data-v-6cc9b174>${ssrInterpolate(p)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></article>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExperienceFlipCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ExperienceFlipCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6cc9b174"]]);
const _sfc_main$2 = {
  __name: "ExperienceTimeline",
  __ssrInlineRender: true,
  setup(__props) {
    const openId = ref(null);
    function toggle(id) {
      openId.value = openId.value === id ? null : id;
    }
    const items = [
      {
        id: 1,
        role: "Machine Learning Researcher",
        company: "PCL Construction",
        time: "May 2025 - Aug 2025",
        summary: "Graph- and vision-based pattern detection on engineering drawings; shipped evaluation, data, and deployment tooling.",
        points: [
          "Led research on graph-based pattern detection across 10k+ drawings; benchmarked MLP, k-NN, GNNs, and Bayesian NNs with active learning, optimizing F2-score on spatially clustered text.",
          "Built FCN-ResNet-50 / U-Net / YOLO pipeline for symbol segmentation & detection; recall at parity with non-vision baselines.",
          "Generated high-precision training data using FCN instrument segmentation (pseudo-labels + synthetic crops), expanding datasets and boosting recognition accuracy on long-tail symbols.",
          "Converted PDFs to graph objects (PyTorch) and iteratively refined labels; +25% tagging precision vs. baselines.",
          "Packaged models into a Streamlit app backed by DuckDB; sub-second queries for enterprise deployment.",
          "Refactored a 10k-line Python 3.11 codebase into plug-in modules; -40% onboarding time and faster CI/CD.",
          "Automated PDF quantity take-off with span-aware text extraction and regex; ~80% reduction in manual effort."
        ],
        tags: ["Computer Vision", "Graph ML", "PyTorch", "FCN", "U-Net", "YOLO", "Active Learning", "DuckDB", "Streamlit", "CI/CD"]
      },
      {
        id: 2,
        role: "Software Developer",
        company: "Dotdash Meredith",
        time: "Sep 2023 - Apr 2025",
        location: "Remote",
        type: "Internship",
        summary: "Built testing tools and a multi-page QA dashboard used across teams; owned backend/frontend, CI/CD, and data workflows to make shipping faster and more reliable.",
        points: [
          "Led end-to-end development of a company-wide, multi-page testing dashboard (HTML, Vue.js) with real-time results and better accessibility for QA engineers.",
          "Engineered a Playwright-based testing framework in JavaScript, reducing manual testing time by ~30% and enabling scalable regression suites.",
          "Streamlined data-cleaning with Python and Excel to deliver actionable QA insights and reduce debugging time.",
          "Integrated AWS DocumentDB (MongoDB-compatible); maintained the dev DB, optimized queries, and applied migrations to support app development and deployment.",
          "Deployed testing tools and dashboards via CI/CD pipelines, improving deployment efficiency and reliability.",
          "Collaborated in Agile/Scrum\u2014led ceremonies, refined backlog items, and used team metrics to guide development.",
          "Drove design/code reviews to align standards, pre-empt bugs, and eliminate code smells.",
          "Leveraged LLMs to accelerate debugging, code generation, and learning, improving developer throughput."
        ],
        tags: [
          "Vue.js",
          "Playwright",
          "JavaScript",
          "Python",
          "AWS DocumentDB",
          "MongoDB",
          "CI/CD",
          "Agile",
          "LLMs"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "experience",
        class: "section"
      }, _attrs))} data-v-d176dadf><h2 data-v-d176dadf> Work Experience</h2><ol class="timeline" data-v-d176dadf><!--[-->`);
      ssrRenderList(items, (e) => {
        _push(`<li class="item" data-v-d176dadf><div class="dot" data-v-d176dadf></div>`);
        _push(ssrRenderComponent(ExperienceFlipCard, {
          item: e,
          expanded: openId.value === e.id,
          onToggle: toggle
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ol></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExperienceTimeline.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ExperienceTimeline = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-d176dadf"]]), { __name: "ExperienceTimeline" });
const _imports_0 = "" + buildAssetsURL("pic.QUfEl8E8.jpeg");
const resumeUrl = "" + buildAssetsURL("resume.DJKr-Yn7.pdf");
const _sfc_main$1 = {
  __name: "StickyHero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "sticky-hero",
        "aria-label": "Intro"
      }, _attrs))} data-v-d318871f><div class="inner" data-v-d318871f><figure class="headshot" data-v-d318871f><img${ssrRenderAttr("src", _imports_0)} alt="Portrait of Agrim Sood" width="260" height="260" loading="eager" sizes="(min-width:1000px) 240px, 40vw" data-v-d318871f><figcaption class="contact" data-v-d318871f><a href="mailto:agrim@ualberta.ca" class="contact-item" data-v-d318871f><span aria-hidden="true" data-v-d318871f>\u{1F4E7}</span><span data-v-d318871f>agrim@ualberta.ca</span></a><a href="tel:+17806559950" class="contact-item" data-v-d318871f><span aria-hidden="true" data-v-d318871f>\u{1F4DE}</span><span data-v-d318871f>+1 (780) 655-9950</span></a></figcaption></figure><div class="copy" data-v-d318871f><h1 class="title" data-v-d318871f> Hi, I\u2019m Agrim \u2014 <wbr data-v-d318871f> I build reliable <span class="nowrap" data-v-d318871f>ML systems</span> &amp; <span class="nowrap" data-v-d318871f>software</span>. </h1><p class="tagline" data-v-d318871f> Reliable models, <span class="nowrap" data-v-d318871f>useful tools</span>, and <span class="nowrap" data-v-d318871f>code that lasts</span>. </p><div class="links" data-v-d318871f><a class="btn outline"${ssrRenderAttr("href", unref(resumeUrl))} target="_blank" rel="noopener" data-v-d318871f>Resume</a><a class="btn outline" href="mailto:agrim@ualberta.ca" data-v-d318871f>Email</a><a class="btn outline" href="https://www.linkedin.com/in/agrim-sood" target="_blank" rel="noopener" data-v-d318871f>LinkedIn</a><a class="btn outline" href="https://github.com/aggi000" target="_blank" rel="noopener" data-v-d318871f>GitHub</a></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StickyHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const StickyHero = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d318871f"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const originalProjects = [
      {
        id: 5,
        title: "HSE Word Games",
        year: "2025",
        short: "NYT-style word-games platform built in 48 hours: Next.js (TS) + FastAPI, Dockerized on Azure with LLM-generated puzzles.",
        details: "Built in a 2-day sprint for PCL (Team of 6). A Python/FastAPI service extracts and scores keywords from a PCL documents DB via an LLM pipeline and serves puzzle APIs; a TypeScript Next.js frontend renders playable games. Everything is containerized and deployed to Azure for demo-ready reliability.",
        points: [
          "Shipped a demo-ready MVP in 48 hours with a 6-person team.",
          "Implemented LLM keyword-extraction with scoring & dedup to auto-generate daily puzzles.",
          "Exposed clean REST endpoints; optimized latency via caching and payload trimming.",
          "Set up CI/CD, container registry, app settings, and secrets on Azure.",
          "Delivered stable demo with positive stakeholder feedback."
        ],
        tech: "Next.js (TypeScript), FastAPI (Python), Docker, Azure, LLM keyword extraction, Documents DB",
        tags: ["Next.js", "TypeScript", "FastAPI", "Python", "Docker", "Azure", "LLM", "CI/CD"],
        link: "",
        // optional live/demo URL
        repo: ""
        // optional GitHub URL
      },
      {
        id: 1,
        title: "Social Distribution",
        year: "2024",
        short: "Distributed social-media app with privacy controls & cross-server interactions.",
        details: "Built a distributed social platform with friend graph sync, private feeds, and admin tooling. Emphasis on reliability and data consistency across nodes.",
        points: [
          "Federated node sync with conflict-safe upserts",
          "Private/public post visibility & access policies",
          "Real-time dashboards for moderation and system health"
        ],
        tech: "Vue.js, REST APIs, MongoDB",
        tags: ["Vue", "REST", "MongoDB"]
      },
      {
        id: 2,
        title: "Musicwiz",
        year: "2023",
        short: "Recommendation prototype using unsupervised learning and playlists.",
        details: "Prototyped playlist-based similarity and basic cold-start strategies. Visualized clusters and transitions for explainability.",
        points: [
          "Feature engineering from playlists & audio features",
          "k-means / cosine similarity comparisons",
          "Interactive charts for cluster exploration"
        ],
        tech: "Python, Spotipy, scikit-learn",
        tags: ["Python", "ML", "Spotify"]
      },
      {
        id: 3,
        title: "Meal Prep App",
        year: "2022",
        short: "Android app that plans meals and manages live ingredient inventory.",
        details: "Automatic weekly plans with grocery suggestions and pantry sync. Unit conversions & recipe scaling for cost/time optimization.",
        points: [
          "Realtime sync with Firebase",
          "Barcode/QR for quick pantry updates",
          "JUnit/UI tests for flows & edge cases"
        ],
        tech: "Java (Android), Firebase, JUnit",
        tags: ["Android", "Firebase", "Testing"]
      },
      {
        id: 4,
        title: "SQL Movie Service",
        year: "2022",
        short: "SQLite-backed service to track watch behavior & run rec queries.",
        details: "Lightweight service to log watch events and compute recommendations with analytic SQL and window functions.",
        points: [
          "Normalized schema with indices for query speed",
          "Materialized views for top-k recommendations",
          "CLI & minimal UI for exploration"
        ],
        tech: "Python, SQLite",
        tags: ["SQLite", "Python", "Analytics"]
      }
    ];
    const projects = ref([...originalProjects]);
    const activeId = ref(null);
    function moveToTop(id) {
      const idx = projects.value.findIndex((p) => p.id === id);
      if (idx > 0) {
        const [item] = projects.value.splice(idx, 1);
        projects.value.unshift(item);
      }
    }
    function restoreOriginalOrder() {
      projects.value = [...originalProjects];
    }
    function onToggle(id) {
      if (activeId.value === id) {
        activeId.value = null;
        restoreOriginalOrder();
        return;
      }
      activeId.value = id;
      moveToTop(id);
      nextTick(() => {
        var _a;
        (_a = (void 0).querySelector("#projects")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-bdcc15c6><div class="content-grid" data-v-bdcc15c6><aside class="sidebar-left" data-v-bdcc15c6>`);
      _push(ssrRenderComponent(SectionNav, null, null, _parent));
      _push(`</aside><main data-v-bdcc15c6><section class="hero fade-in" data-v-bdcc15c6>`);
      _push(ssrRenderComponent(StickyHero, null, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(AboutSection, null, null, _parent));
      _push(ssrRenderComponent(ExperienceTimeline, null, null, _parent));
      _push(`<section id="projects" class="projects section" data-v-bdcc15c6><h2 data-v-bdcc15c6>Projects</h2><div${ssrRenderAttrs({
        name: "reflow",
        class: "grid"
      })} data-v-bdcc15c6>`);
      ssrRenderList(projects.value, (p) => {
        _push(ssrRenderComponent(ProjectFlipCard, {
          key: p.id,
          project: p,
          expanded: activeId.value === p.id,
          onToggle
        }, null, _parent));
      });
      _push(`</div></section><section id="certifications" class="certs section fade-in" data-v-bdcc15c6>`);
      _push(ssrRenderComponent(CertificationSection, null, null, _parent));
      _push(`</section></main><aside id="skills" class="sidebar-right" data-v-bdcc15c6>`);
      _push(ssrRenderComponent(SkillsSidebar, null, null, _parent));
      _push(`</aside></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bdcc15c6"]]);

export { index as default };
//# sourceMappingURL=index-nMkNIx96.mjs.map
