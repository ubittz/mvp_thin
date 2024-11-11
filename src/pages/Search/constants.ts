import { CategoryType } from '@@pages/Search/type';

export const SEARCH_TABS = {
  FIND_WORKER: 'findWorker',
  FIND_COMPANY: 'findCompany',
} as const;

export const CATEGORY_ITEMS: CategoryType[] = [
  {
    id: 1,
    title: '기획/전략',
    children: [
      {
        id: 1,
        title: '직무/직업',
        children: [
          {
            id: 1,
            title: '게임기획',
          },
          {
            id: 2,
            title: '경영기획',
          },
          {
            id: 3,
            title: '광고기획',
          },
          {
            id: 4,
            title: '교육기획',
          },
          {
            id: 5,
            title: '기술기획',
          },
          {
            id: 6,
            title: '기획',
          },
          {
            id: 7,
            title: '마케팅기획',
          },
          {
            id: 8,
            title: '문화기획',
          },
          {
            id: 9,
            title: '브랜드기획',
          },
          {
            id: 10,
            title: '사업기획',
          },
          {
            id: 11,
            title: '상품기획',
          },
          {
            id: 12,
            title: '서비스기획',
          },
          {
            id: 13,
            title: '앱기획',
          },
          {
            id: 14,
            title: '인사기획',
          },
        ],
      },
      {
        id: 2,
        title: '전문분야',
        children: [
          {
            id: 1,
            title: '경영관리',
          },
          {
            id: 2,
            title: '경영분석',
          },
          {
            id: 3,
            title: '경영컨설팅',
          },
          {
            id: 4,
            title: '경영혁신(PI)',
          },
          {
            id: 5,
            title: '금융컨설팅',
          },
          {
            id: 6,
            title: '데이터분석',
          },
          {
            id: 7,
            title: '레벨디자인',
          },
          {
            id: 8,
            title: '리서치',
          },
          {
            id: 9,
            title: '리스크관리',
          },
          {
            id: 10,
            title: '사업개발',
          },
          {
            id: 11,
            title: '사업관리',
          },
          {
            id: 12,
            title: '사업제휴',
          },
          {
            id: 13,
            title: '스토리보드',
          },
          {
            id: 14,
            title: '시장조사',
          },
          {
            id: 15,
            title: '신사업기획',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: '마케팅/홍보/조사',
    children: [
      {
        id: 1,
        title: '직무/직업',
        children: [
          {
            id: 1,
            title: '광고PD',
          },
          {
            id: 2,
            title: '광고마케팅',
          },
          {
            id: 3,
            title: '글로벌마케팅',
          },
          {
            id: 4,
            title: '기업홍보',
          },
          {
            id: 5,
            title: '디지털마케팅',
          },
          {
            id: 6,
            title: '마케팅',
          },
          {
            id: 7,
            title: '마케팅기획',
          },
          {
            id: 8,
            title: '마케팅전략',
          },
          {
            id: 9,
            title: '모바일마케팅',
          },
          {
            id: 10,
            title: '미디어플래너',
          },
          {
            id: 11,
            title: '바이럴마케팅',
          },
          {
            id: 12,
            title: '병원마케팅',
          },
          {
            id: 13,
            title: '브랜드마케팅',
          },
        ],
      },
      {
        id: 2,
        title: '전문분야',
        children: [
          {
            id: 1,
            title: '검색광고',
          },
          {
            id: 2,
            title: '광고주관리',
          },
          {
            id: 3,
            title: '광고캠패인',
          },
          {
            id: 4,
            title: '그로스해킹',
          },
          {
            id: 5,
            title: '라이센싱',
          },
          {
            id: 6,
            title: '매체관리',
          },
          {
            id: 7,
            title: '배너광고',
          },
          {
            id: 8,
            title: '비딩',
          },
          {
            id: 9,
            title: '사보/뉴스레터',
          },
          {
            id: 10,
            title: '사회조사',
          },
          {
            id: 11,
            title: '설문조사',
          },
          {
            id: 12,
            title: '세일즈프로모션',
          },
          {
            id: 13,
            title: '시장조사',
          },
          {
            id: 14,
            title: '언론홍보',
          },
          {
            id: 15,
            title: '옥외광고',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: '회계/세무/재무',
    children: [
      {
        id: 1,
        title: '직무/직업',
        children: [
          {
            id: 1,
            title: '감사',
          },
          {
            id: 2,
            title: '경리',
          },
          {
            id: 3,
            title: '경리사무원',
          },
          {
            id: 4,
            title: '공인회계사',
          },
          {
            id: 5,
            title: '관세사',
          },
          {
            id: 6,
            title: '관세사무원',
          },
          {
            id: 7,
            title: '세무사',
          },
          {
            id: 8,
            title: '재무',
          },
          {
            id: 9,
            title: '전산회계',
          },
          {
            id: 10,
            title: '행정사',
          },
          {
            id: 11,
            title: '회계',
          },
          {
            id: 12,
            title: '회계사',
          },
          {
            id: 13,
            title: 'AICPA',
          },
          {
            id: 14,
            title: 'CFA',
          },
          {
            id: 15,
            title: 'CFO',
          },
          {
            id: 16,
            title: 'IR/공시',
          },
          {
            id: 17,
            title: 'KICPA',
          },
        ],
      },
      {
        id: 2,
        title: '전문분야',
        children: [
          {
            id: 1,
            title: '계산서발행',
          },
          {
            id: 2,
            title: '관리회계',
          },
          {
            id: 3,
            title: '급여(Payroll)',
          },
          {
            id: 4,
            title: '기업회계',
          },
          {
            id: 5,
            title: '더존',
          },
          {
            id: 6,
            title: '법인결산',
          },
          {
            id: 7,
            title: '법인세신고',
          },
          {
            id: 8,
            title: '부가세신고',
          },
          {
            id: 9,
            title: '세무기장',
          },
          {
            id: 10,
            title: '세무신고',
          },
          {
            id: 11,
            title: '세무조정',
          },
          {
            id: 12,
            title: '세무컨설팅',
          },
          {
            id: 13,
            title: '세무회계',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: '인사/노무/HRD',
    children: [
      {
        id: 1,
        title: '직무/직업',
        children: [
          {
            id: 1,
            title: '노무사',
          },
          {
            id: 2,
            title: '인사',
          },
          {
            id: 3,
            title: '잡매니저',
          },
          {
            id: 4,
            title: '채용담당자',
          },
          {
            id: 5,
            title: '헤드헌터',
          },
          {
            id: 6,
            title: 'ER(노무관리)',
          },
          {
            id: 7,
            title: 'HRD',
          },
          {
            id: 8,
            title: 'HRM',
          },
          {
            id: 9,
            title: 'HR컨설팅',
          },
        ],
      },
      {
        id: 2,
        title: '담당분야',
        children: [
          {
            id: 1,
            title: '급여(Payroll)',
          },
          {
            id: 2,
            title: '인터뷰',
          },
          {
            id: 3,
            title: '법정의무교육',
          },
          {
            id: 4,
            title: '복리후생',
          },
          {
            id: 5,
            title: '실적관리',
          },
          {
            id: 6,
            title: '아웃소싱',
          },
          {
            id: 7,
            title: '온보딩',
          },
          {
            id: 8,
            title: '인력관리',
          },
          {
            id: 9,
            title: '인사교육',
          },
          {
            id: 10,
            title: '인사기획',
          },
          {
            id: 11,
            title: '인사행정',
          },
          {
            id: 12,
            title: '인재발굴',
          },
          {
            id: 13,
            title: '임금협상',
          },
          {
            id: 14,
            title: '재증명발급',
          },
          {
            id: 15,
            title: '조직문화',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: '총무/법무/사무',
    children: [
      {
        id: 1,
        title: '직무/직업',
        children: [
          {
            id: 1,
            title: '법무사',
          },
          {
            id: 2,
            title: '변리사',
          },
          {
            id: 3,
            title: '변호사',
          },
          {
            id: 4,
            title: '사무직',
          },
          {
            id: 5,
            title: '서무',
          },
          {
            id: 6,
            title: '총무',
          },
          {
            id: 7,
            title: '컴플라이언스',
          },
          {
            id: 8,
            title: '특허명세사',
          },
        ],
      },
      {
        id: 2,
        title: '전문분야',
        children: [
          {
            id: 1,
            title: '경영지원',
          },
          {
            id: 2,
            title: '교육행정',
          },
          {
            id: 3,
            title: '기술사업화',
          },
          {
            id: 4,
            title: '문서작성',
          },
          {
            id: 5,
            title: '사무보조',
          },
          {
            id: 6,
            title: '사무행정',
          },
          {
            id: 7,
            title: '사이트관리',
          },
          {
            id: 8,
            title: '상표관리',
          },
          {
            id: 9,
            title: '서류관리',
          },
          {
            id: 10,
            title: '자료입력',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'IT개발/데이터',
    children: [
      {
        id: 1,
        title: '직무/직업',
        children: [
          {
            id: 1,
            title: '개발PM',
          },
          {
            id: 2,
            title: '게임개발',
          },
          {
            id: 3,
            title: '기술지원',
          },
          {
            id: 4,
            title: '데이터 사이언티스트',
          },
          {
            id: 5,
            title: '데이터분석가',
          },
          {
            id: 6,
            title: '데이터엔지니어',
          },
          {
            id: 7,
            title: '백엔드/서버개발',
          },
          {
            id: 8,
            title: '보안관제',
          },
          {
            id: 9,
            title: '보안컨설팅',
          },
          {
            id: 10,
            title: '앱개발',
          },
          {
            id: 11,
            title: '웹개발',
          },
          {
            id: 12,
            title: '웹마스터',
          },
          {
            id: 13,
            title: '유지보수',
          },
        ],
      },
      {
        id: 2,
        title: '전문분야',
        children: [
          {
            id: 1,
            title: '검색엔진',
          },
          {
            id: 2,
            title: '네트워크',
          },
          {
            id: 3,
            title: '데이터라벨링',
          },
          {
            id: 4,
            title: '데이터마이닝',
          },
          {
            id: 5,
            title: '데이터시각화',
          },
          {
            id: 6,
            title: '딥러닝',
          },
          {
            id: 7,
            title: '머신러닝',
          },
          {
            id: 8,
            title: '메타버스',
          },
          {
            id: 9,
            title: '모델링',
          },
          {
            id: 10,
            title: '모의해킹',
          },
          {
            id: 11,
            title: '미들웨어',
          },
          {
            id: 12,
            title: '반응형웹',
          },
          {
            id: 13,
            title: '방화벽',
          },
          {
            id: 14,
            title: '블록체인',
          },
          {
            id: 15,
            title: '빅데이터',
          },
          {
            id: 16,
            title: '빌링',
          },
        ],
      },
      {
        id: 3,
        title: '기술스택',
        children: [
          {
            id: 1,
            title: '그누보드',
          },
          {
            id: 2,
            title: '라즈베리파이',
          },
          {
            id: 3,
            title: '쉘스크립트',
          },
          {
            id: 4,
            title: '스마트컨트랙트',
          },
          {
            id: 5,
            title: '아두이노',
          },
          {
            id: 6,
            title: '액션스크립트',
          },
          {
            id: 7,
            title: '어셈블리',
          },
          {
            id: 8,
            title: '와이어샤크',
          },
          {
            id: 9,
            title: '임베디드리눅스',
          },
          {
            id: 10,
            title: '파워빌더',
          },
          {
            id: 11,
            title: '풀스택',
          },
          {
            id: 12,
            title: '.NET',
          },
          {
            id: 13,
            title: 'ABAP',
          },
          {
            id: 14,
            title: 'AIX',
          },
          {
            id: 15,
            title: 'Ajax',
          },
          {
            id: 16,
            title: 'Android',
          },
          {
            id: 17,
            title: 'Angular',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: '디자인',
    children: [
      {
        id: 1,
        title: '직무/직업',
        children: [
          {
            id: 1,
            title: '가구디자인',
          },
          {
            id: 2,
            title: '건축디자인',
          },
          {
            id: 3,
            title: '게임디자인',
          },
          {
            id: 4,
            title: '경관디자인',
          },
          {
            id: 5,
            title: '공간디자인',
          },
          {
            id: 6,
            title: '공공디자인',
          },
          {
            id: 7,
            title: '공예디자인',
          },
          {
            id: 8,
            title: '광고디자인',
          },
          {
            id: 9,
            title: '그래픽디자인',
          },
          {
            id: 10,
            title: '그림작가',
          },
          {
            id: 11,
            title: '디지털디자인',
          },
          {
            id: 12,
            title: '로고디자인',
          },
          {
            id: 13,
            title: '모바일디자인',
          },
          {
            id: 14,
            title: '무대디자인',
          },
        ],
      },
      {
        id: 2,
        title: '전문분야',
        children: [
          {
            id: 1,
            title: '가방',
          },
          {
            id: 2,
            title: '간판',
          },
          {
            id: 3,
            title: '남성의류',
          },
          {
            id: 4,
            title: '여성의류',
          },
          {
            id: 5,
            title: '니트',
          },
          {
            id: 6,
            title: '데님',
          },
          {
            id: 7,
            title: '도트/픽셀아트',
          },
          {
            id: 8,
            title: '드로잉',
          },
          {
            id: 9,
            title: '라이팅',
          },
          {
            id: 10,
            title: '렌더링',
          },
          {
            id: 11,
            title: '리플렛',
          },
          {
            id: 12,
            title: '만화/웹툰',
          },
          {
            id: 13,
            title: '명함',
          },
          {
            id: 14,
            title: '모델링',
          },
          {
            id: 15,
            title: '모션그래픽',
          },
          {
            id: 16,
            title: '보정/리터칭',
          },
          {
            id: 17,
            title: '브로슈어',
          },
          {
            id: 18,
            title: '삽화',
          },
          {
            id: 19,
            title: '상세페이지',
          },
        ],
      },
      {
        id: 3,
        title: '작업Tool',
        children: [
          {
            id: 1,
            title: '드림위버',
          },
          {
            id: 2,
            title: '라이노',
          },
          {
            id: 3,
            title: '베가스',
          },
          {
            id: 4,
            title: '스케치업',
          },
          {
            id: 5,
            title: '애프터이펙트',
          },
          {
            id: 6,
            title: '인디자인',
          },
          {
            id: 7,
            title: '일러스트',
          },
          {
            id: 8,
            title: '지브러쉬',
          },
          {
            id: 9,
            title: '코렐드로우',
          },
          {
            id: 10,
            title: '파이널컷',
          },
          {
            id: 11,
            title: '프리미어',
          },
          {
            id: 12,
            title: '플래시',
          },
          {
            id: 13,
            title: 'Blender',
          },
          {
            id: 14,
            title: 'CAD',
          },
          {
            id: 15,
            title: 'Cinema 4D',
          },
          {
            id: 16,
            title: 'Figma',
          },
          {
            id: 17,
            title: 'FLEX',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: '영업/판매/무역',
    children: [
      {
        id: 1,
        title: '직무/직업',
        children: [
          {
            id: 1,
            title: '가구판매',
          },
          {
            id: 2,
            title: '가전판매',
          },
          {
            id: 3,
            title: '건강식품판매',
          },
          {
            id: 4,
            title: '건설영업',
          },
          {
            id: 5,
            title: '관세사',
          },
          {
            id: 6,
            title: '관세사무원',
          },
          {
            id: 7,
            title: '광고영업',
          },
          {
            id: 8,
            title: '국제무역사',
          },
          {
            id: 9,
            title: '귀금속판매',
          },
          {
            id: 10,
            title: '기계판매',
          },
          {
            id: 11,
            title: '기술영업',
          },
          {
            id: 12,
            title: '네트워크영업',
          },
          {
            id: 13,
            title: '무역MR',
          },
          {
            id: 14,
            title: '무역경리',
          },
          {
            id: 15,
            title: '무역사무원',
          },
        ],
      },
      {
        id: 2,
        title: '담당분야',
        children: [
          {
            id: 1,
            title: '가맹점관리',
          },
          {
            id: 2,
            title: '가맹점영업',
          },
          {
            id: 3,
            title: '거래처관리',
          },
          {
            id: 4,
            title: '거래처영업',
          },
          {
            id: 5,
            title: '고객관리',
          },
          {
            id: 6,
            title: '공공영업',
          },
          {
            id: 7,
            title: '관세환급',
          },
          {
            id: 8,
            title: '기업영업',
          },
          {
            id: 9,
            title: '렌탈영업',
          },
          {
            id: 10,
            title: '마트영업',
          },
          {
            id: 11,
            title: '매체영업',
          },
          {
            id: 12,
            title: '매출관리',
          },
          {
            id: 13,
            title: '무역거래',
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: '고객상담/TM',
    children: [
      {
        id: 1,
        title: '직무/직업',
        children: [
          {
            id: 1,
            title: '상담원',
          },
          {
            id: 2,
            title: '섭외TM',
          },
          {
            id: 3,
            title: '아웃바운드',
          },
          {
            id: 4,
            title: '이미지컨설턴트',
          },
          {
            id: 5,
            title: '인바운드',
          },
          {
            id: 6,
            title: '텔레마케터',
          },
          {
            id: 7,
            title: 'CS',
          },
          {
            id: 8,
            title: 'CX매니저',
          },
        ],
      },
      {
        id: 2,
        title: '담당분야',
        children: [
          {
            id: 1,
            title: '게시판관리',
          },
          {
            id: 2,
            title: '고객관리',
          },
          {
            id: 3,
            title: '교육상담',
          },
          {
            id: 4,
            title: '교환/반품',
          },
          {
            id: 5,
            title: '기술상담',
          },
          {
            id: 6,
            title: '단순안내',
          },
          {
            id: 7,
            title: '대출상담',
          },
          {
            id: 8,
            title: '메일상담',
          },
          {
            id: 9,
            title: '민원상담',
          },
          {
            id: 10,
            title: '배송상담',
          },
          {
            id: 11,
            title: '원격상담',
          },
          {
            id: 12,
            title: '전화상담',
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: '구매/자재/물류',
    children: [
      {
        id: 1,
        title: '직무/직업',
        children: [
          {
            id: 1,
            title: '구매',
          },
          {
            id: 2,
            title: '구매관리',
          },
          {
            id: 3,
            title: '구매기획',
          },
          {
            id: 4,
            title: '국제물류',
          },
          {
            id: 5,
            title: '물류관리',
          },
          {
            id: 6,
            title: '물류기획',
          },
          {
            id: 7,
            title: '물류사무원',
          },
          {
            id: 8,
            title: '보세사',
          },
          {
            id: 9,
            title: '유통관리',
          },
          {
            id: 10,
            title: '자재관리',
          },
          {
            id: 11,
            title: '재고관리',
          },
          {
            id: 12,
            title: '창고관리',
          },
          {
            id: 13,
            title: '포워더',
          },
          {
            id: 14,
            title: '품질관리',
          },
          {
            id: 15,
            title: 'SCM',
          },
          {
            id: 16,
            title: 'SRM',
          },
        ],
      },
      {
        id: 2,
        title: '전문분야',
        children: [
          {
            id: 1,
            title: '개발구매',
          },
          {
            id: 2,
            title: '거래처관리',
          },
          {
            id: 3,
            title: '견적관리',
          },
          {
            id: 4,
            title: '구매대행/소싱',
          },
          {
            id: 5,
            title: '납기관리',
          },
          {
            id: 6,
            title: '물류자동화',
          },
          {
            id: 7,
            title: '배차관리',
          },
          {
            id: 8,
            title: '보세구역관리',
          },
          {
            id: 9,
            title: '보세화물관리',
          },
          {
            id: 10,
            title: '수주/발주',
          },
          {
            id: 11,
            title: '수급관리',
          },
          {
            id: 12,
            title: '수불관리',
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: '상품기획/MD',
    children: [
      {
        id: 1,
        title: '직무/직업',
        children: [
          {
            id: 1,
            title: '기획MD',
          },
          {
            id: 2,
            title: '리테일MD',
          },
          {
            id: 3,
            title: '바잉MD',
          },
          {
            id: 4,
            title: '브랜드MD',
          },
          {
            id: 5,
            title: '슈퍼바이저MD',
          },
          {
            id: 6,
            title: '식품MD',
          },
          {
            id: 7,
            title: '영업MD',
          },
          {
            id: 8,
            title: '오프라인MD',
          },
          {
            id: 9,
            title: '온라인MD',
          },
          {
            id: 10,
            title: '유통MD',
          },
          {
            id: 11,
            title: '패션MD',
          },
          {
            id: 12,
            title: 'AMD',
          },
          {
            id: 13,
            title: 'VMD',
          },
        ],
      },
      {
        id: 2,
        title: '담당분야',
        children: [
          {
            id: 1,
            title: '가공식품',
          },
          {
            id: 2,
            title: '가구',
          },
          {
            id: 3,
            title: '건강기능식품',
          },
          {
            id: 4,
            title: '결품관리',
          },
          {
            id: 5,
            title: '구매총괄',
          },
          {
            id: 6,
            title: '남성의류',
          },
          {
            id: 7,
            title: '여성의류',
          },
          {
            id: 8,
            title: '납기관리',
          },
          {
            id: 9,
            title: '로드샵',
          },
          {
            id: 10,
            title: '리빙',
          },
          {
            id: 11,
            title: '매출관리',
          },
          {
            id: 12,
            title: '면세점',
          },
          {
            id: 13,
            title: '문구',
          },
          {
            id: 14,
            title: '백화점',
          },
          {
            id: 15,
            title: '브랜드관리',
          },
          {
            id: 16,
            title: '브랜드기획',
          },
          {
            id: 17,
            title: '브랜드런칭',
          },
          {
            id: 18,
            title: '브랜드확장',
          },
        ],
      },
    ],
  },
  {
    id: 12,
    title: '연구/R&D',
    children: [
      {
        id: 1,
        title: '직무/직업',
        children: [
          {
            id: 1,
            title: '대기측정분석사',
          },
          {
            id: 2,
            title: '로봇엔지니어',
          },
          {
            id: 3,
            title: '연구원',
          },
          {
            id: 4,
            title: '인증심사원',
          },
          {
            id: 5,
            title: '임상DM',
          },
          {
            id: 6,
            title: '임상FM',
          },
          {
            id: 7,
            title: '임상STAT',
          },
          {
            id: 8,
            title: '환경측정분석사',
          },
          {
            id: 9,
            title: 'CRA(임상연구원)',
          },
          {
            id: 10,
            title: 'CRC(연구간호사)',
          },
          {
            id: 11,
            title: 'CRM(임상연구전문가)',
          },
          {
            id: 12,
            title: 'R&D',
          },
          {
            id: 13,
            title: 'R&D기획',
          },
        ],
      },
      {
        id: 2,
        title: '전문분야',
        children: [
          {
            id: 1,
            title: '고분자',
          },
          {
            id: 2,
            title: '광학설계',
          },
          {
            id: 3,
            title: '기술연구',
          },
          {
            id: 4,
            title: '기후변화',
          },
          {
            id: 5,
            title: '로봇설계',
          },
          {
            id: 6,
            title: '메뉴개발',
          },
          {
            id: 7,
            title: '무인항공기/드론',
          },
          {
            id: 8,
            title: '미생물',
          },
          {
            id: 9,
            title: '바이러스',
          },
          {
            id: 10,
            title: '반도체',
          },
          {
            id: 11,
            title: '분자진단',
          },
          {
            id: 12,
            title: '생명과학',
          },
          {
            id: 13,
            title: '세포배양',
          },
          {
            id: 14,
            title: '세포실험',
          },
        ],
      },
    ],
  },
  {
    id: 13,
    title: '교육',
    children: [
      {
        id: 1,
        title: '직무/직업',
        children: [
          {
            id: 1,
            title: '학원',
          },
          {
            id: 2,
            title: '과외',
          },
          {
            id: 3,
            title: '교육운영',
          },
          {
            id: 4,
            title: '교육컨설턴트',
          },
          {
            id: 5,
            title: '교육컨텐츠개발',
          },
          {
            id: 6,
            title: '교육컨텐츠기획',
          },
          {
            id: 7,
            title: '교재개발',
          },
        ],
      },
      {
        id: 2,
        title: '전문분야',
        children: [
          {
            id: 1,
            title: '교규수업',
          },
          {
            id: 2,
            title: '기업교육',
          },
          {
            id: 3,
            title: '동화구연',
          },
          {
            id: 4,
            title: '수능강의',
          },
          {
            id: 5,
            title: '영어교재',
          },
          {
            id: 6,
            title: '온라인교육',
          },
          {
            id: 7,
            title: '유아교육',
          },
          {
            id: 8,
            title: '이러닝',
          },
          {
            id: 9,
            title: '인성교육',
          },
          {
            id: 10,
            title: '인큐베이팅',
          },
          {
            id: 11,
            title: '입시컨설팅',
          },
          {
            id: 12,
            title: '진로상담',
          },
          {
            id: 13,
            title: '쿠킹클래스',
          },
        ],
      },
      {
        id: 3,
        title: '교육과목',
        children: [
          {
            id: 1,
            title: '게임개발',
          },
          {
            id: 2,
            title: '경제',
          },
          {
            id: 3,
            title: '과학',
          },
          {
            id: 4,
            title: '국어',
          },
          {
            id: 5,
            title: '기술가정',
          },
          {
            id: 6,
            title: '네일아트',
          },
          {
            id: 7,
            title: '논문/글쓰기',
          },
          {
            id: 8,
            title: '도덕',
          },
          {
            id: 9,
            title: '디자인',
          },
          {
            id: 10,
            title: '만화/웹툰',
          },
          {
            id: 11,
            title: '메이크업',
          },
          {
            id: 12,
            title: '메카트로닉스',
          },
          {
            id: 13,
            title: '물리',
          },
          {
            id: 14,
            title: '사회',
          },
          {
            id: 15,
            title: '생물',
          },
          {
            id: 16,
            title: '영어',
          },
        ],
      },
    ],
  },
  {
    id: 14,
    title: '금융/보험',
    children: [
      {
        id: 1,
        title: '직무/직업',
        children: [
          {
            id: 1,
            title: '금융사무',
          },
          {
            id: 2,
            title: '금융상품영업',
          },
          {
            id: 3,
            title: '대출상담사',
          },
          {
            id: 4,
            title: '보험상담',
          },
          {
            id: 5,
            title: '보험상품개발',
          },
          {
            id: 6,
            title: '보험설계사',
          },
          {
            id: 7,
            title: '보험심사',
          },
          {
            id: 8,
            title: '손해사정사',
          },
          {
            id: 9,
            title: '심사역',
          },
          {
            id: 10,
            title: '애널리스트',
          },
          {
            id: 11,
            title: '텔러',
          },
          {
            id: 12,
            title: '펀드매니저',
          },
        ],
      },
      {
        id: 2,
        title: '전문분야',
        children: [
          {
            id: 1,
            title: '기업금융',
          },
          {
            id: 2,
            title: '기업분석',
          },
          {
            id: 3,
            title: '기업심사',
          },
          {
            id: 4,
            title: '담보대출',
          },
          {
            id: 5,
            title: '대출심사',
          },
          {
            id: 6,
            title: '배상',
          },
          {
            id: 7,
            title: '배상책임',
          },
          {
            id: 8,
            title: '보험사고',
          },
          {
            id: 9,
            title: '보험청구',
          },
          {
            id: 10,
            title: '부동산투자',
          },
          {
            id: 11,
            title: '손해보험',
          },
          {
            id: 12,
            title: '손해평가',
          },
          {
            id: 13,
            title: '신탁',
          },
          {
            id: 14,
            title: '여신심사',
          },
          {
            id: 15,
            title: '외환관리',
          },
          {
            id: 16,
            title: '위험관리',
          },
          {
            id: 17,
            title: '위험분석',
          },
          {
            id: 18,
            title: '자산운용',
          },
        ],
      },
    ],
  },
];
