# 검은 액체 괴물(심비오트형) 예하 — 프롬프트 노하우

감독이 "너무 좋다"고 확정한 방식. 액체 괴물 장면을 짤 때 이 파일의 규칙과 문구를 그대로 쓴다.

## 1. 핵심 원칙

- **기준 물질은 페로플루이드(자성 유체)**. "외계 생명체", "심비오트", "Venom"이라고 쓰지 않는다(저작권 + CG 괴물화). 항상 `a living black liquid organism`으로 묘사.
- **강점은 미친 속도와 파괴력**. 모든 동작은 갑작스럽고 폭발적이며, 실제 무게와 충격이 있다.
- **항상 액체로 보여야 한다**. 형태(칼, 방패, 늑대 등)를 잡아도 표면은 계속 물결치고, 가장자리에서 뚝뚝 떨어지고, 움직이면 방울이 흩뿌려진다. 금속, 돌, 플라스틱처럼 굳어 보이면 실패.
- **빛 효과 금지**: no glow, no light, no particles, no energy effects. 괴물 얼굴, 이빨, 혀, 눈 금지.

## 2. 감독 피드백으로 확정된 규칙 (실패 → 해결)

| 실패 | 해결 |
|---|---|
| 무기가 금속처럼 단단해 보임 | "LIQUID holding a shape, NEVER solid metal" + 물결, 뚝뚝 떨어짐, 방울 흩뿌림을 매 무기에 명시 |
| 방패가 팔 전체에서 천천히 퍼짐 | **손바닥에서 "착" 순간적으로 방패 모양으로 튀어나옴** (in a split second, snaps outward from her palm) |
| 늑대가 진짜 늑대처럼 나옴 | NOT a real wolf: 털, 실제 동물 피부, 동물 눈, 진짜 이빨 금지. **늑대 모양을 겨우 유지하는 출렁이는 액체 덩어리**, 발이 철벅 흩어졌다 다시 생김, 뒤로 액체 자국 |
| 새총 발사 전 뒤로 당겨짐 | **NO pulling back, NO winding up.** 촉수가 양쪽 벽에 박히는 순간 바로 수축해 앞으로 끌려 날아감 |
| 복어 가시가 작고 약함 | **"POP" 한 번에 폭발하듯 부풀고**, 가시는 **몇 미터짜리 굵은 창** 수십 개 |
| 지상 전투가 사람처럼 걷고 뜀 | 자기 다리로 거의 안 움직임. **촉수가 땅/벽에 박혀 몸을 비정상적인 각도로 끌어당김**(수평으로 날아감, 거미처럼 매달림, 벽을 거꾸로 고속 이동, 사방 동시 공격). 카메라가 못 따라감 |
| 액체가 덮였는데 머리카락이 나옴 | 머리까지 **두건처럼 두개골 모양대로 빈틈없이 덮음**, 머리카락 한 올도 안 보임, 얼굴만 타원형으로 노출. 레퍼런스 문장의 "헤어스타일 유지"는 변신 전 샷으로 한정 |
| 엔딩에서 액체가 깔끔하게 다 사라짐 | **얼굴 부분만 마스크처럼 녹아 걷히고**, 머리와 몸은 피부처럼 달라붙은 액체 그대로. 눈은 검은 액체로 차오르고 씨익 웃음 |

## 3. 형태 라이브러리 (영문 문구 그대로 사용)

```
THE BLACK LIQUID — HIGHEST PRIORITY
A living black liquid organism bonded to YEHA. It must look exactly like real ferrofluid filmed up close: an ink-black, glossy, oily liquid with a mirror-like sheen that reflects the lights. It is ALWAYS visibly liquid — its surface constantly rippling and flowing, thick drips running off its edges and falling to the ground, droplets spraying off it whenever it moves fast. It instantly hardens into sharp ferrofluid spikes, then softens back into liquid.
Its strengths are INSANE SPEED and DESTRUCTIVE POWER. Every move is sudden, explosive, and violent, with real weight and real impact.
No glow, no light, no particles, no energy effects. No monster face, no teeth, no tongue, no eyes of its own, no cartoon shapes. It never looks like a CGI creature.
```

