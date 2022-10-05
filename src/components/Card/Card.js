import React, { useEffect } from 'react';
import style from './Card.module.scss'
import {ReactComponent as Druid} from '../../components/Druid/Druid.svg';

function Card({ back, spellControl, card, borderRight, borderDown }) {
    if (!spellControl)
        return null;
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
    let descriptionMain, descriptionText, size =8;
    setTimeout(() => {
        descriptionMain = document.getElementById("Description/" + fuulPuti);
        descriptionText = descriptionMain.children;
        descriptionText[0].style.fontSize = size + 'px';
        while (descriptionText[0].offsetHeight > descriptionMain.offsetHeight - 12) {
            size = size - 0.1;
            descriptionText[0].style.fontSize = size + 'px';
        }
    }, 500);
    const higthLevels = card?.hightlevel != undefined && card?.hightlevel.length != 0;
    return (
        <div className={style.MainCard + " " + (borderRight != 2 ? style.BorderRigth : "")+ " " + (borderDown ? style.BorderDown : "")}>
            <div className={style.WhiteCard}>
                <div className={style.Zagolovok}>
                    {console.log('card', card)}
                    {spellControl.spellName}
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
                <div className={style.Description + ' ' + (higthLevels ? style.SmallDescription : style.BigDescription) } id={"Description/" + fuulPuti}>
                    
                    <div className={style.Text}>
                        {
                            card?.text.map((abzac, index) => {
                                return <p key={index}>{abzac}</p>;
                            })
                        }
                    </div>
                </div>
                {
                    higthLevels
                        ? 
                        <div className={style.HightLevelsTitle}>
                            На более высоком уровне
                        </div>
                        : null
                }
                {
                    higthLevels
                        ? 
                        <div className={style.HightLevels}>
                            {card?.hightlevel.map((abzac, index) => {
                                return <p key={index}>{abzac}</p>;
                            })}
                        </div>
                        : null
                }
            </div>
            <div className={style.Futter}>
                <div>
                {spellControl.targetClass}{spellControl.levelName == '' ? null : (' - ' + spellControl.levelName)}
                </div>
            </div>
        </div>
    )
}

export default Card;
