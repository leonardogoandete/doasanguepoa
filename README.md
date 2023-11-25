# Projeto Doa Sangue POA
- Link da documentação da API: 
https://doasanguepoa-bff-aharx.ondigitalocean.app/v1/api/docs/
- Estrutura do projeto:
![Estrutura](estrutura_aplicacao.jpeg)

# Versões
> ## v1.0.0
>- Adicionado definição de backend unico com a variável<br/>
     `REACT_APP_URL_API`
> ## v1.1.0
>- Adicionado opção de setar microserviço por env<br/>
     `REACT_APP_URL_API_LOGIN`<br/>
     `REACT_APP_URL_API_POSTAGENS`<br/>
     `REACT_APP_URL_API_CADASTRO`<br/><br/>
>- Adicionado menu de "Minhas postagens" para instituições<br/>
>- Adicionado opção de exclusão de posts na área de "Minhas Postagens"
> ## v1.2.0
>- Melhorado requisições usando useState e useEffect
> ## v1.2.1
> - Ajustado localStora para buscar dados do usuário logado
> - Ajustado para não exibir itens de menu para usuários não logados
> - Ajustado url da api de login para endpoints diferentes para usuário e instituição

