// criar uma let estudante

let student = prompt("Digite o nome do aluno.")

let n1 = prompt("Digite a nota da primeira prova")
let n2 = prompt("Digite a nota da segunda prova")

//calcular a media
let media = (Number(n1)+ Number(n2) /2)

media = media.toFixed(2) //toFixed(2) - apenas duas casas decimais 
let result = media > 7

if(result){
  alert("Parabéns, " + student + (". Sua média foi: ") + media)

}else{
  alert(student + " . Infelizmente sua média não foi o suficiente para passar. " + media)
}

