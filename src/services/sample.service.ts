import {
  BadRequestException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { errorResponse, successResponse } from '../constants/response';

@Injectable()
export class SampleService {
  constructor() {}

  async test(data: any): Promise<any> {
    try {
      return successResponse(null, 'success', 200);
    } catch (error) {
      return errorResponse(error);
    }
  }
}
