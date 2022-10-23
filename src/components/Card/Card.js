import React, { useEffect } from 'react';
import style from './Card.module.scss'
import {ReactComponent as Druid} from '../../components/Druid/Druid.svg';

function Card({minSize, maxSize,istokPrint, back, spellControl, card, borderRight, borderDown, keglFon }) {
    if (!spellControl)
        return <div className={style.Empty}></div>;
    if (back) {
        const num = Number(card?.level[0]) || 0;
        return (
            <div className={style.Obratka}>
            <div className={style.Number + ' ' + style.Up}>{num}</div>
            <div className={style.Number + ' ' + style.Down}>{num}</div>
                <Druid className={style.Oborot} />
            </div>
        );
    }
    const fuulPuti = spellControl.targetClass + '/' + spellControl.levelName + '/' + spellControl.istokName + '/' + spellControl.spellName;
    let descriptionMain, descriptionText, size =maxSize;
    const higthLevels = card?.hightlevel != undefined && card?.hightlevel.length != 0;
    setTimeout(() => {
        descriptionMain = document.getElementById("Description/" + fuulPuti);
        descriptionText = descriptionMain?.children;
        if (descriptionText) {
            descriptionText[0].style.fontSize = size + 'px';
            while (descriptionText[0].offsetHeight > descriptionMain.offsetHeight - keglFon * 1.2 -2 && size >= minSize) {
                size = size - 0.01;
                descriptionText[0].style.fontSize = size + 'px';
            }
            if (size <= minSize)
                console.log(spellControl.spellName," возможно переполнение");
            size = maxSize;
        }
    }, 100)
    
    return (
        <div className={style.MainCard + " " + (borderRight != 2 ? style.BorderRigth : "") + " " + (borderDown ? style.BorderDown : "")} onLoad= {() => console.log(123)}>
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
                        <p>Время накладывания</p> <span>{card?.makeTime}</span>
                    </div>
                    <div>
                        <p>Дистанция</p> <span>{card?.distance}</span>
                    </div>
                </div>
                <div className={style.Options}>
                    <div>
                        <p>Компоненты</p> <span>{card?.components}</span>
                    </div>
                    <div>
                        <p>Длительность
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
                                        <div>На более высоком уровне</div>
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
                    {spellControl.targetClass}{!istokPrint ? null : (' - ' + spellControl.istokName)}
                </div>
            </div>
        </div>
    )
}

export default Card;
