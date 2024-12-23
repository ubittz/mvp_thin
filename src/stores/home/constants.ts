import CompanyImage1 from '@@stores/home/images/company_1.png';
import CompanyImage2 from '@@stores/home/images/company_2.png';
import CompanyImage3 from '@@stores/home/images/company_3.png';
import CompanyImage4 from '@@stores/home/images/company_4.png';
import CompanyImage5 from '@@stores/home/images/company_5.png';
import WorkerImage1 from '@@stores/home/images/worker_1.png';
import WorkerImage2 from '@@stores/home/images/worker_2.png';
import WorkerImage3 from '@@stores/home/images/worker_3.png';
import WorkerImage4 from '@@stores/home/images/worker_4.png';
import WorkerImage5 from '@@stores/home/images/worker_5.png';
import WorkerImage6 from '@@stores/home/images/worker_6.png';
import WorkerImage7 from '@@stores/home/images/worker_7.png';
import { Company, Worker, Member } from '@@stores/home/type';

export const HOME_TABS = {
  FIND_WORKER: 'findWorker',
  FIND_COMPANY: 'findCompany',
} as const;

export const KEYWORD_BY_HOME_TABS = {
  [HOME_TABS.FIND_WORKER]: '워커',
  [HOME_TABS.FIND_COMPANY]: '기업',
} as const;

export const EX_BY_HOME_TABS = {
  [HOME_TABS.FIND_WORKER]: '200만원 내에서 한 달 근무 가능한\n개발 인력을 찾아주세요.',
  [HOME_TABS.FIND_COMPANY]: '200만원 한 달 근무 가능한 개발자 일자리',
};

export const USER_TYPE = {
  WORKER: 'worker',
  COMPANY: 'company',
} as const;

