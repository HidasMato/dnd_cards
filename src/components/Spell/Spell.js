import { useEffect, useState } from 'react'
import style from './Spell.module.scss'

export default function Spell({ spellName, spellControl, istokName, levelName, targetClass, updateSpellControll}) {
    const [showSpell, setShowSpell] = useState(false);
    const updateOk = () => {
        if (spellControl[targetClass + '/' + levelName + '/' + istokName + '/' + spellName] == undefined)
            setShowSpell(false);
        else
            setShowSpell(true)
    }
    return (
        <div className={style.MainSpell}>
            <div className={style.Radio} onClick={() => {
                updateSpellControll(spellControl[targetClass + '/' + levelName + '/' + istokName + '/' + spellName] == undefined, [targetClass], [levelName], [istokName], [spellName]);
            }}>
                {useEffect(() => {updateOk()})}
                {showSpell && <div className={style.Ok}/>}
            </div>
            {spellName}
        </div>
    )
}
