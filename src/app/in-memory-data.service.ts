import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const sodas = [
      { id: 11, name: 'Coke', quantity: 157,background: 'https://thelibrarylife.files.wordpress.com/2012/09/twitter-background7.png' },
      { id: 12, name: 'Fanta', quantity: 165,background: 'http://obchod.activa.cz/public/images/5748/45748/0502_3002040m.jpg' },
      { id: 13, name: 'Sprite', quantity: 34,background:  'https://image.ec21.com/image/beveragesdirect/oimg_GC09099790_CA09099809/Fanta-Sprite-Soft-Drink-330cl-Can--24-Per-Case.jpg'},
      { id: 14, name: 'Pepsi', quantity: 391,background:  'https://4.imimg.com/data4/ZZ/ZZ/GLADMIN-/wp-content-uploads-2015-08-pepsi-can-250x250.jpg'},
      { id: 15, name: 'Root Beer', quantity: 719,background:  'https://www.fingereze.com/78-home_default/aw-root-beer-can-hidden-diversion-safe.jpg'},
      { id: 16, name: 'Ginger Ale', quantity: 64,background:  'http://www.crowncoffee.net/assets/images/208402_sk_lg.jpg'},
      { id: 17, name: '7UP', quantity: 37,background:  'https://5.imimg.com/data5/KB/CI/MY-41081178/7up-330ml-250x250.jpg'},
      { id: 18, name: 'Lemonade', quantity: 44,background:  'https://images.chickadvisor.com/item/34646/large/default.jpg'},
      { id: 19, name: 'Mtn.Dew', quantity: 12,background:  'https://www.officerock.com/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/M/o/MountainDew355mlCan.jpg'},
      { id: 20, name: 'Cream Soda', quantity: 92,background:  'https://www.mykholls.com/image/cache/data/TRADE/S1W102325-250x250.jpg'}
    ];
    return {sodas};
  }
}