export const MEMBER_DATA: Member[] = [
  {
    id: 2,
    name: '황기철',
    phone: '010-3647-2063',
    email: 'livmecha@naver.com',
    address: '서울시 금천구',
    bankName: '신한은행',
  },
  {
    id: 3,
    name: '김지현',
    phone: '010-9404-4346',
    email: 'jh.kim123@gmail.com',
    address: '경기도 화성시',
    bankName: '국민은행',
  },
  {
    id: 4,
    name: '박수진',
    phone: '010-7211-6489',
    email: 'sujin_park@naver.com',
    address: '부산시 해운대구',
    bankName: '신한은행',
  },
  {
    id: 5,
    name: '이민호',
    phone: '010-3631-5468',
    email: 'minho.lee@nate.com',
    address: '경기도 화성시',
    bankName: '국민은행',
  },
  {
    id: 6,
    name: '최은지',
    phone: '010-4906-4824',
    email: 'eunchi_choi@hanmail.net',
    address: '서울시 마포구',
    bankName: '기업은행',
  },
  {
    id: 7,
    name: '정우혁',
    phone: '010-8816-5192',
    email: 'wookjung@icloud.com',
    address: '인천시 남동구',
    bankName: '국민은행',
  },
  {
    id: 8,
    name: '이서현',
    phone: '010-9799-4810',
    email: 'seohyun.lee@hotmail.com',
    address: '경기도 안산시',
    bankName: '신한은행',
  },
  {
    id: 9,
    name: '남태희',
    phone: '010-4807-7302',
    email: 'taehinamu@gmail.com',
    address: '경기도 성남시',
    bankName: '기업은행',
  },
  {
    id: 10,
    name: '박하늘',
    phone: '010-5257-3354',
    email: 'hanul_park123@naver.com',
    address: '서울시 강서구',
    bankName: '하나은행',
  },
  {
    id: 11,
    name: '이지은',
    phone: '010-2776-9984',
    email: 'jiyunlee@nate.com',
    address: '대전시 대덕구',
    bankName: '기업은행',
  },
  {
    id: 12,
    name: '김민수',
    phone: '010-2113-5003',
    email: 'minsu.kim1985@hanmail.net',
    address: '서울시 동작구',
    bankName: '국민은행',
  },
  {
    id: 13,
    name: '정민재',
    phone: '010-9625-8626',
    email: 'jangminjae@icloud.com',
    address: '서울시 강북구',
    bankName: '국민은행',
  },
  {
    id: 14,
    name: '최원석',
    phone: '010-8239-4929',
    email: 'wonseok.choi@hotmail.com',
    address: '경기도 수원시',
    bankName: '기업은행',
  },
  {
    id: 15,
    name: '김서연',
    phone: '010-8316-9117',
    email: 'seoyeon.kim@outlook.com',
    address: '경기도 안산시',
    bankName: '기업은행',
  },
  {
    id: 16,
    name: '이현우',
    phone: '010-4506-6181',
    email: 'hyunwoo_lee123@gmail.com',
    address: '인천시 부평구',
    bankName: '하나은행',
  },
  {
    id: 17,
    name: '벅소연',
    phone: '010-4154-8080',
    email: 'soyeon.park@naver.com',
    address: '경기도 고양시',
    bankName: '신한은행',
  },
  {
    id: 18,
    name: '이민재',
    phone: '010-6339-4824',
    email: 'minjae_lee@daum.net',
    address: '경기도 화성시',
    bankName: '신한은행',
  },
  {
    id: 19,
    name: '정하윤',
    phone: '010-3897-8841',
    email: 'hayoonjung@hotmail.com',
    address: '부산시 동래구',
    bankName: '신한은행',
  },
  {
    id: 20,
    name: '김수영',
    phone: '010-4949-9098',
    email: 'suyoung.kim@hanmail.net',
    address: '대전시 서구',
    bankName: '기업은행',
  },
  {
    id: 21,
    name: '박진아',
    phone: '010-5494-9072',
    email: 'jina.park1990@gmail.com',
    address: '경기도 화성시',
    bankName: '국민은행',
  },
  {
    id: 22,
    name: '최영식',
    phone: '010-4351-7776',
    email: 'youngsik.choi@outlook.com',
    address: '경기도 용인시',
    bankName: '토스뱅크',
  },
  {
    id: 23,
    name: '이지훈',
    phone: '010-2742-4554',
    email: 'jihoonlee85@nate.com',
    address: '서울시 금천구',
    bankName: '신한은행',
  },
  {
    id: 24,
    name: '김유진',
    phone: '010-5320-4485',
    email: 'yujin.kim@naver.com',
    address: '대전시 유성구',
    bankName: '카카오뱅크',
  },
  {
    id: 25,
    name: '정하늘',
    phone: '010-5535-9560',
    email: 'haneul.jung@daum.net',
    address: '서울시 양천구',
    bankName: '국민은행',
  },
  {
    id: 26,
    name: '이영호',
    phone: '010-9079-7041',
    email: 'youngho.lee123@gmail.com',
    address: '서울시 금천구',
    bankName: '카카오뱅크',
  },
  {
    id: 27,
    name: '박소희',
    phone: '010-8801-1035',
    email: 'sohee_park@outlook.com',
    address: '경기도 부천시',
    bankName: '국민은행',
  },
  {
    id: 28,
    name: '김재영',
    phone: '010-5146-2513',
    email: 'jaeyoung.kim1985@naver.com',
    address: '부산시 사하구',
    bankName: '토스뱅크',
  },
  {
    id: 29,
    name: '이수민',
    phone: '010-9449-6824',
    email: 'suminlee@daum.net',
    address: '서울시 중구',
    bankName: '기업은행',
  },
  {
    id: 30,
    name: '정성훈',
    phone: '010-2649-1341',
    email: 'sunghoon.jung@hotmail.com',
    address: '서울시 송파구',
    bankName: '기업은행',
  },
  {
    id: 31,
    name: '최민혁',
    phone: '010-8138-0071',
    email: 'minhyuk.choi@gmail.com',
    address: '경기도 화성시',
    bankName: '카카오뱅크',
  },
  {
    id: 32,
    name: '이정희',
    phone: '010-3343-2162',
    email: 'junghee.lee123@naver.com',
    address: '서울시 용산구',
    bankName: '카카오뱅크',
  },
  {
    id: 33,
    name: '이인석',
    phone: '010-2935-1078',
    email: 'th_in@naver.com',
    address: '경기도 화성시',
    bankName: '농협은행',
  },
];

