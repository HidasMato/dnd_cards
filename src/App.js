import { useState } from 'react';
import style from './App.module.scss';
import Card from './components/Card/Card';
import Class from './components/Class/Class';
import Istok from './components/Istok/Istok';


export default function App() {
    const [data, setData] = useState(undefined);
    const [oborot, setOborot] = useState(false);
    const [targetClass, setTargetClass] = useState("");
    const [spellControl, setSpellControl] = useState({}); //Список всех заклинаний в стиле подписи: Класс - Уровень - Источник
    const classesName = [];
    const [colorMas, setColorMas] = useState(["#27984d","#ffffff","#000000","#ffffff","#27984d","#000000","#000000","#27984d","#ffffff"])
    const [like, setLike] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);
    let colors;
    const getData = setInterval(() => {
        setData(document.getElementById('MainComponent')?.newOption);
        if (data) {
            clearInterval(getData); 
            for (let w in data?.classes) {
                classesName.push(w);
            };
        };
        colors = document.getElementsByName('colorInput');
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
    const getCards = () => {
        const kolvo = Object.keys(spellControl).length - 1;
        let masCards = [];
        return Object.keys(spellControl).map((spellName, index) => {
            if (index % 3 == 0)
                masCards = [];
            masCards[index % 3] = spellControl[spellName];
            if (index % 3 == 2 || index == kolvo) {
                return (
                    <div key={index/3} className={style.CardsLine + ' ' + (oborot ? style.Obratka : null)}>
                        {
                            masCards?.map((spell, indexC) => {
                                if (oborot) return <Card back={true} borderDown={!(index % 9 == 8)} borderRight={indexC} spellControl={spell} card={data?.cards?.[spell.spellName]} key={spell.targetClass + '+' + spell.levelName + '+' + spell.istokName + '+' + spell.spellName} /> 
                                else return <Card borderDown={!(index % 9 == 8)} borderRight={indexC} spellControl={spell} card={data?.cards?.[spell.spellName]} key={spell.targetClass + '+' + spell.levelName + '+' + spell.istokName + '+' + spell.spellName}></Card>
                            })
                        }
                    </div>
                );
            }
        })
    };
    const changeColor = () => {
        document.getElementById('MainComponent')?.style.setProperty('--BackcgroundCard', colorMas[0]);
        document.getElementById('MainComponent')?.style.setProperty('--InCard', colorMas[1]);
        document.getElementById('MainComponent')?.style.setProperty('--Text4Card', colorMas[2]);
        document.getElementById('MainComponent')?.style.setProperty('--Text2Card', colorMas[3]);
        document.getElementById('MainComponent')?.style.setProperty('--Text3Card', colorMas[4]);
        document.getElementById('MainComponent')?.style.setProperty('--Text5Card', colorMas[5]);
        document.getElementById('MainComponent')?.style.setProperty('--Text1Card', colorMas[6]);
        document.getElementById('MainComponent')?.style.setProperty('--Oblogka1', colorMas[7]);
        document.getElementById('MainComponent')?.style.setProperty('--Oblogka2', colorMas[8]);
    }
    return (
        <div className={style.MainComponent} id={'MainComponent'}>
            <div className={style.Menu}>
                <div className={style.Flex}>
                    <Class targetClass={targetClass} setTargetClass={setTargetClass} classNames={classesName} setSpellControl={setSpellControl}></Class>
                    <div className={style.Oborot}>
                        <input type="checkbox" name="qwe" id="ewq" onChange={(e) => {
                            setOborot(e.target.checked);
                        }}/>
                    </div>
                </div>
                {
                    data?.classes[targetClass]
                        ? Object.keys(data?.classes[targetClass]).map(istok => {
                            const allSpells = [];
                            const onlyUseLevels = new Set();
                            data?.classes[targetClass][istok].map(spell => {
                                const level = data?.cards?.[spell]?.level ?? "";
                                allSpells.push({"level":level, "name":spell});
                                onlyUseLevels.add(level);
                            })
                            return <Istok key={istok} targetClass={targetClass} istok={istok} allSpells={allSpells} onlyUseLevels={[...onlyUseLevels]} spellControl={spellControl} updateSpellControll={updateSpellControll}></Istok>
                        })
                        : null
                }
                <div className={style.Setting}>
                    <div className={style.ChoseColor}>
                        Обложка
                        <input name={'colorInput'} type="color" defaultValue={colorMas[0]} onInput={(e) => {  
                            const R = colorMas;
                            R[0] = e.target.value;
                            if (like[4] == 0) {
                                R[4] = R[0];
                                colors[4].value = R[0];
                            }
                            if (like[6] == 0) {
                                R[6] = R[0];
                                colors[6].value = R[0];
                                if (like[5] == 0) {
                                    R[5] = R[0];
                                    colors[5].value = R[0];
                                }
                                if (like[2] == 0) {
                                    R[2] = R[0];
                                    colors[2].value = R[0];
                                }
                            }
                            if (like[7] == 0) {
                                R[7] = R[0];
                                colors[7].value = R[0];
                            }
                            setColorMas(R);
                            changeColor();
                        }} />
                    </div>
                    <div className={style.ChoseColor}>
                        Внутри
                        <input name={'colorInput'} type="color" defaultValue={colorMas[1]} onInput={(e) => {  
                            const R = colorMas;
                            R[1] = e.target.value;
                            if (like[3] == 0) {
                                R[3] = R[1];
                                colors[3].value = R[1];
                            }
                            if (like[8] == 0) {
                                R[8] = R[1];
                                colors[8].value = R[1];
                            }
                            setColorMas(R);
                            changeColor();
                        } } />
                    </div>
                    <div className={style.ChoseColor}>
                        Заголовок
                        <input name={'colorInput'} type="color" defaultValue={colorMas[2]} onInput={(e) => { 
                            const R = colorMas;
                            R[2] = e.target.value;
                            setColorMas(R);
                            changeColor();
                        }} />
                        <div className={style.As} onClick={(e) => {
                            if (like[2] == 1) {
                                e.target.className = style.As + ' ' + style.Yes;
                                const R = colorMas;
                                R[2] = colorMas[6];
                                e.target.previousSibling.value = colorMas[6];
                                e.target.previousSibling.disabled = true;
                                setColorMas(R);
                                changeColor();
                                const L = like;
                                L[2] = 0;
                                setLike(L);
                            } else {
                                e.target.className = style.As;
                                e.target.previousSibling.disabled = false;
                                const L = like;
                                L[2] = 1;
                                setLike(L);
                            }
                        }}>
                            Как текст
                        </div>
                    </div>
                    <div className={style.ChoseColor}>
                        На фоне
                        <input name={'colorInput'} type="color" defaultValue={colorMas[3]} onInput={(e) => {  
                            const R = colorMas;
                            R[3] = e.target.value;
                            setColorMas(R);
                            changeColor();
                        } } />
                        <div className={style.As} onClick={(e) => {
                            if (like[3] == 1) {
                                e.target.className = style.As + ' ' + style.Yes;
                                const R = colorMas;
                                R[3] = colorMas[1];
                                e.target.previousSibling.value = colorMas[1];
                                e.target.previousSibling.disabled = true;
                                setColorMas(R);
                                changeColor();
                                const L = like;
                                L[3] = 0;
                                setLike(L);
                            } else {
                                e.target.className = style.As;
                                e.target.previousSibling.disabled = false;
                                const L = like;
                                L[3] = 1;
                                setLike(L);
                            }
                        }}>
                            Как внутри
                        </div>
                    </div>
                    <div className={style.ChoseColor}>
                        Особое Загл
                        <input name={'colorInput'} type="color" defaultValue={colorMas[4]} onInput={(e) => {  
                            const R = colorMas;
                            R[4] = e.target.value;
                            setColorMas(R);
                            changeColor();
                        }} />
                        <div className={style.As} onClick={(e) => {
                            if (like[4] == 1) {
                                e.target.className = style.As + ' ' + style.Yes;
                                const R = colorMas;
                                R[4] = colorMas[0];
                                e.target.previousSibling.value = colorMas[0];
                                e.target.previousSibling.disabled = true;
                                setColorMas(R);
                                changeColor();
                                const L = like;
                                L[4] = 0;
                                setLike(L);
                            } else {
                                e.target.className = style.As;
                                e.target.previousSibling.disabled = false;
                                const L = like;
                                L[4] = 1;
                                setLike(L);
                            }
                        }}>
                            Как Облож
                        </div>
                    </div>
                    <div className={style.ChoseColor}>
                        Особое Текст
                        <input name={'colorInput'} type="color" defaultValue={colorMas[5]} onInput={(e) => {  
                            const R = colorMas;
                            R[5] = e.target.value;
                            setColorMas(R);
                            changeColor();
                        }} />
                        <div className={style.As} onClick={(e) => {
                            if (like[5] == 1) {
                                e.target.className = style.As + ' ' + style.Yes;
                                const R = colorMas;
                                R[5] = colorMas[6];
                                e.target.previousSibling.value = colorMas[6];
                                e.target.previousSibling.disabled = true;
                                setColorMas(R);
                                changeColor();
                                const L = like;
                                L[5] = 0;
                                setLike(L);
                            } else {
                                e.target.className = style.As;
                                e.target.previousSibling.disabled = false;
                                const L = like;
                                L[5] = 1;
                                setLike(L);
                            }
                        }}>
                            Как текст
                        </div>
                    </div>
                    <div className={style.ChoseColor}>
                        Текст
                        <input name={'colorInput'} type="color" defaultValue={colorMas[6]} onInput={(e) => {  
                            const R = colorMas;
                            R[6] = e.target.value;
                            if (like[2] == 0) {
                                R[2] = R[6];
                                colors[2].value = R[6];
                            }
                            if (like[5] == 0) {
                                R[5] = R[6];
                                colors[5].value = R[6];
                            }
                            setColorMas(R);
                            changeColor();
                        }} />
                        <div className={style.As} onClick={(e) => {
                            if (like[6] == 1) {
                                e.target.className = style.As + ' ' + style.Yes;
                                const R = colorMas;
                                R[6] = colorMas[0];
                                if (like[2] == 0) {
                                    R[2] = R[6];
                                    colors[2].value = R[6];
                                }
                                if (like[5] == 0) {
                                    R[5] = R[6];
                                    colors[5].value = R[6];
                                }
                                e.target.previousSibling.value = colorMas[0];
                                e.target.previousSibling.disabled = true;
                                setColorMas(R);
                                changeColor();
                                const L = like;
                                L[6] = 0;
                                setLike(L);
                            } else {
                                e.target.className = style.As;
                                e.target.previousSibling.disabled = false;
                                const L = like;
                                L[6] = 1;
                                setLike(L);
                            }
                        }}>
                            Как обложка
                        </div>
                    </div>
                    <div className={style.ChoseColor}>
                        Обратка 1
                        <input name={'colorInput'} type="color" defaultValue={colorMas[7]} onInput={(e) => {  
                            const R = colorMas;
                            R[7] = e.target.value;
                            setColorMas(R);
                            changeColor();
                        }} />
                        <div className={style.As} onClick={(e) => {
                            if (like[7] == 1) {
                                e.target.className = style.As + ' ' + style.Yes;
                                const R = colorMas;
                                R[7] = colorMas[0];
                                e.target.previousSibling.value = colorMas[0];
                                e.target.previousSibling.disabled = true;
                                setColorMas(R);
                                changeColor();
                                const L = like;
                                L[7] = 0;
                                setLike(L);
                            } else {
                                e.target.className = style.As;
                                e.target.previousSibling.disabled = false;
                                const L = like;
                                L[7] = 1;
                                setLike(L);
                            }
                        }}>
                            Как Обложка
                        </div>
                    </div>
                    <div className={style.ChoseColor}>
                        Обратка 2
                        <input name={'colorInput'} type="color" defaultValue={colorMas[8]} onInput={(e) => {  
                            const R = colorMas;
                            R[8] = e.target.value;
                            setColorMas(R);
                            changeColor();
                        }} />
                        <div className={style.As} onClick={(e) => {
                            if (like[8] == 1) {
                                e.target.className = style.As + ' ' + style.Yes;
                                const R = colorMas;
                                R[8] = colorMas[1];
                                e.target.previousSibling.value = colorMas[1];
                                e.target.previousSibling.disabled = true;
                                setColorMas(R);
                                changeColor();
                                const L = like;
                                L[8] = 0;
                                setLike(L);
                            } else {
                                e.target.className = style.As;
                                e.target.previousSibling.disabled = false;
                                const L = like;
                                L[8] = 1;
                                setLike(L);
                            }
                        }}>
                            Как Внутри
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.AllCards}>
                {
                    getCards()
                }
            </div>
        </div>
    );
}
