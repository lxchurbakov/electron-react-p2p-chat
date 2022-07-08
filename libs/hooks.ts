import React from 'react';

export type ListenableObject<T> = {
  addEventListener: (name: string, listener: T) => void;
  removeEventListener: (name: string, listener: T) => void;
};

export const useListener = <T>(object: ListenableObject<T>, name: string, listener: T, deps: React.DependencyList) => {
  React.useEffect(() => {
    object.addEventListener(name, listener);
    return () => object.removeEventListener(name, listener);
  }, deps)
};
