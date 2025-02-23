
# Metodologia

<span style="color:red">Pré-requisitos: <a href="02-Especificacao.md"> Especificação do projeto</a></span>

As metodologias adotadas pela equipe serão o Scrum e o Kanban, com o objetivo de aprimorar a organização e a colaboração. Para garantir uma comunicação eficaz, utilizaremos ferramentas de reunião online, como Microsoft Teams e WhatsApp. Encontros semanais presenciais serão realizados na faculdade para alinhar os objetivos do projeto. O versionamento do código será feito através do GitHub, enquanto o desenvolvimento e administração do código ocorrerão no Visual Studio Code.

O banco de dados escolhido para o projeto é o MySQL, e para o desenvolvimento tanto do back-end quanto do front-end, trabalharemos com Node.js, HTML e CSS. A hospedagem será realizada no Azure, e os testes serão conduzidos no GitLab.

Essas ferramentas foram selecionadas para assegurar o bom andamento e a qualidade do projeto.

## Relação de ambientes de trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas. A relação dos ambientes com seus respectivos propósitos deverá ser apresentada em uma tabela que especifique e detalhe Ambiente, Plataforma e Link de Acesso. Defina também os ambientes e frameworks que serão utilizados no desenvolvimento de aplicações móveis.

## Controle de versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [GitHub](https://github.com) foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `develop`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gestão de tags, merges, commits e branches é realizada. Discuta também como a gestão de issues foi feita.

## Planejamento do projeto

###  Divisão de papéis

> Nosso projeto tera a seguinte distribuição:

#### Sprint 1
- _Scrum master_: AlunaX
- Protótipos: AlunoY
- Testes: AlunoK
- Documentação: AlunaZ

#### Sprint 2
- _Scrum master_: AlunaY
- Desenvolvedor _front-end_: AlunoX
- Desenvolvedor _back-end_: AlunoK
- Testes: AlunaZ

###  Quadro de tarefas

Divisão das tarefas de acordo com a sprint 

#### Sprint 1

Atualizado em: 23/02/2025

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
|Thiago Marques | Introdução |     |semanas  | ✔️    |      |
|Thiago Marques | Objetivos    |     | semanas | ✔️    |                 |
|Thiago Marques | Justificativa   |     | semanas | ✔️    |   
|Allan Junio | Público Alvo  |     | semanas | ✔️    |   |
|Christiano da Silva|  Histórias de usuário  |     |semanas | ✔️      |                 |
| Gabriel Henrique| Personas 1  |         | semanas | ✔️      |       |
| Christiano da Silva| Requisitos Funcionais  |         | semanas | ✔️      |       |
| Christiano da Silva| Requisitos Não Funcionais  |         |semanas  | ✔️      |       |
| Luis Gustavo | Regras de Negócio  |   05/02/2025      | 1 semana | ✔️      |  11/02/2025     |
| Kauan Maia | Diagrama de Caso de Uso  |        |  semanas | ✔️      |      |


#### Sprint 2

Atualizado em: 21/04/2024

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| AlunaX        | Página inicial   | 01/02/2024     | 07/03/2024 | ✔️    | 05/02/2024      |
| AlunaZ        | CSS unificado    | 03/02/2024     | 10/03/2024 | 📝    |                 |
| AlunoY        | Página de login  | 01/02/2024     | 07/03/2024 | ⌛     |                 |
| AlunoK        | Script de login  |  01/01/2024    | 12/03/2024 | ❌    |       |


Legenda:
- ✔️: terminado
- 📝: em execução
- ⌛: atrasado
- ❌: não iniciado



### Processo

O nosso grupo adota duas metodologias ágeis, o Scrum e o Kanban, combinando-as para formar um modelo híbrido conhecido como ScrumBan. Neste modelo, utilizamos o Kanban para o gerenciamento visual e a distribuição das tarefas, permitindo um fluxo contínuo de trabalho e flexibilidade na priorização e acompanhamento das atividades. Já o Scrum é utilizado para o desenvolvimento dessas tarefas, estruturando os ciclos de trabalho em sprints e promovendo reuniões regulares de planejamento, revisão e retrospectiva. Dessa forma, ambas as metodologias são aplicadas simultaneamente pela equipe, aproveitando o que há de melhor em cada uma para otimizar a entrega de valor de forma eficiente e ágil.

### Ferramentas

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue.

| Ambiente                            | Plataforma                         | Link de acesso                         |
|-------------------------------------|------------------------------------|----------------------------------------|
| Repositório de código fonte         | GitHub                             | https://github.com/ICEI-PUC-Minas-PCO-ADS-TI/2025-1-p3-tidai-Grupo2/tree/main                         |
| Documentos do projeto               | GitHub                             |https://github.com/ICEI-PUC-Minas-PCO-ADS-TI/2025-1-p3-tidai-Grupo2/tree/main                          |
| Projeto de interface                | Figma                              | https://www.figma.com/design/HOKK8Z1TzB6bPkutBZjCTI/Untitled?node-id=1-2965&t=PMBLbvdI94FArAoD-0                    |
| Projeto de interface - Userflow     | Mockplus                             | https://rp.mockplus.com/run/TwvtDUYRSm/i88ReQcp8lcps=expand&rps=expand&nav=1&ha=0&la=0&fc=1&dt=iphoneX&out=0&rt=1&as=true  
| Gerenciamento do projeto            | GitHub Projects                    |https://github.com/ICEI-PUC-Minas-PCO-ADS-TI/2025-1-p3-tidai-Grupo2/projects?query=is%3Aopen                          |
| Hospedagem                          | Azure                           | http://....                            |
 
