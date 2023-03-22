# O que são padrões de projeto?

- Solução para problema recorrente no código
- Soluções documentadas para erros recorrentes
- Padrão GOF (a gangue dos 4) = Livro que documenta 23 padrões de projeto
- Resolve um problema específico

# Principio SOLID

- S = Principio da responsabilidade unica:

Uma classe deve ter um objetivo unico, por exemplo: uma classe Produto tem uma regra para calcular o frete do produto, se mudar a regra do calculo voce tem apenas uma responsabilidade, que é calcular o frete do produto :check:

- O = Aberto para extensão/ fechado para modificação (open/closed)

Alterar classes que estão relacionadas com outras, podem quebrar o codigo
Se precisar adicionar novas funções a classe, criar uma nova classe e importar a classe anterior

- L = Principio da substituição de Liskov

Uma classe devirada pode ser substituivel por sua classe base

- I =
- D =

## O que são principios?

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

# Links de apoio

- https://refactoring.guru/design-patterns
