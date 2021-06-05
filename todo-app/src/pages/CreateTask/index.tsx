import React, { useState } from 'react';
import BoxConteiner from '../../Components/Conteiner';
import history from 'react-router-dom'
import { Form } from './styles';


const CreateTask: React.FC = () => {
    const [date] = useState<string>(new Date().toLocaleDateString());
    const handleSubmit = async () => {
        console.log("chamei");

    }
    return (
        <BoxConteiner header={'Criar Nova Tarefa'}>
            <Form onSubmit={handleSubmit}>

                <label htmlFor='text-input'>Qual é a tarefa:</label>
                <input type='text' name='text-input' placeholder={'Tarefa a ser realizada'} />

                <label htmlFor='text-input'>Descrição da tarefa:</label>
                <textarea id='text-input' rows={10} cols={55} placeholder={'Insira uma descrição para a tarefa que deseja criar'} />

                <label htmlFor='text-input'>Data de realização da tarefa:</label>
                <input type='date' name='data-input' id='date' min={date} />

                <button type='submit'> Adicionar</button>
            </Form>
        </BoxConteiner>
    )
}

export default CreateTask;
/*const Notes = () => {

    function deleteItem(index){
        const aux = Array.from(items);
        aux.splice(index, 1);
        setItem(aux);
    }

    function clickButton(e){
        e.preventDefault();
        const lista = Array.from(items);
        const item = {id: items.length , value: text ,bgColor: "#ddd"}
        lista.push(item);
        setItem(lista);
        setText('');
    }
    function changeColor(index){
        const aux = Array.from(items);
        aux[index].bgColor = "#338c39";
        setItem(aux);
    }
    return(
        <div className="page-notes-content">
            <Header to="/diario" className="logo-header-fixed"/>
            <div>
                <form onSubmit={clickButton} id="input-notes">
                    <input type="text" id="text-input" value={text} onChange={changeText}/>
                    <button ><img src={addImg} alt=""/> Adicionar</button>
                </form>
            </div>
            <div id="lista-objetivos">
                <ol>
                    {items.map(({id, value, bgColor}, index) => (
                        <Anotacoes
                            onDelete={() => {
                                deleteItem(index)}}
                            onComplete={()=>
                                changeColor(index)
                            }
                            key={id}
                            backColor ={bgColor}
                            id= {id}
                            value={value}
                        />
                    ))}
                </ol>
            </div>
        </div>
    )
}


const Anotacoes = ({onDelete ,onComplete, id, value, backColor})=> {
    console.log(backColor);
    return(
            <li key={id} id={id} style={{background: backColor}} className="lista-objetivos">
                <button onClick={onComplete}>
                    <img src={sucessImg} alt="Objetivo Cumprido"/>
                </button >
                <button onClick={onDelete}>
                    <img src={remove} alt="Remover objetivo"/>
                </button>
                {value}
            </li>
    )
} */