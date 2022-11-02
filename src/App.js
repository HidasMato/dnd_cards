import { useEffect, useState } from 'react';
import style from './App.module.scss';
import Card from './components/Card/Card';
import Class from './components/Class/Class';
import Istok from './components/Istok/Istok';
import VK from './components/VK.png';
import YD from './components/YD.png';
import GH from './components/GH.png';
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
import { ReactComponent as Varvar } from './components/BackSvg/Варвар.svg';
import { ReactComponent as Monk } from './components/BackSvg/Монах.svg';
import { ReactComponent as Ogragdenie } from './components/BackSvg/Ограждение.svg';
import { ReactComponent as Proricanie } from './components/BackSvg/Прорицание.svg';
import { ReactComponent as Voplochenie } from './components/BackSvg/Воплощение.svg';
import { ReactComponent as Vyzov } from './components/BackSvg/Вызов.svg';
import { ReactComponent as Ocharovanie } from './components/BackSvg/Очарование.svg';
import { ReactComponent as Preobrazovanie } from './components/BackSvg/Преобразование.svg';
import { ReactComponent as Illusia } from './components/BackSvg/Иллюзия.svg';
import { ReactComponent as Necromantia } from './components/BackSvg/Некромантия.svg';
import { ReactComponent as Vedmochka } from './components/BackSvg/Ведьмочка.svg';


