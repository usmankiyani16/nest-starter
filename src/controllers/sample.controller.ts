import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SampleService } from 'src/services/sample.service';

@ApiTags('Sapmle')
@Controller('Sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get('/get')
  async sample(data: any) {
    return this.sampleService.test(data);
  }
}
