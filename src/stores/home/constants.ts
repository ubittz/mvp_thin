import WorkerImage2 from '@@stores/home/images/임나영.png';
import WorkerImage1 from '@@stores/home/images/정은비.png';
import { Worker } from '@@stores/home/type';

export const HOME_TABS = {
  FIND_WORKER: 'findWorker',
  FIND_COMPANY: 'findCompany',
} as const;

export const KEYWORD_BY_HOME_TABS = {
  [HOME_TABS.FIND_WORKER]: '워커',
  [HOME_TABS.FIND_COMPANY]: '기업',
} as const;

export const MEMBER_DATA = [
  {
    name: '김영희',
    phone: '010-1234-5678',
    email: 'kimyounghee@example.com',
    accountNumber: '123-456-7890',
  },
  {
    name: '이민수',
    phone: '010-2345-6789',
    email: 'leeminsu@example.com',
    accountNumber: '234-567-8901',
  },
  {
    name: '박지현',
    phone: '010-3456-7890',
    email: 'parkjihyun@example.com',
    accountNumber: '345-678-9012',
  },
  {
    name: '최준호',
    phone: '010-4567-8901',
    email: 'choijunho@example.com',
    accountNumber: '456-789-0123',
  },
  {
    name: '정다은',
    phone: '010-5678-9012',
    email: 'jeongdaeun@example.com',
    accountNumber: '567-890-1234',
  },
  {
    name: '한상우',
    phone: '010-6789-0123',
    email: 'hansangwoo@example.com',
    accountNumber: '678-901-2345',
  },
  {
    name: '송지민',
    phone: '010-7890-1234',
    email: 'songjimin@example.com',
    accountNumber: '789-012-3456',
  },
  {
    name: '임수정',
    phone: '010-8901-2345',
    email: 'imsoojeong@example.com',
    accountNumber: '890-123-4567',
  },
  {
    name: '고재현',
    phone: '010-9012-3456',
    email: 'gojaehyun@example.com',
    accountNumber: '901-234-5678',
  },
  {
    name: '문채원',
    phone: '010-0123-4567',
    email: 'moonchaewon@example.com',
    accountNumber: '012-345-6789',
  },
];

export const WORKER_DATA: Worker[] = [
  {
    image: WorkerImage1,
    name: '임나영',
    category: '프로덕트 디자이너 | 6년차',
    region: '서울시 강동구',
    description: '소프트웨어 개발자로, 인공지능 관련 프로젝트에 참여 중입니다.',
  },
  {
    image: WorkerImage2,
    name: '정은채',
    category: '편집 디자이너 | 3년차',
    region: '서울시 강서구',
    description: '한식 전문 요리사로, 다양한 전통 요리를 연구하고 있습니다.',
  },
  {
    image: WorkerImage1,
    name: '박철수',
    category: '교육 | 2년차',
    region: '서울시 강북구',
    description: '중학교 과학 교사로, 학생들에게 흥미로운 실험을 가르치고 있습니다.',
  },
  {
    image: WorkerImage2,
    name: '최지은',
    category: '패션 | 8년차',
    region: '서울시 동작구',
    description: '패션 디자이너로, 지속 가능한 패션에 집중하고 있습니다.',
  },
];
