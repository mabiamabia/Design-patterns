# O que são padrões de projeto?

- Solução para problema recorrente no código
- Soluções documentadas para erros recorrentes
- Padrão GOF (a gangue dos 4) = Livro que documenta 23 padrões de projeto
- Resolve um problema específico

# Principio - SOLID

- S = Principio da responsabilidade unica:

Uma classe deve ter um objetivo unico, por exemplo: uma classe Produto tem uma regra para calcular o frete do produto, se mudar a regra do calculo voce tem apenas uma responsabilidade, que é calcular o frete do produto :check:

- O = Aberto para extensão/ fechado para modificação (open/closed)

Alterar classes que estão relacionadas com outras, podem quebrar o codigo
Se precisar adicionar novas funções a classe, criar uma nova classe e importar a classe anterior

- L = Principio da substituição de Liskov

Uma classe devirada pode ser substituivel por sua classe base

- I = Interface Segregation Principle (Principio da segregação de interface)

  Classe não devem ser forçadas a depender de metodos que elas não usam

- D = Dependency Inversion Principle (principio de inversão de dependencia)

  Modulos de alto nivel nao devem depender de modulos de baixo nivel, ambos devem depender de abstrações,
  abstrações não devem depender de detalhes

## O que são princípios?

- Principios são verdades universais (que nunca mudam) por exemplo leis da fisicas já comprovadas
- Boas práticas

### Principio da abstração

- Não deixar o código engessado
- Separar/Modularizar
- ORM fazem abstrações padrão para trabalhar com classes e banco de dados
- Codigos flexiveis/que aceitam modificações

### Princípio DRY

- Não repetir o código
- Reutilizar código
- Codigo limpo e leve

# Origem - Design Patterns

- Surgiu através de um livro de padrões de arquitetura e construção civil (anos 70)
- Foi compilado em livro pela gangue dos quatro GOF (anos 90)
- No livro possui 23 padrões de projeto
- O Livro possui: o nome do padrão | Problema ue ele soluciona | e a Solução aplicada

# Tipos de padrão

- Criacional
- Estrutural
- Comportamental

## Criacional

Criação de objetos flexiveis e reutilizaveis. exemplo: new

### Factory Method:
- Deve substituir as chamadas diretas(new), de construção de objetos da classe, para um metodo intermediario que fará o papel de fábrica
- A fábrica controla como criar os objetos que estendem a classe e serão instanciados
- Os objetos retornados sao chamados de produtos ou classes concretas
- Exemplo: classe Veiculo que implementa a interface Transporte e as subclasses concretas(carros, motos, bicicletas) que herdam de Veiculo e implementam os metodos declarados na interface
- Limitação: se as subclasses retornarem valores diferentes, precisam compartilhar a mesma classe ou interface base



### Estrutural

Define como trabalhar com objetos e classes em estruturas complexas, tornando mais eficientes

### Comportamental

Trabalham com comunicação eficiente entre os objetos

### Caracteristicas de um padrão

- Encapsulamento
- Generalidade
- Equilibro
- Abstração
- Abertura
- Combinatorio

# Links de apoio

- https://refactoring.guru/design-patterns
