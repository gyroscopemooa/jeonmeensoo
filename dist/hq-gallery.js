const hqViews={
 overview:{src:'assets/hq-overview-redacted.png',title:'통합 운영 현황',description:'서비스별 상태, 회원·콘텐츠·신고·결제 지표와 활동 기록을 한 화면에서 확인합니다. 여러 관리자 화면을 오가던 운영 업무를 하나의 대시보드로 모았습니다.',alt:'여러 서비스의 통합 활동과 서비스 상태를 모아 보는 내부 관리자 대시보드. 운영 수치와 활동 내용은 모자이크 처리.'},
 funnel:{src:'assets/hq-funnel-redacted.png',title:'전환 퍼널',description:'방문부터 가입, 핵심 기능 사용, 결제까지 단계별 흐름을 분석합니다. 서비스·기간·플랫폼별로 전환과 이탈 지점을 살펴보고 개선할 구간을 찾습니다.',alt:'방문·가입·번역 기능 사용·결제로 이어지는 전환 퍼널 분석 화면. 수치와 계정 정보는 모자이크 처리.'},
 analytics:{src:'assets/hq-analytics-redacted.png',title:'서비스 분석',description:'유입·활성화·재방문·공유·수익 흐름과 이벤트·세션·결제·오류 정보를 함께 살펴봅니다. 개발 이후의 운영 상태와 사용자 행동까지 연결해 확인합니다.',alt:'AARRR와 이벤트·사용자·세션·결제·기술 오류를 함께 보는 서비스 분석 화면. 주요 운영 데이터는 모자이크 처리.'}
};
let hqSelected='overview';
const hqLightbox=document.querySelector('#hq-lightbox');
document.querySelectorAll('[data-hq-view]').forEach(button=>button.addEventListener('click',()=>{
 hqSelected=button.dataset.hqView;const view=hqViews[hqSelected];
 document.querySelectorAll('[data-hq-view]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 const img=document.querySelector('#hq-image');img.src=view.src;img.alt=view.alt;
 document.querySelector('#hq-caption-title').textContent=view.title;
 document.querySelector('#hq-caption-text').textContent=view.description;
 document.querySelector('#hq-enlarge').setAttribute('aria-label',view.title+' 화면 확대');
}));
document.querySelector('#hq-enlarge').addEventListener('click',()=>{
 const view=hqViews[hqSelected],img=document.querySelector('#hq-lightbox-image');img.src=view.src;img.alt=view.alt;
 document.querySelector('#hq-lightbox-title').textContent=view.title+' / 내부 관리자 대시보드';
 hqLightbox.showModal();document.querySelector('.hq-lightbox-scroll').scrollLeft=0;
});
document.querySelector('#hq-lightbox-close').addEventListener('click',()=>hqLightbox.close());
hqLightbox.addEventListener('click',e=>{if(e.target===hqLightbox){const r=hqLightbox.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)hqLightbox.close();}});
