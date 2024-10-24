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

export const USER_TYPE = {
  WORKER: 'worker',
  COMPANY: 'company',
} as const;

export const MATCHING_STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  MATCH: 'match',
  REJECT: 'reject',
} as const;

export const WORKER_DATA: Worker[] = [
  {
    id: 1,
    image: WorkerImage1,
    name: '임나영',
    category: '프로덕트 디자이너 | 6년차',
    region: '서울시 강동구',
    description: '소프트웨어 개발자로, 인공지능 관련 프로젝트에 참여 중입니다.',
  },
  {
    id: 2,
    image: WorkerImage2,
    name: '정은채',
    category: '편집 디자이너 | 3년차',
    region: '서울시 강서구',
    description: '한식 전문 요리사로, 다양한 전통 요리를 연구하고 있습니다.',
  },
  {
    id: 3,
    image: WorkerImage1,
    name: '박철수',
    category: '교육 | 2년차',
    region: '서울시 강북구',
    description: '중학교 과학 교사로, 학생들에게 흥미로운 실험을 가르치고 있습니다.',
  },
  {
    id: 4,
    image: WorkerImage2,
    name: '최지은',
    category: '패션 | 8년차',
    region: '서울시 동작구',
    description: '패션 디자이너로, 지속 가능한 패션에 집중하고 있습니다.',
  },
];
