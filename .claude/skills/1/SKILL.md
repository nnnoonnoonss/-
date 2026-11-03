---
name: "1"
description: 감독을 보조해 Seedance 2.5용 실사 액션/초능력 숏폼 영상 프롬프트를 짜고, 생성된 영상을 검토해 수정하는 규칙. 시댄스, Seedance, 영상 프롬프트, 숏츠/릴스 액션, 초능력물, 능력자 대결, 취권, 결과 영상 피드백 요청 시 사용.
---

# Seedance 2.5 액션 판타지 프롬프트 제작 규칙

역할: 액션 판타지 영상 전문가로서 감독(사용자)을 보조해 Seedance 2.5 프롬프트를 짠다. 답변은 한국어, 프롬프트 본문은 영어(한글 일관성 문장, 한국어 대사는 예외).

## 1. 고정 작업 규칙 (감독 지시사항)

| 항목 | 규칙 |
|---|---|
| 포맷 | 숏츠/릴스, **9:16**. 길이는 보통 15초 또는 30초 |
| 장르 | 초능력물, 액션. 가끔 코믹 반전 |
| 주인공 | 여성 캐릭터 위주 (기본 이름: YEHA) |
| 레퍼런스 | **두 장만**: `@Image 1` 인물(얼굴, 헤어), `@Image 2` 의상. 배경, 상대, 소품은 전부 텍스트로 묘사 |
| 초반 | **0~2초 안에 훅**. 설명 컷 없이 위협이나 액션이 이미 진행 중인 상태로 시작 |
| 불릿타임 | 남발 금지. **정확히 1초, 회피나 결정적인 순간에만**, 15초에 최대 1~2회. 없어도 되면 넣지 않음 |
| 오디오 | **효과음만**. BGM, 스코어, 앰비언트, 드론, 노래 전부 금지. 대사와 웃음은 지정한 것만 허용 |
| 수정 시 | **항상 전체 프롬프트를 합쳐서 전달**. 부분 교체본만 주지 않음 |
| 피 | 과하지 않으면 허용. 사람이 아닌 존재는 어두운 녹색이나 남색 피도 가능 |

## 2. 프롬프트 기본 구조 (감독 포맷)

```
[길이 | 샷 구성 | 9:16 | 콘셉트 | 대사 여부]

REFERENCES          — @Image 1 인물, @Image 2 의상 + 한글 일관성 문장 + 콜라주 무시
CONTINUITY LOCK     — 한 장소, 시간 점프 금지, 조명 고정, 위치 고정
DIRECTION LOCK      — (방향이 중요한 장면만) 화면 기준 방향
SPACE MAP           — 장소와 랜드마크의 위치 관계
CHARACTERS          — 상대/엑스트라 텍스트 묘사 (실제 배우, 실제 분장)
[특수 요소]         — 메테오, 소품 등 핵심 요소의 실사 묘사
PHOTOREALISM LOCK   — CG화, 애니화 차단
[효과 규칙]         — THE CUT 등 능력 효과의 표현 방식
CHARACTER MOVEMENT  — 캐릭터별 동작 원리, 표정
CAMERA              — 렌즈, 카메라 특성, 불릿타임 규정
SHOTS / ACTION      — 타임코드별 샷
SOUND               — 효과음 목록 + 금지 목록
STYLE               — 화질, 그레이딩, 인원수 고정
```

전달 순서: 설계 포인트(짧게) → 전체 프롬프트(코드 블록) → 샷 요약 표 → 주의점/대안.

## 3. 실패에서 배운 교훈

| 실패 | 원인 | 해결 |
|---|---|---|
| 장면이 뜬금없이 다른 공간으로 튐 | "multi-shot, hard cuts"를 쓰고, 샷마다 장소를 새로 묘사함 | SPACE MAP으로 장소 하나를 고정하고 모든 샷이 그 안에서 일어난다고 명시. 랜드마크 재사용. 컷은 허용하되 장소는 고정 |
| 방향이 반대로 썰림 | 인물 기준 좌우("his left shoulder")로 씀. 마주 보는 인물은 화면에서 좌우가 반대 | **모든 방향은 화면 기준**(upper left of the screen). 인물 기준을 쓸 땐 화면 위치를 함께 적음. 카메라가 축을 넘지 않게 고정 |
| 마왕이 CG 같음 | 공중 부양, 빛나는 눈, 오라 | 실제 배우와 실제 분장만. 판타지 요소 최소화. 땅에 발을 붙임 |
| 메테오가 싸구려 CG | "glowing orange fireball" 같은 게임식 묘사 | 실제 현상 기준으로 묘사. 전체를 보여주지 않고 **일부만 노출**(구름을 뚫고 나오는 밑면) |
| 효과가 구림 | 빛 선, 레이저, 에너지 빔 | 능력은 보이지 않게, **물리적 결과로만** 표현. "No line in the air" 명시 |
| 취권이 유치함 | "goofy grin", 웃음 반복, 슬랩스틱 개그 나열 | 개그는 1~2개만. 동작은 기술과 원리로 구체적으로 |
| 손동작이 어색함 | "whole arm, slow sweep" | 팔뚝과 손만, **일정한 속도**로. "유리창에 손가락으로 선 긋듯" 같은 비유 |
| 상대가 너무 쉽게 나가떨어짐 | 맞자마자 바로 쓰러짐 | **늦은 깨달음** 리액션, 쓰러질 때 무게감 |
| 화면비가 가로로 나옴 | 플랫폼 설정 | 헤더에 9:16, 생성 설정에서도 확인하라고 안내 |

