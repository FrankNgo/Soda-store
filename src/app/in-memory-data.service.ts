import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const sodas = [
      { id: 11, name: 'Coke' },
      { id: 12, name: 'Fanta' },
      { id: 13, name: 'Sprite' },
      { id: 14, name: 'Pepsi' },
      { id: 15, name: 'Root Beer' },
      { id: 16, name: 'Ginger Ale' },
      { id: 17, name: '7UP' },
      { id: 18, name: 'Lemonade' },
      { id: 19, name: 'Mtn.Dew' },
      { id: 20, name: 'Cream Soda' }
    ];
    return {sodas};
  }
}