- **SECOND SKIN (전신 덮기)**: `It covers her ENTIRE body like a skin-tight, full-body glossy black suit — including her whole head. Over her head it works like a tight hood: it covers ALL of her hair completely and clings smoothly to the shape of her skull, so not a single strand of hair is visible anywhere. Only her face shows, in a smooth oval opening.`
- **LIQUID SHIELD**: `in a split second, the liquid on her LEFT HAND snaps outward from her palm into a broad, round shield shape. Its surface ripples like a pool of oil, and thick drips run off its rim. Bullets sink into it with splashes and ripples.`
- **LIQUID SWORD**: `the liquid on her RIGHT HAND stretches into a long sword shape, its edge sharpened into fine, constantly shifting ferrofluid spikes, its surface flowing, black droplets flinging off it with every swing.`
- **LIQUID MACE**: `the sword melts and swells into a huge mace shape with a round head bristling with ferrofluid spikes that keep rising and sinking, liquid drooling from it, splashing outward like heavy black paint on impact.`
- **TENDRILS**: `Long, thick liquid tendrils shoot out from her back. They stab into the ground and walls like anchors, pull and fling her body around, and strike enemies from several directions at once.`
- **INHUMAN MOVEMENT**: `She barely walks or runs on her own legs. Instead, her tendrils yank, swing, and fling her body through space at blinding speed and in unnatural ways — her body pulled sideways and horizontal through the air, hanging suspended on tendrils like a spider, crawling upside down along a wall at high speed, snapping instantly from one place to another. It is unsettling and inhuman, but always with real weight, real momentum, and real impact, like real wire-work. The camera constantly struggles to keep up with her.`
- **TENDRIL LAUNCH (새총)**: `two tail tendrils shoot out and stab into the two walls, then instantly contract and yank it forward through the air at insane speed. There is NO pulling back and NO winding up.`
- **WINGSUIT (활공)**: `a thin, glossy black membrane stretched between her arms, body, and legs, exactly like a real wingsuit`
- **GIANT HAND**: `from her right arm, the liquid forms a huge black hand, bigger than her whole body, that can grab building corners`
- **LIQUID WOLF**: `a huge wolf-shaped mass of glossy black liquid. It is NOT a real wolf: no fur, no real animal skin, no real animal eyes, no realistic animal teeth. Pure glossy black liquid barely holding the shape of a running wolf — its body constantly rippling and flowing, its outline wavering, liquid sloshing inside it, its paws splashing apart and reforming with every stride, a trail of black liquid splattering behind it. Its open jaws are formed by sharp ferrofluid spikes. Its TAIL splits into several long liquid tendrils that whip, lash, wrap, and strike at enemies on both sides while it runs.`
- **PUFFERFISH BURST**: `in a single explosive instant — POP — the liquid blows up into a huge round sphere, like a pufferfish inflating, with dozens of huge, thick, long spikes several meters long shooting out in every direction at once, like giant spears.`
- **SCATTER**: `the sphere bursts apart with a loud wet BANG, flinging its liquid outward across the whole area in a massive spray of black droplets.`
- **DROPLET SMOTHER**: `When a single tiny droplet lands on a face, it instantly spreads into a thin, glossy black film that crawls over the whole face and seals over the mouth, nose, and eyes.` (매크로로 볼에 붙은 방울 하나 → 번짐 → 얼굴 삼킴 → 휩팬으로 전원에게)
- **REGATHER**: `the scattered liquid flows back across the floor from every direction and rises into a tall human-shaped figure of glossy black liquid — her body shape, completely sheathed, featureless face, no hair visible.`
- **FACE REVEAL ENDING**: `ONLY the face area of the liquid thins and draws back like a melting mask, revealing her real human face. Everything else — her head, her hair, her whole body — stays covered in the glossy black liquid, clinging tightly like a second skin. Her eyes are completely glossy black, filled with liquid. Slowly, the corners of her mouth curl up into a wicked, satisfied grin.`
- **BLACK EYES**: `her irises and the whites of her eyes turn completely glossy black`
- **FIRE WEAKNESS** (위기 연출용): `when flames hit it, it hisses, smokes, bubbles, and recoils, peeling away from her body` → 이를 악물고 더 크고 날카롭게 진화해 다시 덮음

## 4. 시리즈 구성 (완성된 흐름)

