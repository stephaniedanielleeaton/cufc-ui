import"./index-76fb7be0.js";import{a as S,j as T}from"./jsx-runtime-29545a09.js";import{P as o}from"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const s=({color:x,size:g,content:f,...v})=>{const y=`text-${x}`,z=`text-${g}`;return S("p",{className:`storybook-text ${y} ${z}`,...v,children:[f,T("span",{className:"text-2xl text-wine",children:"This is a test"})]})};s.propTypes={color:o.oneOf(["lavender","wine","gunmetal","outerSpace","ashGray"]),size:o.oneOf(["sm","md","lg","xl","2xl","3xl","4xl"]),content:o.string.isRequired};s.defaultProps={color:"gunmetal",size:"md"};const h=s;s.__docgenInfo={description:"Primary UI component for text display",methods:[],displayName:"BaseText",props:{color:{defaultValue:{value:"'gunmetal'",computed:!1},description:"What text color to use",type:{name:"enum",value:[{value:"'lavender'",computed:!1},{value:"'wine'",computed:!1},{value:"'gunmetal'",computed:!1},{value:"'outerSpace'",computed:!1},{value:"'ashGray'",computed:!1}]},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"What font size to use",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1},{value:"'2xl'",computed:!1},{value:"'3xl'",computed:!1},{value:"'4xl'",computed:!1}]},required:!1},content:{description:"Text contents",type:{name:"string"},required:!0}}};const _={title:"Atoms/BaseText",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["lavender","wine","gunmetal","outerSpace","ashGray"]},size:{control:"select",options:["sm","md","lg","xl","2xl","3xl","4xl"]}}},e={args:{color:"gunmetal",size:"md",content:"Sample text"}},t={args:{color:"lavender",size:"lg",content:"Sample text"}},a={args:{color:"wine",size:"xl",content:"Sample text"}};var r,l,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    color: 'gunmetal',
    size: 'md',
    content: 'Sample text'
  }
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    color: 'lavender',
    size: 'lg',
    content: 'Sample text'
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,d,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: 'wine',
    size: 'xl',
    content: 'Sample text'
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const $=["GunmetalMedium","LavenderLarge","WineExtraLarge"];export{e as GunmetalMedium,t as LavenderLarge,a as WineExtraLarge,$ as __namedExportsOrder,_ as default};
//# sourceMappingURL=BaseText.stories-48c52f2f.js.map
