import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() {}

  photo: any[] = [
    {
      post_id: 1,
      post_link:
        'https://www.nomadicmatt.com/wp-content/uploads/2011/09/adventure-1850178_1280.jpg',
      post_time: '2023-04-26T14:30:00.000Z',
      caption:
        'The world is a book and those who do not travel read only one page. - Saint Augustine',
    },

    {
      post_id: 2,
      post_link:
        'https://www.travellersofindia.com/wp-content/uploads/2021/09/Travel_Accessories_for_Men_in_India_TravellersofIndia.com_-scaled.jpg',
      post_time: '2023-04-25T09:15:00.000Z',
      caption:
        "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. - Steve Jobs",
    },

    {
      post_id: 3,
      post_link:
        'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      post_time: '2023-04-10T18:45:00.000Z',
      caption:
        'Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return.- Leonardo da Vinci',
    },

    {
      post_id: 4,
      post_link:
        'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      post_time: '2023-03-30T18:45:00.000Z',
      caption:
        'The sea, once it casts its spell, holds one in its net of wonder forever.- Jacques Yves Cousteau',
    },

    {
      post_id: 5,
      post_link:
        'https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      post_time: '2023-03-15T18:45:00.000Z',
      caption:
        'Scars are not signs of weakness, they are signs of survival and endurance. - Rodney A. Winters',
    },

    {
      post_id: 6,
      post_link:
        'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      post_time: '2023-02-28T18:45:00.000Z',
      caption:
        'The greatest thing in the world is to know how to belong to oneself. - Michel de Montaigne',
    },

    {
      post_id: 7,
      post_link:
        'https://images.pexels.com/photos/1085186/pexels-photo-1085186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      post_time: '2023-02-19T18:45:00.000Z',
      caption:
        'Look deep into nature, and then you will understand everything better.- Albert Einstein',
    },

    {
      post_id: 8,
      post_link:
        'https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      post_time: '2023-01-24T18:45:00.000Z',
      caption:
        "We are all broken, that's how the light gets in. - Ernest Hemingway",
    },
  ];
}
