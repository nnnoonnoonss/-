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

- **흡수**: `tendrils pierce the glass tanks and drink the green liquid. The green liquid streams into the black body and swirls through it in marbled green veins, like green ink spreading through black oil.`
- **외형 변화**: 흡수 후 검은 몸에 **초록 대리석 무늬 혈관**이 흐르고, 검은 눈 속에 초록빛이 일렁임.
- **초록 액체 표현**: `a thick, faintly fluorescent green liquid, like real fluorescent dye glowing softly under lab lights` — 빛줄기, 오라, 파티클 금지.
- **독 표현은 결과로만 (실제 산성 부식처럼)**: 닿은 금속과 콘크리트가 **쉬익 소리를 내며 거품을 일으키고 녹아내림**, 매캐한 초록빛 연기가 피어오름, 총신이 녹아 휘어짐, 독 안개 속 적들이 기침하며 쓰러짐. 사람의 살이 녹는 묘사는 금지(필터, 고어).
- **독 활용 예시**: 초록 줄무늬가 섞인 손가락 총 탄환이 총과 방패를 녹임 / 촉수가 철문을 녹여 뚫음 / 몸에서 초록 독 안개를 내뿜어 복도 전체 제압 / 바닥에 떨어진 방울 하나가 철판을 녹여 구멍을 냄.
