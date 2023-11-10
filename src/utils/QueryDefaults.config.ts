/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

import { DefaultOptions } from "@tanstack/react-query";

export const DefaultQueryOptions = (): DefaultOptions<Error> | undefined => ({
    queries: {
    },
    mutations: {
        onError: (error: Error) => {
            alert(error.message);
            console.error(error);
        },
    },
});
