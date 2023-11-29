
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
    return twMerge(clsx(args));
};

export const _: void = (() => { return; })();

export const genArray = (to: number, from: number = 1): Array<number> => {
    const arr = [];

    for (let i = from; i <= to; i++) arr.push(i);

    return arr;
};
