import {Controller, Get, Post, Req, Res} from "@nestjs/common";
const fs = require("fs");
@Controller('Preguntas')
export class PreguntasFrecuentesController {

    preguntasFrecuentes  = [];

    @Get('mostrarPreguntas')
    mostrarPregunta(@Req() request, @Res() response) {
        //return response.send(this.preguntasFrecuentes);

        let contenidoHtml = '';
        fs.readFile(
            __dirname + '/html/contenido.html',
            'utf8',
            (error, contenidoDelArchivo) => {
                const nombre = 'Alexis';
                if (error) {
                    return response.send('Error');
                } else {
                    contenidoHtml = contenidoDelArchivo;
                    contenidoHtml = contenidoHtml.replace('{{nombre}}', nombre);
                    contenidoHtml = contenidoHtml.replace('{{pregunta}}', this.preguntasFrecuentes[1]);
                    return response.send(contenidoHtml);
                }
            }
        );
    }

    @Post('nuevaPregunta')
    crearPregunta(@Req() request, @Res() response) {
        const nuevaPregunta = {
            pregunta: request.query.pregunta,
            respuesta: request.query.respuesta,
        };
        this.preguntasFrecuentes.push(nuevaPregunta);
        return response.send(nuevaPregunta);
    }
}
