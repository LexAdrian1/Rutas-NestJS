import {Controller, Get, Req, Res} from "@nestjs/common";

@Controller()
export class InicioController {

    @Get('Home')
    respuesta(@Req() request, @Res() response) {
        return response.status(200)
    }
}