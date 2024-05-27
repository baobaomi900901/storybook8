import { UploadFile, UploadRawFile, UploadStatus } from 'element-plus';
import { IUpload } from '../../interface/index';

declare function abort(file: UploadFile): void;
declare function submit(e: Event): void;
declare function clearFiles(file: UploadStatus): void;
declare function handleStart(file: UploadRawFile): void;
declare function handleRemove(file: UploadFile, rawFile?: UploadRawFile): void;
declare function selectFile(): void;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IUpload>, {
    method: string;
    showFileList: boolean;
    name: string;
    listType: string;
    autoUpload: boolean;
    disabled: boolean;
}>, {
    abort: typeof abort;
    submit: typeof submit;
    clearFiles: typeof clearFiles;
    selectFile: typeof selectFile;
    handleStart: typeof handleStart;
    handleRemove: typeof handleRemove;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IUpload>, {
    method: string;
    showFileList: boolean;
    name: string;
    listType: string;
    autoUpload: boolean;
    disabled: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    disabled: boolean;
    method: string;
    showFileList: boolean;
    autoUpload: boolean;
    listType: "text" | "picture" | "picture-card";
}, {}>, Readonly<Record<string, any>> & Record<string, any>>;
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