export default function App() {
    const [numberOption1, setNumberOption1] = useState(false);
    const [numberOption2, setNumberOption2] = useState(false);
    const [numberOption3, setNumberOption3] = useState(false);
    const [numberOption4, setNumberOption4] = useState(false);
    const [pyt, setPyt] = useState(undefined);
    const [fontNumber, setFontNumber] = useState(0);
    const font = ["ComicSans","YesevaOne","Vollkorn","Montserrat","Gabriela","Raleway"];
    const [myText, setMyText] = useState(0);
    const [classText, setClassText] = useState(undefined);
    const [time, setTime] = useState("Время накладывания");
    const [dist, setDist] = useState("Дистанция");
    const [comp, setComp] = useState("Компоненты");
    const [long, setLong] = useState("Длительность");
    const [vys, setVys] = useState("На более высоком уровне");
    const [showSelect, setShowSelect] = useState(false);
    const [select, setSelect] = useState("Друид");
    const [data, setData] = useState(undefined);
    const [changeKegl, setChangeKegl] = useState(0);
    const [minSize, setMinSize] = useState(6);
    const [maxSize, setMaxSize] = useState(8);
    const [keglFon, setKeglFon] = useState(9);
    const [printIstok, setPrintIstok] = useState({});
    const [oborot, setOborot] = useState(false);
    const [targetClass, setTargetClass] = useState("");
    const [spellControl, setSpellControl] = useState({});
    const [colorMas, setColorMas] = useState(["#27984d", "#ffffff", "#000000", "#ffffff", "#27984d", "#000000", "#000000", "#27984d", "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000"]);
    const [like, setLike] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);    
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
                return <Valkiria />;
            case "Друид":
                return <Druid />;
            case "Бард":
                return <Bard />;
            case "Военка":
                return <Voenka />;
            case "Волшебник":
                return <Volshebnic />;
            case "Жрец":
                return <Jrec />;
            case "Колдун":
                return <Koldun />;
            case "Ксанатар":
                return <Ksanatar />
            case "Мистик":
                return <Mistik />;
            case "Паладин":
                return <Paladin />;
            case "Следопыт":
                return <Sledopyt />;
            case "Чародей":
                return <Charodei />;
            case "Элементаль":
                return <Elemental />;
            case "Монах":
                return <Monk />;
            case "Варвар":
                return <Varvar />;
            case "Ограждение":
                return <Ogragdenie />;
            case "Прорицание":
                return <Proricanie />;
            case "Воплощение":
                return <Voplochenie />;
            case "Вызов":
                return <Vyzov />;
            case "Очарование":
                return <Ocharovanie />;
            case "Преобразование":
                return <Preobrazovanie />;
            case "Иллюзия":
                return <Illusia />;
            case "Некромантия":
                return <Necromantia />;
            case "Ведьмочка":
                return <Vedmochka/>
            default:
                break;
            
        }
            
    };
    const getCards = () => {
        const kolvo = Object.keys(spellControl).length - 1;
        let masCards = [];
        return (
            <div className={style.AllCards + ' ' + style[font[fontNumber]]}>
                {Object.keys(spellControl).map((spellName, index) => {
                    if (index % 9 == 0)
                        masCards = [];
                    masCards[index % 9] = spellControl[spellName];
                    if (index % 9 == 8 || index == kolvo) {
                        return (
                            <div className={style.PageCards} key={"group" + index}>
                                <div key={index - 8} className={style.CardsLine + ' ' + (oborot ? style.Oboratka : null) + ' ' + (oborot ? style.Oborot : null)}>
                                    {
                                        [masCards[0], masCards[1], masCards[2]].map((spell, indexC) => {
                                            if (oborot) return <Card numberOption1={numberOption1} numberOption2={numberOption2} numberOption3={numberOption3} numberOption4={numberOption4} minSize={minSize} maxSize={maxSize} back={true} borderDown={!(index % 9 == 2)} borderRight={indexC/3} spellControl={spell} card={data?.cards?.[spell?.spellName]} key={indexC+spell?.targetClass + '+' + spell?.levelName + '+' + spell?.istokName + '+' + spell?.spellName}> {myOborot()}</Card> 
                                            else return <Card dist={dist} comp={comp} long={long} time={time} vys={vys} myText={myText} classText={classText} minSize={minSize} maxSize={maxSize} istokPrint={printIstok[spell?.istokName]} keglFon={keglFon} borderDown={!(index % 9 == 2)} borderRight={indexC} spellControl={spell} card={data?.cards?.[spell?.spellName]} key={indexC+spell?.targetClass + '+' + spell?.levelName + '+' + spell?.istokName + '+' + spell?.spellName}></Card>
                                        })
                                    }
                                </div>
                                <div key={index - 5} className={style.CardsLine + ' ' + (oborot ? style.Obratka : null)}>
                                    {
                                        [masCards[3],masCards[4],masCards[5]].map((spell, indexC) => {
                                            if (oborot) return <Card numberOption1={numberOption1} numberOption2={numberOption2} numberOption3={numberOption3} numberOption4={numberOption4} minSize={minSize} maxSize={maxSize} back={true} borderDown={!(index % 9 == 5)} borderRight={indexC/3} spellControl={spell} card={data?.cards?.[spell?.spellName]} key={indexC+spell?.targetClass + '+' + spell?.levelName + '+' + spell?.istokName + '+' + spell?.spellName}> {myOborot()}</Card> 
                                            else return <Card dist={dist} comp={comp} long={long} time={time} vys={vys} myText={myText} classText={classText} minSize={minSize} maxSize={maxSize} istokPrint={printIstok[spell?.istokName]} keglFon={keglFon} borderDown={!(index % 9 == 5)} borderRight={indexC} spellControl={spell} card={data?.cards?.[spell?.spellName]} key={indexC+spell?.targetClass + '+' + spell?.levelName + '+' + spell?.istokName + '+' + spell?.spellName}></Card>
                                        })
                                    }
                                </div>
                                <div key={index - 2} className={style.CardsLine + ' ' + (oborot ? style.Obratka : null)}>
                                    {
                                        [masCards[6], masCards[7], masCards[8]].map((spell, indexC) => {
                                            if (oborot) return <Card numberOption1={numberOption1} numberOption2={numberOption2} numberOption3={numberOption3} numberOption4={numberOption4} minSize={minSize} maxSize={maxSize} back={true} borderDown={!(index % 9 == 8)} borderRight={indexC/3} spellControl={spell} card={data?.cards?.[spell?.spellName]} key={indexC+spell?.targetClass + '+' + spell?.levelName + '+' + spell?.istokName + '+' + spell?.spellName}> {myOborot()}</Card> 
                                            else return <Card dist={dist} comp={comp} long={long} time={time} vys={vys} myText={myText} classText={classText} minSize={minSize} maxSize={maxSize} istokPrint={printIstok[spell?.istokName]} keglFon={keglFon} borderDown={!(index % 9 == 8)} borderRight={indexC} spellControl={spell} card={data?.cards?.[spell?.spellName]} key={indexC+spell?.targetClass + '+' + spell?.levelName + '+' + spell?.istokName + '+' + spell?.spellName}></Card>
                                        })
                                    }
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        )
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
        document.getElementById('MainComponent')?.style.setProperty('--Num1', colorMas[10]);
        document.getElementById('MainComponent')?.style.setProperty('--Num2', colorMas[11]);
        document.getElementById('MainComponent')?.style.setProperty('--Num3', colorMas[12]);
        document.getElementById('MainComponent')?.style.setProperty('--Num4', colorMas[13]);
    };
    const getSetting = () => {
        const colors = document.getElementsByName('colorInput');
        return (
            <div name={"scrollMe"} className={style.Setting}>
                <div className={style.ChoseColor}>
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
                            if (like[10] == 0) {
                                R[10] = R[7];
                                colors[10].value = R[7];
                                if (like[11] == 0) {
                                    R[11] = R[7];
                                    colors[11].value = R[7];
                                }
                                if (like[12] == 0) {
                                    R[12] = R[7];
                                    colors[12].value = R[7];
                                }
                                if (like[13] == 0) {
                                    R[13] = R[7];
                                    colors[13].value = R[7];
                                }
                            }
                        }
                        setColorMas(R);
                        changeColor();
                    }} />
                    Обложка
                </div>
                <div className={style.ChoseColor}>
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
                    Внутри
                </div>
                <div className={style.ChoseColor}>
                    <input name={'colorInput'} type="color" defaultValue={colorMas[2]} onInput={(e) => {
                        const R = colorMas;
                        R[2] = e.target.value;
                        setColorMas(R);
                        changeColor();
                    }} />
                    Заголовок
                    <div className={style.As} onClick={(e) => {
                        const t = e.target.previousSibling.previousSibling;
                        if (like[2] == 1) {
                            e.target.className = style.As + ' ' + style.Yes;
                            const R = colorMas;
                            R[2] = colorMas[6];
                            t.value = colorMas[6];
                            t.disabled = true;
                            setColorMas(R);
                            changeColor();
                            const L = like;
                            L[2] = 0;
                            setLike(L);
                        } else {
                            e.target.className = style.As;
                            t.disabled = false;
                            const L = like;
                            L[2] = 1;
                            setLike(L);
                        }
                    }}>
                        Как текст
                    </div>
                </div>
                <div className={style.ChoseColor}>
                    <input name={'colorInput'} type="color" defaultValue={colorMas[3]} onInput={(e) => {
                        const R = colorMas;
                        R[3] = e.target.value;
                        setColorMas(R);
                        changeColor();
                    }} />
                    На фоне
                    <div className={style.As} onClick={(e) => {
                        const t = e.target.previousSibling.previousSibling;
                        if (like[3] == 1) {
                            e.target.className = style.As + ' ' + style.Yes;
                            const R = colorMas;
                            R[3] = colorMas[1];
                            t.value = colorMas[1];
                            t.disabled = true;
                            setColorMas(R);
                            changeColor();
                            const L = like;
                            L[3] = 0;
                            setLike(L);
                        } else {
                            e.target.className = style.As;
                            t.disabled = false;
                            const L = like;
                            L[3] = 1;
                            setLike(L);
                        }
                    }}>
                        Как внутри
                    </div>
                </div>
                <div className={style.ChoseColor}>
                    <input name={'colorInput'} type="color" defaultValue={colorMas[4]} onInput={(e) => {
                        const R = colorMas;
                        R[4] = e.target.value;
                        setColorMas(R);
                        changeColor();
                    }} />
                    Особое Загл
                    <div className={style.As} onClick={(e) => {
                        const t = e.target.previousSibling.previousSibling;
                        if (like[4] == 1) {
                            e.target.className = style.As + ' ' + style.Yes;
                            const R = colorMas;
                            R[4] = colorMas[0];
                            t.value = colorMas[0];
                            t.disabled = true;
                            setColorMas(R);
                            changeColor();
                            const L = like;
                            L[4] = 0;
                            setLike(L);
                        } else {
                            e.target.className = style.As;
                            t.disabled = false;
                            const L = like;
                            L[4] = 1;
                            setLike(L);
                        }
                    }}>
                        Как Облож
                    </div>
                </div>
                <div className={style.ChoseColor}>
                    <input name={'colorInput'} type="color" defaultValue={colorMas[5]} onInput={(e) => {
                        const R = colorMas;
                        R[5] = e.target.value;
                        setColorMas(R);
                        changeColor();
                    }} />
                    Особое Текст
                    <div className={style.As} onClick={(e) => {
                        const t = e.target.previousSibling.previousSibling;
                        if (like[5] == 1) {
                            e.target.className = style.As + ' ' + style.Yes;
                            const R = colorMas;
                            R[5] = colorMas[6];
                            t.value = colorMas[6];
                            t.disabled = true;
                            setColorMas(R);
                            changeColor();
                            const L = like;
                            L[5] = 0;
                            setLike(L);
                        } else {
                            e.target.className = style.As;
                            t.disabled = false;
                            const L = like;
                            L[5] = 1;
                            setLike(L);
                        }
                    }}>
                        Как текст
                    </div>
                </div>
                <div className={style.ChoseColor}>
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
                    Текст
                    <div className={style.As} onClick={(e) => {
                        const t = e.target.previousSibling.previousSibling;
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
                            t.value = colorMas[0];
                            t.disabled = true;
                            setColorMas(R);
                            changeColor();
                            const L = like;
                            L[6] = 0;
                            setLike(L);
                        } else {
                            e.target.className = style.As;
                            t.disabled = false;
                            const L = like;
                            L[6] = 1;
                            setLike(L);
                        }
                    }}>
                        Как обложка
                    </div>
                </div>
                <div className={style.ChoseColor}>
                    <input name={'colorInput'} type="color" defaultValue={colorMas[7]} onInput={(e) => {
                        const R = colorMas;
                        R[7] = e.target.value;
                        if (like[10] == 0) {
                            R[10] = R[7];
                            colors[10].value = R[7];
                            if (like[11] == 0) {
                                R[11] = R[7];
                                colors[11].value = R[7];
                            }
                            if (like[12] == 0) {
                                R[12] = R[7];
                                colors[12].value = R[7];
                            }
                            if (like[13] == 0) {
                                R[13] = R[7];
                                colors[13].value = R[7];
                            }
                        }
                        setColorMas(R);
                        changeColor();
                    }} />
                    Обратка 1
                    <div className={style.As} onClick={(e) => {
                        const t = e.target.previousSibling.previousSibling;
                        if (like[7] == 1) {
                            e.target.className = style.As + ' ' + style.Yes;
                            const R = colorMas;
                            R[7] = colorMas[0];
                            t.value = colorMas[0];
                            t.disabled = true;
                            if (like[10] == 0) {
                                R[10] = R[7];
                                colors[10].value = R[7];
                                if (like[11] == 0) {
                                    R[11] = R[7];
                                    colors[11].value = R[7];
                                }
                                if (like[12] == 0) {
                                    R[12] = R[7];
                                    colors[12].value = R[7];
                                }
                                if (like[13] == 0) {
                                    R[13] = R[7];
                                    colors[13].value = R[7];
                                }
                            }
                            setColorMas(R);
                            changeColor();
                            const L = like;
                            L[7] = 0;
                            setLike(L);
                        } else {
                            e.target.className = style.As;
                            t.disabled = false;
                            const L = like;
                            L[7] = 1;
                            setLike(L);
                        }
                    }}>
                        Как Обложка
                    </div>
                </div>
                <div className={style.ChoseColor}>
                    <input name={'colorInput'} type="color" defaultValue={colorMas[8]} onInput={(e) => {
                        const R = colorMas;
                        R[8] = e.target.value;
                        setColorMas(R);
                        changeColor();
                    }} />
                    Обратка 2
                    <div className={style.As} onClick={(e) => {
                        const t = e.target.previousSibling.previousSibling;
                        if (like[8] == 1) {
                            e.target.className = style.As + ' ' + style.Yes;
                            const R = colorMas;
                            R[8] = colorMas[1];
                            t.value = colorMas[1];
                            t.disabled = true;
                            setColorMas(R);
                            changeColor();
                            const L = like;
                            L[8] = 0;
                            setLike(L);
                        } else {
                            e.target.className = style.As;
                            t.disabled = false;
                            const L = like;
                            L[8] = 1;
                            setLike(L);
                        }
                    }}>
                        Как Внутри
                    </div>
                </div>
                <div className={style.ChoseColor}>
                    <input name={'colorInput'} type="color" defaultValue={colorMas[9]} onInput={(e) => {
                        const R = colorMas;
                        R[9] = e.target.value;
                        setColorMas(R);
                        changeColor();
                    }} />
                    Фон при печати
                    <div className={style.As} onClick={(e) => {
                        const t = e.target.previousSibling.previousSibling;
                        if (like[9] == 1) {
                            e.target.className = style.As + ' ' + style.Yes;
                            const R = colorMas;
                            R[9] = colorMas[0];
                            t.value = colorMas[0];
                            t.disabled = true;
                            setColorMas(R);
                            changeColor();
                            const L = like;
                            L[9] = 0;
                            setLike(L);
                        } else {
                            e.target.className = style.As;
                            t.disabled = false;
                            const L = like;
                            L[9] = 1;
                            setLike(L);
                        }
                    }}>
                        Как Обложка
                    </div>
                </div>
                <div className={style.ChoseKegl}>
                    <input name={'kegl'} type="number" defaultValue={2} min={0} max={10} onChange={(e) => {
                        if (e.target.value < 0) {
                            e.target.value = 0;
                        }
                        if (e.target.value > 10) {
                            e.target.value = 10;
                        }
                        if (e.target.value == "") {
                            e.target.value = 0;
                        }
                        document.getElementById('MainComponent')?.style.setProperty('--padding', e.target.value + 'mm');
                        setChangeKegl(changeKegl + 1);
                        
                    }} />
                    Поля в милиметрах
                </div>
                <div className={style.ChoseKegl}>
                    <input name={'kegl'} type="number" defaultValue={16} min={0} max={24} onChange={(e) => {
                        if (e.target.value > 24) {
                            e.target.value = 24;
                        }
                        if (e.target.value < 0) {
                            e.target.value = 0;
                        }
                        if (e.target.value == "") {
                            e.target.value = 0;
                        }
                        document.getElementById('MainComponent')?.style.setProperty('--keglTitl', e.target.value + 'px');
                        setChangeKegl(changeKegl + 1);
                        
                    }} />
                    Кегль заголовка
                </div>
                <div className={style.ChoseKegl}>
                    <input name={'kegl'} type="number" defaultValue={9} min={0} max={15} onChange={(e) => {
                        if (e.target.value > 15) {
                            e.target.value = 15;
                        }
                        if (e.target.value < 0) {
                            e.target.value = 0;
                        }
                        if (e.target.value == "") {
                            e.target.value = 0;
                        }
                        document.getElementById('MainComponent')?.style.setProperty('--keglFon', e.target.value + 'px');
                        setChangeKegl(changeKegl + 1);
                        
                    }} />
                    Кегль на фоне верх
                </div>
                <div className={style.ChoseKegl}>
                    <input name={'kegl'} type="number" defaultValue={9} min={1} max={15} onChange={(e) => {
                        if (e.target.value > 15) {
                            e.target.value = 15;
                        }
                        if (e.target.value < 0) {
                            e.target.value = 0;
                        }
                        if (e.target.value == "") {
                            e.target.value = 0;
                        }
                        document.getElementById('MainComponent')?.style.setProperty('--keglPerem', e.target.value + 'px');
                        setKeglFon(e.target.value);
                        setChangeKegl(changeKegl + 1);
                        
                    }} />
                    Средняя перемычка
                </div>
                <div className={style.ChoseKegl}>
                    <input name={'kegl'} type="number" defaultValue={9} min={0} max={15} onChange={(e) => {
                        if (e.target.value > 15) {
                            e.target.value = 15;
                        }
                        if (e.target.value < 0) {
                            e.target.value = 0;
                        }
                        if (e.target.value == "") {
                            e.target.value = 0;
                        }
                        document.getElementById('MainComponent')?.style.setProperty('--keglVys', e.target.value + 'px');
                        setChangeKegl(changeKegl + 1);
                        
                    }} />
                    Кегль высокий уровень
                </div>
                <div className={style.ChoseKegl}>
                    <input name={'kegl'} type="number" defaultValue={9} min={0} max={15} onChange={(e) => {
                        if (e.target.value > 15) {
                            e.target.value = 15;
                        }
                        if (e.target.value < 0) {
                            e.target.value = 0;
                        }
                        if (e.target.value == "") {
                            e.target.value = 0;
                        }
                        document.getElementById('MainComponent')?.style.setProperty('--keglOsobTitl', e.target.value + 'px');
                        setChangeKegl(changeKegl + 1);
                        
                    }} />
                    Кегль особое заголовок
                </div>
                <div className={style.ChoseKegl}>
                    <input name={'kegl'} type="number" defaultValue={9} min={0} max={15} onChange={(e) => {
                        if (e.target.value > 15) {
                            e.target.value = 15;
                        }
                        if (e.target.value < 0) {
                            e.target.value = 0;
                        }
                        if (e.target.value == "") {
                            e.target.value = 0;
                        }
                        document.getElementById('MainComponent')?.style.setProperty('--keglOsobText', e.target.value + 'px');
                        setChangeKegl(changeKegl + 1);
                        
                    }} />
                    Кегль особое текст
                </div>
                <div className={style.ChoseKegl}>
                    <input name={'kegl'} type="number" defaultValue={16} min={0} max={28} onChange={(e) => {
                        if (e.target.value < 0) {
                            e.target.value = 0;
                        }
                        if (e.target.value > 28) {
                            e.target.value = 28;
                        }
                        if (e.target.value == "") {
                            e.target.value = 0;
                        }
                        document.getElementById('MainComponent')?.style.setProperty('--keglTitleNis', e.target.value + 'px');
                        setChangeKegl(changeKegl + 1);
                        
                    }} />
                    Кегль нижней подписи
                </div>
                <div className={style.ChoseKegl}>
                    <input name={'kegl'} type="number" defaultValue={6} min={2} max={maxSize} onChange={(e) => {
                        if (e.target.value < 2) {
                            e.target.value = 2;
                        }
                        if (e.target.value > maxSize+2) {
                            e.target.value = maxSize;
                        }
                        if (e.target.value == "") {
                            e.target.value = 2;
                        }
                        setMinSize(Number(e.target.value));
                        setChangeKegl(changeKegl + 1);
                        
                    }} />
                    Минимальный кегль текста
                </div>
                <div className={style.ChoseKegl}>
                    <input name={'kegl'} type="number" defaultValue={8} min={minSize} max={24} onChange={(e) => {
                        if (e.target.value < minSize-1) {
                            e.target.value = minSize;
                        }
                        if (e.target.value > 24) {
                            e.target.value = 24;
                        }
                        if (e.target.value == "") {
                            e.target.value = minSize;
                        }
                        setMaxSize(Number(e.target.value));
                        setChangeKegl(changeKegl + 1);
                        
                    }} />
                    Максимальный кегль текста
                </div>
                <div className={style.ChoseKegl}>
                    <input name={'kegl'} type="number" defaultValue={60} min={10} max={400} onChange={(e) => {
                        if (e.target.value < 10) {
                            e.target.value = 10;
                        }
                        if (e.target.value > 400) {
                            e.target.value = 400;
                        }
                        document.getElementById('MainComponent')?.style.setProperty('--keglNumber', e.target.value + 'px');
                    }} />
                    Кегль цифр
                </div>
                <div className={style.NumberSetting}>
                    <div className={style.Cardd}>
                        <div className={style.LineNumber}>
                            <div className={style.As} onClick={(e) => {
                                if (numberOption1 == false) {
                                    e.target.className = style.As + ' ' + style.Yes;
                                    setNumberOption1(true);
                                } else {
                                    e.target.className = style.As;
                                    setNumberOption1(false);
                                }
                            }}>N1</div>
                            <div className={style.As} onClick={(e) => {
                                if (numberOption2 == false) {
                                    e.target.className = style.As + ' ' + style.Yes;
                                    setNumberOption2(true);
                                } else {
                                    e.target.className = style.As;
                                    setNumberOption2(false);
                                }
                            }}>N2</div>
                        </div>
                        <div className={style.LineNumber}>
                            <div className={style.As} onClick={(e) => {
                                if (numberOption3 == false) {
                                    e.target.className = style.As + ' ' + style.Yes;
                                    setNumberOption3(true);
                                } else {
                                    e.target.className = style.As;
                                    setNumberOption3(false);
                                }
                            }}>N3</div>
                            <div className={style.As} onClick={(e) => {
                                if (numberOption4 == false) {
                                    e.target.className = style.As + ' ' + style.Yes;
                                    setNumberOption4(true);
                                } else {
                                    e.target.className = style.As;
                                    setNumberOption4(false);
                                }
                            }}>N4</div>
                        </div>
                    </div>
                    <div className={style.Numbers}>
                        <div className={style.Number}>
                            <div className={style.Chose}>
                                N1 H
                                <input name={'kegl'} type="number" defaultValue={27} min={0} max={300} onChange={(e) => {
                                    document.getElementById('MainComponent')?.style.setProperty('--leftTopH', e.target.value + 'px');
                                }} />
                            </div>
                            <div className={style.Chose}>
                                V
                                <input name={'kegl'} type="number" defaultValue={25} min={0} max={300} onChange={(e) => {
                                    document.getElementById('MainComponent')?.style.setProperty('--leftTopV', e.target.value + 'px');
                                }} />
                            </div>
                            <div className={style.ChoseColor}>
                                <input name={'colorInput'} type="color" defaultValue={colorMas[10]} onInput={(e) => {
                                    const R = colorMas;
                                    R[10] = e.target.value;
                                    if (like[11] == 0) {
                                        R[11] = R[10];
                                        colors[11].value = R[10];
                                    }
                                    if (like[12] == 0) {
                                        R[12] = R[10];
                                        colors[12].value = R[10];
                                    }
                                    if (like[13] == 0) {
                                        R[13] = R[10];
                                        colors[13].value = R[10];
                                    }
                                    setColorMas(R);
                                    changeColor();
                                }} />
                                <div className={style.As} onClick={(e) => {
                                    const t = e.target.previousSibling;
                                    if (like[10] == 1) {
                                        e.target.className = style.As + ' ' + style.Yes;
                                        const R = colorMas;
                                        R[10] = colorMas[7];
                                        t.value = colorMas[7];
                                        t.disabled = true;
                                        if (like[11] == 0) {
                                            R[11] = R[10];
                                            colors[11].value = R[10];
                                        }
                                        if (like[12] == 0) {
                                            R[12] = R[10];
                                            colors[12].value = R[10];
                                        }
                                        if (like[13] == 0) {
                                            R[13] = R[10];
                                            colors[13].value = R[10];
                                        }
                                        setColorMas(R);
                                        changeColor();
                                        const L = like;
                                        L[10] = 0;
                                        setLike(L);
                                    } else {
                                        e.target.className = style.As;
                                        t.disabled = false;
                                        const L = like;
                                        L[10] = 1;
                                        setLike(L);
                                    }
                                }}>
                                    Обрат1
                                </div>
                            </div>
                        </div>
                        <div className={style.Number}>
                            <div className={style.Chose}>
                                N2 H
                                <input name={'kegl'} type="number" defaultValue={27} min={0} max={300} onChange={(e) => {
                                    document.getElementById('MainComponent')?.style.setProperty('--rigthTopH', e.target.value + 'px');
                                }} />
                            </div>
                            <div className={style.Chose}>
                                V
                                <input name={'kegl'} type="number" defaultValue={25} min={0} max={300} onChange={(e) => {
                                    document.getElementById('MainComponent')?.style.setProperty('--rigthTopV', e.target.value + 'px');
                                }} />
                            </div>
                            <div className={style.ChoseColor}>
                                <input name={'colorInput'} type="color" defaultValue={colorMas[11]} onInput={(e) => {
                                    const R = colorMas;
                                    R[11] = e.target.value;
                                    setColorMas(R);
                                    changeColor();
                                }} />
                                <div className={style.As} onClick={(e) => {
                                    const t = e.target.previousSibling;
                                    if (like[11] == 1) {
                                        e.target.className = style.As + ' ' + style.Yes;
                                        const R = colorMas;
                                        R[11] = colorMas[10];
                                        t.value = colorMas[10];
                                        t.disabled = true;
                                        setColorMas(R);
                                        changeColor();
                                        const L = like;
                                        L[11] = 0;
                                        setLike(L);
                                    } else {
                                        e.target.className = style.As;
                                        t.disabled = false;
                                        const L = like;
                                        L[11] = 1;
                                        setLike(L);
                                    }
                                }}>
                                    Как N1
                                </div>
                            </div>
                        </div>
                        <div className={style.Number}>
                            <div className={style.Chose}>
                                N3 H
                                <input name={'kegl'} type="number" defaultValue={27} min={0} max={300} onChange={(e) => {
                                    document.getElementById('MainComponent')?.style.setProperty('--leftDownH', e.target.value + 'px');
                                }} />
                            </div>
                            <div className={style.Chose}>
                                V
                                <input name={'kegl'} type="number" defaultValue={25} min={0} max={300} onChange={(e) => {
                                    document.getElementById('MainComponent')?.style.setProperty('--leftDownV', e.target.value + 'px');
                                }} />
                            </div>
                            <div className={style.ChoseColor}>
                                <input name={'colorInput'} type="color" defaultValue={colorMas[12]} onInput={(e) => {
                                    const R = colorMas;
                                    R[12] = e.target.value;
                                    setColorMas(R);
                                    changeColor();
                                }} />
                                <div className={style.As} onClick={(e) => {
                                    const t = e.target.previousSibling;
                                    if (like[12] == 1) {
                                        e.target.className = style.As + ' ' + style.Yes;
                                        const R = colorMas;
                                        R[12] = colorMas[10];
                                        t.value = colorMas[10];
                                        t.disabled = true;
                                        setColorMas(R);
                                        changeColor();
                                        const L = like;
                                        L[12] = 0;
                                        setLike(L);
                                    } else {
                                        e.target.className = style.As;
                                        t.disabled = false;
                                        const L = like;
                                        L[12] = 1;
                                        setLike(L);
                                    }
                                }}>
                                    Как N1
                                </div>
                            </div>
                        </div>
                        <div className={style.Number}>
                            <div className={style.Chose}>
                                N4 H
                                <input name={'kegl'} type="number" defaultValue={27} min={0} max={300} onChange={(e) => {
                                    document.getElementById('MainComponent')?.style.setProperty('--rigthDownH', e.target.value + 'px');
                                }} />
                            </div>
                            <div className={style.Chose}>
                                V
                                <input name={'kegl'} type="number" defaultValue={25} min={0} max={300} onChange={(e) => {
                                    document.getElementById('MainComponent')?.style.setProperty('--rigthDownV', e.target.value + 'px');
                                }} />
                            </div>
                            <div className={style.ChoseColor}>
                                <input name={'colorInput'} type="color" defaultValue={colorMas[13]} onInput={(e) => {
                                    const R = colorMas;
                                    R[13] = e.target.value;
                                    setColorMas(R);
                                    changeColor();
                                }} />
                                <div className={style.As} onClick={(e) => {
                                    const t = e.target.previousSibling;
                                    if (like[13] == 1) {
                                        e.target.className = style.As + ' ' + style.Yes;
                                        const R = colorMas;
                                        R[13] = colorMas[10];
                                        t.value = colorMas[10];
                                        t.disabled = true;
                                        setColorMas(R);
                                        changeColor();
                                        const L = like;
                                        L[13] = 0;
                                        setLike(L);
                                    } else {
                                        e.target.className = style.As;
                                        t.disabled = false;
                                        const L = like;
                                        L[13] = 1;
                                        setLike(L);
                                    }
                                }}>
                                    Как N1
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.MyButton} onClick={() => { console.clear(); setMyText(myText + 1)}}>Я подстраиваю текст</div>
                <div className={style.MyButton} onClick={() => { setFontNumber((fontNumber + 1) % font.length) }}>Другой шрифт</div>
                {font[fontNumber]}
            </div>
        );
    };
    document.addEventListener('click', () => { setShowSelect(false) });
    const getMenu = () => {
        return (
            <div name={"scrollMe"} className={style.Menu}>
                <div className={style.Flex}>
                    <Class classesName={data?.classes ? Object.keys(data?.classes) : []} targetClass={targetClass} setClassText={setClassText} setTargetClass={setTargetClass} setSpellControl={setSpellControl}></Class>
                    <div>
                        <a  target="_blank" href="https://disk.yandex.ru/d/bFuGOO1XBxZU9w"><img src={YD} alt="YD" /></a>
                        <a  target="_blank" href="https://vk.com/dnd_card"><img src={VK} alt="VK" /></a>
                        <a  target="_blank" href="https://github.com/HidasMato/dnd_cards"><img src={GH} alt="GH" /></a>
                    </div>
                </div>
                
                {showSelect && <p className={style.P}>Подсвеченные темным "тяжелые" и могут сломать Ваш браузер :3<br/>Не пытайтесь устанавливать их, если у Вас выбрано много карточек</p>}
                                
                {data?.classes[targetClass] &&
                    <div className={style.A}>
                        <div className={style.Oborot} onClick={() => {
                            setOborot(!oborot);
                        }}>Лицевые/Обратные</div>
                        <div className={style.MySelect} onClick={(e) => e.stopPropagation()}>
                            <div className={style.Text}>Выбрать обратку из списка</div>
                            <div>
                                <div className={style.SelectObod} onClick={() => { setShowSelect(!showSelect) }}>
                                    <div className={style.SelectText}>
                                        {select}
                                    </div>
                                    <div className={style.Tre} />
                                </div>
                                {showSelect &&
                                        <div className={style.Lists}>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Кастомная") }}>Кастомная</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Бард") }}>Бард</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Варвар") }}>Варвар</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Военка") }}>Военка</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Волшебник") }}>Волшебник</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Друид") }}>Друид</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Жрец") }}>Жрец</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Колдун") }}>Колдун</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Ксанатар") }}>Ксанатар</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Монах") }}>Монах</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Мистик") }}>Мистик</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Паладин") }}>Паладин</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Следопыт") }}>Следопыт</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Чародей") }}>Чародей</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Элементаль") }}>Элементаль</div>
                                            <div className={style.List2} onClick={() => { setShowSelect(false); setSelect("Воплощение") }}>Воплощение</div>
                                            <div className={style.List2} onClick={() => { setShowSelect(false); setSelect("Вызов") }}>Вызов</div>
                                            <div className={style.List2} onClick={() => { setShowSelect(false); setSelect("Иллюзия") }}>Иллюзия</div>
                                            <div className={style.List2} onClick={() => { setShowSelect(false); setSelect("Некромантия") }}>Некромантия</div>
                                            <div className={style.List2} onClick={() => { setShowSelect(false); setSelect("Ограждение") }}>Ограждение</div>
                                            <div className={style.List2} onClick={() => { setShowSelect(false); setSelect("Очарование") }}>Очарование</div>
                                            <div className={style.List2} onClick={() => { setShowSelect(false); setSelect("Преобразование") }}>Преобразование</div>
                                            <div className={style.List2} onClick={() => { setShowSelect(false); setSelect("Прорицание") }}>Прорицание</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Валькирия") }}>Валькирия</div>
                                            <div className={style.List} onClick={() => { setShowSelect(false); setSelect("Ведьмочка") }}>Ведьмочка</div>
                                        </div>
                                }
                            </div>
                        </div>
                        <div className={style.InputFile}>
                            <div className={style.Text}>Выбрать кастомный файл</div>
                            <label htmlFor="inputfile">Тык</label>
                            <input type="file" name="" id="inputfile" onInput={(e) => { setPyt(e.target.files[0]); }} />
                            {pyt != undefined ? pyt.name : "Файл не выбран"}
                        </div>
                        <div className={style.Flex}>
                            <div className={style.Text}>Время накладывания</div>
                            <div className={style.Print}>
                                <input type="text" value={time} onChange={(e) => {
                                    setTime(e.target.value);
                                    
                                }} />
                            </div>
                        </div>
                        <div className={style.Flex}>
                            <div className={style.Text}>Дистанция</div>
                            <div className={style.Print}>
                                <input type="text" value={dist} onChange={(e) => {
                                    setDist(e.target.value);
                                    
                                }} />
                            </div>
                        </div>
                        <div className={style.Flex}>
                            <div className={style.Text}>Компоненты</div>
                            <div className={style.Print}>
                                <input type="text" value={comp} onChange={(e) => {
                                    setComp(e.target.value);
                                    
                                }} />
                            </div>
                        </div>
                        <div className={style.Flex}>
                            <div className={style.Text}>Длительность</div>
                            <div className={style.Print}>
                                <input type="text" value={long} onChange={(e) => {
                                    setLong(e.target.value);
                                    
                                }} />
                            </div>
                        </div>
                        <div className={style.Flex}>
                            <div className={style.Text}>На более высоком уровне</div>
                            <div className={style.Print}>
                                <input type="text" value={vys} onChange={(e) => {
                                    setVys(e.target.value);
                                    
                                }} />
                            </div>
                        </div>
                        <div className={style.Flex}>
                            <div className={style.Text}>Нижняя подпись</div>
                            <div className={style.Print}>
                                <input type="text" value={classText} onChange={(e) => {
                                    setClassText(e.target.value);
                                    
                                }} />
                            </div>
                        </div>
                    </div>
                }
                {
                    data?.classes[targetClass]
                        ? Object.keys(data?.classes[targetClass]).map(istok => {
                            const allSpells = [];
                            const onlyUseLevels = new Set();
                            data?.classes[targetClass][istok].map(spell => {
                                const level = data?.cards?.[spell]?.level ?? "";
                                allSpells.push({ "level": level, "name": spell });
                                onlyUseLevels.add(level);
                            })
                            if (printIstok[istok] == undefined) {
                                { setPrintIstok({ ...printIstok, [istok]: ' - ' + istok }) }
                            }
                            return <Istok key={istok} setPrintIstok={setPrintIstok} printIstok={printIstok} targetClass={targetClass} istok={istok} allSpells={allSpells} onlyUseLevels={[...onlyUseLevels]} spellControl={spellControl} updateSpellControll={updateSpellControll}></Istok>
                        })
                        : null
                }
            </div>
        )
    };
    return (
        <div className={style.MainComponent} id={'MainComponent'}>
        {
            useEffect(() => {
                const getData = setInterval(() => {
                    const data2 = document.getElementById('MainComponent')?.newOption;
                    if (data2) {
                        clearInterval(getData);
                        setTimeout(() => { setData(data2); }, 1000, data2);
                    };
                }, 100);
            }, [])
            }
            {getMenu()}
            {getCards()}
            {getSetting()}
        </div>
    );
}
