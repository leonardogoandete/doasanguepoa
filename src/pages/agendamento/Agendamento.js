import React, { useState, useEffect } from 'react'
import { Api } from '../../config/Api';
import { padronizaData } from '../../config/configuraData';
//import Button from "../../components/Button";
//import Logout from '../../components/Lougout/Logout';
import { SelectPicker, Calendar, Button, CustomProvider } from 'rsuite';
import pt_BR from 'rsuite/locales/pt_BR';
import 'react-day-picker/dist/style.css';
import "rsuite/dist/rsuite.css";
import './calendar.css';
import './Agendamento.css'


const Agendamento = () => {
    /*    
    var axios = require('axios');
    var data = JSON.stringify({
      "dia": "2023/12/22",
      "idInstituicao": 1,
      "hora": "13:00",
      "idUsuario": 1
    });
    
    var config = {
      method: 'post',
      url: 'http://doasanguepoa-bff.herokuapp.com/v1/api/agendamentos',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
  });
*/
  const horarios = ['07:00', '08:00', '09:00', '10:00'].map(
    item => ({ label: item, value: item })
  );
    
  // função para pegar as instituicoes
  const [instituicao, setInstituicao] = useState([""]);
  //pega a data escolhida
  const [data, setData] = useState([""]);
  const [hora, setHora] = useState([""]);
  const [defineInstituto, setDefineInstituto] = useState([""]);

  useEffect(() => {
    const getData = async () => {
      const arr = [];
      await Api.get("/instituicoes",).then((res) => {
          let result = res.data;
          result.map((instituicao) => {
            return arr.push({value: instituicao.id, label: instituicao.nome});
        });
        setInstituicao(arr)
      });
    };
    getData();
  }, []);

  const Instituição = () => {
    console.log("Escolha instituto: ", defineInstituto)
  }
  const Data = () => {            //'Y','M','D'
    console.log("Escolha data: ", padronizaData(data))
  };
  const Hora = () => {
    console.log("Escolha hora: ", hora)
  };

  const onClick = () =>{
    Instituição()
    Hora()
    Data()
  }

        return (
        <>
        <CustomProvider locale={pt_BR}>
        <div>
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
        </div>
        <br/>
        <Button onClick={onClick}>Agendar</Button>
        </CustomProvider>
        </>
        );
        
}

export default Agendamento

/*

<DayPicker
            locale={ptBR}
            mode="single"
            selected={data}
            onSelect={setData}
          />


            <Select
              className="input-cont"
              placeholder= "Selecione uma instituição"
              options={options}
              onChange={handleChange}
            />
            */