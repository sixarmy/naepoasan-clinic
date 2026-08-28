# 설치·수정·배포 가이드

## 1. 준비물 설치

- Node.js 20.9 이상 권장
- VS Code 또는 Cursor
- GitHub 계정
- Vercel 계정

## 2. 내 컴퓨터에서 실행

압축을 풀고 터미널에서 프로젝트 폴더로 이동합니다.

```bash
cd yonsei-daon-clinic
corepack pnpm@11.10.0 install --node-linker=hoisted --package-import-method=copy
corepack pnpm@11.10.0 dev
```

브라우저에서 아래 주소를 엽니다.

```text
http://localhost:3000
```

## 3. 가장 먼저 수정할 파일

모든 기본 정보는 아래 파일에 모아두었습니다.

```text
src/lib/clinic.ts
```

수정할 항목:

- 전화번호: 031-894-5750 반영 완료
- 진료시간: 월-금 08:30-18:00 / 점심시간 13:00-14:00 / 토 08:30-13:00 반영 완료
- 예약 링크
- 네이버 블로그 링크
- 카카오톡 채널 링크
- 사업자등록번호
- 주차 안내
- 실제 병원 사진 URL

## 4. 카카오맵

사용자가 제공한 카카오맵 퍼가기 코드는 아래 파일에 반영되어 있습니다.

```text
public/kakaomap.html
```

현재 반영값:

```text
timestamp: 1783246380338
key: qbqc3rfhpx6
주소: 경기도 의정부시 추동로 9, 5층
```

## 5. GitHub에 올리기

```bash
git init
git add .
git commit -m "Create Yonsei Daon clinic website"
git branch -M main
git remote add origin https://github.com/사용자명/저장소명.git
git push -u origin main
```

이미 기존 저장소를 쓰는 경우 `git remote add` 대신 기존 저장소 주소를 사용하면 됩니다.

## 6. Vercel에 배포

1. Vercel 접속
2. New Project
3. GitHub 저장소 선택
4. Framework Preset: Next.js 확인
5. Deploy
6. 배포 주소 확인

## 7. 배포 전 체크리스트

- [x] 전화번호 반영
- [x] 진료시간 반영
- [ ] 사업자등록번호 입력
- [ ] 비급여 안내 입력
- [ ] 실제 병원 사진으로 교체
- [ ] 네이버지도 검색 링크 확인
- [ ] 카카오맵 위치 확인
- [ ] 모바일 화면 확인
- [ ] 팝업 개원일자 확인
