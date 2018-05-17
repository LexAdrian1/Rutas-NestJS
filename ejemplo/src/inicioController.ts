import {Controller, Get, Req, Res} from "@nestjs/common";
//Variable FileReader
const fs = require('fs')
//Decorator
@Controller()
export class InicioController {

    @Get('Home')
    mostrarHome(@Req() request, @Res() response){

        let inicioHTML = '<!DOCTYPE html><head><title>RouteNestJS</title></head>';

        fs.readFile(__dirname + '/html/header.html', "utf8", (err, data)=>{
            if(err && data.length == 0){
                console.log("Header: " + data.length);
                return response
                    .status(500)
                    .send("Error");
            }else{
                inicioHTML += data;
                fs.readFile(__dirname + '/html/contenido.html', "utf8", (err, data)=>{
                    if(err && data.length == 0){
                        console.log("Contenido: " + data.length);
                        return response
                            .status(500)
                            .send("Error");
                    }else{
                        inicioHTML += data;
                        fs.readFile(__dirname + '/html/footer.html', "utf8", (err, data)=>{
                            if(err && data.length == 0){
                                console.log("Footer: " + data.length);
                                return response
                                    .status(500)
                                    .send("Error");
                            }else{
                                inicioHTML += data;
                                return response.status(200).send(inicioHTML);
                            }
                        });
                    }
                });
            }
        });
    }
}