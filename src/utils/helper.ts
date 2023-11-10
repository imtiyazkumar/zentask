/**
 * Project Radience
 *
 * @author      Anees Muzzafer
 * @copyright   Stamats Communications, Inc.
 *
 * Built by Eonyx Infotech LLP.
 * @link https://eonyx.io
 *
 */

import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
    return twMerge(clsx(args));
};
