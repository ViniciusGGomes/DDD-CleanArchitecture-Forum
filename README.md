# Fórum – Core da Aplicação

## Visão geral
Segunda etapa do projeto(migrando essa codebase para Nest) https://github.com/ViniciusGGomes/Nest-Forum-Clean 

Este repositório contém o **core da aplicação de um fórum**, desenvolvido com foco total nas **regras de negócio** e na **modelagem do domínio**, sem dependência de frameworks, banco de dados ou qualquer detalhe de infraestrutura.

O objetivo desta primeira etapa é construir uma base sólida, desacoplada e testável, que possa ser reutilizada em qualquer linguagem, framework ou ambiente.

---

## Abordagem arquitetural

O projeto foi desenvolvido combinando **Domain-Driven Design (DDD)** com **Clean Architecture**, utilizando essas abordagens de forma complementar.

Nesta fase, o desenvolvimento se concentra apenas nas **duas primeiras camadas da Clean Architecture**:
<img width="772" height="567" alt="Image" src="https://github.com/user-attachments/assets/9dcdefa4-597b-46af-b0d6-725abb36f12f" />

### Enterprise (Domain)

Responsável por:

* Entidades
* Value Objects
* Aggregates e Aggregate Roots
* Domain Events
* Regras puras de negócio

Essa camada é totalmente independente de tecnologia.

### Application

Responsável por:

* Casos de uso
* Orquestração das regras de negócio
* Comunicação entre agregados
* Definição de contratos (interfaces)

A camada de aplicação depende apenas de **abstrações**, nunca de implementações concretas.

---

## Princípios aplicados

### SOLID (ênfase no DIP)

O desenvolvimento do core segue os princípios do **SOLID**, com destaque para o **Dependency Inversion Principle (DIP)**:

* O domínio e a camada de aplicação não dependem de implementações
* Dependem apenas de interfaces
* Detalhes externos ficam isolados na infraestrutura

Isso garante:

* Baixo acoplamento
* Alta testabilidade
* Facilidade de manutenção e evolução

---

## Patterns utilizados

Ao longo do projeto, foram aplicados diversos **Design Patterns**:

* **Repository Pattern**
  Abstrai o acesso aos dados, evitando que o domínio conheça detalhes de persistência.

* **In-Memory Repository**
  Implementação usada nos testes, permitindo validar regras de negócio sem banco de dados.

* **Factory Pattern**
  Facilita a criação de entidades e agregados, principalmente em cenários de teste.

* **Watched List**
  Utilizado para monitorar alterações em coleções dentro de um agregado (itens adicionados, removidos ou alterados).

* **Domain Events (Pub/Sub)**
  Permite comunicação entre partes do sistema sem acoplamento direto.

---

## Modelagem do domínio

O domínio foi modelado seguindo conceitos centrais do **DDD**:

* **Aggregates e Aggregate Roots** garantem consistência e encapsulam regras internas
* **Subdomínios** representam partes independentes do sistema

Exemplos de subdomínios:

* Forum
* Notification

---

## Comunicação entre subdomínios

A comunicação entre subdomínios ocorre através de **Domain Events**, seguindo o padrão **publish/subscribe**.

Exemplo no sistema:

* Uma resposta é criada no subdomínio de Forum
* Um evento de domínio é publicado
* O subdomínio de Notification escuta esse evento
* Uma notificação é enviada ao autor da pergunta

Essa abordagem evita acoplamento direto e mantém o sistema modular.

---

## Tratativa de erros

Foi adotado **Functional Error Handling**, inspirado na programação funcional, em vez de `try/catch`.

Benefícios:

* Fluxo de execução previsível
* Erros explícitos nos retornos
* Melhor entendimento das falhas
* Facilidade para testes

---

## Testes

O core da aplicação possui **testes unitários**, garantindo que:

* As regras de negócio funcionam corretamente
* Os casos de uso estão consistentes
* Os Domain Events são disparados e consumidos como esperado

Todos os testes rodam sem dependência de banco de dados ou framework.

---

## Próximos passos

Na próxima etapa do projeto, o core será integrado ao mundo externo, mantendo o domínio intacto:

* Migração para **NestJS**
* Integração com banco de dados
* Sistema de cache
* Camada HTTP (API)
* Infraestrutura

Essa separação garante que o domínio continue estável, independente de decisões tecnológicas.



