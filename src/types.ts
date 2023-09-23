export interface MainPageInfoData {
  /** 출석 & 학습 시간
   * 출석: 각 네모칸에 맞는 날짜와 강의 시청 시간으로 출석 날짜 체크
   * 이번 주 학습 시간: 이번 주의 날짜 7개와 일치하는 데이터로 시간 그래프 그리기, 없으면 출석 안한걸로 보고 그래프 x
   * */
  attendance: Array<{
    completeClassTime: number,
    data: string,
  }>,
  /** 학습 진행률
   * totalVideoCount: 전체 영상 갯수
   * completeVideoCount: 완료한 영상 갯수
   * progressVideoTitle: 마지막으로 수강중인 강의 제목
   * lastQuizTitle: 마지막으로 풀은 퀴즈 제목
   * lastQuizLevel: 마지막으로 풀은 퀴즈 난이도
   * */
  magnitude: {
    totalVideoCount: number,
    completeVideoCount: number,
    progressVideoTitle: string,
    lastQuizTitle: string,
    lastQuizLevel: string,
  },
  /** 나의 코딩 MBTI
   * type_id: MBTI 유형 설명 도큐먼트 아이디
   * 각 구성 요소 점수
   * P (Problem Solver) vs. C (Creator)
   * - 문제를 해결하는 데 집중하는가? 아니면 새로운 아이디어와 제품을 창조하는 데 더 관심이 있는가?
   * D (Detail-Oriented) vs. B (Big Picture)
   * - 세부사항에 주의를 기울이는가? 아니면 전체적인 그림을 봐서 프로젝트나 문제를 접근하는가?
   * A (Alone) vs. T (Team)
   * - 혼자서 작업하는 것을 선호하는가? 아니면 팀과 함께 일하는 것을 좋아하는가?
   * R (Routine) vs. V (Variable)
   * - 일상적인 작업을 선호하는가? 아니면 항상 변화하는 다양한 작업을 선호하는가?
   * */
  mbtiPoint: {
    type_id: string,
    p_pt: number,
    c_pt: number,
    d_pt: number,
    b_pt: number,
    a_pt: number,
    t_pt: number,
    r_pt: number,
    v_pt: number,
  },
  /** MBTI 유형 이름 */
  mbtiTitle: string,
  /** 보유중인 뱃지 갯수 */
  badgeCount: number,
}

export interface MagnitudeInfoData {
  quiz: {
    complete: Array<string>, // 내가 푼 퀴즈 도큐먼트 id 리스트
    correctRate: number, // 정답률
    point: number, // 퀴즈로 얻은 포인트
  },
  video: {
    complete: Array<string>, // 수강완료 강의 리스트
    progress: Array<string>, // 수강중인 강의 리스트
  }
}

export interface BadgeInfoData {
  badge: string, // 뱃지 이름
  desc: string, // 뱃지 설명
  isHas: boolean, // 뱃지 보유 여부
}

export interface RankInfoData {
  school: string,
  grade: number,
  class: number,
  score: number,
}