## 4. 연출 원칙

**훅**
- 첫 프레임에 위협이 이미 진행 중 (날아오는 칼, 떨어지는 메테오)
- 긴장감은 작은 것부터: 물웅덩이 파문 → 구름이 붉어짐 → 등장
- 소리는 정적에서 저음으로 쌓음

**반전 구조 (예하 패턴)**
- 압도적 위협 → 귀찮다는 태도 → 한 방 → 정적 → 일상적인 대사로 마무리
- 귀찮음은 표정과 태도로, 동작은 정확하고 깔끔하게
- 해결 순간 소리가 뚝 끊기는 정적이 펀치라인
- 위협이 예하를 향하는 컷(노려보기, 비웃기)을 넣어야 반전이 커짐

**액션 동작**
- kinetic chain: ankle → knee → hip → spine → shoulder
- 실제 체중, 관성, 착지 충격
- 스케일 업: 근접전 → 환경 활용 → 대규모 결착

**능력 표현**
- 실제 물질(물, 모래, 잔해, 금속, 차)을 움직이는 능력은 실사로 잘 나옴
- 빛, 번개, 에너지 빔은 CG 티가 나기 쉬움. 쓰면 "실제 현장 조명처럼" 주변을 비추게 함
- 능력에는 물리적 비용을 보여줌 (밀려나는 발, 파이는 바닥, 떨리는 팔)

**샷 구성**
- 멀티샷 OK, 장소 고정 필수
- 방향이 중요한 동작은 한 샷 안에서 원인과 결과를 함께 보여줌
- 15초 기준 7~9샷, 샷당 1~2초, 핵심 장면만 3~5초
- 긴 시퀀스는 15초 클립으로 나누고, 이전 클립 마지막 프레임을 다음 클립 첫 프레임으로 쓰라고 안내

## 5. 고정 문구 모음

한글 일관성 문장:
```
인물의 얼굴과 헤어스타일을 정확히 유지한다. 실사 여성이며, 전체 영상에서 동일한 한 사람으로 유지된다. @Image 2의 의상을 처음부터 끝까지 동일하게 착용한다. 신체와 의상은 온전하다. Do not use the text, labels, or collage layout of the reference images.
```

오디오 금지:
```
No background music. No score. No ambient soundscape. No drones. No singing. Silence between sound effects.
```

효과 차단:
```
No glowing line, no light beam, no energy wave, no neon, no sparkles, no particles, no flash. The effect leaves NO line in the air.
```

CG 차단:
```
Real actor in a real costume photographed on location. No floating. No glowing eyes. No aura, no smoke, no energy effects.
```

PHOTOREALISM LOCK:
```
Real live-action footage shot on a real camera with real actors on a real location — the look of a big-budget live-action film, NOT animation, NOT a game cutscene, NOT a 3D render. Real skin with pores, real hair strands and flyaways, real fabric weight and wind movement. NO stylized rendering, NO cel-shading, NO smooth plastic CGI skin, NO CGI characters.
```

## 6. 수위 및 필터 대응

- 성희롱/폭력은 단어 대신 행동으로 묘사 ("unwanted advances", "hand creeps uninvited")
- 좀비/괴물은 "No blood, no gore" 기본, 필요할 때만 피 허용
- 피는 양을 제한: "thin line seeps", "trickle", "no spraying, no gushing, no visible organs"

## 7. 결과 영상 검토 절차

1. 영상을 0.5초 간격 프레임으로 추출해 확인:
   ```
   ffmpeg -i <video> -vf "fps=2,scale=496:-1,drawtext=text='%{pts\:hms}':x=5:y=5:fontsize=18:fontcolor=yellow:box=1:boxcolor=black" frames/f_%02d.png
   ffmpeg -i frames/f_%02d.png -vf tile=4x4 -frames:v 1 sheet1.png
   ```
   화면비(ffprobe로 해상도)도 확인. 소리는 직접 들을 수 없으니 감독에게 확인 요청
2. 잘 나온 부분과 문제 부분을 시간대별 표로 정리
3. 문제마다 원인 → 수정 문구로 대응
4. 수정 후 전체 프롬프트를 합쳐서 전달

## 8. 전달 전 체크리스트

- [ ] 헤더에 길이, 9:16, 대사 여부
- [ ] 레퍼런스 두 장만, 태그 정확
- [ ] 0~2초 훅
- [ ] SPACE MAP 위치 관계가 모든 샷에서 일치
- [ ] 방향은 화면 기준
- [ ] 불릿타임 1초씩, 남발 없음
- [ ] 판타지 요소가 CG처럼 나올 여지 없음
- [ ] SOUND에 효과음 목록과 금지 문구
- [ ] 인원수 고정 문구
- [ ] 전체 프롬프트로 합쳐서 전달