export const WORKER_DATA: Worker[] = [
  {
    id: 1,
    image: WorkerImage1,
    name: '김지현',
    category: '2-1-2',
    region: '경기도 화성시',
    description: '창의적인 아이디어로 광고 캠페인을 성공시키는 김지현입니다.',
    salary: 250,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 2,
    image: WorkerImage2,
    name: '박수진',
    category: '3-1-7',
    region: '부산시 해운대구',
    description: '정확한 세무 처리를 자랑하는 박수진입니다.',
    salary: 280,
    period: '1년',
    desiredDay: '즉시',
  },
  {
    id: 3,
    image: WorkerImage3,
    name: '이민호',
    category: '4-1-4',
    region: '경기도 화성시',
    description: '인재 발굴에 열정 가득한 이민호입니다.',
    salary: 250,
    period: '1년',
    desiredDay: '즉시',
  },
  {
    id: 4,
    image: WorkerImage4,
    name: '최은지',
    category: '7-1-9',
    region: '서울시 마포구',
    description: '독창적인 디자인 감각을 가진 최은지입니다.',
    salary: 230,
    period: '3개월',
    desiredDay: '즉시',
  },
  {
    id: 5,
    image: WorkerImage5,
    name: '정우혁',
    category: '8-1-8',
    region: '인천시 남동구',
    description: '글로벌 시장에서 활약하는 정우혁입니다.',
    salary: 320,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 6,
    image: WorkerImage6,
    name: '이서현',
    category: '9-1-1',
    region: '경기도 안산시',
    description: '친절한 상담으로 고객의 마음을 사로잡는 이서현입니다.',
    salary: 220,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 7,
    image: WorkerImage7,
    name: '남태희',
    category: '10-1-5',
    region: '경기도 성남시',
    description: '효율적인 물류 관리를 자랑하는 남태희입니다.',
    salary: 260,
    period: '2개월',
    desiredDay: '즉시',
  },
  {
    id: 8,
    image: WorkerImage1,
    name: '박하늘',
    category: '11-1-4',
    region: '서울시 강서구',
    description: '브랜드 가치를 높이는 박하늘입니다.',
    salary: 300,
    period: '1년',
    desiredDay: '즉시',
  },
  {
    id: 9,
    image: WorkerImage2,
    name: '이지은',
    category: '12-1-3',
    region: '대전시 대덕구',
    description: '혁신적인 연구를 이끄는 이지은입니다.',
    salary: 300,
    period: '1년',
    desiredDay: '즉시',
  },
  {
    id: 10,
    image: WorkerImage3,
    name: '김민수',
    category: '13-1-1',
    region: '서울시 동작구',
    description: '학생들에게 꿈을 심어주는 김민수입니다.',
    salary: 250,
    period: '2개월',
    desiredDay: '즉시',
  },
  {
    id: 11,
    image: WorkerImage4,
    name: '정민재',
    category: '14-1-6',
    region: '서울시 강북구',
    description: '고객의 안전을 책임지는 정민재입니다.',
    salary: 220,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 12,
    image: WorkerImage5,
    name: '최원석',
    category: '6-1-4',
    region: '경기도 수원시',
    description: '데이터로 미래를 예측하는 최원석입니다.',
    salary: 190,
    period: '1개월',
    desiredDay: '즉시',
  },
  {
    id: 13,
    image: WorkerImage6,
    name: '김서연',
    category: '7-1-13',
    region: '경기도 안산시',
    description: '사용자 경험을 최우선으로 하는 김서연입니다.',
    salary: 290,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 14,
    image: WorkerImage7,
    name: '이현우',
    category: '8-1-11',
    region: '인천시 부평구',
    description: '고객의 니즈를 정확히 파악하는 이현우입니다.',
    salary: 310,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 15,
    image: WorkerImage1,
    name: '벅소연',
    category: '9-1-6',
    region: '경기도 고양시',
    description: '고객과의 소통을 즐기는 박소연입니다.',
    salary: 220,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 16,
    image: WorkerImage2,
    name: '이민재',
    category: '3-1-2',
    region: '경기도 화성시',
    description: '세심한 경리 업무로 신뢰를 주는 이민재입니다.',
    salary: 230,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 17,
    image: WorkerImage3,
    name: '정하윤',
    category: '2-1-5',
    region: '부산시 동래구',
    description: '효과적인 디지털 전략으로 브랜드를 성장시키는 정하윤입니다.',
    salary: 250,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 18,
    image: WorkerImage4,
    name: '김수영',
    category: '4-1-9',
    region: '대전시 서구',
    description: '기업과 직원의 가교 역할을 하는 김수영입니다.',
    salary: 300,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 19,
    image: WorkerImage5,
    name: '박진아',
    category: '7-1-12',
    region: '경기도 화성시',
    description: '독창적인 로고로 브랜드 아이덴티티를 만드는 박진아입니다.',
    salary: 230,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 20,
    image: WorkerImage6,
    name: '최영식',
    category: '6-1-11',
    region: '경기도 용인시',
    description: '사용자 친화적인 웹사이트를 만드는 최영식입니다.',
    salary: 200,
    period: '1개월',
    desiredDay: '즉시',
  },
  {
    id: 21,
    image: WorkerImage7,
    name: '이지훈',
    category: '10-1-10',
    region: '서울시 금천구',
    description: '효율적인 자재 관리를 통해 비용을 절감하는 이지훈입니다.',
    salary: 240,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 22,
    image: WorkerImage1,
    name: '김유진',
    category: '12-1-5',
    region: '대전시 유성구',
    description: '정확한 데이터 분석으로 연구의 신뢰성을 높이는 김유진입니다.',
    salary: 350,
    period: '3개월',
    desiredDay: '즉시',
  },
  {
    id: 23,
    image: WorkerImage2,
    name: '정하늘',
    category: '13-1-2',
    region: '서울시 양천구',
    description: '학생들과 소통하며 학습을 돕는 정하늘입니다.',
    salary: 100,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 24,
    image: WorkerImage3,
    name: '이영호',
    category: '14-1-2',
    region: '서울시 금천구',
    description: '고객의 재정적 목표를 함께 이루는 이영호입니다.',
    salary: 320,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 25,
    image: WorkerImage4,
    name: '박소희',
    category: '9-1-7',
    region: '경기도 부천시',
    description: '고객의 목소리에 귀 기울이는 박소희입니다.',
    salary: 210,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 26,
    image: WorkerImage5,
    name: '김재영',
    category: '6-1-11',
    region: '부산시 사하구',
    description: '웹개발에 대한 전문 지식을 갖춘 김재영입니다.',
    salary: 260,
    period: '3개월',
    desiredDay: '즉시',
  },
  {
    id: 27,
    image: WorkerImage6,
    name: '이수민',
    category: '7-1-8',
    region: '서울시 중구',
    description: '매력적인 광고 디자인으로 브랜드를 돋보이게 하는 이수민입니다.',
    salary: 290,
    period: '2개월',
    desiredDay: '즉시',
  },
  {
    id: 28,
    image: WorkerImage7,
    name: '정성훈',
    category: '11-1-2',
    region: '서울시 송파구',
    description: '소비자 트렌드를 반영한 상품 기획의 정성훈입니다.',
    salary: 310,
    period: '2개월',
    desiredDay: '즉시',
  },
  {
    id: 29,
    image: WorkerImage1,
    name: '최민혁',
    category: '6-1-5',
    region: '경기도 화성시',
    description: '데이터로 인사이트를 제공하는 최민혁입니다.',
    salary: 320,
    period: '기한없음',
    desiredDay: '즉시',
  },
  {
    id: 30,
    image: WorkerImage2,
    name: '이정희',
    category: '7-1-5',
    region: '서울시 용산구',
    description: '창의적인 공간을 디자인하는 이정희입니다.',
    salary: 330,
    period: '1개월',
    desiredDay: '즉시',
  },
  {
    id: 31,
    image: WorkerImage2,
    name: '이정희',
    category: '1-1-1',
    region: '서울시 용산구',
    description: '창의적인 공간을 디자인하는 이정희입니다.',
    salary: 330,
    period: '1개월',
    desiredDay: '즉시',
  },
];

