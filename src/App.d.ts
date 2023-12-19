/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */


import React from "react";

export interface HashMapBase<V> {
    [key: string]: V;
}

export interface HashMap extends HashMapBase<string> {}

export interface HashMapNode extends HashMapBase<React.ReactNode> {}

export interface ReactChildren {
    children?: React.ReactNode;
}

export interface KeyLabel<T = string, Y = string> {
    key: T;
    label: Y;
}

export type PickRequired<T, TRequired extends keyof T> = Required<Pick<T, TRequired>>;

export type PickOptional<T, TOptional extends keyof T> = Partial<Pick<T, TOptional>>;

export type KeyLabelExtension<T, Y, A extends string | number | symbol = string, B = string> = Record<A, B> & KeyLabel<T, Y>;

export type KeyLabelArray<T = string, Y = string> = Array<KeyLabel<T, Y>>;

export type KeyLabelExtensionArray<T = string, Y = string, A extends string | number | symbol = string, B = string> = Array<KeyLabelExtension<T, Y, A, B>>;

export type EmptyObject = Record<string, never>;

export type ArrayElement<ArrayType extends readonly unknown[]> =
    ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export interface IRouteState {
    prev: { pathname: string }
}
