/**
 * Project Ouma Health
 *
 * @author      Anees Muzzafer
 * @copyright   Teleperinatal, Inc.
 *
 * Built by Eonyx Infotech LLP.
 * @link https://eonyx.io
 *
 */

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const InputText: React.FC<InputTextProps> = ({ label = "", error = "", type, ...props }) => {
    return (
        <div className="flex flex-col gap-2.5 w-full">
            <div className="flex gap-0.5 px-2.5 text-sm font-medium">
                <span className="text-neutral-900 leading-[22px]">{label}</span>
                <span className="text-red-500">*</span>
            </div>
            <div className="flex border-b border-border-dark gap-2.5 py-4 px-2.5" >
                <input {...props} type={type} className="flex-1 focus:outline-none text-sm font-medium leading-[22px] placeholder-neutral-600" />
                {type === "password" && <span>+</span>}
            </div>
            {error &&
                <div className="flex text-alerts-error_base gap-2" >
                    <span>o</span>
                    <span className="text-xs leading-5">{error}</span>
                </div>
            }
        </div>
    );
};

export default InputText;
