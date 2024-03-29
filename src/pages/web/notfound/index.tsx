import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/store';
// import { useLocation } from 'react-router-dom'
import * as PIXI from 'pixi.js'
import { gsap } from 'gsap';
import { pit } from '@/models';

export const NotFound: React.FC =observer((props) => {
  // const location = useLocation()
  const { mindGene } = useStores()
  const particles:pit[] = []
  let speed = 0
  const app = new PIXI.Application({
    width: 800,
    height: 300,
    backgroundColor: 0xFFFFFFFF,
    resizeTo: window
  })

  const loader = new PIXI.Loader()
  const stage = app.stage

  const showGene = () => {
    console.log(mindGene.gene, props)
  }

  const show = () => {
    // 创建刹车
    const bikeLeverImage = new PIXI.Sprite(loader.resources.brake_lever.texture);
    //  创建车架
    const bikeContainer = createBikeContainer(bikeLeverImage)
    stage.addChild(bikeContainer)
    // 创建按钮
    const actionButton = creatActionButton();
    actionButton.x = window.innerWidth - 200
    actionButton.y = 500;
    // 将按钮添加到页面
    stage.addChild(actionButton)
    // 使按钮具备和用户交互的能力
    actionButton.interactive = true
    // 小手效果
    actionButton.buttonMode = true
    // 因为是鼠标事件，这里只对pc端生效
    // 鼠标按下
    actionButton.on("mousedown", () => {
      bikeLeverImage.rotation = Math.PI / 180 * -30;
      gsap.to(bikeLeverImage, { duration: .6, rotation: Math.PI / 180 * -30 })
      // 鼠标按下粒子运动暂停，speed归0
      pause()
      speed = 0
    })
    // 鼠标离开
    actionButton.on("mouseup", () => {
      // 旋转刹车
      gsap.to(bikeLeverImage, { duration: .6, rotation: 0 })
      // 鼠标离开粒子继续运动
      start()
    })
   
    // 创建粒子
    creatParticle()
    // 粒子开始运动
    start()
  }
    const createBikeContainer = (bikeLeverImage:any) => {
    const bikeContainer = new PIXI.Container();
    bikeContainer.scale.x = bikeContainer.scale.y = 0.2
    // 注意: 图片放至的顺序会影响图片的层级，先放的图片在底层
    // 自行车架
    const bikeImage = new PIXI.Sprite(loader.resources.brake_bike.texture);
    bikeContainer.addChild(bikeImage)
    // 刹车
    // let bikeLeverImage = new PIXI.Sprite(loader.resources.brake_lever.texture);
    bikeContainer.addChild(bikeLeverImage)
    bikeLeverImage.pivot.x = bikeLeverImage.pivot.y = 455;
    bikeLeverImage.x = 722;
    bikeLeverImage.y = 900;
    // 手把
    const bikeHandleBarImage = new PIXI.Sprite(loader.resources.brake_handlerbar.texture);
    bikeContainer.addChild(bikeHandleBarImage)
    // 监听，让自行车一直出现在画面右下角
    const resize = () => {
      bikeContainer.x = window.innerWidth - bikeContainer.width
      bikeContainer.y = window.innerHeight - bikeContainer.height
    }
    window.addEventListener('resize', resize)
    resize()
    return bikeContainer
  }

  const creatActionButton = () => {
    const actionButton = new PIXI.Container()
    //  按住按钮以及两个圈
    const btnImg = new PIXI.Sprite(loader.resources.btn_img.texture)
    const btnCircle = new PIXI.Sprite(loader.resources.btn_circle.texture)
    const btnCircle2 = new PIXI.Sprite(loader.resources.btn_circle.texture)
    
    actionButton.addChild(btnImg)
    actionButton.addChild(btnCircle)
    actionButton.addChild(btnCircle2)
    
    btnImg.pivot.x = btnImg.pivot.y = btnImg.width / 2
    
    btnCircle.pivot.x = btnCircle.pivot.y = btnCircle.width / 2
    btnCircle2.pivot.x = btnCircle2.pivot.y = btnCircle2.width / 2
    
    btnCircle.scale.x = btnCircle.scale.y = 0.8
    // 圆圈gsap加载动效
    gsap.to(btnCircle.scale, { duration: 1, x: 1.3, y: 1.3, repeat: -1 })
    gsap.to(btnCircle, { duration: 1, alpha: 0, repeat: -1 })
    return actionButton
  }

  const creatParticle = () => {
    // 创建粒子
    const partialContainer = new PIXI.Container()
    stage.addChild(partialContainer)
    // 将粒子盒子旋转35度
    partialContainer.rotation = 35 * Math.PI / 180
    // 设置盒子的中心点
    partialContainer.pivot.x = window.innerWidth / 2
    partialContainer.pivot.y = window.innerHeight / 2
    partialContainer.x = window.innerWidth / 2
    partialContainer.y = window.innerHeight / 2
    // 粒子多个颜色
    creatParticleColors(partialContainer)
  }

  const creatParticleColors = (partialContainer:any) => {
    const colors = [0xf1cf54, 0xb5cea8, 0xf1cf54, 0x8182f]
    for (let i = 0; i < 10; i++) {
        const gr = new PIXI.Graphics();
        gr.beginFill(colors[Math.floor(Math.random() * colors.length)])
        // 绘制小圆点
        gr.drawCircle(0, 0, 10)
        gr.scale.y = 0.4
        gr.scale.x = 0.4
        gr.endFill()
        const pItem:pit = {
          sx: Math.random() * window.innerWidth,
          sy: Math.random() * window.innerHeight,
          gr: gr
        }
        gr.x = pItem.sx
        gr.y = pItem.sy
        partialContainer.addChild(gr)
        particles.push(pItem)
    }
  }

  const loop = () => {
    speed += .5
    speed = Math.min(speed, 20)
    for (let i = 0; i < particles.length; i++) {
      const pItem = particles[i]
      pItem.gr.y += speed
      if (speed >= 20) {
        pItem.gr.scale.y = 20
        // 颗粒感
        pItem.gr.scale.x = 0.05
      }
      // 超出边界后从画面里面回来继续移动
      if (pItem.gr.y > window.innerHeight) pItem.gr.y = 0
    }
  }

  const start = () => {
    loop()
    gsap.ticker.add(loop)
  }

  const pause = () => {
    gsap.ticker.remove(loop)
    for (let i = 0; i < particles.length; i++) {
      const pItem = particles[i]
      pItem.gr.scale.y = .3
      pItem.gr.scale.x = .3
      // ease: 'elastic.out'回弹效果
      gsap.to(pItem.gr, { duration: .6, x: pItem.sx, y: pItem.sy, ease: 'elastic.out' })
    }
  }
  const getImageUrl = () => {
    return new URL('@/assets/images/R-C.png', import.meta.url).href
  }

  useEffect(() => {
    loader.add('R-C', new URL('@/assets/images/R-C.png', import.meta.url).href)
    loader.load()
    // 加载完毕的时候调用show方法来开始页面
    loader.onComplete.add(() => {
      show()
    })
    const dom:any = document.querySelector("#pixiCavas")
    dom.appendChild(app.view)
  }, [])

  return <div className={ 'overflow-y-auto height-block' }>
    <p onClick={showGene}>11111111111111111111111</p>
    <div id='pixiCavas'>

    </div>
  </div>;
}) 