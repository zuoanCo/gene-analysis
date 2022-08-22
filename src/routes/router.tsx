import { NavLink } from "react-router-dom"

import { NotFound } from "@/pages/web/notfound"
import { Home } from "@/pages/web/home"
import { DownLoad } from "@/pages/web/download"
import { Project } from "@/pages/web/project"

const RoutesConfig:Array<any> = [
    {
        key: 'HOME',
        path: '/',
        component: <Home />,
        label: (<NavLink to={{ pathname: '/', state: { key: 'HOME' } }}  style={{ fontWeight: 'bloder' }}>
            HOME
        </NavLink>),
        children: undefined
    },
    {
        key: 'PAN CANCER',
        path: '/pancancer',
        component: <Project />,
        label: (<span style={{ fontWeight: 'bloder' }}>PAN CANCER</span>),
        children: [
            {
                key: 'Microbiome component',
                path: '/pancancer/micro',
                component: <Project />,
                label: (<NavLink to='/pancancer/micro'  state={{ key: 'Microbiome component' }} style={{ fontWeight: 'bloder' }}>
                    Microbiome component
                </NavLink>),
                children: undefined
            },
            {
                key: 'Alpha-diversity1',
                path: '/pancancer/diversity',
                component: <Project />,
                label: (<NavLink to='/pancancer/diversity' state={{ key: 'Alpha-diversity1' }} style={{ fontWeight: 'bloder' }}>
                    Alpha-diversity
                </NavLink>),
                children: undefined
            },
            {
                key: 'Bacterial difference',
                path: '/pancancer/bacterial',
                component: <Project />,
                label: (<NavLink to='/pancancer/bacterial' state={{ key: 'Bacterial difference' }} style={{ fontWeight: 'bloder' }}>
                    Bacterial difference
                </NavLink>),
                children: undefined
            },
        ]
    },
    {
        key: 'CANCER TYPE',
        path: '/cancertype',
        component: <Project />,
        label: <span style={{ fontWeight: 'bloder' }}>CANCER TYPE</span>,
        children: [
            {
                key: 'Alpha-diversity2',
                path: '/cancertype/alphad',
                component: <Project />,
                label: (<NavLink to='/cancertype/alphad' state={{ key: 'Alpha-diversity2' }} style={{ fontWeight: 'bloder' }}>
                    Alpha-diversity
                </NavLink>),
                children: undefined
            },
            {
                key: 'Beta-diversity',
                path: '/cancertype/betadiversity',
                component: <Project />,
                label: (<NavLink to='/cancertype/betadiversity' state={{ key: 'Beta-diversity' }} style={{ fontWeight: 'bloder' }}>
                    Beta-diversity
                </NavLink>),
                children: undefined
            },
            {
                key: 'Differential analysis',
                path: '/cancertype/differential',
                component: <Project />,
                label: (<span style={{ fontWeight: 'bloder' }}>Differential analysis</span>),
                children: [
                    {
                        key: 'Differential microbiota',
                        path: '/cancertype/differential/microbiota',
                        component: <Project />,
                        label: (<NavLink to='/cancertype/differential/microbiota' state={{ key: 'Differential microbiota' }} style={{ fontWeight: 'bloder' }}>
                            Differential microbiota
                        </NavLink>),
                        children: undefined
                    },
                    {
                        key: 'DIY',
                        path: '/cancertype/differential/diy',
                        component: <Project />,
                        label: (<NavLink to='/cancertype/differential/diy' state={{ key: 'DIY' }} style={{ fontWeight: 'bloder' }}>
                            DIY
                        </NavLink>),
                        children: undefined
                    }
                ]
            },
            {
                key: 'Survival analysis',
                path: '/cancertype/survival',
                component: <Project />,
                label: <span style={{ fontWeight: 'bloder' }}>Survival analysis</span>,
                children: [
                    {
                        key: 'Alpha diversity',
                        path: '/cancertype/survival/alpha',
                        component: <Project />,
                        label: (<NavLink to='/cancertype/survival/alpha' state={{ key: 'Alpha diversity' }} style={{ fontWeight: 'bloder' }}>
                            Alpha diversity
                        </NavLink>),
                        children: undefined
                    },
                    {
                        key: 'Bacterial',
                        path: '/cancertype/survival/bacterial',
                        component: <Project />,
                        label: (<NavLink to='/cancertype/survival/bacterial' state={{ key: 'Bacterial' }} style={{ fontWeight: 'bloder' }}>
                            Bacterial
                        </NavLink>),
                        children: undefined
                    }
                ]
            },
            {
                key: 'Correlation analysis',
                path: '/cancertype/correlation',
                component: <Project />,
                label: <span style={{ fontWeight: 'bloder' }}>Correlation analysis</span>,
                children: [
                    {
                        key: 'Microbes-Gene',
                        path: '/cancertype/correlation/gene',
                        component: <Project />,
                        label: (<NavLink to='/cancertype/correlation/gene' state={{ key: 'Correlation analysis' }} style={{ fontWeight: 'bloder' }}>
                            Microbes-Gene
                        </NavLink>),
                        children: undefined
                    },
                    {
                        key: 'Microbes-Microbes',
                        path: '/cancertype/correlation/microbes',
                        component: <Project />,
                        label: (<NavLink to='/cancertype/correlation/microbes' state={{ key: 'Microbes-Microbes' }} style={{ fontWeight: 'bloder' }}>
                            Microbes-Microbes
                        </NavLink>),
                        children: undefined
                    },{
                        key: 'Microbes-Immune',
                        path: '/cancertype/correlation/immune',
                        component: <Project />,
                        label: (<NavLink to='/cancertype/correlation/immune' state={{ key: 'Microbes-Immune' }} style={{ fontWeight: 'bloder' }}>
                            Microbes-Immune
                        </NavLink>),
                        children: undefined
                    },
                ]
            },
            {
                key: 'Function analysis',
                path: '/cancertype/function',
                component: <Project />,
                label: <span style={{ fontWeight: 'bloder' }}>Function analysis</span>,
                children: [
                    {
                        key: 'Differential Gene',
                        path: '/cancertype/function/gene',
                        component: <Project />,
                        label: (<NavLink to='/cancertype/function/gene' state={{ key: 'Function analysis' }} style={{ fontWeight: 'bloder' }}>
                            Differential Gene
                        </NavLink>),
                        children: undefined
                    },
                    {
                        key: 'DIY2',
                        path: '/cancertype/function/diy',
                        component: <Project />,
                        label: (<NavLink to='/cancertype/function/diy' state={{ key: 'DIY2' }} style={{ fontWeight: 'bloder' }}>
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
        component: <DownLoad />,
        label: (<NavLink to='/download' state={{ key: 'DOWNLOAD' }} style={{ fontWeight: 'bloder' }}>
            DOWNLOAD
        </NavLink>),
        children: undefined
    },
    {
        key: 'CONTACT US',
        path: '/contactus',
        component: <DownLoad />,
        label: (<NavLink to='/contactus' state={{ key: 'CONTACT US' }} style={{ fontWeight: 'bloder' }}>
            CONTACT US
        </NavLink>),
        children: undefined
    },
    {
        key: 'HELP',
        path: '/help',
        component: <DownLoad />,
        label: (<NavLink to='/help' state={{ key: 'HELP' }} style={{ fontWeight: 'bloder' }}>
            HELP
        </NavLink>),
        children: undefined
    }
]

export default RoutesConfig