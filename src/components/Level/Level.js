import { useEffect, useState } from 'react'
import Spell from '../Spell/Spell';
import style from './Level.module.scss'

export default function Level({ levelName, allLevelSpells, spellControl, istokName, updateSpellControll, targetClass}) {
    const [showSpells, setshowSpells] = useState(false);
    const [showOk, setShowOk] = useState(false);
    const targetClasses = [], levelNames = [], istokNames = [], spellNames = [];
    allLevelSpells.map(spell => {
        targetClasses.push(targetClass);
        levelNames.push(levelName);
        istokNames.push(istokName);
        spellNames.push(spell);
    })
    const updateOk = () => {
        let flag = true;
        allLevelSpells.map((spell, index) => {
            if (spellControl[targetClasses[index] + '/' + levelNames[index] + '/' + istokNames[index] + '/' + spellNames[index]] == undefined)
                flag = false;
        })
        setShowOk(flag);
    }
    return (
        <div className={style.MainLevel}>
            <div className={style.Flex}>
                <div className={style.Radio} onClick={() => {
                    updateSpellControll(!showOk, targetClasses, levelNames, istokNames, spellNames);
                }}
                >
                    {useEffect(() => { updateOk() })}
                    {showOk && <div className={style.Ok} />}
                </div>
                <div className={style.Tre} onClick={() => {setshowSpells(!showSpells)}} />
                <div onClick={() => {setshowSpells(!showSpells)}}>{levelName}</div>
            </div>            
            {showSpells &&
                allLevelSpells?.map(spell => {
                    return <Spell key={levelName + spell} targetClass={targetClass} spellName={spell} spellControl={spellControl} istokName={istokName} levelName={levelName}  updateSpellControll={updateSpellControll}></Spell>
                })
            }
        </div>
    );
}
