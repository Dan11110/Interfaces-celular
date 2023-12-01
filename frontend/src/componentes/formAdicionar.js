
import React, { useState } from "react";
import Input from '../componentes/input'

const CadastroForm = () => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [memoria, setMemoria] = useState("");
  const [lancamento, setlancamento] = useState("");
  

    return (
        <div className='containerCadastro'>
            <div className='logo-Container'>
        </div>
        <div>
                <form className="FormularioCadastro" >    
                    <Input
                        type="text"
                        id="Marca"
                        placeholder="Marca"
                    />
                    <Input
                        type="text"
                        id="Modelo"
                        placeholder="Modelo"
                    />
                     <Input
                        type="text"
                        id="Memória"
                        placeholder="Memória"
                    />
                    <Input
                        type="date"
                        id="data"
                        placeholder="data"
                    />

                    <div className = "Botoes">
                        <button 
                        type = "submit"
                        Text = "Salvar"
                        />
                        <button  Text= "Cancelar"/>  
                    </div>
                </form>
            </div>
        </div>    
    )
 
}

export default CadastroForm;