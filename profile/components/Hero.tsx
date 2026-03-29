export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-6"
    >
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
          안녕하세요.
        </h1>
        <p className="text-2xl text-indigo-600 font-medium mb-4">
          PM / 기획자
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          데이터 기반의 사고와 사용자 중심의 접근으로
          <br />
          의미 있는 서비스를 만들어가고 있습니다.
        </p>
      </div>
    </section>
  );
}
