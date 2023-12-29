import React from 'react';

import ReactDOM from 'react-dom';

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = ({ isOpen, children }: ModalProps) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 text-center">
                <div className="fixed inset-0 bg-black opacity-30"></div>
                <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                >
                    &#8203;
                </span>
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};
