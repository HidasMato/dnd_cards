import { useEffect, useState } from 'react'
import style from  './Class.module.scss'

export default function Class({classesName,setClassText,targetClass, setTargetClass, setSpellControl }) {
    const [show, setShow] = useState(false);
    document.addEventListener('click', () => { setShow(false) });
    return (
        <div className={style.MainComponent} onClick={(e) => e.stopPropagation()}>
            <div className={style.Obod} onClick={() => {
                setShow(!show);
            }}>
                <div className={style.TargetClass}>
                    {targetClass}
                </div>
                <div className={style.Button}>
                    <div className={style.Down}/>
                </div>
            </div>
            {
                show &&
                <div className={style.Lists}>
                        {classesName.map(thisClass => {
                        return (
                            <div
                                onClick={() => {
                                    setTargetClass(thisClass);
                                    setClassText(thisClass);
                                    setShow(false);
                                    setSpellControl({});
                                }}
                                className={style.List}
                                key={thisClass}
                            >
                                {thisClass}
                            </div>
                        )
                    })}
                </div>
            }
    </div>
    );
}
