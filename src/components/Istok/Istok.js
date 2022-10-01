import { useEffect, useState } from 'react';
import Level from '../Level/Level';
import style from './Istok.module.scss'

export default function Istok({ istok, allSpells, onlyUseLevels, spellControl, updateSpellControll, targetClass}) {
    const [showLevels, setShowLevels] = useState(false);
    const [showOk, setShowOk] = useState(false);
    const targetClasses = [], levelNames = [], istokNames = [], spellNames = [];
    allSpells.map(spell => {
        targetClasses.push(targetClass);
        levelNames.push(spell.level);
        istokNames.push(istok);
        spellNames.push(spell.name);

    })
    const updateOk = () => {
        let flag = true;
        allSpells.map((spell, index) => {
            if (spellControl[targetClasses[index] + '/' + levelNames[index] + '/' + istokNames[index] + '/' + spellNames[index]] == undefined)
                flag = false;
        })
        setShowOk(flag);
    }
    return (
        <div className={style.MainSchool}>
            <div className={style.Flex}>
                <div className={style.Radio} onClick={() => {
                    updateSpellControll(!showOk, targetClasses, levelNames, istokNames, spellNames);
                }}
                >
                    {useEffect(() => { updateOk() })}
                    {showOk && <div className={style.Ok} />}
                </div>
                {istok}
                <div className={style.Tre} onClick={() => {setShowLevels(!showLevels)}} />
            </div>
            {showLevels &&
                
                onlyUseLevels?.map((level) => {
                    const allLevelSpells = [];
                    allSpells.map(spell => {
                        if (spell.level == level) {
                            allLevelSpells.push(spell.name);
                        }
                    })
                    return <Level key={level} targetClass={targetClass} levelName={level} allLevelSpells={allLevelSpells} spellControl={spellControl} istokName={istok} updateSpellControll={updateSpellControll}></Level>
                })
            }
        </div>
    );
}