1. **각성 (연구소 격리실, 30초)**: 유리관 속 액체가 손바닥 쪽으로 가시로 몰려듦(훅) → 유리 파괴, 팔을 타고 오름 → 눈이 순간 새까매짐 → 총격, 전신 덮고 총알이 물결치며 떨어짐(불릿타임 1초) → 촉수, 칼날 팔 → 바닥으로 퍼져 경비대를 벽에 붙임 → 스며들어 사라지고 눈에 검은 일렁임
2. **탈출과 도시 비행 (30초)**: 옆 건물에서 본 연구소 옥상이 터지며 뚫고 나옴(훅) → 헬기 총격 → 촉수 새총, 대형 점프, 윙슈트 활공, 큰 손으로 빌딩 모서리 돌기, 반동 발사 → 헬기 스키드 → 엔진 파괴, 공중 폭발 → 망원 와이드로 먼 옥상의 실루엣 → 눈이 까매지며 전신(얼굴까지) 덮이고 하늘 높이 점프해 사라짐
3. **벙커 습격 (30초)**: 능선에서 내려다봄 → 1초 만에 전신 덮음 → 직선 비행, 드론이 못 따라감 → 착지 크레이터 → 손바닥 방패 → 촉수로 비정상 이동, 거미처럼 사방 공격 → 액체 검 → 촉수로 튕겨 올라 철퇴 내려찍기 → 액체 늑대로 방폭문 틈 통과 → 복도에서 꼬리 촉수로 양옆 공격
4. **무기창고 (30초)**: 철문이 경첩째 날아가며 늑대 돌진 → 당김 없는 촉수 발사 → 포위 → "팡" 거대 가시 구체 → "펑" 터지며 생존자들 얼굴에 방울 → 얼굴 삼킴, 쓰러짐 → 액체가 모여 인간형 → 얼굴만 드러나며 검은 눈, 씨익

## 5. 연출 팁

- 액체 장면은 **매크로 샷**(가시 끝, 칼날 표면, 볼에 붙은 방울)을 꼭 하나 넣는다. 질감이 확인되는 순간이 CG 의심을 지운다.
- 속도는 **카메라가 못 따라가는 것**(whip pan too late, drone falls behind)으로 보여준다. 빛 꼬리 금지.
- 소리는 젖은 소리로 통일: `wet surge, wet snap, wet slicing, plopping into liquid, wet crawling, wet sloshing`.
- 액체가 늑대·구체·인간형으로 바뀌어도 **같은 하나의 개체**라고 마지막 STYLE 줄에 명시: `Exactly one liquid creature (wolf, sphere, droplets, and humanoid are the same one)`.
- 몸이 다 덮이는 편에서는 @Image 2(의상) 레퍼런스를 빼고 얼굴 레퍼런스만 쓴다.

## 6. 추가 능력 (3탄에서 확정)

- **MELT & SEEP (스며들기)**: `her whole body collapses straight down into a glossy black puddle, which drains into the hairline cracks of the asphalt like water soaking into sand, until it is completely gone.` 지하 이동은 CG 단면도 대신 **실제 배수관·케이블 덕트 안을 카메라가 쫓아가는** 방식.
- **SEEP UP + BLACK POOL**: 배수구에서 보글보글 → 바닥 전체를 깊게 덮은 검은 액체층에 적들이 허리까지 빠짐 → 가시로 굳어 가둠. 콘크리트가 녹은 게 아니라 **콘크리트 위를 덮은 액체**임을 명시.
- **FINGER GUN (손가락 총)**: 검으로 베는 것보다 감독 선호. `its right hand forms a finger-gun shape — index finger pointed, thumb raised — and fires rapid shots of black liquid from the fingertip, each shot a fast, glossy black liquid bullet. Where a shot hits, it bursts with a heavy wet splat and spreads, knocking weapons away, smashing cameras, or pinning a guard flat against the wall in a glossy black binding.`
- **LOCK PICK**: 금고문 틈과 열쇠 구멍으로 스며들어 내부 톱니를 돌림(매크로) → 빗장이 풀림.

## 7. 초록 액체 = 독 능력

3탄에서 비밀 실험실의 형광 초록 액체를 흡수해 **독 능력**을 얻음. 이후 편에서는 이 설정을 유지한다.

