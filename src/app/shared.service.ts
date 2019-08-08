import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public dataList = [{
    name: 'Operator A',
    id: 'OP01',
    data: [
      { prefix: '1', cost: '0.9' },
      { prefix: '268', cost: '5.1' },
      { prefix: '46', cost: '0.17' },
      { prefix: '4620', cost: '0.0' },
      { prefix: '468', cost: '0.15' },
      { prefix: '4631', cost: '0.15' },
      { prefix: '4673', cost: '0.9' },
      { prefix: '46732', cost: '1.1' }
    ]
  },
  {
    name: 'Operator B',
    id: 'OP02',
    data: [
      { prefix: '1', cost: '0.92' },
      { prefix: '44', cost: '0.5' },
      { prefix: '46', cost: '0.2' },
      { prefix: '467', cost: '1.0' },
      { prefix: '48', cost: '1.2' },
    ]
  }];
  constructor() { }
}
