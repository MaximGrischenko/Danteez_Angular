import {InMemoryDbService} from "angular-in-memory-web-api";

export class DataProvider implements InMemoryDbService {
  createDb() {
    const user = [{
      id: 4,
      firstName: 'Maximillian',
      lastName: 'Beekeeper',
      url: './assets/images/avatar.jpg',
      email: 'adz.agency@gmail.com',
      token: 'af93ad57faef92b99c07cfd99d4623661f187643'
    }];
    const users = [
      {
        id: 1,
        firstName: 'Dennis',
        lastName: 'Adams',
        url: './assets/images/Dennis_Adams.jpg',
        position: 'Dentist (Practice Owner)',
        city: 'London',
        country: 'England'
      },
      {
        id: 2,
        firstName: 'Mary',
        lastName: 'Carpenter',
        url: './assets/images/Mary_Carpenter.jpg',
        position: 'Dentist (Practice Owner)',
        city: 'Belgrade',
        country: 'Serbia'
      },
      {
        id: 3,
        firstName: 'Danielle',
        lastName: 'Salazar',
        url: './assets/images/Danielle_Salazar.jpg',
        position: 'Dentist (Practice Owner)',
        city: 'Paris',
        country: 'France'
      }
    ];
    const companies = [
      {
        id: 1,
        companyName: 'Company Name',
        url: './assets/images/Manufacturer_Company.jpg',
        activity: 'Manufacturer',
        city: 'Belgrade',
        country: 'Serbia'
      },
      {
        id: 2,
        companyName: 'Company Name',
        url: './assets/images/ServiceProvider_Company.jpg',
        activity: 'Service Provider',
        city: 'New York',
        country: 'USA'
      },
      {
        id: 3,
        companyName: 'Company Name',
        url: './assets/images/Supplier_Company.jpg',
        activity: 'Supplier',
        city: 'London',
        country: 'England'
      },
    ];
    const products = [
      {
        id: 1,
        productName: 'Product Name',
        url: './assets/images/Child_Dentist.jpg',
        description: 'Product Short Description. The quick brown fox jumps over the lazy dog.'
      },
      {
        id: 2,
        productName: 'Product Name',
        url: './assets/images/Cosmetology_Dentist.jpg',
        description: 'Product Short Description. The quick brown fox jumps over the lazy dog.'
      }
    ];
    const advertisements = [
      [
        {
          id: 1,
          url: './assets/images/banner_three_stars.jpg'
        },
        {
          id: 2,
          url: './assets/images/banner_medical_center.jpg'
        }
      ],
      [
        {
          id: 3,
          url: './assets/images/banner_hottest_trends.jpg'
        },
        {
          id: 4,
          url: './assets/images/banner_providence.jpg'
        },
        {
          id: 5,
          url: './assets/images/banner_spodak.jpg'
        }
      ]
    ];

    return {user, users, companies, products, advertisements}
  }
}
