
var saldo = 5000


var opcion = prompt("ingrese una opcion a realizar: 1-retirar 2-ingresar 3-Saldo 4-enviar")

switch(opcion){
    case "1":
        var retirar = parseFloat(prompt("¿canto desea retirar?"))

        if(retirar<=saldo){
        console.log("puede retirar cash$$")
        alert("puede retirar dinero")
        saldo = saldo - retirar
        }else{
            alert("espera a principio de mes su saldo es:" + saldo)
        }

        break
    case "2":
        console.log("ingresar dinero")
        alert("puede ingresar dinero")

        var bolsillo = parseFloat(prompt("ingrese dinero"))
        saldo = saldo + bolsillo

        break
    case "3":
        console.log("Consultar Saldo")
        alert("Su saldo es:" + saldo)

        break
    case "4":
        //console.log("enviar dinero")
        alert("puede enviar dinero a: ")
        var retirar = parseFloat(prompt("igrese dinero a enviar"))
       
    
        if(retirar<=saldo)
      
        saldo= saldo - retirar
   
        
    else{
        alert("espera a principio de mes su saldo es:" + saldo)
    }
   
        break
    default:
        console.log("no ha elegido ninguna opcion")
        break

}


alert("Su saldo actual es: " + saldo)







