import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "vue/server-renderer";
import "defu";
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><header><h1>Rhynel Algopera </h1><p>Software Developer</p></header><section><h2>About Me</h2><p>Hello! I&#39;m Rhynel Algopera , a passionate and detail-oriented software developer based in Uk Company. I have a strong foundation in various programming languages and technologies. Such as JavaScript, PHP and TypeScript.</p><p>Throughout my career, I have gained experience in developing innovative and efficient solutions for diverse projects. I am dedicated to continuous learning, staying updated with the latest industry trends, and collaborating with cross-functional teams to deliver high-quality software products.</p></section><section><h2>Skills</h2><ul><li>JavaScript (Vue, Nuxt, and React)</li><li>Laravel 10, PHP</li><li>PostgreSQL, MongoDB, MySQL</li><li>Node.js, Nest, Express</li><li>Git, GitHub, AWS, Docker, Gitlab</li></ul></section><section><h2>Experience</h2><p>Software Developer | Cloud Employee, Makati, Philippines<br> March 27, 2022 - Present</p><p>Software Developer | Logmaster, Melbourne, Australia<br> March 25, 2022 - Present<br> - Collaborated with cross-functional teams...</p></section><section><h2>Projects</h2><p><strong>Admin Portals</strong><br> - Developed a set of admin portals using Laravel and Vue.js.</p><p><strong>Multiple Website</strong><br> - Create multiple websites using Nuxt.js</p></section><section><h2>Languages</h2><p>English (Fluent)<br> Tagalog (Native)</p></section><section><h2>Interests</h2><p>In my free time, I enjoy exploring new technologies, contributing to open-source projects, and attending tech meetups and conferences. I am passionate about continuous learning and staying at the forefront of the ever-evolving field of software development.</p></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-1c48d07a.js.map
