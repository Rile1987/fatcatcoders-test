import React from 'react';

import { Hero } from './Hero';
import { ItemsShowcase } from './ItemsShowcase';
import { TrustBar } from './TrustBar';
import { UserList } from './UserList';
import { Layout } from './Layout';

const componentMap: { [key: string]: React.ElementType } = {
    componentLayout: Layout,
    componentHero: Hero,
    componentItemsShowcase: ItemsShowcase,
    componentTrustBar: TrustBar,
    componentUserList: UserList,
};

interface SectionComponent {
    type: string;
    props: any;
}

interface PageSection {
    type: string;
    props: any;
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
