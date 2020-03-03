"use strict";

main();

function processCv(cv){
    for(let section of cv){
        console.log("----------------------");
        console.log(section.title);
        console.log("----------------------");
        
        processContent(section.content);
    }
}

function processContent(content){
    if(typeof content === "string"){
        console.log(content);
    }else{
        for(let index in content){
            if(isNaN(index)){
                console.log(index);
            }
            processContent(content[index]);
        } 
    }
}

function main(){
    var cv = [
        {
            "title": "Antecedentes personales",
            "content":{
                "nombre": "Ricardo Soto Pérez",
                "títulos":[
                    "x", "y", "z"
                ]
            }
        },
        {
            "title": "Resumen profesional",
            "content": "Este es mi resumen profesional"
        },
        {
            "title": "Repositorios",
            "content": [
                "URL github",
                "URL gitlab"
            ]
        }
    ];

    processCv(cv);
}