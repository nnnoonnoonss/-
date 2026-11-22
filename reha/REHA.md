# REHA (레하) — 시리즈 메모리

AI 실사 숏폼 시리즈 「차원 지킴이 레하」의 설정, 감독 선호, 작업 규칙, 에피소드 기록.
프롬프트를 짤 때는 `/1` 스킬(Seedance 2.5 액션 판타지 규칙)과 이 파일을 함께 따른다.
에피소드별 최종 전체 프롬프트는 `reha/episodes/`에 있다.

## 1. 캐릭터
- **이름**: REHA (레하). 이전 이름 RUHA(루하)에서 변경됨. 프롬프트에는 항상 `REHA`로 쓴다.
- **정체**: 차원 지킴이(Dimension Guardian). 여러 차원을 돌아다니며 그 차원의 재앙을 막는다.
- **능력**: 흡수·방출. 열, 물, 불, 냉기 등 무엇이든 흡수해서 되돌려준다.
- **성격**: 차분함, 차가움, 냉정함, 냉소적. 절대 서두르지 않고, 맞아도 표정 변화가 거의 없다. 웃음은 입꼬리 한쪽만 살짝 올라가는 차가운 미소(넓게 웃지 않음).
- **외형**: 여성, 20대. 얼굴과 헤어는 감독이 넣는 레퍼런스 이미지로 고정.
- **이동 수단**: 차원 사이를 달리는 미래형 오토바이 (레퍼런스 이미지 있음). 에피소드에 따라 생략 가능(4화는 없음).
- **말버릇**: 도착 시 "여기도 엉망이네." / 마무리 "정리 끝."

## 2. 목소리
- ElevenLabs Voice Design으로 제작. 20대 여성, 차분하고 냉소적인 말투, **낮은 목소리는 쓰지 않음**(중간 톤).
- 감독이 특이한 콘셉트 4개(① 인형 같은 무감정 ② 나른하게 늘어짐 ③ 숨결 섞인 속삭임 ④ 건조하게 갈라짐) 중 하나로 완성함. 어떤 것을 골랐는지는 기록 없음 → 필요하면 감독에게 확인.
- 영상에서는 `@Audio 1`을 레하 목소리 레퍼런스로 넣는다.
- 한국어 대사 팁: 한글로만, 숫자·영어는 한글로 풀어쓰기, 마침표로 말끝을 내림, 느낌표 금지.

## 3. 레퍼런스 규칙 (감독 지시)
- **태그는 맨 위 REFERENCES에서 한 번씩만** 쓴다. 이후에는 "REHA", "her outfit", "her voice", "the motorcycle"로만 부른다. (자주 넣으면 감독이 불편함)
- `@Image 1` = 얼굴과 헤어, `@Image 2` = 의상, `@Image 3` = 오토바이(나올 때만), `@Audio 1` = 목소리.
- 한글 일관성 문장에도 태그를 넣지 않는다 ("레하는 처음부터 끝까지 동일한 의상을 착용한다", "음성 레퍼런스와 정확히 동일하다").

## 4. 포맷과 형식
- Seedance 2.5, **9:16 세로**, **30초를 한 번에 생성**(감독은 분할 생성하지 않음). 15초는 요청 시에만.
- 실사(photoreal) 필수. 애니, CG 느낌은 실패로 본다.
- 오디오는 효과음만. BGM, 스코어, 앰비언트, 드론, 노래 금지.
- 수정 요청이 오면 항상 **전체 프롬프트를 합쳐서** 다시 준다.
- 전달 순서: 설계 포인트(짧게) → 전체 프롬프트(코드 블록) → 샷 요약 표 → 주의점/대안.

## 5. 시리즈 공식
1. 0~2초 훅: 위협이나 액션이 이미 진행 중. 보통 차원 글리치를 뚫고 오토바이가 튀어나옴.
2. 헬멧을 벗으면 레하 얼굴 → "여기도 엉망이네."
3. 흡수 → 저장(손에 쌓이는 게 보임) → 방출.
4. 정적 → "정리 끝."
- 차원 글리치 묘사: 고장 난 영상 신호처럼 공간이 가로 조각으로 찢어짐. 빛나는 포털, 소용돌이, 번개가 아님.
- 캡션 포맷: `Log #00N / Dimension / Disaster / Status: Cleared`

