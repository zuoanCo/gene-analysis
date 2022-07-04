import { NavLink } from "react-router-dom"

import { NotFound } from "@/pages/web/notfound"
import { Home } from "@/pages/web/home"

const RoutesConfig:Array<any> = [
    {
        key: 'HOME',
        path: '/',
        component: <Home />,
        label: (<NavLink to='/' style={{ fontWeight: 'bloder' }}>
            HOME
        </NavLink>),
        children: undefined
    },
    {
        key: 'PAN CANCER',
        path: '/pancancer',
        component: <NotFound />,
        label: (<span style={{ fontWeight: 'bloder' }}>PAN CANCER</span>),
        children: [
            {
                key: 'Microbiome component',
                path: '/pancancer/micro',
                component: <NotFound />,
                label: (<NavLink to='/pancancer/micro' style={{ fontWeight: 'bloder' }}>
                    Microbiome component
                </NavLink>),
                children: undefined
            },
            {
                key: 'Alpha-diversity',
                path: '/pancancer/alphadiversity',
                component: <NotFound />,
                label: (<NavLink to='/pancancer/alphadiversity' style={{ fontWeight: 'bloder' }}>
                    Alpha-diversity
                </NavLink>),
                children: undefined
            },
            {
                key: 'Bacterial difference',
                path: '/pancancer/alphadiversity',
                component: <NotFound />,
                label: (<NavLink to='/pancancer/alphadiversity' style={{ fontWeight: 'bloder' }}>
                    Bacterial difference
                </NavLink>),
                children: undefined
            },
        ]
    },
    {
        key: 'CANCER TYPE',
        path: '/cancertype',
        component: <NotFound />,
        label: <span style={{ fontWeight: 'bloder' }}>CANCER TYPE</span>,
        children: [
            {
                key: 'Alpha-diversity',
                path: '/cancertype/alphadiversity',
                component: <NotFound />,
                label: (<NavLink to='/cancertype/alphadiversity' style={{ fontWeight: 'bloder' }}>
                    Alpha-diversity
                </NavLink>),
                children: undefined
            },
            {
                key: 'Beta-diversity',
                path: '/cancertype/betadiversity',
                component: <NotFound />,
                label: (<NavLink to='/cancertype/betadiversity' style={{ fontWeight: 'bloder' }}>
                    Beta-diversity
                </NavLink>),
                children: undefined
            },
            {
                key: 'Differential analysis',
                path: '/cancertype/differential',
                component: <NotFound />,
                label: (<span style={{ fontWeight: 'bloder' }}>Differential analysis</span>),
                children: [
                    {
                        key: 'Differential microbiota',
                        path: '/cancertype/differential/microbiota',
                        component: <NotFound />,
                        label: (<NavLink to='/cancertype/differential/microbiota' style={{ fontWeight: 'bloder' }}>
                            Differential microbiota
                        </NavLink>),
                        children: undefined
                    },
                    {
                        key: 'DIY',
                        path: '/cancertype/differential/diy',
                        component: <NotFound />,
                        label: (<NavLink to='/cancertype/differential/diy' style={{ fontWeight: 'bloder' }}>
                            DIY
                        </NavLink>),
                        children: undefined
                    }
                ]
            },
            {
                key: 'Survival analysis',
                path: '/cancertype/survival',
                component: <NotFound />,
                label: <span style={{ fontWeight: 'bloder' }}>Survival analysis</span>,
                children: [
                    {
                        key: 'Alpha diversity',
                        path: '/cancertype/survival/alpha',
                        component: <NotFound />,
                        label: (<NavLink to='/cancertype/survival/alpha' style={{ fontWeight: 'bloder' }}>
                            Alpha diversity
                        </NavLink>),
                        children: undefined
                    },
                    {
                        key: 'Bacterial',
                        path: '/cancertype/survival/bacterial',
                        component: <NotFound />,
                        label: (<NavLink to='/cancertype/survival/bacterial' style={{ fontWeight: 'bloder' }}>
                            Bacterial
                        </NavLink>),
                        children: undefined
                    }
                ]
            },
            {
                key: 'Correlation analysis',
                path: '/cancertype/correlation',
                component: <NotFound />,
                label: <span style={{ fontWeight: 'bloder' }}>Correlation analysis</span>,
                children: [
                    {
                        key: 'Microbes-Gene',
                        path: '/cancertype/correlation/gene',
                        component: <NotFound />,
                        label: (<NavLink to='/cancertype/correlation/gene' style={{ fontWeight: 'bloder' }}>
                            Microbes-Gene
                        </NavLink>),
                        children: undefined
                    },
                    {
                        key: 'Microbes-Microbes',
                        path: '/cancertype/correlation/microbes',
                        component: <NotFound />,
                        label: (<NavLink to='/cancertype/correlation/microbes' style={{ fontWeight: 'bloder' }}>
                            Microbes-Microbes
                        </NavLink>),
                        children: undefined
                    },{
                        key: 'Microbes-Immune',
                        path: '/cancertype/correlation/immune',
                        component: <NotFound />,
                        label: (<NavLink to='/cancertype/correlation/immune' style={{ fontWeight: 'bloder' }}>
                            Microbes-Immune
                        </NavLink>),
                        children: undefined
                    },
                ]
            },
            {
                key: 'Function analysis',
                path: '/cancertype/function',
                component: <NotFound />,
                label: <span style={{ fontWeight: 'bloder' }}>Function analysis</span>,
                children: [
                    {
                        key: 'Differential Gene',
                        path: '/cancertype/function/gene',
                        component: <NotFound />,
                        label: (<NavLink to='/cancertype/function/gene' style={{ fontWeight: 'bloder' }}>
                            Differential Gene
                        </NavLink>),
                        children: undefined
                    },
                    {
                        key: 'DIY',
                        path: '/cancertype/function/diy',
                        component: <NotFound />,
                        label: (<NavLink to='/cancertype/function/diy' style={{ fontWeight: 'bloder' }}>
                            DIY
                        </NavLink>),
                        children: undefined
                    }
                ]
            },
        ]
    },
    {
        key: 'DOWNLOAD',
        path: '/download',
        component: <NotFound />,
        label: (<NavLink to='/download' style={{ fontWeight: 'bloder' }}>
            DOWNLOAD
        </NavLink>),
        children: undefined
    },
    {
        key: 'CONTACT US',
        path: '/contactus',
        component: <NotFound />,
        label: (<NavLink to='/contactus' style={{ fontWeight: 'bloder' }}>
            CONTACT US
        </NavLink>),
        children: undefined
    },
    {
        key: 'HELP',
        path: '/help',
        component: <NotFound />,
        label: (<NavLink to='/help' style={{ fontWeight: 'bloder' }}>
            HELP
        </NavLink>),
        children: undefined
    }
]

export default RoutesConfig