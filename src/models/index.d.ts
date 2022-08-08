interface InitProps {
    routerConfig: Array<any>
}

interface RouterInterface{
    key: string,
    path: string,
    component: Function,
    label: any,
    children: Array<any>
}

interface Gene {
    id: string,
    name: string,
}

interface pit {
    sx: number,
    sy: number,
    gr: any
}

export type {
    InitProps,
    RouterInterface,
    Gene,
    pit
}