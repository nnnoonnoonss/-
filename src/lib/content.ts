export const site = {
  name: "NNFC Prep Guide",
  shortName: "NNFC",
  tagline: "합격까지, 흔들림 없이",
  description:
    "NNFC 준비를 위한 올인원 가이드 — 시험 개요부터 학습 일정, 과목별 자료, 자주 묻는 질문까지 한 곳에서 확인하세요.",
};

export const nav = [
  { href: "/", label: "홈" },
  { href: "/schedule", label: "학습 일정" },
  { href: "/subjects", label: "과목별 자료" },
  { href: "/resources", label: "추천 자료" },
  { href: "/faq", label: "자주 묻는 질문" },
];

export const overviewStats = [
  { label: "응시 과목", value: "4개 영역" },
  { label: "평균 준비 기간", value: "8~12주" },
  { label: "권장 학습 시간", value: "주 10시간+" },
  { label: "합격 기준", value: "영역별 60점 이상" },
];

export const featureHighlights = [
  {
    title: "구조화된 학습 로드맵",
    description:
      "D-90부터 시험 당일까지 단계별로 무엇을 해야 하는지 명확한 타임라인으로 안내합니다.",
  },
  {
    title: "과목별 핵심 정리",
    description:
      "각 영역의 출제 범위와 핵심 개념, 자주 나오는 유형을 한눈에 파악할 수 있습니다.",
  },
  {
    title: "검증된 학습 자료",
    description:
      "공식 자료, 강의, 모의고사, 커뮤니티 등 실제로 도움이 되는 자료만 엄선했습니다.",
  },
];

export const roadmap = [
  {
    phase: "1단계",
    title: "기초 다지기",
    period: "D-90 ~ D-61",
    description: "전체 출제 범위를 훑어보고 취약 영역을 파악하는 단계입니다.",
  },
  {
    phase: "2단계",
    title: "심화 학습",
    period: "D-60 ~ D-31",
    description: "영역별 핵심 개념을 집중적으로 학습하고 기출 유형을 익힙니다.",
  },
  {
    phase: "3단계",
    title: "실전 모의고사",
    period: "D-30 ~ D-8",
    description: "시간 제한을 두고 모의고사를 풀며 실전 감각을 끌어올립니다.",
  },
  {
    phase: "4단계",
    title: "최종 점검",
    period: "D-7 ~ D-day",
    description: "오답노트를 복습하고 컨디션을 관리하며 시험을 마무리 준비합니다.",
  },
];

export const scheduleWeeks = [
  {
    range: "D-90 ~ D-71 (1~3주차)",
    focus: "전 영역 개관 및 진단",
    tasks: [
      "출제 범위와 시험 구성 전체 훑어보기",
      "영역별 모의 진단 테스트로 현재 실력 파악",
      "취약 영역 리스트업 및 학습 우선순위 정하기",
    ],
  },
  {
    range: "D-70 ~ D-41 (4~7주차)",
    focus: "핵심 개념 집중 학습",
    tasks: [
      "영역별 핵심 이론 교재 1회독",
      "단원별 연습문제 풀이 및 오답 정리",
      "주 1회 개념 복습 노트 작성",
    ],
  },
  {
    range: "D-40 ~ D-11 (8~11주차)",
    focus: "기출·유형 문제 풀이",
    tasks: [
      "최근 3개년 기출문제 풀이",
      "자주 틀리는 유형 패턴 분석",
      "취약 영역 재점검 및 보완 학습",
    ],
  },
  {
    range: "D-10 ~ D-day (12주차)",
    focus: "실전 모의고사 및 최종 점검",
    tasks: [
      "실제 시험 시간에 맞춘 모의고사 2~3회 진행",
      "오답노트 최종 복습",
      "시험 당일 준비물 및 동선 점검",
    ],
  },
];

export type Subject = {
  slug: string;
  title: string;
  summary: string;
  topics: string[];
  resources: string[];
};

