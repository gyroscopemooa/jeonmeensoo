const projects = [
 {name:'TranStream',desc:'실시간 자막·번역 · 웹·모바일·데스크톱',status:'공개 서비스',kind:'product',url:'https://transtream.app',detail:'방송과 온라인 회의의 오디오를 실시간 자막·번역으로 연결합니다. 웹, Android, Windows 환경과 계정·이용시간·결제 흐름을 다루는 서비스입니다.',stack:'Next.js · React Native · Android · AI 음성·번역 · 결제 연동'},
 {name:'HireRoom / 하이어룸',desc:'기업 채용 페이지 · 지원자 관리',status:'공개 서비스',kind:'product',url:'https://hireroom.net',detail:'기업이 자체 채용 페이지를 만들고 공고·지원서·채용 상태를 관리하는 채용 SaaS입니다. 나우하이링/NowHiring 이름도 함께 사용합니다.',stack:'HTML · JavaScript · Supabase · 채용 운영'},
 {name:'무아레쥬메',desc:'AI 자기소개서 분석 · 면접·취업 준비',status:'서비스 개발·운영',kind:'product',url:'https://mooaresume.com',detail:'채용 공고와 지원서의 맥락을 함께 살펴보는 AI 취업 지원 서비스입니다. 자기소개서 분석, 이력서 작성, 면접 준비를 돕는 기능을 개발합니다.',stack:'Next.js · TypeScript · Supabase · AI 코칭'},
 {name:'인플공구 / 인플09',desc:'인플루언서 · 브랜드 · 공동구매',status:'공개 서비스',kind:'product',url:'https://infl09.com',detail:'인플루언서와 브랜드를 연결하는 공동구매 플랫폼입니다. 상품 탐색과 판매 관리, 협업 신청 흐름을 개발합니다. 신규 매칭·샘플 캠페인 기능은 개발 단계입니다.',stack:'React · TypeScript · Cloudflare · 이메일 연동'},
 {name:'헬띠루틴',desc:'운동 루틴·기록 · 오운완 커뮤니티',status:'앱 개발',kind:'product',url:'https://live-sub.com/healthyroutine/',detail:'운동 루틴을 만들고 기록하며 꾸준함을 이어가는 앱입니다. 운동 진행 관리와 오운완 커뮤니티를 구현한 모바일 프로젝트입니다. 링크는 앱 소개 페이지입니다.',stack:'Expo · React Native · Supabase'},
 {name:'ManyTool / 매니툴',desc:'사진·생활·게임 분야의 웹 도구 모음',status:'웹서비스',kind:'product',url:'https://manytool.net',detail:'작고 구체적인 문제를 해결하는 웹 도구 허브입니다. AI 사진·증명사진, FPS 감도와 색상 등 여러 분야의 유틸리티를 개발합니다.',stack:'웹 유틸리티 · AI 이미지 기능'},
 {name:'맡다 / MatDa',desc:'커뮤니티에서 견적·업무 매칭으로',status:'단계별 개발·운영',kind:'product',url:'https://matda.net',detail:'지역 커뮤니티를 기반으로 견적 비교와 업체·전문가 매칭으로 확장하는 플랫폼입니다. B2B 견적요청·계약·입찰은 단계별 개발 범위이며, 전체 기능의 상용화를 의미하지 않습니다.',stack:'커뮤니티 · 업무 매칭 · B2B 흐름 설계'},
 {name:'더홍보',desc:'앱·상품·가게·서비스 홍보 플랫폼',status:'웹서비스',kind:'product',url:'https://thehongbo.com',detail:'자신의 앱, 상품, 가게와 서비스를 등록하고 외부 링크로 연결하는 홍보 게시판입니다. 서비스의 발견과 소개를 돕습니다.',stack:'홍보 게시판 · 콘텐츠 운영'},
 {name:'SSRRR / 스르륵',desc:'유머·이슈·경제 콘텐츠 커뮤니티',status:'웹서비스',kind:'product',url:'https://www.ssrrr.net',detail:'게시글·댓글·추천·신고·미디어를 다루는 커뮤니티입니다. 콘텐츠 검수와 운영 도구, 게시글 기반 쇼츠 제작 기능도 개발합니다.',stack:'커뮤니티 · 미디어 · 콘텐츠 제작 도구'},
 {name:'LIVE-SUB',desc:'서비스를 한곳에 모은 패밀리 허브',status:'서비스 허브',kind:'product',url:'https://live-sub.com',detail:'언어, 일, 일상에 걸친 여러 서비스를 소개하고 연결하는 다국어 서비스 허브입니다.',stack:'다국어 웹 · 서비스 소개'},
 {name:'가족안심',desc:'보이스피싱·스미싱 예방을 위한 앱',status:'개발·검증',kind:'lab',detail:'문자·URL 위험 신호, 가족 동의와 알림을 다루는 보호 앱 프로젝트입니다. 통화 음성·한국어 전사 검증을 포함한 개발 단계로, 출시된 보호 서비스가 아닙니다.',stack:'Android · 위험 규칙 · 가족 알림'},
 {name:'oderme',desc:'현지 구매·심부름·조사 의뢰',status:'프로토타입',kind:'lab',detail:'현지 담당자에게 구매·심부름·현장조사를 의뢰하는 서비스 흐름을 시연합니다. 상담·견적·완료 기록의 프로토타입이며 실제 결제·번역·정산은 연결 전입니다.',stack:'서비스 설계 · 브라우저 프로토타입'},
 {name:'재테크 뉴스·속보·교육 사이트',desc:'경제·금융 뉴스 · 속보 · 재테크 학습',status:'기획',kind:'plan',detail:'재테크 관련 뉴스와 속보, 교육 콘텐츠를 한곳에서 살펴볼 수 있는 정보·학습 사이트를 기획하고 있습니다.',stack:'콘텐츠 기획 · 뉴스 큐레이션 · 재테크 교육'},
 {name:'인플루언서 팬 소통·콘텐츠 판매 플랫폼',desc:'개인 팬 커뮤니티 · 소통 · 유료 콘텐츠',status:'기획',kind:'plan',detail:'인플루언서가 개인 팬과 소통하고 자신의 콘텐츠를 판매할 수 있는 플랫폼을 기획하고 있습니다. 팬 커뮤니티와 콘텐츠 판매 흐름을 연결하는 서비스 구상입니다.',stack:'팬 커뮤니티 · 크리에이터 비즈니스 · 콘텐츠 판매'},
 {name:'인플픽',desc:'인플루언서 분야의 확장 브랜드',status:'준비',kind:'plan',detail:'별도 브랜드와 도메인이 등록된 준비 항목입니다. 현재 조사 자료로 확인한 범위는 메일 발송용 등록이며 구체적인 공개 서비스 기능은 확정하지 않았습니다.',stack:''},
 {name:'프리북스',desc:'전자책·콘텐츠 플랫폼 구상',status:'기획',kind:'plan',detail:'전자책·콘텐츠 플랫폼으로 논의한 사업 아이디어입니다. 현재 확보한 자료에서는 서비스 출시를 확인하지 않았습니다.',stack:'사업 구상 · 플랫폼 기획'},
 {name:'전문가 심리·상담 플랫폼',desc:'검사와 전문가 상담을 잇는 구상',status:'기획',kind:'plan',detail:'심리 검사와 전문가 상담을 연결하는 장기 플랫폼 아이디어입니다. 제공 중인 심리검사·임상 서비스나 보유 자격에 대한 주장이 아닙니다.',stack:'사업 구상 · 서비스 기획'},
 {name:'No-Excel 협업 도구',desc:'업무 관리·협업 방식 개선 구상',status:'기획',kind:'plan',detail:'자기소개 자료에 기록된 업무·협업 도구 기획 경험입니다. 현재 확인한 자료에서 출시 상태나 전체 구현 범위는 확정하지 않았습니다.',stack:'업무 흐름 분석 · 기획'}
];
const list=document.querySelector('#project-list');
let activeProjectFilter='all';
function render(filter=activeProjectFilter){
 activeProjectFilter=filter;
 const query=(document.querySelector('#project-search')?.value||'').trim().toLocaleLowerCase();
 list.replaceChildren();
 projects.forEach((p,index)=>{if(filter!=='all'&&filter!==p.kind)return;if(query&&!`${p.name} ${p.desc} ${p.detail} ${p.stack}`.toLocaleLowerCase().includes(query))return; const row=document.createElement('button');row.className='project-row';row.type='button';row.setAttribute('aria-label',p.name+' 상세 보기');
 const values=[['index',String(index+1).padStart(2,'0')],['project-name',p.name],['project-desc',p.desc],['project-status',p.status],['project-arrow','↗']];
 values.forEach(([cls,value])=>{const s=document.createElement('span');s.className=cls;s.textContent=value;row.append(s)});row.addEventListener('click',()=>openProject(p));list.append(row)});
 const count=list.children.length;document.querySelector('#project-count').textContent=`${count} PROJECTS`;
 const feedback=document.querySelector('#search-feedback');if(feedback)feedback.textContent=query?`${count}개 검색 결과`:'';
 if(!count){const empty=document.createElement('p');empty.className='project-empty';empty.textContent='검색 결과가 없습니다. 다른 단어나 분류를 선택해주세요.';list.append(empty)}
}
const dialog=document.querySelector('#project-dialog');
function openProject(p){document.querySelector('#dialog-title').textContent=p.name;document.querySelector('#dialog-description').textContent=p.detail;document.querySelector('#dialog-state').textContent=p.status;document.querySelector('#dialog-stack').textContent=p.stack;const link=document.querySelector('#dialog-link');link.hidden=!p.url;if(p.url)link.href=p.url;else link.removeAttribute('href');dialog.showModal()}
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});render(button.dataset.filter)}));
document.querySelectorAll('[data-inquiry]').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#inquiry-type').value=a.dataset.inquiry}));
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('JEONMEENSOO@GMAIL.COM');status.textContent='복사했습니다.'}catch{status.textContent='위 이메일 주소를 선택해 복사해주세요.'}});
document.querySelector('#inquiry-form').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.target);const subject=`[${data.get('type')}] ${data.get('name')} 님의 문의`;const body=`성함 / 소속: ${data.get('name')}\n문의 유형: ${data.get('type')}\n\n${data.get('message')}`;window.location.href=`mailto:JEONMEENSOO@GMAIL.COM?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`});
render();
document.querySelector('#project-search')?.addEventListener('input',()=>render());
