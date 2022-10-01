import { useState } from 'react';
import style from './App.module.scss';
import Class from './components/Class/Class';
import Istok from './components/Istok/Istok';


export default function App() {
    const [data, setData] = useState(undefined);
    const [targetClass, setTargetClass] = useState("");
    const [spellControl, setSpellControl] = useState({}); //Список всех заклинаний в стиле подписи: Класс - Уровень - Источник
    const classesName = [];
    const getData = setInterval(() => {
        setData(document.getElementById('MainComponent')?.newOption);
        if (data) {
            clearInterval(getData); 
            for (let w in data?.classes) {
                classesName.push(w);
            };
        }    
    }, 200);
    const updateSpellControll = (mode, targetClasses, levelNames, istokNames, spellNames) => {
        const masObj = { ...spellControl };
        if (mode) {
            targetClasses.map((w, index) => {
                const obName = targetClasses[index] + '/' + levelNames[index] + '/' + istokNames[index] + '/' + spellNames[index];
                masObj[obName] = { targetClass: targetClasses[index], levelName: levelNames[index], istokName: istokNames[index], spellName: spellNames[index] }
            })
        } else {
            targetClasses.map((w, index) => {
                const obName = targetClasses[index] + '/' + levelNames[index] + '/' + istokNames[index] + '/' + spellNames[index];
                delete masObj?.[obName];
            })
        }
        setSpellControl(masObj);
    };
    return (
        <div className={style.MainComponent} id={'MainComponent'}>
            <div className={style.Menu}>
                <Class targetClass={targetClass} setTargetClass={setTargetClass} classNames={classesName} setSpellControl={setSpellControl}></Class>
                {
                    data?.classes[targetClass]
                        ? Object.keys(data?.classes[targetClass]).map(istok => {
                            const allSpells = [];
                            const onlyUseLevels = new Set();
                            data?.classes[targetClass][istok].map(spell => {
                                const level = data?.cards?.[spell]?.level ?? "none";
                                allSpells.push({"level":level, "name":spell});
                                onlyUseLevels.add(level);
                            })
                            return <Istok key={istok} targetClass={targetClass} istok={istok} allSpells={allSpells} onlyUseLevels={[...onlyUseLevels]} spellControl={spellControl} updateSpellControll={updateSpellControll}></Istok>
                        })
                        : null
                }
            </div>
            <div className={style.AllCards}>
                {
                    Object.keys(spellControl).map(w =>{
                    return <div key={w}>{w}</div>;
                    }
                )}
            </div>
        </div>
    );
}
