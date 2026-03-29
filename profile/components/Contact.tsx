export default function Contact() {
  const contacts = [
    {
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
    },
    {
      label: 'GitHub',
      value: 'github.com/yourname',
      href: 'https://github.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourname',
      href: 'https://linkedin.com',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">연락처</h2>
        <p className="text-lg text-slate-600 mb-12">
          언제든 연락 주세요. 새로운 기회와 협업을 환영합니다.
        </p>

        <div className="space-y-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="block p-6 bg-slate-50 rounded-2xl hover:bg-indigo-50 transition-colors group"
            >
              <p className="text-sm text-slate-500 mb-2">{contact.label}</p>
              <p className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {contact.value}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-sm">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
