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
                console.log("*"+index);
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
        },
        {
            "title":"Antecedentes laborales",
            "content":[
                {
                    "logo": "image.png",
                    "empresa": "Universidad B",
                    "cargo": "Docente",
                    "fecha": [
                        "Agosto, 2013",
                        "Diciembre, 2018"
                    ],
                    "descripción": "lorem ipsum"
                },
                {
                    "logo": "image.png",
                    "cargo": "Desarrollador freelance",
                    "fecha": "Enero 2016",
                    "descripción": "Proyecto desarrollado en Android Studio de forma Nativ"
                }
            ]
        },
        {
            "title":"Antecedentes académicos",
            "content":[
                {
                    "título": "Ingeniero en informática",
                    "universidad": {
                        "nombre": "Universidad x",
                        "logo": "image.png"
                    },
                    "fecha": "Octubre 2013"
                }
            ]
        }
    ];

    processCv(cv);
}