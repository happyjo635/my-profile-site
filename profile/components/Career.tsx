export default function Career() {
  const projects = [
    {
      id: 1,
      title: '모바일 전자지갑 서비스 기획',
      period: '2023.09 - 2024.02',
      description:
        '사용자 조사를 통해 니즈를 파악하고 프로토타입을 설계했습니다. 개발, 디자인팀과 협력하여 6개월 만에 베타 출시를 완료했습니다.',
      tags: ['사용자 조사', '기획', '프로토타이핑'],
    },
    {
      id: 2,
      title: '데이터 대시보드 고도화',
      period: '2023.03 - 2023.08',
      description:
        '실시간 분석 기능을 추가하여 사용자 만족도를 35% 향상시켰습니다. 데이터 기반의 UX 개선으로 사용성을 크게 높였습니다.',
      tags: ['데이터 분석', 'UX 개선', '성능 최적화'],
    },
    {
      id: 3,
      title: '신규 결제 시스템 개발 리드',
      period: '2022.10 - 2023.02',
      description:
        '결제 프로세스를 재설계하여 이탈률을 30% 감소시켰습니다. 금융 파트너사와의 협의, 기술 스펙 정의, 테스트까지 전반적으로 주도했습니다.',
      tags: ['전략 기획', '프로젝트 관리', '금융'],
    },
  ];

  return (
    <section id="career" className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          경력 & 프로젝트
        </h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500">{project.period}</p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
