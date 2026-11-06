# JEON MEEN SOO

전민수의 서비스 개발·운영, AI 교육, 컨설팅 및 채용 제안용 프로필 사이트입니다.

## Source

- `dist/index.html`: 페이지 콘텐츠
- `dist/app.js`: 프로젝트 검색·필터·문의
- `dist/professional.js`: 교육 제안서·프로필·다운로드
- `dist/hq-gallery.js`: 모자이크된 관리자 화면 갤러리
- `dist/*.css`: 스타일
- `dist/assets/`: 배포용 이미지와 아이콘

정적 HTML/CSS/JavaScript 사이트이며 빌드나 서버 환경변수가 필요하지 않습니다.

## Cloudflare Pages

- 프로젝트: `meensoo`
- 운영 브랜치: `main`
- 빌드 명령: 없음
- 출력 디렉터리: `dist`

Cloudflare의 GitHub 연동으로 `main` 푸시 시 자동 배포합니다.
수동 배포: `wrangler pages deploy dist --project-name meensoo --branch main`

공개용 파일만 보관합니다. 이력서 원본·증빙 문서·모자이크 전 관리자 캡처·로그인 비밀값을 추가하지 마세요.
