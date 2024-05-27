import { FormItemProp, FormValidateCallback } from 'element-plus';
import { IForm } from '../../interface/index';

type Arrayable<T> = T | T[];
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IForm>, {
    labelPosition: string;
    requireAsteriskPosition: string;
    showMessage: boolean;
    validateOnRuleChange: boolean;
}>, {
    fields: import('vue').ComputedRef<any>;
    validate: (callback?: FormValidateCallback | undefined) => void;
    validateField: (props?: Arrayable<FormItemProp> | undefined, callback?: FormValidateCallback | undefined) => void;
    resetFields: (props?: Arrayable<FormItemProp> | undefined) => void;
    scrollToField: (prop: FormItemProp) => void;
    clearValidate: (props?: Arrayable<FormItemProp> | undefined) => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    validate: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IForm>, {
    labelPosition: string;
    requireAsteriskPosition: string;
    showMessage: boolean;
    validateOnRuleChange: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onValidate?: ((...args: any[]) => any) | undefined;
}, {
    labelPosition: "top" | "left" | "right";
    requireAsteriskPosition: "left" | "right";
    showMessage: boolean;
    validateOnRuleChange: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
