/*
  Os atributos nomes, idade e especie são todos necessários. Assim, usando Try e Catch trate os erros e apresente uma mensagem de erro quando houve atributos vazios.
*/

class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrarAtributos(){
    return this.atributos();
  } 
  mostrar(){
    try{
        return this.atributos();
    } 
    catch (erro) {
        console.log(erro.name)
    }
}
  atributos() {
    
      if (this.nome != "" && this.idade != "" && this.especie){
      return this.nome + this.sobrenome 
      }
      else{
          throw new Error("Erro")
      }
      }
    
  }


const meuAnimal = new Animal("", 3, "cachorro");
const atributos = meuAnimal.mostrarAtributos();

// Imprimindo os atributos
console.log(atributos.nome);   
console.log(atributos.idade);  
console.log(atributos.especie); 

