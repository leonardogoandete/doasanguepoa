# Frontend DoaSanguePoa

Projeto com o frontend da aplicação Doasanguepoa<br>

### Descrição dos testes:
**Teste de postagem com Instituição:**

Instituição deve realizar a visualização de todas as postagens e realizar as suas postagens somente.

**Teste de postagem com Usuario**

Usuario deve realizar a visualização de todas as postagens.

Obs.: Todos os testes estão com dados e tokens mockados disponivel no caminho:<br>
__Raiz do projeto > cypres > fixtures__


### CI/CD Github Actions
O projeto contem uma pipe de CI/CD, conforme os passos abaixo:
#### Deploy na master: <br>
**Ao realizar deploy na master, dispara um step no actions e realiza os passos abaixo:**
##### JOB tests-instituicao 
- Configura o node v18
- Clone deste projeto
- Teste de Instituição com o Cypress no Chrome, Firefox e MS Edge
##### JOB tests-usuario
- Configura o node v18
- Clone deste projeto
- Teste de Usuario com o Cypress no Chrome, Firefox e MS Edge

#### Deploy de uma release: <br>
**Ao realizar a publicação de uma release, dispara dois steps no actions e realiza os passos abaixo:**
##### JOB tests-instituicao
- Configura o node v18
- Clone deste projeto
- Teste de Instituição com o Cypress no Chrome, Firefox e MS Edge
##### JOB tests-usuario
- Configura o node v18
- Clone deste projeto
- Teste de Usuario com o Cypress no Chrome, Firefox e MS Edge

**Ao passar com sucesso o STEP anterior, realiza os passos abaixo:**
- Autentica no docker hub
- Gera a imagem docker com o nome leogoandete/doasanguepoa-front:<NUMERO DA RELEASE LANÇADA>
- Realiza o build e envia a imagem para o docker hub

### Docker
https://hub.docker.com/r/leogoandete/doasanguepoa-front

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
> - Ajustado localStorage para buscar dados do usuário logado
> - Ajustado para não exibir itens de menu para usuários não logados
> - Ajustado url da api de login para endpoints diferentes para usuário e instituição

