/* =========================================================
   펌진단기 데이터 — 일반 기준으로 만든 "초안"입니다.
   매장 기준에 맞게 숫자와 문구를 자유롭게 고치세요. 스타일을 복사해 추가해도 됩니다.

   len     : 기장 분류 (숏 / 단발 / 중단발 / 롱 / 볼륨)
   lenY    : 그림에서 머리 끝선 높이 (숏 165 · 단발 205 · 중단발 248 · 롱 300)
   cut.form: 'one'(원랭스) | 'grad'(그래쥬에이션) | 'layer'(레이어) | 'keep'(기존 형태 유지)
   cut.angles: 구역별 시술각. 천체축 기준 (0° = 자연 낙하, 90° = 수평, 180° = 정수리 위로)
   perm.at : 'ends' = 모발 끝에서 말아 올림 / 'root' = 뿌리 가까이까지 말기
   perm.zones: 구역(z) = top 탑 · crown 크라운 · side 사이드 · back 백 · nape 네이프
               mm = 롯드 지름 범위. 매장 롯드 호수는 지름에 맞춰 note 등에 적어 두세요.
   ========================================================= */

const PERM_NOTE = "일반 기준으로 만든 초안입니다. 모질·손상도·얼굴형에 따라 디자이너가 조정해 주세요. 약제와 방치 시간은 사용하는 제품 기준을 따릅니다.";

