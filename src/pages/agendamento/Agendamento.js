import React, { useState, useEffect } from 'react'
import { Api } from '../../config/Api';
//import Button from "../../components/Button";
//import Logout from '../../components/Lougout/Logout';
import Select from 'react-select';

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

  // função para pegar aas instituicoes
  const [options, setOptions] = useState([""]);

  useEffect(() => {
    const getData = async () => {
      const arr = [];
      await Api.get("/instituicoes",).then((res) => {
          let result = res.data;
          result.map((instituicao) => {
            return arr.push({value: instituicao.nome, label: instituicao.nome});
        });
        setOptions(arr)
      });
    };
    getData();
  }, []);


        return (
        <>
          <h1>Agendamento</h1>
          <div className='selectInstituicao'>
            Escolha o local de doação:
            <Select
              className="input-cont"
              placeholder= "Escolha uma instituição"
              options={options}
            />
          </div>

        </>
        );

}

export default Agendamento
