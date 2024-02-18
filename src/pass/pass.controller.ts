import { Body, Controller, Post } from '@nestjs/common';
import { PassService } from './pass.service';
import { GetPassDTO } from './dto/getpass.dto';

@Controller('pass')
export class PassController {
  constructor(private readonly passService: PassService) {}

  @Post('getPass')
  GetPassController(@Body() data: GetPassDTO) {
    return this.passService.generatePass(data);
  }
}
