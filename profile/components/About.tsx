export default function About() {
  const skills = [
    '전략 기획',
    '사용자 조사',
    '데이터 분석',
    '프로토타이핑',
    'UX/UI 협업',
    '프로젝트 관리',
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          소개
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              저에 대해
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              기획자로서 다양한 프로젝트를 주도적으로 이끌었습니다. 사용자의
              문제를 깊이 있게 이해하고, 데이터로 검증하여 최적의 솔루션을
              제안하는 것이 저의 강점입니다.
            </p>
            <p className="text-slate-600 leading-relaxed">
              개발팀, 디자인팀과의 긴밀한 협업을 통해 아이디어를 현실로 만드는
              과정을 중시합니다. 사람 중심의 생각으로 더 나은 제품을 만들고
              싶습니다.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              핵심 역량
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
