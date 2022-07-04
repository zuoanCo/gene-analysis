import React from "react";
import bottom from '@/assets/images/bottom.png'

export const Step:React.FC = () => {


    return (
        <>
            <span style={{ width: '210px', backgroundColor: '#f2ede4', borderColor: '#b8b4b4' }} className="border-radius text-aligin-center"><p style={{ margin: '0'}}>Extract non-human reads</p></span>
            <img style={{ display: 'inline-block', width: '24px', height: '24px' }} src={bottom} alt="" />
            <span style={{ width: '210px', backgroundColor: '#f2ede4', borderColor: '#b8b4b4' }} className="border-radius text-aligin-center">
                <p style={{ margin: '0'}}>Align to microbial</p>
                <p style={{ margin: '0'}}>reference database</p>
            </span>
            <img style={{ display: 'inline-block', width: '24px', height: '24px' }} src={bottom} alt="" />
            <span style={{ width: '210px', backgroundColor: '#f2ede4', borderColor: '#b8b4b4' }} className="border-radius text-aligin-center">
                <p style={{ margin: '0'}}>Function gene annotation</p>
            </span>
            <img style={{ display: 'inline-block', width: '24px', height: '24px' }} src={bottom} alt="" />
            <span style={{ width: '210px', backgroundColor: '#f2ede4', borderColor: '#b8b4b4' }} className="border-radius text-aligin-center">
                <p style={{ margin: '0'}}>Bioinformatic analysis</p>
            </span>
        </>
    )
}