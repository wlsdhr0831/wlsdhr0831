import React, { useState } from 'react';
import { SelectObject } from '../object/SelectObject';

const Select = () => {
    const optionList = [
        {value : false, text: "1"},
        {value : false, text: "2"},
        {value : false, text: "3"},
        {value : false, text: "4"},
        {value : false, text: "5"},
    ];
    const [select, setSelect] = useState(new SelectObject(
        { total: false, optionList }));

    const onChange = (e) => {
        if(e.target.id === "total"){
            e.target.checked
                ? select.selectAllOptions() 
                : select.deselectAllOPtions();
        }else{
            e.target.checked
                ? select.selectOption(e.target.id) 
                : select.deselectOption(e.target.id);
        }
        setSelect(select.setSelectObject(select));
    }

    return (<>
        <input 
            id="total"
            type="checkbox"
            checked={select.total}
            onChange={onChange}/> 전체 선택
        {
            select.optionList.map((option, idx) => (
            <div key={idx}>
                <input 
                    id={idx} 
                    type="checkbox"
                    checked={option.value}
                    onChange={onChange}/>
                {option.text}
            </div>))
        }
        
    </>);
}

export default Select;