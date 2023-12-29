import React from 'react';
import clsx from 'clsx';

interface Item {
    title: string;
    description: string;
}

interface ItemsShowcaseProps {
    items: Item[];
}

export const ItemsShowcase = ({ items }: ItemsShowcaseProps) => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-8 w-8/12">
                {items.map(({ title, description }) => (
                    <div
                        key={title}
                        className={clsx('flex', 'flex-col', 'gap-2', {
                            'bg-blue-200': title.includes('Special'),
                            'bg-green-200': title.includes('Green'),
                        })}
                    >
                        <img
                            src="/media/checkmark.jpg"
                            width={25}
                            alt="Checkmark"
                        />
                        <div className="text-2xl font-bold">{title}</div>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
