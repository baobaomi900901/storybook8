declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    name: string;
    disabled: boolean;
    title: string;
}, {}>, Readonly<Record<string, any>> & Record<string, any>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
