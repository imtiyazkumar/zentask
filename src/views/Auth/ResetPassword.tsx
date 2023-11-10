/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

import { AuthQuery } from "../../apiService";

function ResetPassword() {
    const { mutate } = AuthQuery.useMutationRequestResetPassword();

    const handleSubmit = () => {
        mutate({ email: "ouma@eonyx.dev" }, {
            onSuccess: (data) => {
                console.log(data.vc_id);
            },
        });
    };

    return (
        <div onClick={handleSubmit}>Reset password</div>
    );
}

export default ResetPassword;
