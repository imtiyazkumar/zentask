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

export interface HashMap {
    [key: string]: string
}

export interface ReactChildren {
    children?: React.ReactNode;
}

export interface KeyLabel<T = string, Y = string> {
    key: T;
    label: Y;
}

export type PickRequired<T, TRequired extends keyof T> = Required<Pick<T, TRequired>>;

export type KeyLabelExtension<T, Y, A extends string | number | symbol = string, B = string> = Record<A, B> & KeyLabel<T, Y>;

export type KeyLabelArray<T = string, Y = string> = Array<KeyLabel<T, Y>>;

export type KeyLabelExtensionArray<T = string, Y = string, A extends string | number | symbol = string, B = string> = Array<KeyLabelExtension<T, Y, A, B>>;

export type EmptyObject = Record<string, never>;

export type ArrayElement<ArrayType extends readonly unknown[]> =
    ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export interface IRouteState {
    prev: { pathname: string }
}
