import React, { useEffect } from 'react';
import style from './Card.module.scss'
import {ReactComponent as Druid} from '../../components/BackSvg/Друид.svg';
import {ReactComponent as Bard} from '../../components/BackSvg/Бард.svg';
import { ReactComponent as Valkiria } from '../../components/BackSvg/Валькирия.svg';

function Card({ dist, comp, long, time, vys, myText, numberOption1,numberOption2,numberOption3,numberOption4,classText, minSize, maxSize,istokPrint, back, spellControl, card, borderRight, borderDown, keglFon, children }) {
    const fuulPuti = spellControl?.targetClass + '/' + spellControl?.levelName + '/' + spellControl?.istokName + '/' + spellControl?.spellName;
    const higthLevels = card?.hightlevel != undefined && card?.hightlevel?.length != 0;
    let descriptionMain, descriptionText, size =maxSize;
    useEffect(() => {
        descriptionMain = document.getElementById("Description/" + fuulPuti);
        descriptionText = descriptionMain?.children;
        if (descriptionText) {
            descriptionText[0].style.fontSize = size + 'px';
            while (descriptionText[0].offsetHeight > descriptionMain.offsetHeight - keglFon * 1.2 - 2 && Number(size) >= Number(minSize)) {
                size = size - 0.05;
                descriptionText[0].style.fontSize = size + 'px';
            }
            if (Number(size) <= Number(minSize))
                console.log(spellControl.spellName, " возможно переполнение");
            size = maxSize;
        }
    }, [myText]);
    if (!spellControl)
        return <div className={style.Empty}></div>;
    if (back) {
        const num = Number(card?.level[0]) || 0;
        return (
            <div className={style.Obratka}>
                {numberOption2&&<div className={style.Number + ' ' + style.rigthTop}>{num}</div>}
                {numberOption1&&<div className={style.Number + ' ' + style.leftTop}>{num}</div>}
                {numberOption4&&<div className={style.Number + ' ' + style.rigthDown}>{num}</div>}
                {numberOption3&&<div className={style.Number + ' ' + style.leftDown}>{num}</div>}
                <div className={style.Svg}>
                    {children}
                </div>
            </div>
        );
    }
    return (
        <div className={style.MainCard + " " + (borderRight != 2 ? style.BorderRigth : "") + " " + (borderDown ? style.BorderDown : "")}>
            <div className={style.WhiteCard}>
                <div className={style.Zagolovok}>
                    <div>
                        {spellControl.spellName}
                    </div>
                </div>
                <div className={style.School}>
                    <div>
                        {card?.level} - {card?.school}
                    </div>
                </div>
                <div className={style.Options}>
                    <div>
                        <p>{time}</p> <span>{card?.makeTime}</span>
                    </div>
                    <div>
                        <p>{dist}</p> <span>{card?.distance}</span>
                    </div>
                </div>
                <div className={style.Options}>
                    <div>
                        <p>{comp}</p> <span>{card?.components}</span>
                    </div>
                    <div>
                        <p>{long}
                            {
                                card?.concentration == "true" ? "(K)" : null
                        }
                        </p> <span>{card?.longer}</span>
                    </div>
                </div>
                <div className={style.Description} id={"Description/" + fuulPuti}>
                    <div className={style.Text}>
                        <div>
                            {
                                card?.text.map((abzac, index) => {
                                    return <p key={index}>{abzac}</p>;
                                })
                            }
                        </div>
                        {
                            higthLevels
                                ? 
                                <div>
                                    <div className={style.HightLevelsTitle}>
                                        <div>{vys}</div>
                                    </div>
                                    <div className={style.HightLevels}>
                                        {card?.hightlevel.map((abzac, index) => {
                                            return <p key={index}>{abzac}</p>;
                                        })}
                                    </div>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
            <div className={style.Futter}>
                <div>
                    {classText}{istokPrint}
                </div>
            </div>
        </div>
    )
}

export default Card;
