import { useState } from 'react';
import style from './App.module.scss';
import Card from './components/Card/Card';
import Class from './components/Class/Class';
import Istok from './components/Istok/Istok';
import {ReactComponent as Druid} from './components/BackSvg/Друид.svg';
import {ReactComponent as Bard} from './components/BackSvg/Бард.svg';
import { ReactComponent as Valkiria } from './components/BackSvg/Валькирия.svg';
import { ReactComponent as Voenka } from './components/BackSvg/Военка.svg';
import { ReactComponent as Volshebnic } from './components/BackSvg/Волшебник.svg';
import { ReactComponent as Jrec } from './components/BackSvg/Жрец.svg';
import { ReactComponent as Koldun } from './components/BackSvg/Колдун.svg';
import { ReactComponent as Ksanatar } from './components/BackSvg/Ксанатар.svg';
import { ReactComponent as Mistik } from './components/BackSvg/Мистик.svg';
import { ReactComponent as Paladin } from './components/BackSvg/Паладин.svg';
import { ReactComponent as Sledopyt } from './components/BackSvg/Следопыт.svg';
import { ReactComponent as Charodei } from './components/BackSvg/Чародей.svg';
import { ReactComponent as Elemental } from './components/BackSvg/Элементаль.svg';


export default function App() {
    const [pyt, setPyt] = useState(undefined);
    const [select, setSelect] = useState("Друид");
    const [data, setData] = useState(undefined);
    const [changeKegl, setChangeKegl] = useState(0);
    const [minSize, setMinSize] = useState(6);
    const [maxSize, setMaxSize] = useState(8);
    const [keglFon, setKeglFon] = useState(9);
    const [printIstok, setPrintIstok] = useState({});
    const [oborot, setOborot] = useState(false);
    const [targetClass, setTargetClass] = useState("");
    const [spellControl, setSpellControl] = useState({}); //Список всех заклинаний в стиле подписи: Класс - Уровень - Источник
    const classesName = [];
    const [colorMas, setColorMas] = useState(["#27984d", "#ffffff", "#000000", "#ffffff", "#27984d", "#000000", "#000000", "#27984d", "#ffffff", "#ffffff"]);
    const [like, setLike] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1,1]);
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
    const myOborot = () => {
        switch (select) {
            case "Кастомная":
                if (pyt)
                    return <img src={URL.createObjectURL(pyt)} />
                else
                    return null;
            case "Валькирия":
                return <Valkiria/>;
            case "Друид":
                return <Druid/>;
            case "Бард":
                return <Bard/>;
            case "Военка":
                return <Voenka/>;
            case "Волшебник":
                return <Volshebnic/>;
            case "Жрец":
                return <Jrec/>;
            case "Колдун":
                return <Koldun />;
            case "Ксанатар":
                return <Ksanatar/>
            case "Мистик":
                return <Mistik/>;
            case "Паладин":
                return <Paladin/>;
            case "Следопыт":
                return <Sledopyt/>;
            case "Чародей":
                return <Charodei/>;
            case "Элементаль":
                return <Elemental />;
            default:
                break;
            
        }
            
    }
    const getCards = () => {
        const kolvo = Object.keys(spellControl).length - 1;
        let masCards = [];
        return Object.keys(spellControl).map((spellName, index) => {
            if (index % 9 == 0)
                masCards = [];
            masCards[index % 9] = spellControl[spellName];
            if (index % 9 == 8 || index == kolvo) {
                return (
                    <div className={style.PageCards} key={"group" + index}>
                        <div key={index - 8} className={style.CardsLine + ' ' + (oborot ? style.Obratka : null)}>
                            {
                                [masCards[0], masCards[1], masCards[2]].map((spell, indexC) => {
                                    if (oborot) return <Card minSize={minSize} maxSize={maxSize} back={true} borderDown={!(index % 9 == 2)} borderRight={indexC/3} spellControl={spell} card={data?.cards?.[spell?.spellName]} key={indexC+spell?.targetClass + '+' + spell?.levelName + '+' + spell?.istokName + '+' + spell?.spellName}> {myOborot()}</Card> 
                                    else return <Card minSize={minSize} maxSize={maxSize} istokPrint={printIstok[spell?.istokName]} keglFon={keglFon} borderDown={!(index % 9 == 2)} borderRight={indexC} spellControl={spell} card={data?.cards?.[spell?.spellName]} key={indexC+spell?.targetClass + '+' + spell?.levelName + '+' + spell?.istokName + '+' + spell?.spellName}></Card>
                                })
                            }
                        </div>
                        <div key={index - 5} className={style.CardsLine + ' ' + (oborot ? style.Obratka : null)}>
                            {
                                [masCards[3],masCards[4],masCards[5]].map((spell, indexC) => {
                                    if (oborot) return <Card minSize={minSize} maxSize={maxSize} back={true} borderDown={!(index % 9 == 5)} borderRight={indexC/3} spellControl={spell} card={data?.cards?.[spell?.spellName]} key={indexC+spell?.targetClass + '+' + spell?.levelName + '+' + spell?.istokName + '+' + spell?.spellName}> {myOborot()}</Card> 
                                    else return <Card minSize={minSize} maxSize={maxSize} istokPrint={printIstok[spell?.istokName]} keglFon={keglFon} borderDown={!(index % 9 == 5)} borderRight={indexC} spellControl={spell} card={data?.cards?.[spell?.spellName]} key={indexC+spell?.targetClass + '+' + spell?.levelName + '+' + spell?.istokName + '+' + spell?.spellName}></Card>
                                })
                            }
                        </div>
                        <div key={index - 2} className={style.CardsLine + ' ' + (oborot ? style.Obratka : null)}>
                            {
                                [masCards[6], masCards[7], masCards[8]].map((spell, indexC) => {
                                    if (oborot) return <Card minSize={minSize} maxSize={maxSize} back={true} borderDown={!(index % 9 == 8)} borderRight={indexC/3} spellControl={spell} card={data?.cards?.[spell?.spellName]} key={indexC+spell?.targetClass + '+' + spell?.levelName + '+' + spell?.istokName + '+' + spell?.spellName}> {myOborot()}</Card> 
                                    else return <Card minSize={minSize} maxSize={maxSize} istokPrint={printIstok[spell?.istokName]} keglFon={keglFon} borderDown={!(index % 9 == 8)} borderRight={indexC} spellControl={spell} card={data?.cards?.[spell?.spellName]} key={indexC+spell?.targetClass + '+' + spell?.levelName + '+' + spell?.istokName + '+' + spell?.spellName}></Card>
                                })
                            }
                        </div>
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
        document.getElementById('MainComponent')?.style.setProperty('--Backcground', colorMas[9]);
    };
    const getSetting = () => {
        return (
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
                        if (like[9] == 0) {
                            R[9] = R[0];
                            colors[9].value = R[0];
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
                    }} />
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
                    }} />
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
                <div className={style.ChoseColor}>
                    Фон при печати
                    <input name={'colorInput'} type="color" defaultValue={colorMas[9]} onInput={(e) => {
                        const R = colorMas;
                        R[9] = e.target.value;
                        setColorMas(R);
                        changeColor();
                    }} />
                    <div className={style.As} onClick={(e) => {
                        if (like[9] == 1) {
                            e.target.className = style.As + ' ' + style.Yes;
                            const R = colorMas;
                            R[9] = colorMas[0];
                            e.target.previousSibling.value = colorMas[0];
                            e.target.previousSibling.disabled = true;
                            setColorMas(R);
                            changeColor();
                            const L = like;
                            L[9] = 0;
                            setLike(L);
                        } else {
                            e.target.className = style.As;
                            e.target.previousSibling.disabled = false;
                            const L = like;
                            L[9] = 1;
                            setLike(L);
                        }
                    }}>
                        Как Обложка
                    </div>
                </div>
                <div className={style.ChoseKegl}>
                    Поля в милиметрах
                    <input name={'kegl'} type="number" defaultValue={0} min={0} max={10} onChange={(e) => {
                        document.getElementById('MainComponent')?.style.setProperty('--padding', e.target.value + 'mm');
                        setChangeKegl(changeKegl + 1);
                    }} />
                </div>
                <div className={style.ChoseKegl}>
                    Кегль заголовка
                    <input name={'kegl'} type="number" defaultValue={16} min={0} max={24} onChange={(e) => {
                        document.getElementById('MainComponent')?.style.setProperty('--keglTitl', e.target.value + 'px');
                        setChangeKegl(changeKegl + 1);
                    }} />
                </div>
                <div className={style.ChoseKegl}>
                    Кегль на фоне верх
                    <input name={'kegl'} type="number" defaultValue={9} min={0} max={15} onChange={(e) => {
                        document.getElementById('MainComponent')?.style.setProperty('--keglFon', e.target.value + 'px');
                        setChangeKegl(changeKegl + 1);
                    }} />
                </div>
                <div className={style.ChoseKegl}>
                    Средняя перемычка
                    <input name={'kegl'} type="number" defaultValue={9} min={1} max={15} onChange={(e) => {
                        document.getElementById('MainComponent')?.style.setProperty('--keglPerem', e.target.value + 'px');
                        setKeglFon(e.target.value);
                        setChangeKegl(changeKegl + 1);
                    }} />
                </div>
                <div className={style.ChoseKegl}>
                    Кегль высокий уровень
                    <input name={'kegl'} type="number" defaultValue={9} min={0} max={15} onChange={(e) => {
                        document.getElementById('MainComponent')?.style.setProperty('--keglVys', e.target.value + 'px');
                        setChangeKegl(changeKegl + 1);
                    }} />
                </div>
                <div className={style.ChoseKegl}>
                    Кегль особое заголовок
                    <input name={'kegl'} type="number" defaultValue={9} min={0} max={15} onChange={(e) => {
                        document.getElementById('MainComponent')?.style.setProperty('--keglOsobTitl', e.target.value + 'px');
                        setChangeKegl(changeKegl + 1);
                    }} />
                </div>
                <div className={style.ChoseKegl}>
                    Кегль особое текст
                    <input name={'kegl'} type="number" defaultValue={9} min={0} max={15} onChange={(e) => {
                        document.getElementById('MainComponent')?.style.setProperty('--keglOsobText', e.target.value + 'px');
                        setChangeKegl(changeKegl + 1);
                    }} />
                </div>
                <div className={style.ChoseKegl}>
                    Кегль нижней подписи
                    <input name={'kegl'} type="number" defaultValue={16} min={0} max={28} onChange={(e) => {
                        document.getElementById('MainComponent')?.style.setProperty('--keglTitleNis', e.target.value + 'px');
                        setChangeKegl(changeKegl + 1);
                    }} />
                </div>
                <div className={style.ChoseKegl}>
                    Минимальный кегль текста
                    <input name={'kegl'} type="number" defaultValue={6} min={2} max={16} onChange={(e) => {
                        setMinSize(e.target.value);
                        setChangeKegl(changeKegl + 1);
                    }} />
                </div>
                <div className={style.ChoseKegl}>
                    Максимальный кегль текста
                    <input name={'kegl'} type="number" defaultValue={8} min={4} max={24} onChange={(e) => {
                        setMaxSize(e.target.value);
                        setChangeKegl(changeKegl + 1);
                    }} />
                </div>
            </div>
        );
    }
    return (
        <div className={style.MainComponent} id={'MainComponent'}>
            <div className={style.Menu}>
                <div className={style.Flex}>
                    <Class targetClass={targetClass} setTargetClass={setTargetClass} classNames={classesName} setSpellControl={setSpellControl}></Class>
                    <div>
                    <div className={style.Oborot}>
                        <input type="checkbox" name="qwe" id="ewq" onChange={(e) => {
                            setOborot(e.target.checked);
                        }}/>
                    </div>
                        <select id="mySelect" defaultValue={"Друид"} onChange={(e) => {
                            setSelect(e.target.value);
                    }}>
                        <option value="Кастомная">Кастомная</option>
                        <option value="Бард">Бард</option>
                        <option value="Валькирия">Валькирия</option>
                        <option value="Военка">Военка</option>
                        <option value="Волшебник">Волшебник</option>
                        <option value="Друид">Друид</option>
                        <option value="Жрец">Жрец</option>
                        <option value="Колдун">Колдун</option>
                        <option value="Ксанатар">Ксанатар</option>
                        <option value="Мистик">Мистик</option>
                        <option value="Паладин">Паладин</option>
                        <option value="Следопыт">Следопыт</option>
                        <option value="Чародей">Чародей</option>
                        <option value="Элементаль">Элементаль</option>
                    </select>
                    <input className={style.InputFile} type="file" name="" id="inputfile" onInput={(e) => {
                        setPyt(e.target.files[0]);
                        }} />
                        {pyt!=undefined ? pyt.name : "Файл не выбран"}
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
                            if (printIstok[istok] == undefined) {
                                {setPrintIstok({...printIstok,[istok]:true})}
                            }
                            return <Istok key={istok} setPrintIstok={setPrintIstok} printIstok={printIstok} targetClass={targetClass} istok={istok} allSpells={allSpells} onlyUseLevels={[...onlyUseLevels]} spellControl={spellControl} updateSpellControll={updateSpellControll}></Istok>
                        })
                        : null
                }
                {getSetting()}
            </div>
            <div className={style.AllCards}>
                {
                    getCards()
                }
            </div>
        </div>
    );
}