## 6. 감독 선호와 실패에서 배운 것 (중요)
- **흡수는 눈에 보여야 한다.** "흡수하는 모습이 하나도 없다"는 피드백이 있었음. 물질이 손바닥으로 빨려 들어가는 방향과 흐름을 구체적으로 쓴다(배수구로 빨려 들어가듯, 풀과 먼지와 머리카락이 손 쪽으로 끌려감).
- **효과는 레하 손에서 시작한다.** 얼음도 불도 손부터 시작해서 바깥으로 퍼진다. 순서를 STEP 1, 2, 3으로 고정해서 쓰면 잘 지켜진다.
- **"꽃"은 꽃 모양이 아니었음.** 감독이 "꼭"을 "꽃"으로 쓴 오타였다. 꽃무늬 효과를 넣지 말 것.
- **슬로모션 싫어함** (4화에서 "슬로우모션 별로야"). 앞으로는 기본적으로 불릿타임, 슬로모션, 스피드 램프를 넣지 않는다. 넣고 싶으면 먼저 물어본다.
- **레이저가 안 나온 적 있음** (1화). 원인: 실사 금지 문구(no beam, no energy)와 충돌, "thin" 같은 약한 묘사, 발사 순간 컷 없음. 빔이 필요하면 REQUIRED로 명시하고, 실제 물건(산업용 워터젯 등)에 비유하고, 금지 문구 범위를 좁히고, 발사 클로즈업 컷을 따로 둔다. 감독은 결국 1화에서 레이저 대신 사방 방출을 선택함.
- **적이 단조롭게 공격하면 안 됨** (3화). 공격 종류를 여러 개로 하고, 레하도 움직이면서 흡수한다.
- **마무리 한 방은 근접 접촉을 좋아함**: 머리를 잡고 웃음(수분 흡수 초안), 손바닥을 이마에 대고 쾅(3화).
- **전부 한 번에 흡수하기보다, 싸우며 조금씩 터치로 흡수 → 마지막에 전체 흡수 → 방출** 구조를 좋아함(4화).
- 방출 범위를 제한하는 연출 좋아함: "쏘는 방향만 다시 얼어붙음".
- 엔딩에 오토바이가 돌아오는 장면은 필요 없음.
- 캐릭터가 지나치게 밋밋하거나 애니처럼 보이면 안 됨. 실사 촬영 용어(ARRI, anamorphic, handheld, practical effects)와 PHOTOREALISM LOCK을 넣는다.
- 피는 과하지 않게. 좀비와 괴물은 피 없이 얼음처럼 깨지거나 지져지는 식으로 처리. 괴물 피는 남색 가능.

## 7. 에피소드 기록
| 화 | 차원 / 재앙 | 흡수 → 방출 | 상태 | 파일 |
|---|---|---|---|---|
| 1 | 조선 / 좀비 창궐 | 지붕 위 추격 유인 → 손바닥으로 열 흡수(손부터 얼어감) → 손부터 열 방출(증기, 불, 열충격으로 좀비 파괴) | 완성, 업로드 준비 | `episodes/ep01_joseon.md` |
| 2 | 미래 부산 / 바다 괴생명체가 일으킨 해일 | 해일을 손바닥으로 흡수 → 아래로 물을 쏴서 솟구침 → 손가락 총 조준(얼굴 클로즈업) → 물 레이저(워터젯) | 프롬프트 완성 | `episodes/ep02_busan.md` |
| 3 | 1930년대 경성 / 불의 차원 약탈자(능력자 1:1) | 화염구, 불채찍, 바닥 불길, 불 회오리, 불주먹을 움직이며 흡수 → 거리 전체 불 흡수 → 이마에 손바닥 대고 쾅 | 프롬프트 완성 | `episodes/ep03_gyeongseong.md` |
| 4 | 남극 연구기지 / 블리자드와 설인 | 터치로 조금씩 냉기 흡수(녹은 자리에 잔디, 설인 털이 따뜻한 색으로) → 설원 전체 흡수(남극이 초록 들판) → 쏘는 방향만 다시 얼어 설인 동결 | 프롬프트 완성 | `episodes/ep04_antarctica.md` |

### 아직 안 쓴 에피소드 후보
- 1999년 서울 × 운석 비 → 운동에너지 흡수(운석이 공중에서 멈춤)
- 사막 왕국 × 모래폭풍과 거대 모래벌레 → 모래 흡수, 모래 창
- 빅토리아 런던 × 독안개와 연금술사 → 안개 흡수
- 1980년대 미국 시골 × 토네이도 → 바람 흡수
- 네온 미래 도시 × 폭주 드론 군단 → 전기 흡수(드론이 꺼지며 떨어짐)
- 궤도 우주정거장 × 중력 붕괴 → 중력 흡수 (CG 위험 높음)
- 시계탑 도시 × 시간 붕괴 → 시간 흡수(노화)
- 라이벌: 또 다른 흡수 능력자 (5화 이후 추천)
- 3화의 불 약탈자는 다른 차원으로 날아간 설정이라 숙적으로 재등장 가능

## 8. 브랜딩
- **1화 제목**: `조선에 좀비가 터지자, 차원을 넘어온 여자` / 영어 `Zombies Took Over Joseon. Then She Arrived.`
- **한 줄 소개**: `REHA. Guardian of dimensions.` / `Wherever a world falls apart, she arrives.` / `She absorbs the disaster, then gives it back.`
- **프로필**: `Dimension Guardian REHA. She travels across dimensions to stop their disasters. Absorb. Release. Done.`
- **해시태그**: `#REHA #DimensionGuardian #Superpower #AIvideo #Shorts`
- **로고/워터마크 이미지 생성 프롬프트** (Ideogram, ChatGPT 이미지 추천):
  - 워드마크: `A minimal modern logo wordmark of the text "REHA" in bold geometric sans-serif capital letters, white on a pure black background. A thin horizontal digital glitch slice cuts through the upper part of the letters, slightly shifted sideways, like a tear between dimensions. A subtle chromatic split on the edges: icy blue on the left, heat orange on the right. Clean, sharp, flat vector style, high contrast, centered, lots of negative space, no other text, no mockup.`
  - 엠블럼: `A sleek emblem logo for a dimension guardian named "REHA". A circular portal ring split by a horizontal glitch line, one half frosted icy blue, the other half glowing heat orange, symbolizing absorbing cold and releasing heat. Below the emblem, the text "REHA" in bold futuristic sans-serif capital letters, and under it the small text "DIMENSION GUARDIAN" in thin, widely spaced letters. Flat vector logo, black background, minimal, premium, sharp edges, no mockup.`
  - 워터마크 사용: 투명 PNG, 오른쪽 아래보다 살짝 위, 화면 폭의 15~20%, 투명도 60~75%.
