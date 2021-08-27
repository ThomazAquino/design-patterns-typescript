# Builder

Separate the construction of a complex object (Like and object with a big constructor, composite objects, object that ivolve algorithm in the creation) from its representation so that the same construction process can create different representations.

Builder yield objects whose only responsibilities are creatingother objects.

Separate of the code that craetes of the code that uses the object.

---

* O padrão sugere a separação do código que cria e o código que usa o objeto
* Trata da criação de objetos complexos (complexos de verdade), como:
  - Objetos com construtores muito complexos
  - Objetos compostos de vários objetos (composite)
  - Objetos com algoritmo de criação complexo

Além disso, o padrão também:

- Permite a criação de um objeto em etapas
- Permite method chaining (encadeamento de métodos)
- Permite que o objeto final varie em dados e tipo

---

## Aplicabilidade

Use o Builder quando:

- Use o Builder quando a criação do objeto se torna complexa
- Use o Builder quando quiser que o código seja capaz de gerar diferentes representações do mesmo objeto

## Consequências

O que é bom ou ruim no Builder:

**Bom:**
- Separa criação de utilização de objetos
- O cliente não precisa criar objetos diretamente
- O mesmo código pode construir objetos diferentes
- Ajuda na aplicação dos princípios SRP e OCP

**Ruim:**

- O código final pode se tornar muito complexo