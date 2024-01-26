import { _ as _export_sfc, a as __nuxt_component_0$1 } from '../server.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file:///home/tjubroco/Code/LAB/Git/me/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/tjubroco/Code/LAB/Git/me/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/tjubroco/Code/LAB/Git/me/node_modules/ofetch/dist/node.mjs';
import 'file:///home/tjubroco/Code/LAB/Git/me/node_modules/hookable/dist/index.mjs';
import 'file:///home/tjubroco/Code/LAB/Git/me/node_modules/unctx/dist/index.mjs';
import 'file:///home/tjubroco/Code/LAB/Git/me/node_modules/ufo/dist/index.mjs';
import 'file:///home/tjubroco/Code/LAB/Git/me/node_modules/h3/dist/index.mjs';
import 'file:///home/tjubroco/Code/LAB/Git/me/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///home/tjubroco/Code/LAB/Git/me/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///home/tjubroco/Code/LAB/Git/me/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/tjubroco/Code/LAB/Git/me/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/tjubroco/Code/LAB/Git/me/node_modules/defu/dist/defu.mjs';
import '../../nitro/config.mjs';
import 'file:///home/tjubroco/Code/LAB/Git/me/node_modules/destr/dist/index.mjs';
import 'file:///home/tjubroco/Code/LAB/Git/me/node_modules/scule/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<main${ssrRenderAttrs(_attrs)}><div><h1>Home</h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-40d0989f.mjs.map
