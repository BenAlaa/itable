export enum SortTypes {
    ASC = "acs",
    DESC = "desc",
    NONE = "none"
}

export type SortData = {
    colId: string;
    type: SortTypes
}
export type ColumnData = {
    title: string;
    id: string;
    render?: () => any;
    defaultSort?: SortTypes;
    hasSort: boolean;
    hasSearch?: boolean;
}

export type Option = { label: string; value: string };

export type TableAction = {
    icon: any;
    tooltip: string;
    handler: () => any;
}

export type TableTotal = {
    label: string;
    value: number;
}
export type TableInstance = {
    data: Array<any>;
    columns: Array<ColumnData>;
    aggBy: string;
    aggOptions: Array<Option>;
    aggTotal: number;
    handleAggChange: (aggByKey: string) => void;
    sortBy: SortData|null;
    handleSortChange: (sortBy: SortData) => void;
}