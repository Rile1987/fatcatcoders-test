import React from 'react';

import { Hero } from '@homework-task/components/Hero';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import { Layout } from '@homework-task/components/Layout';
import { TrustBar } from '@homework-task/components/TrustBar';
import { UserList } from '@homework-task/components/UserList';

const componentMap: { [key: string]: React.ElementType } = {
    componentLayout: Layout,
    componentHero: Hero,
    componentItemsShowcase: ItemsShowcase,
    componentTrustBar: TrustBar,
    componentUserList: UserList,
};

interface SectionComponent {
    type: string;
    props: Record<string, string>;
}

interface PageSection {
    type: string;
    props: Record<string, string>;
    components: SectionComponent[];
}

interface PageGeneratorProps {
    data: PageSection[];
}

const PageGenerator: React.FC<PageGeneratorProps> = ({ data }) => {
    return (
        <div>
            {data.map((section, index) => {
                const SectionComponent = componentMap[section.type] || 'div';
                return (
                    <SectionComponent
                        key={index}
                        {...(componentMap[section.type] ? section.props : {})}
                    >
                        {section.components.map((component, compIndex) => {
                            const Component =
                                componentMap[component.type] || React.Fragment;
                            return (
                                <Component
                                    key={compIndex}
                                    {...component.props}
                                />
                            );
                        })}
                    </SectionComponent>
                );
            })}
        </div>
    );
};

export default PageGenerator;
