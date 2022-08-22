import React, {FC, useEffect, useState} from 'react';
import {Layout, Menu} from 'antd';
const { Header, Content } = Layout;
import { Route, Routes, useNavigate } from "react-router-dom";
import flat from '@/utils/flat'
import { Footer } from 'antd/lib/layout/layout';
import { InitProps } from '@/models';
import { Logo } from '@/components/Logo'
import './guard.less'
//函数组件

const RouterGuard:FC<InitProps> = (props:InitProps) =>{
    const [defaultKey, setDefaultKey] = useState(['HOME'])
    const { routerConfig } = props;
    const flatRouterConfig = flat(routerConfig, 'children');
    let targetRouterData = {
    };
    const navigate = useNavigate();//因为使用了react-router-dom6以上的版本，所以路由跳转要使用useNavigate
    !navigate;
    // let [role_id,setRole_id] = useState<string|number>(getRoleId())
    //当天路由路径名
    const [targetRouterConfig,setTargetRouterConfig] = useState<boolean>(false)//判断当前路径是否匹配的上路由组，false为不存在，true为存在
    //useEffect（钩子）可以当做类组件的componentDidMount，componentDidUpdate 和 componentWillUnmount。当targetRouterConfig,role_id有变化，就需要执行一次useEffect类的函数
	useEffect(():any=>{
        renderContent(location.pathname)
    },[targetRouterConfig])

    useEffect(() => {
        // console.log(import.meta.env.VITE_APP_BASE_URL)
        console.log(props)
    },[])
	
    //渲染主要内容
    const renderContent = async (pathname:string)=>{
        //匹配上的路由数据
        for (const i in routerConfig) {

            //判断当前访问路径是否对应一级路由且没有二级路由
            if (routerConfig[i]['path'].toLowerCase() !== pathname.toLowerCase() && !routerConfig[i]['routes']) {
                setTargetRouterConfig(false);
            } else if (routerConfig[i]['path'].toLowerCase() !== pathname.toLowerCase() && routerConfig[i]['routes']) {
                //有二级路由进行匹配查找
                for (const q in routerConfig[i]['routes']) {
                    if (routerConfig[i]['routes'][q].path.toLowerCase() === pathname.toLowerCase()) {
                        setTargetRouterConfig(true);
                        targetRouterData = routerConfig[i]['routes'][q]
                        break;
                    }
                }
                if (targetRouterConfig) {
                    break;
                }
                //一级路由进行匹配查找
            } else if (routerConfig[i]['path'].toLowerCase() === pathname.toLowerCase()) {
                setTargetRouterConfig(true);
                targetRouterData = routerConfig[i]
                break;
            }
        }
    }

    const selectTitle = (item: any, key: any, keyPath: any, selectedKeys: any, domEvent: any) => {
        console.log(item, key, keyPath, selectedKeys, domEvent)
    }

    return (
        <Layout style={{ minHeight: '100vh' }} className={ 'overflow-hidden' }>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <Logo />
                <Menu className='menu' inlineIndent={ 5 } onSelect={ selectTitle } style={{ marginLeft: '10px' }} selectable={true} mode="horizontal" theme="dark" items={routerConfig} />
                {/* <Menu className='menu' selectedKeys={ defaultKey } inlineIndent={ 5 } onSelect={ selectTitle } style={{ marginLeft: '10px' }} selectable={true} mode="horizontal" theme="dark" items={routerConfig} /> */}
            </Header>
            <Content style={{ margin: '5px 16px 0 16px', height: '0' }} className={ 'overflow-hidden' }>
                <Routes>
                    {
                        flatRouterConfig.map((item) => {
                            return <Route
                                key={item.key}
                                path={item.path}
                                element={ item.component }
                            />
                        })
                    }
                </Routes>
            </Content>
            <Footer style={{ paddingTop: '10px', paddingBottom: '10px' }} />
        </Layout>
    );
}

export default RouterGuard;
