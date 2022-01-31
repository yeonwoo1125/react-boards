const postList = [
  {
    "no": 1,
    "title": "ù��° �Խñ��Դϴ�.",
    "content": "ù��° �Խñ� �����Դϴ�.",
    "createDate": "2020-10-25",
    "readCount": 6
  },
  {
    "no": 2,
    "title": "�ι�° �Խñ��Դϴ�.",
    "content": "�ι�° �Խñ� �����Դϴ�.",
    "createDate": "2020-10-25",
    "readCount": 5
  },
  {
    "no": 3,
    "title": "����° �Խñ��Դϴ�.",
    "content": "����° �Խñ� �����Դϴ�.",
    "createDate": "2020-10-25",
    "readCount": 1
  },
  {
    "no": 4,
    "title": "�׹�° �Խñ��Դϴ�.",
    "content": "�׹�° �Խñ� �����Դϴ�.",
    "createDate": "2020-10-25",
    "readCount": 2
  },
  {
    "no": 5,
    "title": "�ټ���° �Խñ��Դϴ�.",
    "content": "�ټ���° �Խñ� �����Դϴ�.",
    "createDate": "2020-10-25",
    "readCount": 4
  },
];

const getPostByNo = no => {
  const array = postList.filter(x => x.no == no);
  if (array.length == 1) {
    return array[0];
  }
  return null;
}

export {
  postList,
  getPostByNo
};