import { useState } from 'react'

const facts = [
  {
    emoji: '👃',
    title: 'Úžasný čuch',
    text: 'Nos psa je 10 000 až 100 000-krát citlivejší ako ľudský. Dokážu ovoňať choroby, emócie aj explozívy zakopal meter hlboko.',
  },
  {
    emoji: '💤',
    title: 'Spánok ako my',
    text: 'Psy majú REM fázu spánku rovnako ako ľudia — v tejto fáze sa im pravdepodobne sníva. Môžete to vidieť podľa pohybov nôžok a chvosta.',
  },
  {
    emoji: '❤️',
    title: 'Verní priateľ',
    text: 'Psy sú so ľuďmi viac ako 15 000 rokov. Sú jedinou species, ktorá sa dokáže naozaj viazať na človeka podobne ako dieťa na rodiča.',
  },
  {
    emoji: '🌡️',
    title: 'Potejú sa labkami',
    text: 'Psy nemajú potné žľazy po celom tele. Potejú sa iba cez labky a chladí ich vyplazený jazyk — preto tak dýchajú po behu.',
  },
  {
    emoji: '🎵',
    title: 'Počúvajú výškam',
    text: 'Psy počujú frekvencie od 40 Hz do 65 000 Hz. Ľudia len do 20 000 Hz. Preto reagujú na zvuky, ktoré my vôbec nepočujeme.',
  },
  {
    emoji: '🧠',
    title: 'Inteligencia 2-ročného',
    text: 'Priemerný pes chápe okolo 165 slov a gest. Najinteligentnejšie rasy (border kólia, pudel) zvládnu až 250 príkazov.',
  },
  {
    emoji: '👁️',
    title: 'Videnie farieb',
    text: 'Psy nie sú slepé na farby — vidia modrou, žltou a šedou. Červenú a zelenú vnímajú ako žltohnedú. Ich nočné videnie je ale oveľa lepšie ako naše.',
  },
  {
    emoji: '🐕',
    title: 'Rozmanitosť plemien',
    text: 'Na svete existuje viac ako 340 uznaných plemien psov — od čivavy (1 kg) až po doga nemeckú (90 kg). Všetky pochádzajú z vlka šedého.',
  },
  {
    emoji: '🫀',
    title: 'Tlkot srdca',
    text: 'Srdce malého psa bije 100–140-krát za minútu, veľkého 60–100-krát. Šteňatá majú tep až 220 úderov za minútu bezprostredne po narodení.',
  },
]

const breeds = [
  { name: 'Border kólia', trait: 'Najinteligentnejší', color: 'from-violet-400 to-purple-500', icon: '🧠' },
  { name: 'Zlatý retriever', trait: 'Najpriateľskejší', color: 'from-amber-400 to-orange-400', icon: '💛' },
  { name: 'Husky sibírsky', trait: 'Najvytrvalejší', color: 'from-sky-400 to-blue-500', icon: '❄️' },
  { name: 'Beagle', trait: 'Najlepší nos', color: 'from-emerald-400 to-teal-500', icon: '🌿' },
  { name: 'Čivava', trait: 'Najmenší', color: 'from-pink-400 to-rose-400', icon: '💕' },
  { name: 'Nemecký ovčiak', trait: 'Najvernejší', color: 'from-stone-400 to-amber-600', icon: '🛡️' },
]

function FactCard({ emoji, title, text }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <article
      className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-amber-100"
      onClick={() => setFlipped(f => !f)}
      aria-label={`Fakt: ${title}`}
    >
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="text-lg font-bold text-amber-900 mb-2">{title}</h3>
      <p className={`text-sm text-stone-600 leading-relaxed transition-all duration-300 ${flipped ? 'line-clamp-none' : 'line-clamp-3'}`}>
        {text}
      </p>
      <span className="text-xs text-amber-400 mt-3 block">{flipped ? 'Kliknite pre zbalenie ↑' : 'Kliknite pre viac ↓'}</span>
    </article>
  )
}

function BreedCard({ name, trait, color, icon }) {
  return (
    <div className={`bg-gradient-to-br ${color} rounded-2xl p-5 text-white shadow-lg hover:scale-105 transition-transform duration-200`}>
      <div className="text-3xl mb-2">{icon}</div>
      <div className="font-bold text-lg leading-tight">{name}</div>
      <div className="text-white/80 text-sm mt-1">{trait}</div>
    </div>
  )
}

