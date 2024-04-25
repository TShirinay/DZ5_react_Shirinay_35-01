import React, {useState} from 'react';

const MainPage = () => {
    const [input,setInput] = useState("")
    const [Case,setCase] = useState([])
    const addCase=() =>{

        input==='' ? alert('Введите какое-то дело'): setCase([...Case , input])

    }
    const changeInput =(index) =>{
        const updatedNames = [...Case];
        updatedNames[index] = input;
        setCase(updatedNames);
    }
    return (
        <div>
            <input type="text" placeholder='Введите имя' onChange={event => setInput(event.target.value)}/>
            <button onClick={addCase}>ADD</button>
            <ul>
                {
                    Case.length===0 ?
                        <li>Список пуст</li>
                        :
                        Case.map((el , index) => [ <div>
                                <li key={index}>
                                    {el}
                                </li>
                                <button onClick={() =>changeInput(index)}>Поменять</button>
                            </div>]
                        )
                }
            </ul>
        </div>
    );
};

export default MainPage;