export const COMPANY_DATA: Company[] = [
  {
    id: 1,
    image: CompanyImage1,
    name: '부성에버텍',
    category: '10-1-12',
    region: '경기도 화성시',
    description: '개발에서 양산까지 정성과 최선을 다해 최적의 서비스를 제공합니다.',
    salary: 280,
    period: '기한없음',
    desiredDay: '즉시 시작',
  },
  {
    id: 2,
    image: CompanyImage2,
    name: '에이디시스템',
    category: '12-2-7',
    region: '경기도 화성시',
    description: '에이디시스템은 군사용 UAV 생산 및 스텔스 기술 개발로 국내 안보 강화에 주력하며 국방 분야에서 선도 업체로 성장 중입니다.',
    salary: 350,
    period: '3개월',
    desiredDay: '즉시 시작',
  },
  {
    id: 3,
    image: CompanyImage3,
    name: '넥스트웹',
    category: '6-1-11',
    region: '서울시 강남구',
    description: '혁신적인 웹 솔루션을 제공하는 넥스트웹입니다.',
    salary: 180,
    period: '1개월',
    desiredDay: '즉시 시작',
  },
  {
    id: 4,
    image: CompanyImage4,
    name: '마케팅플러스',
    category: '2-1-5',
    region: '부산시 해운대구',
    description: '데이터 기반의 마케팅 전략으로 성과를 극대화하는 마케팅플러스입니다.',
    salary: 250,
    period: '1개월',
    desiredDay: '12월 01일 이후',
  },
  {
    id: 5,
    image: CompanyImage5,
    name: '세무법인 한빛',
    category: '3-1-7',
    region: '서울시 종로구',
    description: '정확한 세무 상담과 서비스를 제공하는 세무법인 한빛입니다.',
    salary: 350,
    period: '3개월',
    desiredDay: '즉시 시작',
  },
  {
    id: 6,
    image: CompanyImage1,
    name: '디자인팩토리',
    category: '7-1-9',
    region: '서울시 마포구',
    description: '창의적인 디자인으로 브랜드를 돋보이게 하는 디자인팩토리입니다.',
    salary: 270,
    period: '2개월',
    desiredDay: '12월 15일 이후',
  },
  {
    id: 7,
    image: CompanyImage2,
    name: '글로벌트레이드',
    category: '8-1-8',
    region: '인천시 미추홀구',
    description: '해외 시장 진출을 지원하는 글로벌트레이드입니다.',
    salary: 320,
    period: '2개월',
    desiredDay: '즉시 시작',
  },
  {
    id: 8,
    image: CompanyImage3,
    name: '코리아고객센터',
    category: '9-1-1',
    region: '대전시 서구',
    description: '고객의 소리에 귀 기울이는 코리아고객센터입니다.',
    salary: 240,
    period: '1개월',
    desiredDay: '12월 10일 이후',
  },
  {
    id: 9,
    image: CompanyImage4,
    name: '물류솔루션',
    category: '10-1-5',
    region: '서울시 강서구',
    description: '효율적인 물류 관리를 통해 비용 절감을 실현하는 물류솔루션입니다.',
    salary: 260,
    period: '3개월',
    desiredDay: '즉시 시작',
  },
  {
    id: 10,
    image: CompanyImage5,
    name: '바이오리서치',
    category: '12-1-12',
    region: '경기도 성남시',
    description: '생명과학 분야의 최전선에서 연구하는 바이오리서치입니다.',
    salary: 350,
    period: '1개월',
    desiredDay: '12월 15일 이후',
  },
  {
    id: 11,
    image: CompanyImage1,
    name: '에듀플랜',
    category: '13-1-3',
    region: '서울시 동작구',
    description: '효과적인 교육 프로그램을 운영하는 에듀플랜입니다.',
    salary: 250,
    period: '2개월',
    desiredDay: '즉시 시작',
  },
  {
    id: 12,
    image: CompanyImage2,
    name: '미래보험',
    category: '14-1-6',
    region: '서울시 강북구',
    description: '고객의 안전을 최우선으로 하는 미래보험입니다.',
    salary: 210,
    period: '기한없음',
    desiredDay: '즉시 시작',
  },
  {
    id: 13,
    image: CompanyImage3,
    name: '데이터랩',
    category: '6-1-5',
    region: '서울시 송파구',
    description: '데이터 기반의 통찰력을 제공하는 데이터랩입니다.',
    salary: 200,
    period: '1개월',
    desiredDay: '즉시 시작',
  },
  {
    id: 14,
    image: CompanyImage4,
    name: '디자인하우스',
    category: '7-1-9',
    region: '경기도 고양시',
    description: '혁신적인 제품 디자인을 추구하는 디자인하우스입니다.',
    salary: 280,
    period: '2개월',
    desiredDay: '12월 10일 이후',
  },
  {
    id: 15,
    image: CompanyImage5,
    name: '헬스엔드',
    category: '8-1-3',
    region: '서울시 서초구',
    description: '건강한 삶을 위한 제품을 제공하는 헬스앤드입니다.',
    salary: 260,
    period: '1개월',
    desiredDay: '즉시 시작',
  },
  {
    id: 16,
    image: CompanyImage1,
    name: '태크서포트',
    category: '9-1-8',
    region: '인천시 연구수',
    description: '기술적 문제 해결을 지원하는 테크서포트입니다.',
    salary: 230,
    period: '2개월',
    desiredDay: '12월 15일 이후',
  },
  {
    id: 17,
    image: CompanyImage2,
    name: '그린리서치',
    category: '12-1-8',
    region: '서울시 성동구',
    description: '지속 가능한 환경을 연구하는 그린리서치입니다.',
    salary: 380,
    period: '3개월',
    desiredDay: '즉시 시작',
  },
  {
    id: 18,
    image: CompanyImage3,
    name: '앱스미스',
    category: '6-1-10',
    region: '서울시 강남구',
    description: '혁신적인 앱 개발로 사용자 경험을 극대화하는 앱스미스입니다.',
    salary: 320,
    period: '2개월',
    desiredDay: '즉시 시작',
  },
  {
    id: 19,
    image: CompanyImage4,
    name: '브랜딩코리아',
    category: '2-1-13',
    region: '부산시 해운대구',
    description: '브랜드 가치를 높이는 전략을 수립하는 브랜딩코리아입니다.',
    salary: 300,
    period: '2개월',
    desiredDay: '11월 30일 이후',
  },
  {
    id: 20,
    image: CompanyImage5,
    name: '회계파트너',
    category: '3-1-11',
    region: '서울시 종로구',
    description: '신뢰할 수 있는 회계 서비스를 제공하는 회계파트너입니다.',
    salary: 320,
    period: '3개월',
    desiredDay: '즉시 시작',
  },
  {
    id: 21,
    image: CompanyImage1,
    name: '디자인랩',
    category: '7-1-13',
    region: '서울시 마포구',
    description: '사용자 중심의 디자인을 구현하는 디자인랩입니다.',
    salary: 320,
    period: '1개월',
    desiredDay: '12월 10일 이후',
  },
  {
    id: 22,
    image: CompanyImage2,
    name: '비즈니스파트너',
    category: '8-1-11',
    region: '경기도 성남시',
    description: '기업 고객을 위한 맞춤형 서비스 제공 비즈니스파트너입니다.',
    salary: 300,
    period: '2개월',
    desiredDay: '즉시 시작',
  },
  {
    id: 23,
    image: CompanyImage3,
    name: '물류넷',
    category: '10-1-15',
    region: '인천시 부평구',
    description: '통합 물류 관리 솔루션을 제공하는 물류넷입니다.',
    salary: 280,
    period: '3개월',
    desiredDay: '즉시 시작',
  },
  {
    id: 24,
    image: CompanyImage4,
    name: '에듀솔루션',
    category: '13-1-4',
    region: '대전시 유성구',
    description: '맞춤형 교육 프로그램을 설계하는 에듀솔루션입니다.',
    salary: 270,
    period: '2개월',
    desiredDay: '즉시 시작',
  },
  {
    id: 25,
    image: CompanyImage5,
    name: '보험리포트',
    category: '14-1-8',
    region: '서울시 관악구',
    description: '신속하고 정확한 손해사정 서비스를 제공하는 보험리포트입니다.',
    salary: 320,
    period: '기한 없음',
    desiredDay: '즉시 시작',
  },
  {
    id: 26,
    image: CompanyImage1,
    name: '데이터브릿지',
    category: '6-1-6',
    region: '서울시 동작구',
    description: '데이터 체계를 구축하여 비즈니스 인사이트를 제공하는 데이터브릿지입니다.',
    salary: 350,
    period: '2개월',
    desiredDay: '12월 15일 이후',
  },
  {
    id: 27,
    image: CompanyImage2,
    name: '패키지디자인스튜디오',
    category: '7-1-7',
    region: '서울시 강서구',
    description: '창의적인 패키지 디자인으로 브랜드 가치를 높이는 패키지디자인스튜디오입니다.',
    salary: 230,
    period: '2개월',
    desiredDay: '11월 25일 이후',
  },
  {
    id: 28,
    image: CompanyImage3,
    name: '테크솔루션',
    category: '8-1-11',
    region: '경기도 수원시',
    description: '최첨단 기술을 고객에게 전달하는 테크솔루션입니다.',
    salary: 310,
    period: '3개월',
    desiredDay: '즉시 시작',
  },
  {
    id: 29,
    image: CompanyImage4,
    name: '클라우드테크',
    category: '6-1-12',
    region: '서울시 금천구',
    description: '클라우드 인프라를 관리하는 전문 기업, 클라우드테크입니다.',
    salary: 300,
    period: '기한없음',
    desiredDay: '즉시 시작',
  },
  {
    id: 30,
    image: CompanyImage5,
    name: '스터디홀릭',
    category: '13-1-2',
    region: '서울시 강북구',
    description: '다양한 강의를 제공하며 학습의 즐거움을 전하는 스터디홀릭입니다.',
    salary: 250,
    period: '3개월',
    desiredDay: '12월 10일 이후',
  },
  {
    id: 31,
    image: CompanyImage5,
    name: '스터디홀릭',
    category: '1-1-1',
    region: '서울시 강북구',
    description: '다양한 강의를 제공하며 학습의 즐거움을 전하는 스터디홀릭입니다.',
    salary: 250,
    period: '3개월',
    desiredDay: '12월 10일 이후',
  },
];