const PERM_STYLES = [
  {
    id: "short-volume", len: "숏", lenY: 165, name: "숏 볼륨 펌",
    desc: "짧은 기장에 뿌리 볼륨과 자연스러운 움직임을 주는 스타일",
    cut: {
      form: "layer", formName: "쇼트 레이어",
      guide: "네이프 3~4cm · 탑 10~12cm",
      section: "네이프 수평 섹션 → 백·크라운 수직(버티컬) 섹션",
      angles: { nape: 45, back: 90, crown: 135, top: 180 },
      tips: ["네이프는 짧고 가볍게, 크라운에 무게를 남겨 볼륨 확보", "질감 처리는 끝에서 1/3 지점까지만"],
    },
    perm: {
      type: "일반(콜드) 펌", at: "root",
      zones: [
        { z: "top", mm: [16, 18], turns: "2~2.5회전", wind: "뒤로 말기(리버스) · 온 베이스" },
        { z: "crown", mm: [14, 16], turns: "2~2.5회전", wind: "아래로 말기 · 온 베이스" },
        { z: "side", mm: [12, 14], turns: "2회전", wind: "아래로 말기 · 하프 오프 베이스" },
        { z: "back", mm: [12, 14], turns: "2회전", wind: "아래로 말기 · 하프 오프 베이스" },
        { z: "nape", mm: [10, 12], turns: "1.5회전", wind: "오프 베이스" },
      ],
      tips: ["탑은 볼륨, 네이프는 붙는 느낌이 나도록 아래로 갈수록 가는 롯드", "섹션 폭은 롯드 지름과 같게"],
    },
  },
  {
    id: "bob-c", len: "단발", lenY: 205, name: "단발 C컬 펌",
    desc: "끝이 안으로 한 번 말려 들어가는 단정한 단발",
    cut: {
      form: "one", formName: "원랭스 보브",
      guide: "턱선 아래 1~2cm",
      section: "수평(호리존탈) 섹션",
      angles: { nape: 0, back: 0, crown: 0, top: 0 },
      tips: ["텐션 없이 자연 낙하 상태에서 커트", "끝선 무게감을 유지해야 C컬이 또렷함"],
    },
    perm: {
      type: "셋팅 · 디지털 펌", at: "ends",
      zones: [
        { z: "top", mm: [26, 28], turns: "1.5회전", wind: "안말음(포워드)" },
        { z: "crown", mm: [26, 28], turns: "1.5회전", wind: "안말음" },
        { z: "side", mm: [23, 26], turns: "1.5회전", wind: "안말음" },
        { z: "back", mm: [23, 26], turns: "1.5회전", wind: "안말음" },
        { z: "nape", mm: [20, 23], turns: "1~1.5회전", wind: "안말음 · 목선에 붙게" },
      ],
      tips: ["끝에서 1.5회전만 말아 뿌리 쪽은 스트레이트로 남김", "네이프는 한 단계 가는 롯드로 안으로 감기게"],
    },
  },
  {
    id: "bob-s", len: "단발", lenY: 205, name: "단발 S컬 웨이브 펌",
    desc: "단발에 굵은 S자 웨이브로 볼륨감을 주는 스타일",
    cut: {
      form: "grad", formName: "그래쥬에이션 보브",
      guide: "턱선",
      section: "사선(다이애거널) 섹션",
      angles: { nape: 0, back: 45, crown: 45, top: 45 },
      tips: ["네이프에 층을 쌓아 뒤통수 볼륨 확보", "앞쪽은 약간 길게 남겨 얼굴선을 감쌈"],
    },
    perm: {
      type: "셋팅 · 디지털 펌", at: "ends",
      zones: [
        { z: "top", mm: [20, 23], turns: "2.5회전", wind: "안말음" },
        { z: "crown", mm: [20, 23], turns: "2.5회전", wind: "안말음" },
        { z: "side", mm: [18, 20], turns: "2.5회전", wind: "안말음 · 겉말음 교차" },
        { z: "back", mm: [18, 20], turns: "2.5회전", wind: "안말음 · 겉말음 교차" },
        { z: "nape", mm: [16, 18], turns: "2회전", wind: "안말음" },
      ],
      tips: ["교차 와인딩으로 컬이 한 방향으로 뭉치지 않게", "얼굴 옆 첫 롯드는 겉말음으로 시원하게"],
    },
  },
  {
    id: "mid-c", len: "중단발", lenY: 248, name: "중단발 C컬 펌",
    desc: "어깨선에서 끝이 안으로 말리는 차분한 스타일",
    cut: {
      form: "layer", formName: "로우 레이어",
      guide: "쇄골 위",
      section: "언더 수평 섹션 → 오버 수직 섹션",
      angles: { nape: 0, back: 45, crown: 90, top: 90 },
      tips: ["언더는 무게감 유지, 오버에만 가볍게 층", "어깨에 닿아 뻗치지 않도록 끝선을 안쪽으로"],
    },
    perm: {
      type: "셋팅 · 디지털 펌", at: "ends",
      zones: [
        { z: "top", mm: [28, 30], turns: "1.5회전", wind: "안말음" },
        { z: "crown", mm: [28, 30], turns: "1.5회전", wind: "안말음" },
        { z: "side", mm: [26, 28], turns: "1.5회전", wind: "안말음" },
        { z: "back", mm: [26, 28], turns: "1.5회전", wind: "안말음" },
        { z: "nape", mm: [23, 26], turns: "1.5회전", wind: "안말음" },
      ],
      tips: ["어깨선에서 뒤집히기 쉬우니 네이프를 확실히 안으로", "탑은 굵은 롯드로 자연스러운 볼륨만"],
    },
  },
  {
    id: "mid-s", len: "중단발", lenY: 248, name: "중단발 S컬 펌",
    desc: "중간 기장에 굵은 S컬로 풍성함을 주는 스타일",
    cut: {
      form: "layer", formName: "미디엄 레이어",
      guide: "쇄골 선",
      section: "수직(버티컬) 섹션",
      angles: { nape: 45, back: 90, crown: 90, top: 135 },
      tips: ["층이 있어야 S컬이 겹쳐 보이며 풍성해짐", "얼굴선은 사이드 뱅으로 연결"],
    },
    perm: {
      type: "셋팅 · 디지털 펌", at: "ends",
      zones: [
        { z: "top", mm: [26, 28], turns: "2.5회전", wind: "안말음" },
        { z: "crown", mm: [26, 28], turns: "2.5회전", wind: "안말음" },
        { z: "side", mm: [23, 26], turns: "2.5회전", wind: "얼굴 쪽 겉말음(리버스)" },
        { z: "back", mm: [23, 26], turns: "2.5회전", wind: "안말음 · 겉말음 교차" },
        { z: "nape", mm: [20, 23], turns: "2회전", wind: "안말음" },
      ],
      tips: ["얼굴 옆은 겉말음으로 열어 주면 얼굴이 작아 보임", "뿌리 5~7cm는 말지 않고 남김"],
    },
  },
  {
    id: "long-c", len: "롱", lenY: 300, name: "롱 C컬 펌",
    desc: "긴 머리 끝에만 굵은 C컬을 넣는 청순한 스타일",
    cut: {
      form: "one", formName: "원랭스 + 얼굴선 로우 레이어",
      guide: "가슴선",
      section: "수평 섹션 · 얼굴선만 사선 섹션",
      angles: { nape: 0, back: 0, crown: 45, top: 45 },
      tips: ["전체 무게감 유지, 얼굴선에만 층", "끝선이 얇으면 컬이 힘이 없으니 끝 숱은 남김"],
    },
    perm: {
      type: "셋팅 · 디지털 펌", at: "ends",
      zones: [
        { z: "top", mm: [32, 34], turns: "1.5회전", wind: "안말음" },
        { z: "crown", mm: [30, 32], turns: "1.5회전", wind: "안말음" },
        { z: "side", mm: [30, 32], turns: "1.5회전", wind: "안말음" },
        { z: "back", mm: [30, 32], turns: "1.5회전", wind: "안말음" },
        { z: "nape", mm: [28, 30], turns: "1.5회전", wind: "안말음" },
      ],
      tips: ["끝에서 1.5회전만, 섹션은 크게", "긴 기장은 무게로 컬이 늘어지니 한 단계 가는 롯드도 고려"],
    },
  },
  {
    id: "long-s", len: "롱", lenY: 300, name: "롱 S컬 굵은 웨이브 펌",
    desc: "긴 머리에 굵은 물결 웨이브를 넣는 화려한 스타일",
    cut: {
      form: "layer", formName: "레이어",
      guide: "가슴선",
      section: "수직(버티컬) 섹션",
      angles: { nape: 45, back: 90, crown: 90, top: 135 },
      tips: ["중간 기장부터 층을 내야 웨이브가 겹쳐 보임", "끝 숱은 과하게 치지 않기"],
    },
    perm: {
      type: "셋팅 · 디지털 펌", at: "ends",
      zones: [
        { z: "top", mm: [28, 30], turns: "2.5~3회전", wind: "안말음" },
        { z: "crown", mm: [28, 30], turns: "2.5~3회전", wind: "안말음 · 겉말음 교차" },
        { z: "side", mm: [26, 28], turns: "2.5~3회전", wind: "얼굴 쪽 겉말음(리버스)" },
        { z: "back", mm: [26, 28], turns: "2.5~3회전", wind: "안말음 · 겉말음 교차" },
        { z: "nape", mm: [23, 26], turns: "2.5회전", wind: "안말음" },
      ],
      tips: ["교차 와인딩으로 자연스러운 물결", "귀 높이부터 컬이 시작되도록 회전수 조절"],
    },
  },
  {
    id: "long-hippie", len: "롱", lenY: 300, name: "롱 히피 펌",
    desc: "뿌리 가까이부터 끝까지 잘게 구불거리는 스타일",
    cut: {
      form: "layer", formName: "하이 레이어",
      guide: "가슴선",
      section: "수직(버티컬) 섹션",
      angles: { nape: 90, back: 90, crown: 135, top: 180 },
      tips: ["층을 많이 내야 부피가 삼각형으로 퍼지지 않음", "앞머리나 얼굴선 잔머리도 함께 디자인"],
    },
    perm: {
      type: "일반(콜드) 펌", at: "root",
      zones: [
        { z: "top", mm: [12, 14], turns: "스파이럴", wind: "뿌리 2cm 띄우고 끝까지" },
        { z: "crown", mm: [12, 14], turns: "스파이럴", wind: "뿌리 2cm 띄우고 끝까지" },
        { z: "side", mm: [10, 12], turns: "스파이럴", wind: "세로 섹션 · 방향 교차" },
        { z: "back", mm: [10, 12], turns: "스파이럴", wind: "세로 섹션 · 방향 교차" },
        { z: "nape", mm: [10, 12], turns: "스파이럴", wind: "세로 섹션" },
      ],
      tips: ["섹션을 작고 균일하게, 롯드 방향을 번갈아", "손상모는 한 단계 굵은 롯드로"],
    },
  },
  {
    id: "root-volume", len: "볼륨", lenY: 248, name: "뿌리 볼륨 펌",
    desc: "기장과 상관없이 정수리가 가라앉을 때 뿌리만 세워 주는 시술",
    cut: {
      form: "keep", formName: "기존 형태 유지 (커트 변경 없음)",
      guide: "현재 기장 유지",
      section: "—",
      angles: null,
      tips: ["끝선 정리만 가볍게"],
    },
    perm: {
      type: "일반(콜드) 펌 · 뿌리 부분만", at: "root",
      zones: [
        { z: "top", mm: [28, 32], turns: "1.5회전", wind: "120° 들어 올려 온 베이스 · 뒤로 말기" },
        { z: "crown", mm: [26, 30], turns: "1.5회전", wind: "온 베이스 · 아래로 말기" },
      ],
      tips: ["가르마 양옆 2~3개 섹션만 시술", "뿌리에서 5~6cm까지만 약제 도포"],
    },
  },
];
