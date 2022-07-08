import React from 'react';

export type PropsOf<T> = T extends React.FC<infer A> ? A : never;

export type Predicate<A extends any[], R> = (...args: A) => R;
export type ArgumentsOf<P> = P extends Predicate<infer A, any> ? A : never;
export type ResultOf<P> = P extends Predicate<any[], infer A> ? A : never;

export type FirstOf<C> = C extends [first: infer A, ...rest: any] ? A : never;
export type AfterFirst<C> = C extends [first: any, ...rest: infer A] ? A : never;
export type ItemOf<C> = C extends (infer A)[] ? A : never;
export type KeyOf<T> = T extends Record<infer A, any> ? A : never;