- **흡수**: `tendrils pierce the glass tanks and drink the green liquid. The green liquid streams into the black body and spreads through it in a network of veins, like blood vessels branching under skin.`
- **외형 변화 (감독 확정)**: 기본은 **검은 몸**, 그 표면 바로 아래로 **초록 액체가 피처럼 흐르는 혈관**이 온몸에 가지처럼 뻗어 있음. 대리석 무늬가 아니라 **혈관**. 초록 액체가 혈관 속을 맥박에 맞춰 흐르고 고동침. 검은 눈 속에 초록빛이 일렁임.
  `Her body stays glossy black, but just beneath its surface runs a network of branching veins, like blood vessels under skin, and through them the green liquid flows like blood — pulsing with a slow heartbeat, its faint green glow showing through the black.`
- **초록 액체 표현**: `a thick, faintly fluorescent green liquid, like real fluorescent dye glowing softly under lab lights` — 빛줄기, 오라, 파티클 금지.
- **독 표현은 결과로만 (실제 산성 부식처럼)**: 닿은 금속과 콘크리트가 **쉬익 소리를 내며 거품을 일으키고 녹아내림**, 매캐한 초록빛 연기가 피어오름, 총신이 녹아 휘어짐, 독 안개 속 적들이 기침하며 쓰러짐. 사람의 살이 녹는 묘사는 금지(필터, 고어).
- **독 활용 예시**: 초록 줄무늬가 섞인 손가락 총 탄환이 총과 방패를 녹임 / 촉수가 철문을 녹여 뚫음 / 몸에서 초록 독 안개를 내뿜어 복도 전체 제압 / 바닥에 떨어진 방울 하나가 철판을 녹여 구멍을 냄.

## 8. 최근 작업에서 확정된 것 (CCTV 1화, 연구소 습격 등)

### 감독 피드백 → 해결 (추가분)

| 실패 / 요청 | 해결 |
|---|---|
| 변신 6개를 30초에 몰아넣어 전부 망함 | **한 편에 어려운 변신은 1~2개만**. 나머지는 이미 성공한 동작(손가락 총 등)으로 채움. 변신 샷마다 시간을 충분히 줌 |
| **손가락 총은 아주 잘 나옴** | 액체 액션의 메인 무기로 사용. 단순한 동작 하나라서 성공률이 높음 |
| 손가락 총에서 화염·연기가 나옴 | `ABSOLUTELY NO muzzle flash, NO gunpowder, NO fire, NO smoke, NO sparks, NO explosion from her finger. ONLY liquid shooting out, with a sharp wet "pew" sound — like squirting thick black ink, not like firing a gun.` |
| 적과 등지고 싸움 | **FACING LOCK**: 항상 적과 정면 대치(standoff), 사이드 투샷으로 마주 보는 구도 |
| 고개 "돌리기"로 나옴 | **고개를 옆으로 꺾기**: `tilts her head sideways — further and further, until her ear nearly touches her shoulder — and rolls her eyes up to stare directly into the lens` |
| 괴물 얼굴이 애매함 | **MONSTER JAWS** 문단을 따로 둠(아래) |
| 괴물 동작이 느림 | 시간을 0.5초로 못 박고 `in the blink of an eye — a fraction of a second — ... It happens so fast it is shocking.` |
| 긴박감 부족 | 0.5초 인서트 6컷 멀티샷(의자 → 무전기 → 총 뽑기 → 군화 → 모퉁이 → 문 손잡이) |
| 문 열면 액체가 안 보임 | 방을 무릎 높이까지 채우고, **문 여는 순간 액체가 문틈으로 밀려나와 군화를 덮음**, 경찰이 발밑을 내려다보는 시선으로 화면에 자연스럽게 노출 |
| 등 뒤에서 안 나옴 | 그가 **밟고 선 액체가 바로 등 뒤에서 솟음** + 어깨 너머 샷과 역샷으로 위치 고정 |
| 눈이 너무 예쁨 | **MONSTER EYES** 문단(아래) |
| 회피가 밋밋함 | **벽을 옆으로 달리고, 천장을 거꾸로 거미처럼 기고, 반대편 벽으로 뛰어 붙음**. 카메라도 같이 회전하며 화면이 뒤집힘 |
| 얼굴 노출 원치 않음 | 처음부터 얼굴 없는 형체로 가고 @Image 1은 체형 참고용으로만. 마지막에 눈만 등장 |