function DogSvg() {
  return (
    <svg viewBox="0 0 200 200" className="w-48 h-48 mx-auto drop-shadow-2xl" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="100" cy="130" rx="55" ry="42" fill="#D97706" />
      {/* Head */}
      <circle cx="100" cy="78" r="38" fill="#FBBF24" />
      {/* Left ear */}
      <ellipse cx="68" cy="52" rx="14" ry="22" fill="#D97706" transform="rotate(-15 68 52)" />
      {/* Right ear */}
      <ellipse cx="132" cy="52" rx="14" ry="22" fill="#D97706" transform="rotate(15 132 52)" />
      {/* Snout */}
      <ellipse cx="100" cy="90" rx="20" ry="14" fill="#FDE68A" />
      {/* Nose */}
      <ellipse cx="100" cy="83" rx="9" ry="6" fill="#1C1917" />
      {/* Left eye */}
      <circle cx="85" cy="70" r="6" fill="#1C1917" />
      <circle cx="87" cy="68" r="2" fill="white" />
      {/* Right eye */}
      <circle cx="115" cy="70" r="6" fill="#1C1917" />
      <circle cx="117" cy="68" r="2" fill="white" />
      {/* Mouth */}
      <path d="M92 96 Q100 104 108 96" stroke="#D97706" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Tongue */}
      <ellipse cx="100" cy="103" rx="7" ry="5" fill="#F87171" />
      {/* Tail */}
      <path d="M155 125 Q185 100 175 80" stroke="#D97706" strokeWidth="10" fill="none" strokeLinecap="round" />
      {/* Front left paw */}
      <ellipse cx="74" cy="168" rx="14" ry="10" fill="#FBBF24" />
      {/* Front right paw */}
      <ellipse cx="126" cy="168" rx="14" ry="10" fill="#FBBF24" />
      {/* Paw dots */}
      <circle cx="68" cy="165" r="3" fill="#D97706" />
      <circle cx="74" cy="162" r="3" fill="#D97706" />
      <circle cx="80" cy="165" r="3" fill="#D97706" />
      <circle cx="120" cy="165" r="3" fill="#D97706" />
      <circle cx="126" cy="162" r="3" fill="#D97706" />
      <circle cx="132" cy="165" r="3" fill="#D97706" />
      {/* Collar */}
      <rect x="72" y="108" width="56" height="10" rx="5" fill="#EF4444" />
      <circle cx="100" cy="113" r="4" fill="#FCD34D" />
    </svg>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('fakty')

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 paw-bg font-sans">

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-300 opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="inline-block bg-white/60 backdrop-blur rounded-full px-4 py-1 text-sm font-medium text-amber-700 mb-6 border border-amber-200">
            🐾 Verní spoločníci ľudstva
          </div>
          <DogSvg />
          <h1 className="text-5xl md:text-6xl font-extrabold text-amber-900 mt-6 mb-4 leading-tight tracking-tight">
            Všetko o Psoch
          </h1>
          <p className="text-xl text-amber-700 max-w-xl mx-auto leading-relaxed">
            Fascinujúce fakty, zaujímavé plemená a neuveriteľné schopnosti — spoznajte svojho štvornohého priateľa lepšie.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">🐕 340+ plemien</span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">📅 15 000 rokov s ľuďmi</span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">🌍 900 miliónov psov</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-50 to-transparent" />
      </header>

      {/* Tabs */}
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-amber-100 shadow-sm" aria-label="Sekcie">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-1 py-3">
            {[
              { id: 'fakty', label: '🔍 Fakty' },
              { id: 'plemena', label: '🐕 Plemená' },
              { id: 'zaujimavosti', label: '✨ Vedeli ste?' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-amber-400 text-white shadow-md'
                    : 'text-amber-700 hover:bg-amber-100'
                }`}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">

        {/* Facts Grid */}
        {activeTab === 'fakty' && (
          <section aria-labelledby="fakty-heading">
            <h2 id="fakty-heading" className="text-3xl font-bold text-amber-900 mb-2 text-center">
              Fascinujúce Fakty o Psoch
            </h2>
            <p className="text-center text-amber-600 mb-10">Kliknite na kartu pre celý text</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {facts.map((fact, i) => (
                <FactCard key={i} {...fact} />
              ))}
            </div>
          </section>
        )}

        {/* Breeds */}
        {activeTab === 'plemena' && (
          <section aria-labelledby="plemena-heading">
            <h2 id="plemena-heading" className="text-3xl font-bold text-amber-900 mb-2 text-center">
              Populárne Plemená
            </h2>
            <p className="text-center text-amber-600 mb-10">Každé plemeno má svoju jedinečnosť</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-12">
              {breeds.map((breed, i) => (
                <BreedCard key={i} {...breed} />
              ))}
            </div>

            {/* Size comparison */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-amber-100">
              <h3 className="text-xl font-bold text-amber-900 mb-6 text-center">Veľkostné Kategórie</h3>
              <div className="space-y-4">
                {[
                  { label: 'Malé (do 10 kg)', example: 'Čivava, Pudlík, Maltézsky bisónik', width: 'w-1/4', color: 'bg-pink-400' },
                  { label: 'Stredné (10–25 kg)', example: 'Beagle, Cocker spaniel, Border kólia', width: 'w-1/2', color: 'bg-amber-400' },
                  { label: 'Veľké (25–45 kg)', example: 'Labrádor, Nemecký ovčiak, Boxer', width: 'w-3/4', color: 'bg-orange-500' },
                  { label: 'Obrie (45+ kg)', example: 'Doga nemecká, Bernardín, Leonberger', width: 'w-full', color: 'bg-red-500' },
                ].map((size, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm text-stone-600 mb-1">
                      <span className="font-semibold">{size.label}</span>
                      <span className="text-stone-400">{size.example}</span>
                    </div>
                    <div className="h-3 bg-amber-100 rounded-full overflow-hidden">
                      <div className={`h-full ${size.width} ${size.color} rounded-full transition-all duration-700`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Fun facts */}
        {activeTab === 'zaujimavosti' && (
          <section aria-labelledby="zaujimavosti-heading">
            <h2 id="zaujimavosti-heading" className="text-3xl font-bold text-amber-900 mb-2 text-center">
              Vedeli Ste, Že…?
            </h2>
            <p className="text-center text-amber-600 mb-10">Šokujúce a úsmevné zaujímavosti</p>
            <div className="space-y-4">
              {[
                { emoji: '🏅', fact: 'Najbystrejší pes na svete — border kólia menom Chaser — poznal mená 1 022 hračiek a dokázal ich priniesť na povel.' },
                { emoji: '🌊', fact: 'Psy dokážu plávať prirodzene od narodenia. Väčšina plemien je inštinktívne schopná plávať bez tréningu.' },
                { emoji: '🐾', fact: 'Otlačok nosa psa je rovnako jedinečný ako odtlačok prsta u človeka — žiadne dve nie sú rovnaké.' },
                { emoji: '🌙', fact: 'Psy vnímajú čas inak ako my. Rozpoznávajú váš odchod a príchod podľa zoslabnutia vašej telesnej vône v miestnosti.' },
                { emoji: '💬', fact: 'Psy komunikujú chvostom — ale nie vždy znamená mávanie radosť. Mávanie vpravo = pozitívna emócia, vľavo = negatívna.' },
                { emoji: '🫁', fact: 'Šteňa s hmotnosťou 100 gramov má rovnaký počet neurónov v mozgu ako dospelý pes — len menšie.' },
                { emoji: '🔬', fact: 'Psy dokázali odhaliť rakovinu pľúc s presnosťou 97 % len na základe dychu pacienta — lepšie ako niektoré prístroje.' },
                { emoji: '🌡️', fact: 'Psy majú telesné teplo 38–39,2 °C. Ak sa dotknete uší psa a sú teplé, je zdravý. Studené uši môžu signalizovať podchladenie.' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-3xl flex-shrink-0 mt-1" aria-hidden="true">{item.emoji}</span>
                  <p className="text-stone-700 leading-relaxed">{item.fact}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-10 mt-8 border-t border-amber-100 bg-white/50">
        <div className="text-3xl mb-2" aria-hidden="true">🐾</div>
        <p className="text-amber-700 font-semibold">Psy — naši najlepší priatelia</p>
        <p className="text-stone-400 text-sm mt-1">Vytvorené s láskou pre všetkých milovníkov psov 🐶</p>
      </footer>
    </div>
  )
}
