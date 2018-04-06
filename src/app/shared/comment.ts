export interface CommentPreview {
  id: number;
  postId: number;
  text: string;
  parentId: number;
  totalChildren: number;
  depth: number;
  votes: number;
}

export interface Comment {
  id: number;
  postId: number;
  text: string;
  parentId: number;
  totalChildren: number;
  children: Comment[];
  depth: number;
  votes: number;
}

interface CommentModel {
  id: number;
  postId: number;
  text: string;
  parentId: number;
  totalChildren: number;
  children: number[];
  depth: number;
  votes: number;
}

export const COMMENTS: CommentModel[] = [
  {
    "postId": 2,
    "id": 1,
    "text": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 1
  },
  {
    "postId": 3,
    "id": 2,
    "text": "vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 0
  },
  {
    "postId": 3,
    "id": 3,
    "text": "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 1
  },
  {
    "postId": 4,
    "id": 4,
    "text": "veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias",
    "parentId": -1,
    "totalChildren": 2,
    "children": [5, 6],
    "depth": 0,
    "votes": 5
  },
  {
    "postId": 4,
    "id": 5,
    "text": "doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut",
    "parentId": 4,
    "totalChildren": 0,
    "children": [],
    "depth": 1,
    "votes": 10
  },
  {
    "postId": 4,
    "id": 6,
    "text": "qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 1,
    "votes": 1
  },
  {
    "postId": 5,
    "id": 7,
    "text": "deleniti aut sed molestias explicabo\ncommodi odio ratione nesciunt\nvoluptate doloremque est\nnam autem error delectus",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 0
  },
  {
    "postId": 6,
    "id": 8,
    "text": "tempora voluptatem est\nmagnam distinctio autem est dolorem\net ipsa molestiae odit rerum itaque corporis nihil nam\neaque rerum error",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 0
  },
  {
    "postId": 6,
    "id": 9,
    "text": "consequuntur quia voluptate assumenda et\nautem voluptatem reiciendis ipsum animi est provident\nearum aperiam sapiente ad vitae iste\naccusantium aperiam eius qui dolore voluptatem et",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 0
  },
  {
    "postId": 8,
    "id": 10,
    "text": "quod minus alias quos\nperferendis labore molestias quae ut ut corporis deserunt vitae\net quaerat ut et ullam unde asperiores\ncum voluptatem cumque",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 15
  },
  {
    "postId": 9,
    "id": 11,
    "text": "voluptatem ut possimus laborum quae ut commodi delectus\nin et consequatur\nin voluptas beatae molestiae\nest rerum laborum et et velit sint ipsum dolorem",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 14
  },
  {
    "postId": 9,
    "id": 12,
    "text": "qui sunt commodi\nsint vel optio vitae quis qui non distinctio\nid quasi modi dicta\neos nihil sit inventore est numquam officiis",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 0
  },
  {
    "postId": 9,
    "id": 13,
    "text": "ipsum odio harum voluptatem sunt cumque et dolores\nnihil laboriosam neque commodi qui est\nquos numquam voluptatum\ncorporis quo in vitae similique cumque tempore",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 1
  },
  {
    "postId": 11,
    "id": 14,
    "text": "et ipsa rem ullam cum pariatur similique quia\ncum ipsam est sed aut inventore\nprovident sequi commodi enim inventore assumenda aut aut\ntempora possimus soluta quia consequatur modi illo",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 0
  },
  {
    "postId": 11,
    "id": 15,
    "text": "perferendis eaque labore laudantium ut molestiae soluta et\nvero odio non corrupti error pariatur consectetur et\nenim nam quia voluptatum non\nmollitia culpa facere voluptas suscipit veniam",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 0
  },
  {
    "postId": 12,
    "id": 16,
    "text": "cumque molestiae officia aut fugiat nemo autem\nvero alias atque sed qui ratione quia\nrepellat vel earum\nea laudantium mollitia",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 21
  },
  {
    "postId": 12,
    "id": 17,
    "text": "error eum quia voluptates alias repudiandae\naccusantium veritatis maiores assumenda\nquod impedit animi tempore veritatis\nanimi et et officiis labore impedit blanditiis repudiandae",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 0
  },
  {
    "postId": 13,
    "id": 18,
    "text": "aut eligendi et molestiae voluptatum tempora\nofficia nihil sit voluptatem aut deleniti\nquaerat consequatur eaque\nsapiente tempore commodi tenetur rerum qui quo",
    "parentId": -1,
    "totalChildren": 2,
    "children": [19],
    "depth": 0,
    "votes": 30
  },
  {
    "postId": 13,
    "id": 19,
    "text": "sed illum quis\nut aut culpa labore aspernatur illo\ndolorem quia vitae ut aut quo repellendus est omnis\nesse at est debitis",
    "parentId": 18,
    "totalChildren": 1,
    "children": [20],
    "depth": 1,
    "votes": 0
  },
  {
    "postId": 13,
    "id": 20,
    "text": "qui debitis vitae ratione\ntempora impedit aperiam porro molestiae placeat vero laboriosam recusandae\npraesentium consequatur facere et itaque quidem eveniet\nmagnam natus distinctio sapiente",
    "parentId": 19,
    "totalChildren": 0,
    "children": [],
    "depth": 2,
    "votes": 0
  },
  {
    "postId": 14,
    "id": 21,
    "text": "omnis aliquam praesentium ad voluptatem harum aperiam dolor autem\nhic asperiores quisquam ipsa necessitatibus suscipit\npraesentium rem deserunt et\nfacere repellendus aut sed fugit qui est",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 0
  },
  {
    "postId": 20,
    "id": 22,
    "text": "at ut tenetur rem\nut fuga quis ea magnam alias\naut tempore fugiat laboriosam porro quia iure qui\narchitecto est enim",
    "parentId": -1,
    "totalChildren": 0,
    "children": [],
    "depth": 0,
    "votes": 0
  },
  {
    "postId": 20,
    "id": 23,
    "text": "eum itaque quam\nlaboriosam sequi ullam quos nobis\nomnis dignissimos nam dolores\nfacere id suscipit aliquid culpa rerum quis",
    "parentId": -1,
    "totalChildren": 4,
    "children": [24],
    "depth": 0,
    "votes": 0
  },
  {
    "postId": 20,
    "id": 24,
    "text": "est ducimus voluptate saepe iusto repudiandae recusandae et\nsint fugit voluptas eum itaque\nodit ab eos voluptas molestiae necessitatibus earum possimus voluptatem\nquibusdam aut illo beatae qui delectus aut officia veritatis",
    "parentId": 23,
    "totalChildren": 3,
    "children": [25],
    "depth": 1,
    "votes": 0
  },
  {
    "postId": 20,
    "id": 25,
    "text": "ex et expedita cum voluptatem\nvoluptatem ab expedita quis nihil\nesse quo nihil perferendis dolores velit ut culpa aut\ndolor maxime necessitatibus voluptatem",
    "parentId": 24,
    "totalChildren": 2,
    "children": [26],
    "depth": 2,
    "votes": 0
  },
  {
    "postId": 20,
    "id": 26,
    "text": "aut quam consequatur sit et\nrepellat maiores laborum similique voluptatem necessitatibus nihil\net debitis nemo occaecati cupiditate\nmodi dolorum quia aut",
    "parentId": 25,
    "totalChildren": 1,
    "children": [27],
    "depth": 3,
    "votes": 0
  },
  {
    "postId": 20,
    "id": 27,
    "text": "architecto dolorem ab explicabo et provident et\net eos illo omnis mollitia ex aliquam\natque ut ipsum nulla nihil\nquis voluptas aut debitis facilis",
    "parentId": 26,
    "totalChildren": 0,
    "children": [],
    "depth": 4,
    "votes": 0
  }
];