export const subjects: Subject[] = [
  {
    slug: "foundations",
    title: "기초 이론",
    summary: "전체 시험의 기반이 되는 핵심 개념과 용어를 다룹니다.",
    topics: ["핵심 용어 정의", "기본 원리 및 개념 체계", "영역 간 연결 개념"],
    resources: ["공식 개요 자료집", "기초 이론 요약 노트", "용어 사전"],
  },
  {
    slug: "core-skills",
    title: "핵심 역량",
    summary: "실제 시험에서 가장 높은 비중을 차지하는 응용 문제 영역입니다.",
    topics: ["사례 기반 문제 해결", "절차 및 프로세스 적용", "우선순위 판단"],
    resources: ["기출문제집 (최근 3개년)", "사례 분석 워크북", "온라인 강의 시리즈"],
  },
  {
    slug: "applied-practice",
    title: "실무 적용",
    summary: "이론을 실제 상황에 적용하는 능력을 평가하는 영역입니다.",
    topics: ["시나리오 기반 문제", "의사결정 프로세스", "실전 체크리스트 활용"],
    resources: ["실무 시나리오 모음", "체크리스트 템플릿", "스터디 그룹 토론 자료"],
  },
  {
    slug: "final-review",
    title: "종합 정리",
    summary: "전 영역을 아우르는 통합형 문제와 마무리 점검을 다룹니다.",
    topics: ["영역 통합 문제", "시간 관리 전략", "최종 오답노트 복습"],
    resources: ["통합 모의고사", "오답노트 템플릿", "D-day 체크리스트"],
  },
];

export type ResourceCategory = {
  title: string;
  description: string;
  items: string[];
};

export const resourceCategories: ResourceCategory[] = [
  {
    title: "공식 자료",
    description: "가장 신뢰할 수 있는 1차 자료입니다. 학습을 시작하기 전 반드시 확인하세요.",
    items: [
      "공식 시험 안내서 및 출제 범위 문서",
      "공식 홈페이지 공지사항 및 FAQ",
      "최근 개정 사항 안내",
    ],
  },
  {
    title: "학습 교재 & 강의",
    description: "체계적으로 개념을 익히고 싶을 때 활용하면 좋은 자료입니다.",
    items: ["영역별 기본서", "온라인 동영상 강의", "요약 정리 노트 / 치트시트"],
  },
  {
    title: "문제 풀이 자료",
    description: "실전 감각을 키우는 데 가장 효과적인 자료입니다.",
    items: ["최근 3개년 기출문제", "영역별 예상 문제집", "시간 제한 모의고사"],
  },
  {
    title: "커뮤니티 & 스터디",
    description: "혼자 준비하기 어려울 때 동기부여와 정보 공유에 도움이 됩니다.",
    items: ["온라인 스터디 그룹", "합격 후기 및 팁 게시판", "질문·답변 커뮤니티"],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "준비 기간은 얼마나 잡아야 하나요?",
    answer:
      "기초 지식 수준에 따라 다르지만, 평균적으로 8~12주 정도를 권장합니다. 매일 조금씩 학습하는 것이 벼락치기보다 효과적입니다.",
  },
  {
    question: "합격 기준은 어떻게 되나요?",
    answer:
      "일반적으로 전체 평균 점수와 영역별 최저 점수 기준을 함께 충족해야 합니다. 정확한 기준은 반드시 공식 안내서를 통해 최신 정보를 확인하세요.",
  },
  {
    question: "어떤 영역을 가장 먼저 공부해야 하나요?",
    answer:
      "먼저 진단 테스트로 본인의 취약 영역을 파악한 뒤, 출제 비중이 높은 영역과 취약한 영역을 우선순위로 학습하는 것을 추천합니다.",
  },
  {
    question: "재응시는 가능한가요?",
    answer:
      "대부분의 시험은 재응시가 가능하지만 응시 횟수 제한이나 대기 기간이 있을 수 있습니다. 공식 규정을 확인한 뒤 재응시 일정을 계획하세요.",
  },
  {
    question: "모의고사는 몇 번 정도 풀어보는 것이 좋은가요?",
    answer:
      "실전 감각을 익히기 위해 최소 3~5회 이상, 실제 시험과 동일한 시간 제한을 두고 풀어보는 것을 권장합니다.",
  },
  {
    question: "시험 당일 무엇을 준비해야 하나요?",
    answer:
      "신분증, 수험표 등 필수 지참물을 전날 미리 확인하고, 시험 장소까지의 동선과 소요 시간을 사전에 점검해두는 것이 좋습니다.",
  },
];
