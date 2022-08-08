import React, { FC } from "react";
import { Tabs } from 'antd';

export const DownLoad:FC<any> = (props) => {
    const { TabPane } = Tabs

    const panes:Array<any> = [
        {
            key: '1',
            content: 'Microbiome',
        },
        {
            key: '2',
            content: 'Immune',
        },
        {
            key: '3',
            content: 'DEGs',
        },
        {
            key: '4',
            content: 'Clinical',
        },
        {
            key: '5',
            content: 'Taxa',
        },
    ]

    return (<>
        <p>XXXX privided data download available for microbiota data, immune cell abundance, differential expression genes, clinical(survival, stage, subtype) and Taxa name list.</p>
        <Tabs
          hideAdd
          type="editable-card"
        >
          {panes.map(pane => (
            <TabPane tab={pane.content} key={pane.key}>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
    </>)
}