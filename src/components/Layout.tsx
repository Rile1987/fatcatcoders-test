import React from 'react';
import clsx from 'clsx';

interface LayoutProps {
    children: React.ReactNode;
    background: string;
}

export const Layout = ({ children, background }: LayoutProps) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
