"use strict";(self.webpackChunkmui_color_input=self.webpackChunkmui_color_input||[]).push([[976],{7012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"intro","title":"Getting Started","description":"Install","source":"@site/docs/intro.md","sourceDirName":".","slug":"/getting-started","permalink":"/mui-color-input/docs/getting-started","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"slug":"/getting-started"},"sidebar":"tutorialSidebar","next":{"title":"Color validation","permalink":"/mui-color-input/docs/color-validation"}}');var i=t(6106),s=t(2036);const r={sidebar_position:1,slug:"/getting-started"},a="Getting Started",l={},c=[{value:"Install",id:"install",level:2},{value:"Next.js integration",id:"nextjs-integration",level:2},{value:"Simple usage",id:"simple-usage",level:2},{value:"Congratulations !",id:"congratulations-",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install mui-color-input --save\n"})}),"\n",(0,i.jsxs)(n.p,{children:["or you can use ",(0,i.jsx)(n.strong,{children:"yarn"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add mui-color-input\n"})}),"\n",(0,i.jsx)(n.p,{children:"We have completed installing the package."}),"\n",(0,i.jsx)(n.h2,{id:"nextjs-integration",children:"Next.js integration"}),"\n",(0,i.jsx)(n.p,{children:"Learn how to use MUI color input with Next.js"}),"\n",(0,i.jsxs)(n.p,{children:["Once you have installed ",(0,i.jsx)(n.code,{children:"MUI Color Input"})," in your next.js project, it is important to transpile it as it is an ESM package first."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/** @type {import('next').NextConfig} */\nconst nextConfig = {\n transpilePackages: ['mui-color-input'],\n // your config\n}\n\nmodule.exports = nextConfig\n"})}),"\n",(0,i.jsx)(n.h2,{id:"simple-usage",children:"Simple usage"}),"\n",(0,i.jsx)(n.p,{children:"Here is a simple usage for using the component:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import React from 'react'\nimport { MuiColorInput } from 'mui-color-input'\n\nconst MyComponent = () => {\n  const [color, setColor] = React.useState('#ffffff')\n\n  const handleChange = (color) => {\n    setColor(color)\n  }\n\n  return (\n    <MuiColorInput value={color} onChange={handleChange} />\n  )\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"congratulations-",children:"Congratulations !"}),"\n",(0,i.jsxs)(n.p,{children:["That's all, now let's deep dive into the ",(0,i.jsx)(n.a,{href:"/docs/api-reference",children:"props"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2036:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(7378);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);