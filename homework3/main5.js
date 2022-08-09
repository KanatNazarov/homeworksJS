//first task
const mass1 =[1,2,1244,12];
const mass2 =[1,2,123,5,312];
const mass3 =[1,2,1,4,5,12];
const mass4 =[1,2,14,5,5];
const mass5=[1,2,3];
const mainmassive=[...mass1,...mass2,...mass3,...mass4,...mass5];
console.log(mainmassive);

//second task

const firstobject={
    key1:{
        id: "kanat"
    },
    key2:{
        id:"Nazarov"
    },
    key3:{
        id:"lives in Bishkek"
    },
    key4:{
        id:"goes to Geektech"
    },
    key5:{
        id:"183cm of height"
    },
}
const secondObject ={
    ...firstobject,
    key6:{
        id:"doesn't have a family"
    },
    key7:{
        id:"either a wife"
    },
    key8:{
        id:"and children"
    },
}
console.log(secondObject)

//task3

const button= document.getElementById("btn");
const input =document.getElementById('name');
const container =document.querySelector('.container');
const main= document.createElement("h1");
const deleteAll =document.getElementById('reset');
button.onclick = ()=>{
    if (input.value !== ""){
        input.placeholder = "Name,surname,please.."
        main.innerText ="HELLO " +input.value;
        input.value = "";
        

    }else {
        input.placeholder = "напишите имя"
        input.value = "";


    }
    container.append(main);
}
deleteAll.onclick = () =>{
    main.remove()
    main.innerText = ""
}

