// src/utils/classNames.ts
export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
