import { Comment } from './comment';

export interface PostPreview {
  id: number;
  title: string;
  text: string;
  thumbnail: string;
  votes: number;
  totalComments: number;
};

export interface Post {
  id: number;
  title: string;
  text: string;
  thumbnail: string;
  votes: number;
  totalComments: number;
  comments: Comment[];
};

export const HOTPOSTS: PostPreview[] = [
  {
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "text": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "thumbnail": "http://via.placeholder.com/300/9c184f",
    "votes": 10,
    "totalComments": 0
  },
  {
    "id": 2,
    "title": "qui est esse",
    "text": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    "thumbnail": "http://via.placeholder.com/300/afc485",
    "votes": 5,
    "totalComments": 1
  },
  {
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "text": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    "thumbnail": "http://via.placeholder.com/300/4618ad",
    "votes": 0,
    "totalComments": 2
  },
  {
    "id": 4,
    "title": "eum et est occaecati",
    "text": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    "thumbnail": "http://via.placeholder.com/300/79641a",
    "votes": 4,
    "totalComments": 3
  },
  {
    "id": 5,
    "title": "nesciunt quas odio",
    "text": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    "thumbnail": "http://via.placeholder.com/300/bda486",
    "votes": 100,
    "totalComments": 1
  },
  {
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "text": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    "thumbnail": "http://via.placeholder.com/300/cc184d",
    "votes": 6,
    "totalComments": 2
  },
  {
    "id": 7,
    "title": "magnam facilis autem",
    "text": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    "thumbnail": "http://via.placeholder.com/300/faf5f4",
    "votes": 0,
    "totalComments": 0
  },
  {
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "text": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    "thumbnail": "http://via.placeholder.com/300/954f4f",
    "votes": 0,
    "totalComments": 1
  },
  {
    "id": 9,
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "text": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    "thumbnail": "http://via.placeholder.com/300/c1fd4f",
    "votes": 24,
    "totalComments": 3
  },
  {
    "id": 10,
    "title": "optio molestias id quia eum",
    "text": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    "thumbnail": "http://via.placeholder.com/300/4c8abf",
    "votes": 38,
    "totalComments": 1
  },
  {
    "id": 11,
    "title": "et ea vero quia laudantium autem",
    "text": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    "thumbnail": "http://via.placeholder.com/300/bbd41f",
    "votes": 11,
    "totalComments": 2
  },
  {
    "id": 12,
    "title": "in quibusdam tempore odit est dolorem",
    "text": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
    "thumbnail": "http://via.placeholder.com/300/f4b4ad",
    "votes": 19,
    "totalComments": 2
  },
  {
    "id": 13,
    "title": "dolorum ut in voluptas mollitia et saepe quo animi",
    "text": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    "thumbnail": "http://via.placeholder.com/300/84ff41",
    "votes": 31,
    "totalComments": 3
  },
  {
    "id": 14,
    "title": "voluptatem eligendi optio",
    "text": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
    "thumbnail": "http://via.placeholder.com/300/9ffa1f",
    "votes": 85,
    "totalComments": 1
  },
  {
    "id": 15,
    "title": "eveniet quod temporibus",
    "text": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    "thumbnail": "http://via.placeholder.com/300/9fbd11",
    "votes": 15,
    "totalComments": 0
  },
  {
    "id": 16,
    "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    "text": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
    "thumbnail": "http://via.placeholder.com/300/911d11",
    "votes": 12,
    "totalComments": 0
  },
  {
    "id": 17,
    "title": "fugit voluptas sed molestias voluptatem provident",
    "text": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
    "thumbnail": "http://via.placeholder.com/300/144daf",
    "votes": 28,
    "totalComments": 0
  },
  {
    "id": 18,
    "title": "voluptate et itaque vero tempora molestiae",
    "text": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
    "thumbnail": "http://via.placeholder.com/300/fa14c5",
    "votes": 42,
    "totalComments": 0
  },
  {
    "id": 19,
    "title": "adipisci placeat illum aut reiciendis qui",
    "text": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
    "thumbnail": "http://via.placeholder.com/300/944b11",
    "votes": 36,
    "totalComments": 0
  },
  {
    "id": 20,
    "title": "doloribus ad provident suscipit at",
    "text": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
    "thumbnail": "http://via.placeholder.com/300/44cc11",
    "votes": 33,
    "totalComments": 0
  }
];