### 괴물 디자인 문구

- **MONSTER JAWS**: `A clear, terrifying monster mouth, not a vague shape. The whole black head splits horizontally from side to side, and the jaw unhinges like a snake's, opening far wider than the head itself. Inside: several rows of long, thin, jagged, needle-like black teeth, irregular and crooked, glistening wet. Thick strings of black slime stretch between the upper and lower jaws. Grotesque and horrifying, like a deep-sea predator, but made entirely of glossy black liquid.`
- **MONSTER EYES**: `NOT human eyes, NOT pretty eyes. Two large, inhuman eyes set too far apart: no whites, a murky, sickly yellow color, thin vertical slit pupils like a reptile's, wet and glistening.`
- **MONSTER GRIN** (얼굴 없는 머리): `a thin line splits open across the smooth black head and stretches into an impossibly wide, unnatural grin, edged with rows of small, sharp black spikes like teeth. Nothing else on the head — only that grin.`
- **FACELESS FIGURE**: `a tall, slender female figure made entirely of glossy black liquid, including a smooth, featureless head — no face, no hair.`

### 새 형태

- **LIQUID BIRD**: `a large bird shaped from glossy black liquid, like a huge black raven with wide wings, its surface rippling and its wingtips dripping as it glides. Not a real bird: no feathers, no real eyes.` → 날개를 접고 **창 모양으로 늘어나 수직 낙하**, 천장을 부수고 진입.
- **SPIDER TENDRILS**: `eight long, thin, jointed liquid tendrils burst out of her back and arch over her like the legs of a giant spider, then strike out all at once` (총을 일제히 빼앗기 등).
- **WALL-AND-CEILING DODGE**: `sprints sideways along the wall, runs up onto the ceiling and scuttles upside down along it like a spider, drops and flips across to the opposite wall — always with real weight and momentum, like a real stunt performer on wires.`
- **CORRIDOR COAT + SPIKE STORM**: 형체가 벽 속으로 사라지면 복도 바닥·벽·천장 전체가 검은 액체로 덮여 있음 → 적들이 등 맞대고 손전등으로 두리번 → `rat-a-tat` 사방에서 거대한 가시가 연속으로 튀어나옴.
- **LIQUID SEAL**: 액체가 문과 문틀을 덮고 굳어 봉쇄.
- **CCTV 오프닝**: 천장 구석 고정 광각, 흑백에 가까운 초록 틴트, 거친 화질, 끊기는 프레임, 간섭선. **타임스탬프·글자 금지**(깨져 나옴).

## 9. 검열(생성 차단) 대응

차단 원인이 될 가능성이 높은 순서:
1. **실제 공권력(경찰)이 피해자** — 제복·경찰서·무전기까지 들어가면 현실의 경찰로 인식됨
2. **신체 관통 묘사** — "등에서 배로 뚫고 나옴(through his stomach)"
3. **집단 살상** — "piercing every officer"
4. 단어: `blood`, `gasping`, `collapses`, `kill`, `stomach`, `impale`
5. 사람 살이 녹는 장면 (독)

해결책 (감독이 2번 전체 + 3번 일부를 채택):
- **관통 → 제압**: 액체는 아무도 다치게 하지 않고 잡고, 내리꽂고, 묶고, 고정만 함. `SUBDUING ONLY — The liquid never wounds anyone. It only grabs, slams, binds, and pins.`
  - 촉수가 몸통을 휘감아 벽에 내리꽂고 굳어서 봉인
  - 가시는 **소매, 조끼끈, 벨트, 옷감만 뚫고** 벽·바닥·천장에 고정, 몸은 건드리지 않음
- **결과는 화면 밖**(일부): 가시가 터지는 순간까지 보여주고, 손전등이 떨어져 굴러가며 암전, 비명과 소리만.
- 독 장면은 **장비(총, 헬멧, 방탄복)만 녹고**, 사람은 초록 연기 속 실루엣으로만.
- 장르 표기는 horror → thriller로 순화.
- 그래도 막히면 다음 단계: 경찰 → **가상의 비밀 조직 요원**, 경찰서 → **비밀 수용 시설**.
