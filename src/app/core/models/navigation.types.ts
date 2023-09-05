export interface NavigationItem {
    id?: string;
    title?: string;
    url?: string;
    target?: LinkTargetType | string;
    externalUrl?: boolean;
    exactMatch?: boolean;
    function?: () => void;
    active?: boolean;
    hidden?: boolean;
    icon?: string;
    children?: NavigationItem[];
    badge?: {
        title?: string;
        classes?: string;
    };
    type?: string | NavItemType;
}


export enum NavItemType {
    Item = 'item',
    Collapsable = 'collapsable',
    Tabs = 'tabs',
    Group = 'group',
}


export enum LinkTargetType {
    Blank = '_blank',
    Self = '_self',
    Parent = '_parent',
    Top = '_top',
}

