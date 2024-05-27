import { MessageHandler } from 'element-plus';
import { IMessageProps } from '../../interface';

type MeassgeOptionType = IMessageProps | string;
interface IMessageFunction<T, V> {
    (options: T): V;
    success: (options: T) => V;
    error: (options: T) => V;
    warning: (options: T) => V;
    info: (options: T) => V;
}
declare const KMessage: IMessageFunction<MeassgeOptionType, MessageHandler>;
export { KMessage };
