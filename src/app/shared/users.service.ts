import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: any[] = [
    {
      name: 'Emily',

      profile_pic: 'https://randomuser.me/api/portraits/women/65.jpg',

      active: true,

      posts: [
        {
          post_id: 1,
          post_link:
            'https://1.bp.blogspot.com/-dtvFFZQ2OTE/YPLdL3iKodI/AAAAAAAAkC8/HuAsGot_sI0QAzp9kqZmxHu6yZwjssOHQCLcBGAsYHQ/s16000/Alone%2BBoy%2BText%2BDP.jpg',
          post_time: '2023-04-26T14:30:00.000Z',
          caption:
            'Cuddle time with my furry best friend! #catsofinstagram #caturday',
        },

        {
          post_id: 2,
          post_link:
            'https://wallpapers.com/images/hd/aesthetic-cute-profile-pictures-736-x-920-u3xrdi8hr2vrsncq.jpg',
          post_time: '2023-04-25T09:15:00.000Z',
        },

        {
          post_id: 3,
          post_link: 'https://loremflickr.com/1200/800?random=178',
          post_time: '2023-04-24T18:45:00.000Z',
        },
      ],
    },

    {
      name: 'Alex',

      profile_pic: 'https://randomuser.me/api/portraits/men/42.jpg',

      active: false,

      posts: [
        {
          post_id: 1,
          post_link:
            'https://wallpapers.com/images/hd/aesthetic-cute-profile-pictures-736-x-920-u3xrdi8hr2vrsncq.jpg',
          post_time: '2023-04-26T08:00:00.000Z',
          caption: 'Just enjoying the simple pleasures in life. #catlife #cozy',
        },

        {
          post_id: 2,
          post_link: 'https://loremflickr.com/1200/800?random=123',
          post_time: '2023-04-23T11:30:00.000Z',
        },
      ],
    },

    {
      name: 'Sarah',

      profile_pic: 'https://randomuser.me/api/portraits/women/87.jpg',

      active: true,

      posts: [
        {
          post_id: 1,
          post_link:
            'https://media.istockphoto.com/id/911301272/vector/playing-golf-wih-the-stars-vector-illustration.jpg?s=612x612&w=0&k=20&c=6okFBkBb758PjBVyvqKD7gA3795TCcZcnyResbzTvkM=',
          post_time: '2023-04-25T17:00:00.000Z',
          caption: 'To infinity and beyond',
        },
        {
          post_id: 2,
          post_link: 'https://loremflickr.com/1200/800?random=258',
          post_time: '2023-04-23T08:45:00.000Z',
        },

        {
          post_id: 3,
          post_link: 'https://loremflickr.com/1200/800?random=159',
          post_time: '2023-04-22T12:15:00.000Z',
        },
      ],
    },

    {
      name: 'David',

      profile_pic: 'https://randomuser.me/api/portraits/men/18.jpg',

      active: true,

      posts: [
        {
          post_id: 1,
          post_link:
            'https://images.unsplash.com/photo-1510200235188-4088c8a62f05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          post_time: '2023-04-26T10:30:00.000Z',
          caption:
            'This is what pure happiness looks like. #catlove #felinefriendship',
        },

        {
          post_id: 2,
          post_link: 'https://loremflickr.com/1200/800?random=486',
          post_time: '2023-04-24T20:00:00.000Z',
        },
      ],
    },
  ];
  constructor() {}
}
