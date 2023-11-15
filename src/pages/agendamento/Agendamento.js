// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import { padronizaData } from '../../config/configuraData';
import { validaRole } from '../../config/verificaRole'
import { history } from '../../history'
import { SelectPicker, Calendar, Button, CustomProvider } from 'rsuite';
import pt_BR from 'rsuite/locales/pt_BR';
import 'react-day-picker/dist/style.css';
import "rsuite/dist/rsuite.css";
import './calendar.css';
import './Agendamento.css'
import jwt_decode from "jwt-decode";
import axios from "axios";


const Agendamento = () => {
  const role = validaRole()
  const horarios = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map(
    item => ({ label: item, value: item })
  );
  // função para pegar as instituicoes
  // eslint-disable-next-line
  const [instituicao, setInstituicao] = useState([""]);
  //pega a data escolhida
  const [data, setData] = useState([""]);
  const [hora, setHora] = useState([""]);
  const [defineInstituto, setDefineInstituto] = useState([""]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const arr = [];
  //     await axios.get("/instituicoes",).then((res) => {
  //         let result = res.data;
  //         result.map((instituicao) => {
  //           return arr.push({value: instituicao.id, label: instituicao.nome});
  //       });
  //       setInstituicao(arr)
  //     }
  //     );
  //   };
  //   getData();
  // }, []);

  const idUsuario = () => {
    const token = localStorage.getItem('u'); //pega do local storage o token
    const decoded = jwt_decode(token); //captura o id através do jwt
    const id = decoded['id']
    console.log("ID usuario: ",id)
    return id;
  }

  const onClick = () =>{
    const payload = {
      "dia": padronizaData(data),
      "idInstituicao": defineInstituto,
      "hora": hora,
      "idUsuario": idUsuario()
    }

    axios.post('/agendamentos', payload)
    .then(function (resp) {
      alert(resp.data);
    }).catch( function(resp){
      alert(resp.data)})
  }
      if(role === 'USUARIO'){
        return (
        <>
        <CustomProvider locale={pt_BR}>
        <div class="agendamento">
          <h1>Agendamento</h1>
          <div>
          <Calendar onChange={setData} compact bordered/>
          <br/>
          <h6>Escolha o local de doação:</h6>
          <SelectPicker placeholder={"Instituição"} onChange={setDefineInstituto} data={instituicao} style={{ width: 224 }}/>
          <br/>
          <br/>
          <h6>Escolha o horario:</h6>
          <SelectPicker placeholder={"Horario"} onChange={setHora} data={horarios} style={{ width: 224 }}/>
          </div>
          <br/>
          <Button appearance="primary" size="lg" onClick={onClick} style={{marginLeft: 425, marginTop: -20 }}>Agendar</Button>
        </div>
        </CustomProvider>
        </>
        );
      }else{
        history.push('/home')
        return(
          <>
            {<alert>Não autorizado</alert>}
          </>
        );
      }
        
}

export default Agendamento