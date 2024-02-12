import axios from "axios";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import { setValue, startValidation, email, IstValidation, sendCode } from "./EmailView.vue";

(async () => {
const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
title: 'foo',
body: 'bar',
userId: 1
});
post.value = response;

// axios({
//   method: 'get',
//   url: 'https://jsonplaceholder.typicode.com/users',
//   data: {
//     title: 'Article title',
//     body:  'Article body content',
//     userId: 1,
//   }
// })
// ;(async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//   if (response.ok) {
//     const data = await response.json()
//     console.log(data)
//   } else {
//     console.log('error')
//   }
// })()
// ;(() => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
// })()
const __VLS_componentsOption = {};

let __VLS_name!: 'EmailView';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'BaseInput', typeof __VLS_localComponents, "BaseInput", "BaseInput", "BaseInput"> &
__VLS_WithComponent<'BaseButton', typeof __VLS_localComponents, "BaseButton", "BaseButton", "BaseButton">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.label; __VLS_intrinsicElements.label;
__VLS_intrinsicElements.br;
__VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p;
__VLS_components.BaseInput;
// @ts-ignore
[BaseInput,];
__VLS_components.BaseButton; __VLS_components.BaseButton;
// @ts-ignore
[BaseButton, BaseButton,];
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("w-1/2 ml-28"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("w-1/2 ml-28"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["label"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, for: ("fname"), class: ("text-xl leading-8 font-medium text-indigo-800 w-350 h-370; py-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, for: ("fname"), class: ("text-xl leading-8 font-medium text-indigo-800 w-350 h-370; py-8"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
(__VLS_8.slots!).default;
}
{
const __VLS_10 = __VLS_intrinsicElements["br"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
{
const __VLS_15 = __VLS_intrinsicElements["p"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
(__VLS_18.slots!).default;
}
{
const __VLS_20 = ({} as 'BaseInput' extends keyof typeof __VLS_ctx ? { 'BaseInput': typeof __VLS_ctx.BaseInput; } : typeof __VLS_resolvedLocalAndGlobalComponents).BaseInput;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ onSetValue: {} as any, }, type: ("email"), class: ("number-class"), }));
({} as { BaseInput: typeof __VLS_20; }).BaseInput;
const __VLS_22 = __VLS_21({ ...{ onSetValue: {} as any, }, type: ("email"), class: ("number-class"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{ onSetValue: {} as any, }, type: ("email"), class: ("number-class"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
let __VLS_25 = { 'set-value': __VLS_pickEvent(__VLS_24['set-value'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_22>).onSetValue) };
__VLS_25 = { "set-value": (__VLS_ctx.setValue) };
}
if (!__VLS_ctx.startValidation && __VLS_ctx.email.length) {
{
const __VLS_26 = __VLS_intrinsicElements["p"];
const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
const __VLS_28 = __VLS_27({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
(__VLS_29.slots!).default;
}
// @ts-ignore
[setValue, startValidation, email,];
}
{
const __VLS_31 = ({} as 'BaseButton' extends keyof typeof __VLS_ctx ? { 'BaseButton': typeof __VLS_ctx.BaseButton; } : typeof __VLS_resolvedLocalAndGlobalComponents).BaseButton;
const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{ onClick: {} as any, }, processing: ((false)), disabled: ((__VLS_ctx.IstValidation)), class: ("h-[40px] my-4 rounded-lg min-w-44 bg-blue-900 items-center text-white ml-[160px] font-roboto"), }));
({} as { BaseButton: typeof __VLS_31; }).BaseButton;
({} as { BaseButton: typeof __VLS_31; }).BaseButton;
const __VLS_33 = __VLS_32({ ...{ onClick: {} as any, }, processing: ((false)), disabled: ((__VLS_ctx.IstValidation)), class: ("h-[40px] my-4 rounded-lg min-w-44 bg-blue-900 items-center text-white ml-[160px] font-roboto"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, processing: ((false)), disabled: ((__VLS_ctx.IstValidation)), class: ("h-[40px] my-4 rounded-lg min-w-44 bg-blue-900 items-center text-white ml-[160px] font-roboto"), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
let __VLS_36 = { 'click': __VLS_pickEvent(__VLS_35['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_32, typeof __VLS_33>).onClick) };
__VLS_36 = { click: (__VLS_ctx.sendCode) };
(__VLS_34.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[IstValidation, IstValidation, IstValidation, sendCode,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
BaseButton: BaseButton as typeof BaseButton,
BaseInput: BaseInput as typeof BaseInput,
startValidation: startValidation as typeof startValidation,
email: email as typeof email,
setValue: setValue as typeof setValue,
sendCode: sendCode as typeof sendCode,
IstValidation: IstValidation as typeof IstValidation,
};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {};
},
});
});
