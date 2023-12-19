
/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import { toast, Toaster, ToastBar, Toast as IToast, Renderable, DefaultToastOptions } from "react-hot-toast";
import { IconCircleCheckFilled, IconAlertTriangleFilled, IconX, IconInfoCircleFilled, IconAlertCircleFilled } from "@tabler/icons-react";
import { Div, Flex } from "../components/General Components/BaseComponents";
import React from "react";
import { ReactChildren } from "../App.d";

type IProps = ReactChildren;

export interface IToastContext {
    success: typeof toast.success;
    error: typeof toast.error;
    info: typeof toast.error;
    warning: typeof toast.error;
    loading: typeof toast.loading;
    promise: typeof toast.promise;
}

const ToastContext = React.createContext<IToastContext>({} as IToastContext);

const ToastOptions: DefaultToastOptions = {
    duration: 5000,
    position: "bottom-center",
    style: { maxWidth: "705px" },
    success: {
        className: "!bg-alerts-success_light !text-alerts-success_base",
    },
    error: {
        className: "!bg-alerts-error_light !text-alerts-error_base",
    },
    loading: {
        className: "!bg-alerts-warning_light !text-alerts-information_base",
    },
};

const renderIcon = (type: IToast["type"], icon: Renderable): Renderable => {
    switch (type) {
        case "success":
            return <IconCircleCheckFilled />;
        case "error":
            return icon;
        case "loading":
            return icon;
    }

    return icon;
};

const ToastProvider: React.FC<IProps> = ({ children }) => {
    const success: typeof toast.success = (message, opts) => toast.success(message, opts);
    const error: typeof toast.error = (message, opts) => toast.error(message, { ...opts, icon: <IconAlertCircleFilled width={24} height={24} /> });
    const info: typeof toast.error = (message, opts) => toast.error(message, { ...opts, className: "!bg-primary-3 !text-text", icon: <IconInfoCircleFilled /> });
    const warning: typeof toast.error = (message, opts) => toast.error(message, { ...opts, className: "!bg-warning-100 !text-warning-600", icon: <IconAlertTriangleFilled /> });
    const loading: typeof toast.success = (message, opts) => toast.loading(message, opts);
    const promise: typeof toast.promise = (promise, msgs) => toast.promise(promise, msgs);

    const ToastContextValue: IToastContext = {
        success,
        error,
        info,
        warning,
        loading,
        promise,
    };

    return (
        <ToastContext.Provider value={ToastContextValue}>
            {children}
            <Toaster toastOptions={ToastOptions} containerStyle={{ inset: "16px 16px 120px 16px" }}>
                {(t) => (
                    <ToastBar toast={t}>
                        {({ icon, message }) => (
                            <Flex className="font-medium rounded-[10px] px-2 gap-[11px]">
                                <Flex>{renderIcon(t.type, icon)}</Flex>
                                {message}
                                <Div className="cursor-pointer">{t.type !== "loading" && <IconX onClick={() => toast.dismiss(t.id)} />}</Div>
                            </Flex>
                        )}
                    </ToastBar>
                )}
            </Toaster>
        </ToastContext.Provider>
    );
};

export default ToastProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => React.useContext(ToastContext);
