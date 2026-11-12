/* =========================================================
   매장 데이터 파일 — 이 파일만 고치면 앱 내용이 바뀝니다.
   지금 들어있는 내용은 전부 "예시"입니다. 실제 내용으로 교체하세요.
   ========================================================= */

const SALON = {
  name: "헤어살롱",            // 매장 이름
  tagline: "오늘도 찾아주셔서 감사합니다",
};

/* ---------- 티메뉴 ---------- */
const TEA = [
  { cat: "커피", items: [
    { name: "아메리카노", desc: "HOT / ICE" },
    { name: "카페라떼", desc: "HOT / ICE" },
  ]},
  { cat: "티", items: [
    { name: "캐모마일", desc: "카페인 없음" },
    { name: "페퍼민트", desc: "카페인 없음" },
    { name: "얼그레이", desc: "HOT / ICE" },
  ]},
  { cat: "음료", items: [
    { name: "오렌지 주스", desc: "ICE" },
    { name: "탄산수", desc: "ICE" },
  ]},
];

/* ---------- 회원권 ---------- */
const MEMBERSHIP = [
  { name: "실버", price: "300,000원", bonus: "예시: 5% 추가 적립",
    benefits: ["예시 혜택 1", "예시 혜택 2"] },
  { name: "골드", price: "500,000원", bonus: "예시: 10% 추가 적립",
    benefits: ["예시 혜택 1", "예시 혜택 2", "예시 혜택 3"] },
  { name: "VIP", price: "1,000,000원", bonus: "예시: 15% 추가 적립",
    benefits: ["예시 혜택 1", "예시 혜택 2", "예시 혜택 3", "예시 혜택 4"] },
];
const MEMBERSHIP_NOTE = "예시 안내문: 회원권 유효기간·환불 규정을 여기에 적어주세요.";

/* ---------- 요금표 ---------- */
const PRICES = [
  { cat: "커트", items: [
    { name: "여성 커트", price: "00,000" },
    { name: "남성 커트", price: "00,000" },
  ]},
  { cat: "펌", items: [
    { name: "일반 펌", price: "00,000~" },
    { name: "디지털 / 셋팅 펌", price: "00,000~" },
  ]},
  { cat: "컬러", items: [
    { name: "뿌리 염색", price: "00,000~" },
    { name: "전체 염색", price: "00,000~" },
    { name: "탈색", price: "00,000~" },
  ]},
  { cat: "클리닉", items: [
    { name: "기본 클리닉", price: "00,000~" },
  ]},
];
const PRICES_NOTE = "기장·모발 상태에 따라 요금이 추가될 수 있습니다.";

/* ---------- 염모제 차트 ----------
   실제 색상 데이터는 charts.js 에 있습니다 (올려주신 차트 이미지에서 추출).
   항목 형식: { brand, line(제품 라인), code(제품 번호), name(색상 이름),
               level(명도 레벨), hex(색상칩 색), recipe(혼합 비율·사용법) }
   특정 색의 레시피를 바꾸려면 charts.js 에서 해당 code 의 recipe 를 고치면 됩니다.
*/
const BRANDS = [
  { id: "milbon", name: "밀본" },
  { id: "loreal", name: "로레알" },
  { id: "sasaki", name: "사사끼" },
  { id: "demi", name: "데미" },
  { id: "mielle", name: "미엘" },
];

const DYES = [];
