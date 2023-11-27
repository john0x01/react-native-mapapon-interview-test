# Projeto criado como teste de vaga de progrmador React Native

# Etapas

## Parte 1: Conceitos Básicos
### Pergunta: Explique o que é o React Native e como ele difere do ReactJS.
O React Native é um framework que permite criar aplicativos mobile usando JavaScript e React. Ele é uma extensão do ReactJS, mas ao invés de criar interfaces para navegadores web, como o ReactJS faz, o React Native é usado para criar aplicativos nativos para dispositivos móveis, como iOS e Android.
<br> 
A principal diferença entre o React Native e o ReactJS é o ambiente de execução onde cada um opera. O ReactJS gera interfaces de usuário para web, enquanto o React Native gera componentes nativos para aplicativos. Isso significa que, embora os dois usem conceitos semelhantes de componentização e JSX, o React Native oferece componentes específicos para iOS e Android, permitindo que os aplicativos sejam executados de forma nativa em cada plataforma.

### Descreva a diferença entre State e Props no React Native. Dê exemplos de quando você usaria cada um.
O State é utilizado para gerenciar dados internos mutáveis de um componente, que atualizam a cada renderização desse, enquanto as Props são usadas para passar dados imutáveis de um componente pai para um componente filho.

Se eu tenho uma tela que faz uma requisicao a uma API que pode demorar, eu posso utilizar um state para o Loading da tela que começa como true e assim que a API retornar uma resposta, atualiza para false.

E se eu tenho uma tela que tem acesso a um array de itens e precisa renderizar uma lista de cada item, irei criar uma flashlist em que cada item retorna um componente em que as propriedades do item são passadas como props

## Parte 2: Configuração de Ambiente
### Tarefa: Configure o ambiente de desenvolvimento no sistema operacional
Feito

## Parte 3: Desenvolvimento Prático
### Tarefa: Crie um novo projeto React Native utilizando o React Native CLI. Adicione uma tela de boas-vindas simples que exiba uma mensagem de saudação.
Feito

### Tarefa: Implemente uma navegação básica usando o React Navigation. Adicione pelo menos duas telas adicionais e navegue entre elas.
Feito

### Tarefa: Utilize o Axios para fazer uma requisição a uma API (por exemplo, JSONPlaceholder) e exibir os resultados em uma lista na sua aplicação.
Feito

### Tarefa: Adicione a capacidade de clicar em um item da lista para ver detalhes desse item em uma nova tela.
Feito

## Parte 4: Desafio
### Desafio: Implemente um formulário simples que permita ao usuário adicionar novos itens à lista. Os novos itens devem ser enviados para a API usando o Axios, e a lista deve ser atualizada dinamicamente.
Feito

## Parte 5: Estilo e Layout
### Tarefa: Estilize suas telas usando o StyleSheet do React Native. Certifique-se de que sua aplicação seja responsiva e tenha uma aparência agradável em dispositivos de diferentes tamanhos.
Feito com styled components (Combinado previamente)

## Parte 6: Performance e Otimização
### Pergunta: Como você abordaria a otimização de desempenho em um aplicativo React Native que faz várias chamadas de API usando o Axios? Mencione algumas práticas recomendadas.
O ideal é armazenar em cache ou em dados persistentes o resultado da chamada da API. No meu caso, foram armazenados em estados do Zustand, e as funções de fetch só são chamadas quando o app carrega pela primeira vez, mais precisamente ao sair da tela de boas vindas. No entanto, se precisasse refazer a chamada toda vez que uma tela é carregada, e o dado não necessariamente muda em tempo real na API, uma boa abordagem seria utilizar o hook "useMemo"

## Parte 7: Conclusão
### Pergunta: Descreva um desafio que você enfrentou no desenvolvimento React Native utilizando o Axios e como o superou.
Não há muitos desafios ao implementar o axios no react native, apesar de se diferenciar um pouco das chamadas no ambiente web, uma vez que a questão de performance deve ser mais observada. Foi um projeto no meu ver relativamente simples, apesar de estar desacostumado a desenvolver no CLI do React Native (utilizo mais o Expo)

