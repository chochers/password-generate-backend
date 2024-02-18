import { Injectable } from '@nestjs/common';
import { GetPassDTO } from './dto/getpass.dto';

@Injectable()
export class PassService {
  generatePass(data: GetPassDTO) {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (data.includeNumbers) {
      chars += '0123456789';
    }
    if (data.includeSymbols) {
      chars += '!@#$% &*()_+-=[10};:<>?,.';
    }
    let newPas = '';
    for (let i = 0; i < data.length; i++) {
      newPas += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return newPas;
  }
}
