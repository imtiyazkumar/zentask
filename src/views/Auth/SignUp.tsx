/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

import React from "react";
import { AuthQuery } from "../../apiService";
import { useAuth } from "../../root/providers/AuthProvider";

function SignUp() {
    const auth = useAuth();
    const { mutate } = AuthQuery.useMutationSignUp();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = () => {
        if (!email || !password) return;

        mutate({ email, password }, {
            onSuccess: (data) => {
                auth.setToken(data.token);
            },
        });
    };

    return (
        <div className="flex flex-col gap-y-2">
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password" />
            <div onClick={handleSubmit}>Sign Up</div>
        </div>
    );
}

export default SignUp;
