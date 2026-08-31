const ICONS = {
  basics: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="var(--basics)" stroke-width="1.8"><path d="M5 2c4 4.5 4 6.5 0 11s-4 6.5 0 11"/><path d="M19 2c-4 4.5-4 6.5 0 11s4 6.5 0 11"/><line x1="7" y1="6" x2="17" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="7" y1="18" x2="17" y2="18"/></svg>`,
  pcr: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="var(--pcr)" stroke-width="1.8"><path d="M12 2v11.5"/><circle cx="12" cy="18" r="4"/><path d="M9 2h6"/><path d="M8 22h8"/></svg>`,
  cloning: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="var(--cloning)" stroke-width="1.8"><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5"/></svg>`,
  construction: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="var(--construction)" stroke-width="1.8"><path d="M4 20h16"/><path d="M7 20V9h10v11"/><path d="M9 9V5h6v4"/><path d="M10 5V2h4v3"/></svg>`,
  reasoning: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="var(--reasoning)" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M9 10a3 3 0 1 1 5.2 2c-1.2 1.2-2.2 1.6-2.2 3"/><path d="M12 18h.01"/></svg>`,
  transformation: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="var(--transformation)" stroke-width="1.8"><circle cx="8" cy="12" r="5"/><circle cx="16" cy="12" r="5"/><path d="M11 9l2 6M13 9l-2 6"/></svg>`
};

const LABELS = {
  basics: "ADN",
  pcr: "PCR",
  cloning: "Clonación",
  construction: "Expresión",
  reasoning: "Casos",
  transformation: "Transformación genética"
};

function DRAW(type) {
  const drawings = {

    pcr: `
      <div class="mini-drawing">
        <svg viewBox="0 0 700 150" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="45" width="130" height="60" rx="10" fill="#eef2ff" stroke="#64748b"/>
          <text x="90" y="70" text-anchor="middle" font-size="14">ADN molde</text>
          <text x="90" y="91" text-anchor="middle" font-size="11">secuencia objetivo</text>
          <path d="M165 75 H245" stroke="#64748b" stroke-width="2"/>
          <path d="M235 68 L247 75 L235 82" fill="none" stroke="#64748b" stroke-width="2"/>
          <rect x="255" y="45" width="150" height="60" rx="10" fill="#eff6ff" stroke="#2563eb"/>
          <text x="330" y="70" text-anchor="middle" font-size="14">PCR</text>
          <text x="330" y="91" text-anchor="middle" font-size="11">desnaturalización → unión → extensión</text>
          <path d="M415 75 H495" stroke="#64748b" stroke-width="2"/>
          <path d="M485 68 L497 75 L485 82" fill="none" stroke="#64748b" stroke-width="2"/>
          <rect x="505" y="45" width="165" height="60" rx="10" fill="#ecfdf5" stroke="#16a34a"/>
          <text x="587" y="70" text-anchor="middle" font-size="14">Muchas copias</text>
          <text x="587" y="91" text-anchor="middle" font-size="11">del fragmento de interés</text>
        </svg>
      </div>`,

    restriction: `
      <div class="mini-drawing">
        <svg viewBox="0 0 700 150" xmlns="http://www.w3.org/2000/svg">
          <text x="350" y="25" text-anchor="middle" font-size="15" font-weight="700">Enzima de restricción</text>
          <path d="M80 65 H620" stroke="#2563eb" stroke-width="4"/>
          <path d="M80 95 H620" stroke="#2563eb" stroke-width="4"/>
          <line x1="350" y1="50" x2="350" y2="110" stroke="#ea580c" stroke-width="3"/>
          <text x="350" y="132" text-anchor="middle" font-size="12">corte en una secuencia específica</text>
        </svg>
      </div>`,

    plasmid: `
      <div class="mini-drawing">
        <svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
          <circle cx="350" cy="90" r="65" fill="#f8fafc" stroke="#2563eb" stroke-width="4"/>
          <path d="M300 48 Q350 20 400 48" fill="none" stroke="#16a34a" stroke-width="8"/>
          <path d="M400 132 Q350 160 300 132" fill="none" stroke="#ea580c" stroke-width="8"/>
          <text x="350" y="95" text-anchor="middle" font-size="15" font-weight="700">Plásmido</text>
          <text x="350" y="115" text-anchor="middle" font-size="11">ori · marcador · MCS</text>
          <text x="350" y="22" text-anchor="middle" font-size="11">gen / inserto</text>
        </svg>
      </div>`,

    transformation: `
      <div class="mini-drawing">
        <svg viewBox="0 0 700 170" xmlns="http://www.w3.org/2000/svg">
          <rect x="45" y="55" width="150" height="65" rx="30" fill="#ecfdf5" stroke="#16a34a" stroke-width="2"/>
          <text x="120" y="82" text-anchor="middle" font-size="14">Bacteria</text>
          <text x="120" y="101" text-anchor="middle" font-size="11">competente</text>
          <path d="M205 87 H300" stroke="#64748b" stroke-width="2"/>
          <path d="M290 80 L302 87 L290 94" fill="none" stroke="#64748b" stroke-width="2"/>
          <circle cx="355" cy="87" r="30" fill="none" stroke="#2563eb" stroke-width="3"/>
          <text x="355" y="92" text-anchor="middle" font-size="11">ADN</text>
          <path d="M390 87 H485" stroke="#64748b" stroke-width="2"/>
          <path d="M475 80 L487 87 L475 94" fill="none" stroke="#64748b" stroke-width="2"/>
          <rect x="495" y="55" width="160" height="65" rx="30" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
          <text x="575" y="82" text-anchor="middle" font-size="14">Célula</text>
          <text x="575" y="101" text-anchor="middle" font-size="11">transformada</text>
        </svg>
      </div>`,

    electroporation: `
      <div class="mini-drawing">
        <svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
          <rect x="90" y="50" width="190" height="80" rx="40" fill="#ecfdf5" stroke="#16a34a" stroke-width="2"/>
          <text x="185" y="95" text-anchor="middle" font-size="14">Célula</text>
          <path d="M315 45 V135" stroke="#ea580c" stroke-width="4"/>
          <path d="M385 45 V135" stroke="#ea580c" stroke-width="4"/>
          <text x="350" y="30" text-anchor="middle" font-size="13">pulso eléctrico</text>
          <path d="M350 58 l-12 15 h12 l-12 18" fill="none" stroke="#ca8a04" stroke-width="3"/>
          <circle cx="475" cy="72" r="8" fill="#2563eb"/>
          <circle cx="520" cy="105" r="8" fill="#2563eb"/>
          <path d="M475 72 Q420 90 390 90" fill="none" stroke="#2563eb" stroke-width="2"/>
          <path d="M520 105 Q440 115 390 110" fill="none" stroke="#2563eb" stroke-width="2"/>
          <text x="520" y="145" text-anchor="middle" font-size="12">ADN entra por poros transitorios</text>
        </svg>
      </div>`,

    conjugation: `
      <div class="mini-drawing">
        <svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
          <circle cx="180" cy="90" r="55" fill="#ecfdf5" stroke="#16a34a" stroke-width="3"/>
          <circle cx="520" cy="90" r="55" fill="#eff6ff" stroke="#2563eb" stroke-width="3"/>
          <text x="180" y="94" text-anchor="middle" font-size="13">Donadora</text>
          <text x="520" y="94" text-anchor="middle" font-size="13">Receptora</text>
          <path d="M235 78 C320 35 380 35 465 78" fill="none" stroke="#64748b" stroke-width="5"/>
          <path d="M235 102 C320 145 380 145 465 102" fill="none" stroke="#64748b" stroke-width="5"/>
          <text x="350" y="25" text-anchor="middle" font-size="12">pilus / contacto</text>
          <circle cx="180" cy="90" r="15" fill="#fefce8" stroke="#ca8a04"/>
          <circle cx="520" cy="90" r="15" fill="#fefce8" stroke="#ca8a04"/>
        </svg>
      </div>`,

    transduction: `
      <div class="mini-drawing">
        <svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
          <path d="M120 55 L155 30 L190 55 L180 100 L130 100 Z" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
          <text x="155" y="75" text-anchor="middle" font-size="11">Fago</text>
          <path d="M210 75 H300" stroke="#64748b" stroke-width="2"/>
          <path d="M290 68 L302 75 L290 82" fill="none" stroke="#64748b" stroke-width="2"/>
          <circle cx="370" cy="75" r="48" fill="#ecfdf5" stroke="#16a34a" stroke-width="2"/>
          <text x="370" y="79" text-anchor="middle" font-size="12">Bacteria</text>
          <path d="M420 75 H510" stroke="#64748b" stroke-width="2"/>
          <path d="M500 68 L512 75 L500 82" fill="none" stroke="#64748b" stroke-width="2"/>
          <circle cx="585" cy="75" r="48" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
          <text x="585" y="79" text-anchor="middle" font-size="12">Receptora</text>
          <text x="350" y="145" text-anchor="middle" font-size="12">el bacteriófago transporta ADN bacteriano</text>
        </svg>
      </div>`,

    protoplast: `
      <div class="mini-drawing">
        <svg viewBox="0 0 700 170" xmlns="http://www.w3.org/2000/svg">
          <rect x="55" y="50" width="180" height="70" rx="15" fill="#f8fafc" stroke="#64748b" stroke-width="3"/>
          <text x="145" y="82" text-anchor="middle" font-size="13">Célula vegetal</text>
          <text x="145" y="102" text-anchor="middle" font-size="11">pared celular</text>
          <path d="M255 85 H335" stroke="#64748b" stroke-width="2"/>
          <path d="M325 78 L337 85 L325 92" fill="none" stroke="#64748b" stroke-width="2"/>
          <circle cx="430" cy="85" r="48" fill="#ecfdf5" stroke="#16a34a" stroke-width="3"/>
          <text x="430" y="82" text-anchor="middle" font-size="13">Protoplasto</text>
          <text x="430" y="101" text-anchor="middle" font-size="10">sin pared celular</text>
          <text x="350" y="145" text-anchor="middle" font-size="11">PEG / electroporación / microinyección</text>
        </svg>
      </div>`,

    agrobacterium: `
      <div class="mini-drawing">
        <svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
          <circle cx="145" cy="90" r="55" fill="#ecfdf5" stroke="#16a34a" stroke-width="3"/>
          <text x="145" y="86" text-anchor="middle" font-size="12">Agrobacterium</text>
          <text x="145" y="103" text-anchor="middle" font-size="10">plásmido Ti</text>
          <path d="M205 90 H310" stroke="#64748b" stroke-width="2"/>
          <path d="M300 83 L312 90 L300 97" fill="none" stroke="#64748b" stroke-width="2"/>
          <rect x="330" y="45" width="150" height="90" rx="15" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
          <text x="405" y="78" text-anchor="middle" font-size="13">ADN-T</text>
          <text x="405" y="98" text-anchor="middle" font-size="10">vector binario</text>
          <path d="M485 90 H555" stroke="#64748b" stroke-width="2"/>
          <path d="M545 83 L557 90 L545 97" fill="none" stroke="#64748b" stroke-width="2"/>
          <rect x="570" y="45" width="95" height="90" rx="15" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
          <text x="617" y="86" text-anchor="middle" font-size="12">Planta</text>
          <text x="617" y="103" text-anchor="middle" font-size="10">genoma</text>
        </svg>
      </div>`,

    binario: `
      <div class="mini-drawing">
        <svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
          <circle cx="180" cy="90" r="60" fill="#f5f3ff" stroke="#7c3aed" stroke-width="3"/>
          <text x="180" y="85" text-anchor="middle" font-size="13">Plásmido Ti</text>
          <text x="180" y="103" text-anchor="middle" font-size="10">genes vir</text>
          <path d="M250 90 H330" stroke="#64748b" stroke-width="2"/>
          <path d="M320 83 L332 90 L320 97" fill="none" stroke="#64748b" stroke-width="2"/>
          <circle cx="410" cy="90" r="60" fill="#eff6ff" stroke="#2563eb" stroke-width="3"/>
          <text x="410" y="85" text-anchor="middle" font-size="13">Vector binario</text>
          <text x="410" y="103" text-anchor="middle" font-size="10">ADN-T + gen de interés</text>
          <path d="M480 90 H550" stroke="#64748b" stroke-width="2"/>
          <path d="M540 83 L552 90 L540 97" fill="none" stroke="#64748b" stroke-width="2"/>
          <text x="610" y="94" text-anchor="middle" font-size="13">Transferencia</text>
        </svg>
      </div>`,

    golden: `
      <div class="mini-drawing">
        <svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="55" width="150" height="70" rx="12" fill="#f8fafc" stroke="#64748b"/>
          <text x="115" y="82" text-anchor="middle" font-size="13">PSY</text>
          <text x="115" y="101" text-anchor="middle" font-size="10">fitoeno sintasa</text>
          <path d="M200 90 H275" stroke="#64748b" stroke-width="2"/>
          <path d="M265 83 L277 90 L265 97" fill="none" stroke="#64748b" stroke-width="2"/>
          <rect x="290" y="55" width="120" height="70" rx="12" fill="#fefce8" stroke="#ca8a04"/>
          <text x="350" y="82" text-anchor="middle" font-size="13">Fitoeno</text>
          <path d="M425 90 H500" stroke="#64748b" stroke-width="2"/>
          <path d="M490 83 L502 90 L490 97" fill="none" stroke="#64748b" stroke-width="2"/>
          <rect x="515" y="55" width="145" height="70" rx="12" fill="#fff7ed" stroke="#ea580c"/>
          <text x="587" y="82" text-anchor="middle" font-size="13">CRTI</text>
          <text x="587" y="101" text-anchor="middle" font-size="10">→ carotenoides</text>
          <text x="350" y="150" text-anchor="middle" font-size="12">Golden Rice 2: PSY de maíz + CRTI</text>
        </svg>
      </div>`,

    lac: `
      <div class="mini-drawing">
        <svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
          <rect x="60" y="60" width="120" height="55" rx="8" fill="#f8fafc" stroke="#64748b"/>
          <text x="120" y="93" text-anchor="middle" font-size="13">CAP</text>
          <circle cx="245" cy="87" r="22" fill="#fefce8" stroke="#ca8a04"/>
          <text x="245" y="91" text-anchor="middle" font-size="10">cAMP</text>
          <path d="M180 87 H220" stroke="#64748b" stroke-width="2"/>
          <path d="M270 87 H335" stroke="#64748b" stroke-width="2"/>
          <rect x="350" y="60" width="115" height="55" rx="8" fill="#eff6ff" stroke="#2563eb"/>
          <text x="407" y="93" text-anchor="middle" font-size="13">Promotor</text>
          <path d="M465 87 H540" stroke="#64748b" stroke-width="2"/>
          <path d="M530 80 L542 87 L530 94" fill="none" stroke="#64748b" stroke-width="2"/>
          <rect x="555" y="60" width="90" height="55" rx="8" fill="#ecfdf5" stroke="#16a34a"/>
          <text x="600" y="93" text-anchor="middle" font-size="13">Expresión</text>
          <text x="350" y="145" text-anchor="middle" font-size="11">cAMP alto → CAP-cAMP favorece la transcripción</text>
        </svg>
      </div>`,

    tet: `
      <div class="mini-drawing">
        <svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
          <rect x="55" y="55" width="165" height="70" rx="12" fill="#eff6ff" stroke="#2563eb"/>
          <text x="137" y="83" text-anchor="middle" font-size="13">Tet-OFF</text>
          <text x="137" y="103" text-anchor="middle" font-size="10">Tet → apaga</text>
          <path d="M240 90 H330" stroke="#64748b" stroke-width="2"/>
          <path d="M320 83 L332 90 L320 97" fill="none" stroke="#64748b" stroke-width="2"/>
          <rect x="350" y="55" width="165" height="70" rx="12" fill="#ecfdf5" stroke="#16a34a"/>
          <text x="432" y="83" text-anchor="middle" font-size="13">Tet-ON</text>
          <text x="432" y="103" text-anchor="middle" font-size="10">Tet → enciende</text>
          <rect x="545" y="55" width="110" height="70" rx="12" fill="#fefce8" stroke="#ca8a04"/>
          <text x="600" y="83" text-anchor="middle" font-size="13">Control</text>
          <text x="600" y="103" text-anchor="middle" font-size="10">temporal</text>
        </svg>
      </div>`,

    his: `
      <div class="mini-drawing">
        <svg viewBox="0 0 700 170" xmlns="http://www.w3.org/2000/svg">
          <rect x="60" y="60" width="130" height="55" rx="8" fill="#f8fafc" stroke="#64748b"/>
          <text x="125" y="93" text-anchor="middle" font-size="13">Proteína</text>
          <path d="M190 87 H285" stroke="#64748b" stroke-width="2"/>
          <path d="M275 80 L287 87 L275 94" fill="none" stroke="#64748b" stroke-width="2"/>
          <rect x="305" y="60" width="105" height="55" rx="8" fill="#fefce8" stroke="#ca8a04"/>
          <text x="357" y="93" text-anchor="middle" font-size="13">His-tag</text>
          <path d="M430 87 H510" stroke="#64748b" stroke-width="2"/>
          <path d="M500 80 L512 87 L500 94" fill="none" stroke="#64748b" stroke-width="2"/>
          <rect x="530" y="60" width="115" height="55" rx="8" fill="#eff6ff" stroke="#2563eb"/>
          <text x="587" y="93" text-anchor="middle" font-size="13">Ni-NTA</text>
          <text x="350" y="145" text-anchor="middle" font-size="11">La etiqueta permite purificar la proteína por afinidad</text>
        </svg>
      </div>`
  };

  return drawings[type] || "";
}


const CARDS = [
  {
    cat:"basics",
    f:"¿Qué es un gen?",
    b:"Un segmento de ADN que contiene información necesaria para producir un producto funcional, como una proteína o un ARN."
  },
  {
    cat:"basics",
    f:"¿Qué es un promotor?",
    b:"Región de ADN donde se inicia y regula la transcripción de un gen."
  },
  {
    cat:"basics",
    f:"¿Qué es un vector?",
    b:"Molécula de ADN utilizada para transportar y mantener un fragmento de ADN de interés dentro de una célula."
  },
  {
    cat:"basics",
    f:"¿Qué es un plásmido?",
    b:"Molécula pequeña de ADN circular extracromosómico, capaz de replicarse independientemente del cromosoma bacteriano.",
    draw:"plasmid"
  },
  {
    cat:"pcr",
    f:"¿Qué es la PCR?",
    b:"Técnica que permite amplificar exponencialmente una región específica de ADN mediante ciclos repetidos de desnaturalización, alineamiento de primers y extensión.",
    draw:"pcr"
  },
  {
    cat:"pcr",
    f:"¿Cuáles son las tres etapas principales de la PCR?",
    b:"Desnaturalización, alineamiento (annealing) y extensión.",
    draw:"pcr"
  },
  {
    cat:"pcr",
    f:"¿Qué función cumplen los primers en PCR?",
    b:"Delimitan la región que será amplificada y proporcionan un extremo 3' desde el cual la ADN polimerasa puede comenzar la síntesis."
  },
  {
    cat:"pcr",
    f:"¿Por qué se utiliza una ADN polimerasa termoestable?",
    b:"Porque debe soportar las altas temperaturas utilizadas durante la desnaturalización del ADN sin perder su actividad."
  },
  {
    cat:"cloning",
    f:"¿Qué es la clonación molecular?",
    b:"Proceso mediante el cual un fragmento de ADN se inserta en un vector y se propaga en una célula hospedadora para obtener múltiples copias."
  },
  {
    cat:"cloning",
    f:"¿Qué son las enzimas de restricción?",
    b:"Enzimas que reconocen secuencias específicas de ADN y las cortan en sitios determinados.",
    draw:"restriction"
  },
  {
    cat:"cloning",
    f:"¿Qué diferencia existe entre extremos cohesivos y extremos romos?",
    b:"Los extremos cohesivos poseen salientes monocatenarios complementarios que facilitan la unión entre fragmentos. Los extremos romos no poseen salientes."
  },
  {
    cat:"cloning",
    f:"¿Qué función tiene la ADN ligasa?",
    b:"Cataliza la formación de enlaces fosfodiéster entre fragmentos de ADN, permitiendo unir el inserto con el vector."
  },
  {
    cat:"cloning",
    f:"¿Qué es un MCS?",
    b:"Multiple Cloning Site: región del vector que contiene múltiples sitios únicos de reconocimiento para enzimas de restricción."
  },
  {
    cat:"cloning",
    f:"¿Qué elementos suelen encontrarse en un vector de clonación?",
    b:"Origen de replicación, marcador de selección y región de clonación; dependiendo del vector también puede incluir promotor, terminador y etiquetas.",
    draw:"plasmid"
  },
  {
    cat:"construction",
    f:"¿Qué es un gen de resistencia a antibióticos?",
    b:"Un marcador de selección que permite identificar células que incorporaron el vector al crecerlas en presencia del antibiótico correspondiente."
  },
  {
    cat:"construction",
    f:"¿Qué es un gen reportero?",
    b:"Gen cuyo producto permite detectar o medir la expresión de una construcción genética."
  },
  {
    cat:"construction",
    f:"¿Qué es un promotor inducible?",
    b:"Promotor cuya actividad puede activarse o reprimirse mediante una señal o compuesto específico."
  },
  {
    cat:"construction",
    f:"¿Qué es una etiqueta His-tag?",
    b:"Pequeña secuencia rica en histidinas fusionada a una proteína recombinante que permite su purificación mediante cromatografía de afinidad.",
    draw:"his"
  },
  {
    cat:"construction",
    f:"¿Qué es el sistema Tet-ON/Tet-OFF?",
    b:"Sistema de expresión inducible que permite controlar temporalmente la expresión de un gen mediante tetraciclina o doxiciclina.",
    draw:"tet"
  },
  {
    cat:"reasoning",
    f:"Si una PCR no produce ninguna banda, ¿qué factores revisarías?",
    b:"Revisaría la calidad y cantidad del molde, diseño y concentración de primers, temperatura de annealing, Mg²⁺, polimerasa, ciclos y condiciones de desnaturalización/extensión."
  },
  {
    cat:"reasoning",
    f:"Si aparecen muchas bandas inespecíficas en una PCR, ¿qué ajustarías?",
    b:"Aumentaría la temperatura de annealing, reduciría la concentración de primers, Mg²⁺ o número de ciclos y revisaría el diseño de los primers."
  },
  {
    cat:"reasoning",
    f:"¿Por qué un sitio de restricción agregado al extremo 5' de un primer puede funcionar aunque no hibride inicialmente?",
    b:"La secuencia adicional queda incorporada al producto durante los primeros ciclos; después, ese producto sirve como molde y la secuencia pasa a estar presente en todas las copias posteriores."
  },
  {
    cat:"reasoning",
    f:"¿Por qué una proteína recombinante puede expresarse pero no ser soluble?",
    b:"La expresión puede ser demasiado rápida o en condiciones inadecuadas, favoreciendo el plegamiento incorrecto y la formación de agregados."
  },

  /* ================================
     TRANSFORMACIÓN GENÉTICA
     ================================ */

  {
    cat:"transformation",
    f:"¿Qué es la transformación bacteriana?",
    b:"Proceso mediante el cual una célula incorpora un fragmento de ADN foráneo. Es la base de gran parte del trabajo de clonación molecular.",
    draw:"transformation"
  },
  {
    cat:"transformation",
    f:"¿Qué significa que una bacteria sea competente?",
    b:"Significa que tiene la capacidad de aceptar ADN foráneo desde el medio. Competencia = capacidad; transformación = proceso."
  },
  {
    cat:"transformation",
    f:"¿Cuál es el flujo general para transformar bacterias y seleccionar las transformadas?",
    b:"1) Introducir el plásmido en bacterias competentes mediante transformación química o electroporación. 2) Permitir recuperación para expresar el marcador de resistencia. 3) Sembrar en medio selectivo; solo crecerán las células transformadas.",
    draw:"transformation"
  },
  {
    cat:"transformation",
    f:"¿Por qué se induce artificialmente la competencia en muchas bacterias?",
    b:"Porque la mayoría de las bacterias no son naturalmente competentes. Se induce temporalmente mediante tratamientos químicos o físicos."
  },
  {
    cat:"transformation",
    f:"¿Cuál es la relación entre gen de interés, PCR, clonación y transformación?",
    b:"Gen de interés → PCR → clonación del gen en un vector → ADN recombinante → transformación → célula transformada → propagación y selección."
  },
  {
    cat:"transformation",
    f:"¿Qué tratamiento químico se utiliza habitualmente para generar bacterias competentes?",
    b:"CaCl₂, aunque también pueden utilizarse otros cationes como MnCl₂ o KCl."
  },
  {
    cat:"transformation",
    f:"¿Qué ocurre durante la transformación química bacteriana?",
    b:"Los cationes ayudan a neutralizar cargas negativas del ADN y de la superficie celular; luego un choque térmico favorece la entrada del ADN."
  },
  {
    cat:"transformation",
    f:"¿Cuál es la función del choque térmico?",
    b:"Favorecer transitoriamente la entrada del ADN plasmídico en las bacterias previamente tratadas para hacerlas competentes."
  },
  {
    cat:"transformation",
    f:"¿Por qué se deja recuperar a las bacterias después de la transformación?",
    b:"Para permitir que las células se recuperen y expresen el gen marcador antes de enfrentarlas al antibiótico de selección."
  },
  {
    cat:"transformation",
    f:"¿Qué significa seleccionar bacterias transformadas?",
    b:"Cultivarlas en un medio que contiene una condición selectiva, normalmente un antibiótico. Las bacterias que poseen el marcador correspondiente sobreviven y forman colonias."
  },
  {
    cat:"transformation",
    f:"¿Qué es la electroporación?",
    b:"Método de transformación en el que pulsos eléctricos de alto voltaje generan poros transitorios en la membrana y permiten la entrada de ADN.",
    draw:"electroporation"
  },
  {
    cat:"transformation",
    f:"¿Cuál es una ventaja de la electroporación?",
    b:"Puede producir una alta eficiencia de transformación y es aplicable a diferentes tipos de células."
  },
  {
    cat:"transformation",
    f:"¿Qué es la conjugación bacteriana?",
    b:"Transferencia de ADN, generalmente un plásmido, desde una bacteria donadora a una receptora mediante contacto directo y un sistema de transferencia asociado al pilus.",
    draw:"conjugation"
  },
  {
    cat:"transformation",
    f:"¿Qué es un plásmido conjugativo?",
    b:"Plásmido que contiene los genes necesarios para permitir su propia transferencia entre bacterias."
  },
  {
    cat:"transformation",
    f:"¿Qué es el factor F?",
    b:"Elemento genético bacteriano que contiene genes necesarios para la formación del pilus sexual y la transferencia conjugativa."
  },
  {
    cat:"transformation",
    f:"¿Qué es la transducción?",
    b:"Transferencia de ADN bacteriano de una célula a otra mediada por un bacteriófago.",
    draw:"transduction"
  },
  {
    cat:"transformation",
    f:"¿Cómo ocurre la transducción generalizada?",
    b:"Durante el ensamblaje de nuevos fagos, una partícula puede empaquetar accidentalmente ADN bacteriano. Al infectar otra bacteria, ese ADN puede introducirse y recombinarse con su genoma."
  },
  {
    cat:"transformation",
    f:"¿Cómo se diferencian transformación, conjugación y transducción?",
    b:"Transformación: ADN libre desde el medio. Conjugación: ADN transferido entre bacterias mediante contacto directo. Transducción: ADN bacteriano transferido mediante un bacteriófago."
  },
  {
    cat:"transformation",
    f:"¿Qué es un protoplasto?",
    b:"Célula a la que se le ha removido la pared celular y que queda delimitada por la membrana plasmática.",
    draw:"protoplast"
  },
  {
    cat:"transformation",
    f:"¿Qué métodos de transformación pueden utilizar protoplastos?",
    b:"Electroporación, PEG y otros métodos físicos o químicos que permitan introducir ADN en la célula."
  },
  {
    cat:"transformation",
    f:"¿Qué es la transformación mediada por PEG?",
    b:"Método en el que protoplastos se incuban con PEG, frecuentemente junto con CaCl₂ y ADN, para favorecer la entrada del material genético."
  },
  {
    cat:"transformation",
    f:"¿Qué métodos se utilizan para transformar hongos?",
    b:"Entre otros, electroporación, PEG sobre protoplastos y transformación mediada por Agrobacterium."
  },
  {
    cat:"transformation",
    f:"¿Qué métodos pueden utilizarse para transformar levaduras?",
    b:"Electroporación, acetato de litio (LiAc), PEG y transformación mediada por Agrobacterium."
  },
  {
    cat:"transformation",
    f:"¿Cómo funciona el método LiAc/PEG para transformar levaduras?",
    b:"Levadura + LiAc → PEG + ADN transportador → choque térmico → recuperación → selección en medio adecuado."
  },
  {
    cat:"transformation",
    f:"¿Por qué se utiliza ADN monocatenario transportador en algunos protocolos de transformación de levaduras?",
    b:"Ayuda a favorecer la eficiencia de transformación y puede proteger o facilitar la entrada del ADN exógeno."
  },
  {
    cat:"transformation",
    f:"¿Qué es Agrobacterium tumefaciens?",
    b:"Bacteria del suelo capaz de transferir naturalmente una región de ADN-T desde su plásmido Ti a células vegetales.",
    draw:"agrobacterium"
  },
  {
    cat:"transformation",
    f:"¿Qué es el plásmido Ti?",
    b:"Plásmido de Agrobacterium que contiene la región ADN-T y genes vir, responsables del proceso natural de transferencia hacia la planta."
  },
  {
    cat:"transformation",
    f:"¿Qué es el ADN-T?",
    b:"Región del plásmido Ti que es procesada y transferida a la célula vegetal, donde puede integrarse al genoma."
  },
  {
    cat:"transformation",
    f:"¿Qué es el sistema binario de Agrobacterium?",
    b:"Sistema en el que las funciones vir se encuentran en un plásmido auxiliar y el ADN-T con el gen de interés se encuentra en un vector binario.",
    draw:"binario"
  },
  {
    cat:"transformation",
    f:"¿Qué es floral dip?",
    b:"Método utilizado principalmente en Arabidopsis en el que las estructuras florales se ponen en contacto con una suspensión de Agrobacterium para transformar tejidos que darán origen a semillas."
  },
  {
    cat:"transformation",
    f:"¿Por qué Agrobacterium puede ser menos eficiente en algunas monocotiledóneas?",
    b:"La susceptibilidad a la infección y la capacidad de transferencia pueden ser menores que en muchas dicotiledóneas, por lo que pueden utilizarse métodos físicos como la biobalística."
  },
  {
    cat:"transformation",
    f:"¿Qué es la biobalística?",
    b:"Método físico que utiliza partículas microscópicas recubiertas con ADN y aceleradas para introducir material genético en células vegetales."
  },
  {
    cat:"transformation",
    f:"¿Cuál es una ventaja de la biobalística?",
    b:"Puede utilizarse en especies y tejidos que son difíciles de transformar mediante Agrobacterium."
  },
  {
    cat:"transformation",
    f:"¿Qué es la transformación por microinyección?",
    b:"Introducción directa de ADN en una célula mediante una micropipeta."
  },
  {
    cat:"transformation",
    f:"¿Qué tienen en común la electroporación bacteriana, EMT en hongos y la electroporación vegetal?",
    b:"Todas utilizan pulsos eléctricos para generar poros transitorios en la membrana y facilitar la entrada de ADN."
  },
  {
    cat:"transformation",
    f:"¿Cuál es la diferencia fundamental entre transformación bacteriana y transformación vegetal mediante Agrobacterium?",
    b:"En bacterias se introduce directamente ADN exógeno mediante métodos químicos o físicos; en plantas, Agrobacterium utiliza un mecanismo biológico para transferir ADN-T al genoma vegetal."
  },
  {
    cat:"transformation",
    f:"¿Qué es una célula transformada?",
    b:"Célula que ha incorporado ADN exógeno y mantiene ese material genético de manera temporal o estable."
  },
  {
    cat:"transformation",
    f:"¿Qué significa integración estable de un transgén?",
    b:"Que el ADN introducido queda integrado de forma estable en el genoma de la célula y puede heredarse durante la división celular."
  },
  {
    cat:"transformation",
    f:"¿Qué diferencia existe entre expresión transitoria y estable?",
    b:"En la expresión transitoria el ADN puede expresarse sin integrarse permanentemente al genoma; en la estable el transgén se integra y puede mantenerse y heredarse."
  },
  {
    cat:"transformation",
    f:"¿Qué es un marcador de selección?",
    b:"Gen que permite seleccionar las células que incorporaron la construcción genética, por ejemplo mediante resistencia a un antibiótico."
  },
  {
    cat:"transformation",
    f:"¿Qué es un marcador reportero?",
    b:"Gen cuyo producto permite visualizar, detectar o cuantificar la expresión de una construcción."
  },
  {
    cat:"transformation",
    f:"¿Qué es el sistema azul/blanco?",
    b:"Sistema de selección que permite distinguir colonias con o sin inserto mediante la interrupción de lacZ; las colonias con inserto suelen ser blancas y las sin inserto azules."
  },
  {
    cat:"transformation",
    f:"¿Qué función tiene lacZ en el sistema azul/blanco?",
    b:"Codifica una β-galactosidasa que puede producir una señal azul en presencia del sustrato apropiado. La inserción del ADN puede interrumpir su función."
  },
  {
    cat:"transformation",
    f:"¿Qué es IPTG?",
    b:"Inductor no metabolizable utilizado para activar la expresión regulada por el operón lac."
  },
  {
    cat:"transformation",
    f:"¿Qué función cumple CAP-cAMP en regulación bacteriana?",
    b:"El complejo CAP-cAMP favorece la transcripción de determinados genes cuando la glucosa es baja y el nivel de cAMP es alto.",
    draw:"lac"
  },
  {
    cat:"transformation",
    f:"¿Qué ocurre con el operón lac cuando hay mucha glucosa?",
    b:"El cAMP disminuye, se reduce la formación de CAP-cAMP y la activación positiva del operón lac disminuye."
  },
  {
    cat:"transformation",
    f:"¿Qué ocurre con el operón lac cuando no hay lactosa?",
    b:"El represor LacI permanece unido al operador e impide o reduce fuertemente la transcripción."
  },
  {
    cat:"transformation",
    f:"¿Qué ocurre cuando hay lactosa o un inductor como IPTG?",
    b:"El inductor se une al represor LacI y disminuye su afinidad por el operador, permitiendo la transcripción."
  },
  {
    cat:"transformation",
    f:"¿Qué es el sistema T7 de expresión?",
    b:"Sistema de expresión que utiliza una ARN polimerasa T7 para transcribir fuertemente un gen colocado bajo un promotor reconocido por T7."
  },
  {
    cat:"transformation",
    f:"¿Por qué BL21(DE3) se utiliza frecuentemente para expresión de proteínas?",
    b:"Porque contiene el gen de la ARN polimerasa T7 bajo control inducible, permitiendo una fuerte expresión de genes colocados bajo un promotor T7."
  },
  {
    cat:"transformation",
    f:"¿Qué es un sistema de expresión inducible?",
    b:"Sistema que permite controlar cuándo y/o cuánto se expresa un gen mediante una señal externa."
  },
  {
    cat:"transformation",
    f:"¿Qué diferencia hay entre Tet-ON y Tet-OFF?",
    b:"En Tet-ON, la presencia de tetraciclina o doxiciclina activa la expresión; en Tet-OFF, la presencia del compuesto la reprime.",
    draw:"tet"
  },
  {
    cat:"transformation",
    f:"¿Qué ventaja tienen los sistemas inducibles?",
    b:"Permiten controlar temporalmente la expresión de un gen, lo que resulta útil cuando una proteína es tóxica o cuando se necesita separar crecimiento y producción."
  },
  {
    cat:"transformation",
    f:"¿Qué es una proteína de fusión?",
    b:"Proteína producida a partir de dos o más secuencias codificantes unidas en un mismo marco de lectura."
  },
  {
    cat:"transformation",
    f:"¿Para qué se utiliza una His-tag?",
    b:"Para facilitar la detección y purificación de proteínas recombinantes mediante cromatografía de afinidad, por ejemplo usando una resina Ni-NTA.",
    draw:"his"
  },
  {
    cat:"transformation",
    f:"¿Qué es una etiqueta GST?",
    b:"Etiqueta de fusión derivada de glutatión-S-transferasa que puede utilizarse para facilitar la purificación y, en algunos casos, mejorar la solubilidad de proteínas recombinantes."
  },
  {
    cat:"transformation",
    f:"¿Qué es Golden Rice?",
    b:"Arroz modificado genéticamente para producir carotenoides, especialmente β-caroteno, en el endospermo."
  },
  {
    cat:"transformation",
    f:"¿Qué problema intentaba solucionar Golden Rice?",
    b:"La deficiencia de vitamina A mediante la producción de provitamina A en un alimento básico como el arroz."
  },
  {
    cat:"transformation",
    f:"¿Qué genes se utilizaron para producir Golden Rice 2?",
    b:"Una PSY más eficaz, proveniente de maíz, junto con el gen crtI de Erwinia uredovora.",
    draw:"golden"
  },
  {
    cat:"transformation",
    f:"¿Por qué se reemplazó la PSY de narciso en Golden Rice 2?",
    b:"Porque la PSY de narciso constituía el factor limitante para una mayor acumulación de carotenoides. La PSY de maíz permitió una producción mucho mayor."
  },
  {
    cat:"transformation",
    f:"¿Qué función tiene PSY en la ruta de carotenoides?",
    b:"Cataliza la formación de fitoeno a partir de precursores de la ruta de carotenoides y puede representar un paso limitante de la biosíntesis.",
    draw:"golden"
  },
  {
    cat:"transformation",
    f:"¿Qué función tiene CRTI en Golden Rice?",
    b:"Cataliza la desaturación del fitoeno hacia intermediarios posteriores de la ruta de carotenoides, contribuyendo a la formación de licopeno y carotenoides posteriores."
  },
  {
    cat:"transformation",
    f:"¿Qué evidencia indicó que CRTI no era el factor limitante en Golden Rice 2?",
    b:"No se detectó acumulación de fitoeno incluso con las PSY más eficaces, indicando que CRTI podía procesar el fitoeno producido."
  },
  {
    cat:"transformation",
    f:"¿Qué porcentaje aproximado de los carotenoides acumulados correspondía a β-caroteno en los eventos de mayor producción?",
    b:"Una proporción muy alta, aproximadamente 80–90 %, correspondía a β-caroteno."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que un transgén sea heredable?",
    b:"Que el ADN introducido se mantiene en las células y puede transmitirse a las generaciones siguientes."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que una línea transgénica sea homocigota?",
    b:"Que posee el transgén en ambos alelos del locus correspondiente."
  },
  {
    cat:"transformation",
    f:"¿Qué significa una segregación 3:1 de un carácter?",
    b:"En un cruzamiento típico de un locus con dominancia, una proporción fenotípica 3:1 puede ser compatible con una segregación mendeliana de un transgén presente en un locus."
  },
  {
    cat:"transformation",
    f:"¿Qué es la segregación de un transgén?",
    b:"Distribución del transgén entre la descendencia debido a la separación de los alelos durante la meiosis."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que un transgén se encuentre en una sola copia?",
    b:"Que existe una única copia del T-DNA integrado en el genoma, aunque las técnicas utilizadas para estimarlo pueden tener cierto margen de error."
  },
  {
    cat:"transformation",
    f:"¿Qué es la transformación mediada por Agrobacterium en plantas?",
    b:"Uso de la capacidad natural de Agrobacterium para transferir ADN-T hacia células vegetales, adaptando ese mecanismo para introducir genes de interés.",
    draw:"agrobacterium"
  },
  {
    cat:"transformation",
    f:"¿Por qué el sistema binario es útil en ingeniería genética vegetal?",
    b:"Permite separar las funciones necesarias para la transferencia del ADN-T de la región que contiene el gen de interés, facilitando la construcción y manipulación del vector.",
    draw:"binario"
  },
  {
    cat:"transformation",
    f:"¿Qué es la regeneración de una planta transgénica?",
    b:"Proceso mediante el cual células vegetales transformadas se inducen a formar tejidos y finalmente una planta completa mediante cultivo in vitro."
  },
  {
    cat:"transformation",
    f:"¿Qué es la selección de células vegetales transformadas?",
    b:"Uso de un marcador que permite que las células que contienen el T-DNA sobrevivan o crezcan bajo una condición selectiva."
  },
  {
    cat:"transformation",
    f:"¿Qué es la transformación de protoplastos vegetales?",
    b:"Introducción de ADN en células vegetales a las que se les eliminó la pared celular; después, los protoplastos pueden regenerar la pared y, bajo condiciones adecuadas, formar plantas.",
    draw:"protoplast"
  },
  {
    cat:"transformation",
    f:"¿Qué es la integración aleatoria?",
    b:"Inserción del ADN introducido en una posición no predeterminada del genoma."
  },
  {
    cat:"transformation",
    f:"¿Por qué la posición de integración puede afectar la expresión de un transgén?",
    b:"Porque el entorno cromatínico y los elementos reguladores cercanos pueden influir en la accesibilidad y actividad del transgén."
  },
  {
    cat:"transformation",
    f:"¿Qué es un evento de transformación?",
    b:"Una línea o individuo derivado de una transformación independiente, con una integración genética particular."
  },
  {
    cat:"transformation",
    f:"¿Por qué pueden existir diferencias de expresión entre distintos eventos transgénicos?",
    b:"Por diferencias en el sitio de integración, número de copias, orientación, estructura del T-DNA y estado de la cromatina."
  },
  {
    cat:"transformation",
    f:"¿Qué es silenciamiento transgénico?",
    b:"Proceso mediante el cual la expresión de un transgén disminuye o desaparece debido a mecanismos celulares de regulación o silenciamiento del ADN/ARN."
  },
  {
    cat:"transformation",
    f:"¿Qué es recombinación homóloga?",
    b:"Proceso mediante el cual regiones de ADN con secuencias homólogas pueden intercambiar o incorporar información genética."
  },
  {
    cat:"transformation",
    f:"¿Qué diferencia hay entre recombinación homóloga y recombinación sitio-específica?",
    b:"La recombinación homóloga depende de regiones extensas de homología; la sitio-específica depende del reconocimiento de secuencias concretas por recombinasas."
  },
  {
    cat:"transformation",
    f:"¿Qué es Gateway cloning?",
    b:"Sistema de clonación basado en recombinación sitio-específica que permite transferir un fragmento de ADN entre diferentes vectores de forma eficiente."
  },
  {
    cat:"transformation",
    f:"¿Qué es Gibson Assembly?",
    b:"Método de ensamblaje de fragmentos de ADN que poseen extremos solapantes, permitiendo unir múltiples fragmentos en una sola reacción."
  },
  {
    cat:"transformation",
    f:"¿Qué es Golden Gate?",
    b:"Método de ensamblaje que utiliza enzimas de restricción tipo IIS y ligasa para ensamblar fragmentos de ADN en un orden definido."
  },
  {
    cat:"transformation",
    f:"¿Qué ventaja tiene Gibson Assembly?",
    b:"Permite ensamblar múltiples fragmentos simultáneamente y no deja necesariamente sitios de restricción entre las piezas ensambladas."
  },
  {
    cat:"transformation",
    f:"¿Qué ventaja tiene Golden Gate?",
    b:"Permite ensamblar múltiples fragmentos de manera modular y ordenada utilizando sitios de reconocimiento diseñados estratégicamente."
  },
  {
    cat:"transformation",
    f:"¿Qué es un vector de expresión?",
    b:"Vector diseñado para que un gen insertado pueda ser transcrito y, cuando corresponde, traducido eficientemente en una célula hospedadora."
  },
  {
    cat:"transformation",
    f:"¿Qué elementos necesita una construcción para expresar una proteína?",
    b:"Promotor adecuado, secuencia codificante en el marco correcto y elementos reguladores apropiados; dependiendo del sistema también pueden requerirse terminador, señales de localización o etiquetas."
  },
  {
    cat:"transformation",
    f:"¿Qué es una señal de localización?",
    b:"Secuencia que dirige una proteína hacia un compartimento celular específico."
  },
  {
    cat:"transformation",
    f:"¿Qué es un péptido señal?",
    b:"Secuencia que puede dirigir una proteína naciente hacia una vía de secreción o membrana."
  },
  {
    cat:"transformation",
    f:"¿Qué ocurre si un gen se inserta fuera del marco de lectura?",
    b:"La secuencia puede producir una proteína incorrecta o truncada porque los codones posteriores se leen de manera diferente."
  },
  {
    cat:"transformation",
    f:"¿Qué es un codón de inicio?",
    b:"Codón que marca el comienzo de la traducción; normalmente AUG en sistemas celulares estándar."
  },
  {
    cat:"transformation",
    f:"¿Qué es un codón de término?",
    b:"Codón que señala el final de la traducción de una proteína."
  },
  {
    cat:"transformation",
    f:"¿Por qué puede ser necesario eliminar el codón stop al fusionar una proteína con una etiqueta C-terminal?",
    b:"Porque un codón stop prematuro impediría que la traducción continúe hasta la secuencia de la etiqueta."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que una proteína sea recombinante?",
    b:"Que se produce a partir de una construcción genética recombinante introducida en una célula hospedadora."
  },
  {
    cat:"transformation",
    f:"¿Qué es la expresión heteróloga?",
    b:"Producción de un gen o proteína en una especie o sistema diferente del organismo de origen."
  },
  {
    cat:"transformation",
    f:"¿Qué es una célula hospedadora?",
    b:"Célula utilizada para recibir y mantener una construcción genética y, cuando corresponde, expresar el gen introducido."
  },
  {
    cat:"transformation",
    f:"¿Qué es la eficiencia de transformación?",
    b:"Medida de cuántas células transformadas se obtienen por cantidad de ADN o por cantidad de células sometidas al procedimiento."
  },
  {
    cat:"transformation",
    f:"¿Qué factores pueden disminuir la eficiencia de transformación?",
    b:"Mala calidad del ADN, células poco competentes, condiciones inadecuadas de transformación, exceso de sales, recuperación insuficiente o selección demasiado fuerte."
  },
  {
    cat:"transformation",
    f:"¿Por qué no todas las células reciben el plásmido durante una transformación?",
    b:"La entrada de ADN es un proceso probabilístico y depende del estado fisiológico de las células y de las condiciones del método."
  },
  {
    cat:"transformation",
    f:"¿Qué es una colonia bacteriana?",
    b:"Conjunto visible de células que se originan a partir de una célula o pequeño grupo de células que se multiplicaron sobre un medio sólido."
  },
  {
    cat:"transformation",
    f:"¿Por qué una colonia seleccionada no demuestra por sí sola que el inserto sea correcto?",
    b:"Porque la selección solo indica que la célula posee el marcador de selección; todavía es necesario verificar la presencia, tamaño, orientación o secuencia del inserto."
  },
  {
    cat:"transformation",
    f:"¿Cómo verificarías que una colonia contiene el inserto correcto?",
    b:"Mediante colony PCR, digestión de restricción, secuenciación u otra estrategia de análisis molecular."
  },
  {
    cat:"transformation",
    f:"¿Qué es colony PCR?",
    b:"PCR realizada directamente sobre material de una colonia para comprobar rápidamente la presencia y/o tamaño de un inserto."
  },
  {
    cat:"transformation",
    f:"¿Qué ventaja tiene secuenciar un clon?",
    b:"Permite confirmar con alta precisión que la secuencia, orientación y regiones relevantes de la construcción son correctas."
  },
  {
    cat:"transformation",
    f:"¿Qué es una biblioteca de ADN?",
    b:"Colección de fragmentos de ADN clonados en vectores, que representa una colección genética o genómica de una muestra."
  },
  {
    cat:"transformation",
    f:"¿Qué es una biblioteca genómica?",
    b:"Colección de fragmentos que representa el ADN genómico de un organismo."
  },
  {
    cat:"transformation",
    f:"¿Qué es una biblioteca de cDNA?",
    b:"Colección de ADN complementario obtenido a partir de ARN mensajero y que representa genes expresados en una determinada muestra o condición."
  },
  {
    cat:"transformation",
    f:"¿Por qué una biblioteca de cDNA no representa todo el genoma?",
    b:"Porque deriva de ARN mensajero y, por lo tanto, representa principalmente genes que estaban siendo expresados en la muestra utilizada."
  },
  {
    cat:"transformation",
    f:"¿Qué es la transfección?",
    b:"Introducción de ácidos nucleicos en células eucariotas mediante métodos químicos, físicos o biológicos."
  },
  {
    cat:"transformation",
    f:"¿Qué diferencia general existe entre transformación y transfección?",
    b:"El término transformación se usa habitualmente para bacterias y plantas en determinados contextos, mientras que transfección se utiliza frecuentemente para introducir ácidos nucleicos en células animales."
  },
  {
    cat:"transformation",
    f:"¿Qué es la infección viral como método de transferencia genética?",
    b:"Uso de partículas virales modificadas para introducir material genético en células susceptibles."
  },
  {
    cat:"transformation",
    f:"¿Qué es un vector viral?",
    b:"Sistema derivado de un virus diseñado para transportar material genético a células diana."
  },
  {
    cat:"transformation",
    f:"¿Qué es la fagoterapia?",
    b:"Uso de bacteriófagos para eliminar bacterias específicas; los fagos pueden diseñarse o seleccionarse para aplicaciones terapéuticas."
  },
  {
    cat:"transformation",
    f:"¿Qué es la transformación natural?",
    b:"Proceso mediante el cual ciertas bacterias naturalmente competentes captan ADN libre del ambiente sin necesidad de un tratamiento artificial."
  },
  {
    cat:"transformation",
    f:"¿Qué diferencia existe entre competencia natural y competencia inducida?",
    b:"La competencia natural es una capacidad fisiológica propia de ciertas bacterias; la inducida se genera artificialmente mediante tratamientos que favorecen la entrada de ADN."
  },
  {
    cat:"transformation",
    f:"¿Qué es la transformación estable?",
    b:"Transformación en la que el material genético introducido se mantiene de manera estable, generalmente por integración o replicación estable."
  },
  {
    cat:"transformation",
    f:"¿Qué es la transformación transitoria?",
    b:"Introducción de ADN que se expresa durante un periodo limitado sin necesidad de que el material quede integrado de manera estable."
  },
  {
    cat:"transformation",
    f:"¿Qué significa expresión constitutiva?",
    b:"Expresión continua de un gen bajo un promotor que permanece activo en las condiciones estudiadas."
  },
  {
    cat:"transformation",
    f:"¿Qué significa expresión inducible?",
    b:"Expresión que puede activarse o modificarse mediante una señal externa o condición determinada."
  },
  {
    cat:"transformation",
    f:"¿Qué es un promotor fuerte?",
    b:"Promotor que, en las condiciones y sistema adecuados, puede producir altos niveles de transcripción."
  },
  {
    cat:"transformation",
    f:"¿Qué puede ocurrir si la expresión de una proteína recombinante es demasiado alta?",
    b:"Puede producir toxicidad celular, estrés metabólico, agregación o disminución del crecimiento."
  },
  {
    cat:"transformation",
    f:"¿Por qué puede ser útil disminuir la temperatura durante la expresión de una proteína recombinante?",
    b:"Puede reducir la velocidad de síntesis y favorecer el plegamiento correcto y la solubilidad de la proteína."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que una proteína esté en cuerpos de inclusión?",
    b:"Que se ha acumulado en agregados insolubles dentro de la célula, frecuentemente debido a plegamiento incorrecto."
  },
  {
    cat:"transformation",
    f:"¿Qué es la purificación por afinidad?",
    b:"Método de purificación basado en una interacción específica entre una etiqueta o característica de la proteína y una matriz de afinidad."
  },
  {
    cat:"transformation",
    f:"¿Qué es Ni-NTA?",
    b:"Matriz de afinidad que utiliza níquel coordinado para unir proteínas que contienen múltiples residuos de histidina, como las His-tag."
  },
  {
    cat:"transformation",
    f:"¿Qué es el Western blot?",
    b:"Técnica utilizada para detectar una proteína específica mediante separación por tamaño, transferencia a una membrana y detección con anticuerpos."
  },
  {
    cat:"transformation",
    f:"¿Qué información entrega un Western blot de una proteína recombinante?",
    b:"Permite comprobar la presencia de la proteína y comparar su tamaño aparente con el esperado."
  },
  {
    cat:"transformation",
    f:"¿Qué es HPLC?",
    b:"Técnica cromatográfica de alta resolución utilizada para separar, identificar y cuantificar componentes de una mezcla."
  },
  {
    cat:"transformation",
    f:"¿Por qué se utilizó HPLC en el estudio de Golden Rice?",
    b:"Para separar y cuantificar los diferentes carotenoides presentes en las semillas transgénicas."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que un transgén tenga mayor eficacia?",
    b:"Que, bajo condiciones comparables, produce un efecto o producto deseado en mayor cantidad o con mayor eficiencia."
  },
  {
    cat:"transformation",
    f:"¿Por qué diferentes genes psy pueden producir cantidades diferentes de carotenoides?",
    b:"Porque las proteínas PSY de distintas especies pueden presentar diferencias en su actividad catalítica, afinidad por sustratos o adaptación al entorno celular."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que PSY sea el paso limitante?",
    b:"Que la actividad de PSY restringe la velocidad o cantidad de flujo que puede avanzar por la ruta biosintética."
  },
  {
    cat:"transformation",
    f:"¿Qué es el flujo metabólico?",
    b:"Cantidad o velocidad con la que los metabolitos atraviesan una ruta metabólica."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que no haya acumulación de fitoeno?",
    b:"Que el fitoeno producido probablemente está siendo procesado eficientemente por CRTI y otros componentes de la ruta."
  },
  {
    cat:"transformation",
    f:"¿Qué es un carotenoide?",
    b:"Pigmento liposoluble producido por plantas y otros organismos; algunos, como el β-caroteno, funcionan como precursores de vitamina A."
  },
  {
    cat:"transformation",
    f:"¿Qué es β-caroteno?",
    b:"Carotenoide que puede ser convertido en vitamina A dentro del organismo y, por ello, se considera provitamina A."
  },
  {
    cat:"transformation",
    f:"¿Por qué el endospermo del arroz es importante en Golden Rice?",
    b:"Porque es la parte comestible del grano y normalmente posee cantidades muy bajas o nulas de provitamina A."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que un alimento sea biofortificado?",
    b:"Que se modifica o selecciona para aumentar su contenido de nutrientes o compuestos beneficiosos durante su producción."
  },
  {
    cat:"transformation",
    f:"¿Qué diferencia existe entre suplementación y biofortificación?",
    b:"La suplementación entrega nutrientes directamente, mientras que la biofortificación aumenta el contenido nutricional del alimento producido."
  },
  {
    cat:"transformation",
    f:"¿Por qué cambiar la fuente de un transgén puede cambiar el fenotipo?",
    b:"Porque proteínas homólogas de distintas especies pueden presentar diferencias funcionales, regulatorias o de compatibilidad con el entorno celular."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que dos proteínas tengan 89 % de identidad de secuencia?",
    b:"Que aproximadamente el 89 % de sus posiciones de aminoácidos son iguales cuando se alinean sus secuencias."
  },
  {
    cat:"transformation",
    f:"¿Qué es kcat?",
    b:"Constante catalítica que representa, bajo condiciones apropiadas, el número de moléculas de sustrato que una enzima puede convertir por unidad de tiempo cuando está saturada."
  },
  {
    cat:"transformation",
    f:"¿Qué es KM?",
    b:"Parámetro cinético relacionado con la concentración de sustrato necesaria para alcanzar una velocidad determinada y que se utiliza como indicador de la afinidad aparente de una enzima por su sustrato."
  },
  {
    cat:"transformation",
    f:"¿Qué puede explicar que PSY de maíz funcione especialmente bien en arroz?",
    b:"Su actividad catalítica y su compatibilidad con el entorno de los plastidios del endospermo de arroz pueden favorecer una mayor producción de carotenoides."
  },
  {
    cat:"transformation",
    f:"¿Qué es un amiloplasto?",
    b:"Plastidio especializado en almacenar almidón, presente en tejidos como el endospermo del arroz."
  },
  {
    cat:"transformation",
    f:"¿Qué es un plastidio?",
    b:"Orgánulo de las células vegetales que participa en procesos como fotosíntesis, síntesis de pigmentos y almacenamiento."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que un producto sea secuestrado o almacenado dentro de una célula?",
    b:"Que el metabolito puede acumularse en estructuras celulares, membranas, gotas lipídicas, cristales u otras formas que reducen su toxicidad o disponibilidad."
  },
  {
    cat:"transformation",
    f:"¿Por qué el almacenamiento de carotenoides puede afectar su acumulación?",
    b:"Porque una célula necesita mecanismos capaces de almacenar grandes cantidades de compuestos hidrofóbicos sin alterar gravemente su funcionamiento."
  },
  {
    cat:"transformation",
    f:"¿Qué es una vía biosintética?",
    b:"Conjunto ordenado de reacciones enzimáticas que convierten precursores en productos metabólicos."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que una enzima sea un punto de regulación?",
    b:"Que cambios en su actividad pueden modificar significativamente el flujo de toda una ruta metabólica."
  },
  {
    cat:"transformation",
    f:"¿Por qué se utilizan sistemas de selección después de una transformación?",
    b:"Porque permiten separar las células que incorporaron la construcción genética de aquellas que no la incorporaron."
  },
  {
    cat:"transformation",
    f:"¿Por qué se debe recuperar una célula después de introducirle ADN?",
    b:"Porque la célula necesita reparar posibles daños y comenzar a expresar genes necesarios para sobrevivir a la selección."
  },
  {
    cat:"transformation",
    f:"¿Qué es un control negativo en una transformación?",
    b:"Condición en la que se realiza el procedimiento sin el ADN de interés o sin el componente experimental clave, permitiendo evaluar el fondo de selección."
  },
  {
    cat:"transformation",
    f:"¿Qué es un control positivo?",
    b:"Condición que debería producir un resultado conocido y demuestra que el procedimiento y sus componentes funcionan."
  },
  {
    cat:"transformation",
    f:"¿Qué ocurriría si todas las bacterias crecen en una placa con antibiótico?",
    b:"Podría indicar que el antibiótico no funciona, está a una concentración inadecuada, hubo contaminación o el sistema de selección no es apropiado."
  },
  {
    cat:"transformation",
    f:"¿Qué ocurriría si ninguna bacteria crece después de una transformación?",
    b:"Podría deberse a baja eficiencia de transformación, células no viables, selección demasiado fuerte o problemas con el medio, el ADN o el procedimiento."
  },
  {
    cat:"transformation",
    f:"¿Qué diferencia existe entre resistencia y selección?",
    b:"La resistencia es la capacidad conferida por un gen o mecanismo; la selección es la condición utilizada para favorecer el crecimiento de las células que poseen esa capacidad."
  },
  {
    cat:"transformation",
    f:"¿Qué es una construcción genética?",
    b:"Molécula de ADN diseñada artificialmente que contiene los elementos necesarios para una función genética específica."
  },
  {
    cat:"transformation",
    f:"¿Qué es un cassette de expresión?",
    b:"Conjunto de elementos genéticos que permiten la expresión de un gen, normalmente incluyendo promotor, secuencia codificante y terminador."
  },
  {
    cat:"transformation",
    f:"¿Qué es un terminador?",
    b:"Secuencia que favorece la terminación de la transcripción y puede contribuir a la estabilidad del ARN."
  },
  {
    cat:"transformation",
    f:"¿Qué es un intrón?",
    b:"Segmento de un gen que se transcribe pero normalmente se elimina durante el procesamiento del ARN antes de la traducción."
  },
  {
    cat:"transformation",
    f:"¿Qué es un cDNA?",
    b:"ADN complementario sintetizado a partir de un ARN molde mediante una transcriptasa reversa."
  },
  {
    cat:"transformation",
    f:"¿Por qué un cDNA puede ser útil para expresar un gen eucariota en bacterias?",
    b:"Porque generalmente carece de intrones, por lo que contiene una secuencia codificante continua que puede ser traducida por la bacteria."
  },
  {
    cat:"transformation",
    f:"¿Qué es la transcriptasa reversa?",
    b:"Enzima que sintetiza ADN utilizando ARN como molde."
  },
  {
    cat:"transformation",
    f:"¿Qué es RT-PCR?",
    b:"PCR precedida por una etapa de retrotranscripción que convierte ARN en cDNA, permitiendo analizar o amplificar secuencias derivadas de ARN."
  },
  {
    cat:"transformation",
    f:"¿Qué es un ORF?",
    b:"Open Reading Frame: marco de lectura abierto que contiene una secuencia potencialmente capaz de codificar una proteína."
  },
  {
    cat:"transformation",
    f:"¿Qué es un gen reportero como GUS?",
    b:"Gen que produce una actividad detectable y permite visualizar o medir la expresión de una construcción genética."
  },
  {
    cat:"transformation",
    f:"¿Qué es GFP?",
    b:"Proteína fluorescente verde utilizada como reportero para visualizar células o tejidos que expresan la construcción correspondiente."
  },
  {
    cat:"transformation",
    f:"¿Qué es un marcador seleccionable?",
    b:"Gen que proporciona una ventaja de supervivencia bajo una condición selectiva."
  },
  {
    cat:"transformation",
    f:"¿Qué es un marcador visual?",
    b:"Marcador cuyo producto genera un cambio visible o fluorescente que permite identificar células o tejidos con determinada actividad genética."
  },
  {
    cat:"transformation",
    f:"¿Qué es un gen auxiliar?",
    b:"Gen que proporciona una función necesaria para que otro componente genético pueda funcionar, pero que no necesariamente forma parte del producto final deseado."
  },
  {
    cat:"transformation",
    f:"¿Qué es una transformación mediada por Agrobacterium en hongos?",
    b:"Uso de Agrobacterium para transferir ADN-T a células fúngicas, aprovechando su capacidad natural de transferencia genética."
  },
  {
    cat:"transformation",
    f:"¿Qué método sería razonable para transformar un hongo cuyo tejido es difícil de penetrar?",
    b:"Puede considerarse la formación de protoplastos seguida de PEG o electroporación, o un método mediado por Agrobacterium dependiendo de la especie."
  },
  {
    cat:"transformation",
    f:"¿Qué método elegirías para una bacteria fácilmente transformable y por qué?",
    b:"Transformación química puede ser conveniente por su simplicidad; electroporación puede elegirse si se requiere alta eficiencia o si la bacteria responde mejor a ese método."
  },
  {
    cat:"transformation",
    f:"¿Qué método elegirías para una planta difícil de transformar con Agrobacterium?",
    b:"Biobalística puede ser una alternativa porque permite introducir ADN directamente en los tejidos."
  },
  {
    cat:"transformation",
    f:"¿Qué método elegirías para una levadura?",
    b:"LiAc/PEG es una opción clásica; también puede utilizarse electroporación dependiendo de la especie y del objetivo experimental."
  },
  {
    cat:"transformation",
    f:"¿Qué método elegirías para introducir ADN en una célula vegetal aislada sin pared?",
    b:"Electroporación o PEG pueden utilizarse sobre protoplastos."
  },
  {
    cat:"transformation",
    f:"¿Qué método permite transferir ADN entre bacterias mediante contacto?",
    b:"Conjugación."
  },
  {
    cat:"transformation",
    f:"¿Qué método utiliza bacteriófagos como vehículos de transferencia genética?",
    b:"Transducción.",
    draw:"transduction"
  },
  {
    cat:"transformation",
    f:"¿Qué método utiliza ADN libre desde el medio?",
    b:"Transformación."
  },
  {
    cat:"transformation",
    f:"¿Qué tienen en común transformación, conjugación y transducción?",
    b:"Las tres son formas de transferencia horizontal de genes y permiten que información genética pase entre células."
  },
  {
    cat:"transformation",
    f:"¿Qué es transferencia horizontal de genes?",
    b:"Movimiento de información genética entre organismos o células que no ocurre directamente por herencia de progenitor a descendiente."
  },
  {
    cat:"transformation",
    f:"¿Por qué la transferencia horizontal de genes es importante en bacterias?",
    b:"Permite adquirir rápidamente nuevas características, como resistencia a antibióticos o capacidades metabólicas."
  },
  {
    cat:"transformation",
    f:"¿Qué es un transposón?",
    b:"Elemento genético capaz de cambiar de posición dentro del genoma o entre moléculas de ADN."
  },
  {
    cat:"transformation",
    f:"¿Qué es un integrón?",
    b:"Sistema genético capaz de capturar y expresar cassettes de genes, frecuentemente asociado con la adquisición de resistencia antimicrobiana."
  },
  {
    cat:"transformation",
    f:"¿Qué es un operón?",
    b:"Conjunto de genes bacterianos regulados coordinadamente bajo el control de elementos reguladores compartidos."
  },
  {
    cat:"transformation",
    f:"¿Qué es el operón lac?",
    b:"Sistema regulador bacteriano que coordina genes involucrados en el uso de lactosa y responde a la presencia de lactosa y al estado de glucosa."
  },
  {
    cat:"transformation",
    f:"¿Qué proteínas participan directamente en la regulación del operón lac?",
    b:"El represor LacI, CAP y cAMP, además de los elementos de ADN como promotor y operador."
  },
  {
    cat:"transformation",
    f:"¿Qué es el operador?",
    b:"Región de ADN a la que puede unirse un represor para controlar la transcripción de genes asociados."
  },
  {
    cat:"transformation",
    f:"¿Qué es el promotor lac?",
    b:"Región de ADN donde se ensambla la maquinaria de transcripción para iniciar la expresión del operón lac."
  },
  {
    cat:"transformation",
    f:"¿Qué ocurre si hay lactosa pero también mucha glucosa?",
    b:"El represor puede estar inactivado por el inductor, pero el nivel bajo de cAMP limita la activación por CAP, por lo que la expresión no alcanza su máximo."
  },
  {
    cat:"transformation",
    f:"¿Qué ocurre si hay lactosa y poca glucosa?",
    b:"El represor LacI se inactiva y el nivel alto de cAMP favorece CAP-cAMP, produciendo una expresión alta del operón."
  },
  {
    cat:"transformation",
    f:"¿Qué es inducción?",
    b:"Aumento de la expresión de un gen o sistema regulatorio en respuesta a una señal o molécula inductora."
  },
  {
    cat:"transformation",
    f:"¿Qué es represión?",
    b:"Disminución de la expresión génica debido a la acción de un regulador negativo o a condiciones que reducen la transcripción."
  },
  {
    cat:"transformation",
    f:"¿Qué es un inductor?",
    b:"Molécula o señal que aumenta la expresión de un gen al modificar la actividad de un regulador."
  },
  {
    cat:"transformation",
    f:"¿Qué es un represor?",
    b:"Proteína reguladora que disminuye la transcripción al unirse a una región reguladora o actuar sobre la maquinaria de expresión."
  },
  {
    cat:"transformation",
    f:"¿Qué es un activador?",
    b:"Proteína reguladora que aumenta la transcripción al facilitar el reclutamiento o actividad de la maquinaria de transcripción."
  },
  {
    cat:"transformation",
    f:"¿Qué significa regulación positiva?",
    b:"Regulación en la que la unión de un activador favorece la expresión de un gen."
  },
  {
    cat:"transformation",
    f:"¿Qué significa regulación negativa?",
    b:"Regulación en la que un represor disminuye la expresión de un gen."
  },
  {
    cat:"transformation",
    f:"¿Qué es un sistema de expresión T7/IPTG?",
    b:"Sistema en el que IPTG induce la producción de ARN polimerasa T7 y esta transcribe fuertemente el gen situado bajo un promotor T7."
  },
  {
    cat:"transformation",
    f:"¿Por qué IPTG es útil en expresión recombinante?",
    b:"Porque puede activar sistemas regulados por lac sin ser metabolizado como la lactosa, permitiendo una inducción más controlable."
  },
  {
    cat:"transformation",
    f:"¿Qué es la ARN polimerasa T7?",
    b:"ARN polimerasa de bacteriófago T7 que reconoce promotores T7 y puede producir grandes cantidades de ARN a partir de ellos."
  },
  {
    cat:"transformation",
    f:"¿Qué es un promotor T7?",
    b:"Secuencia promotora reconocida por la ARN polimerasa T7 y utilizada para obtener una expresión elevada de genes recombinantes."
  },
  {
    cat:"transformation",
    f:"¿Qué es una cepa de expresión?",
    b:"Cepa celular seleccionada o modificada para producir eficientemente una proteína o producto recombinante."
  },
  {
    cat:"transformation",
    f:"¿Qué diferencia existe entre una cepa de clonación y una cepa de expresión?",
    b:"Una cepa de clonación se optimiza para mantener y propagar ADN; una cepa de expresión se optimiza para producir el producto codificado por ese ADN."
  },
  {
    cat:"transformation",
    f:"¿Qué es una mutación?",
    b:"Cambio en la secuencia del material genético."
  },
  {
    cat:"transformation",
    f:"¿Por qué se secuencia una construcción antes de utilizarla?",
    b:"Para verificar que no existan mutaciones no deseadas y confirmar que el diseño genético sea correcto."
  },
  {
    cat:"transformation",
    f:"¿Qué es una mutación silenciosa?",
    b:"Cambio de nucleótido que no modifica el aminoácido codificado debido a la degeneración del código genético."
  },
  {
    cat:"transformation",
    f:"¿Qué es una mutación missense?",
    b:"Mutación que cambia un codón de manera que se incorpora un aminoácido diferente a la proteína."
  },
  {
    cat:"transformation",
    f:"¿Qué es una mutación nonsense?",
    b:"Mutación que genera un codón de término prematuro y puede producir una proteína truncada."
  },
  {
    cat:"transformation",
    f:"¿Qué es una deleción?",
    b:"Pérdida de uno o más nucleótidos de una secuencia de ADN."
  },
  {
    cat:"transformation",
    f:"¿Qué es una inserción?",
    b:"Adición de uno o más nucleótidos a una secuencia de ADN."
  },
  {
    cat:"transformation",
    f:"¿Qué puede provocar una inserción o deleción que no sea múltiplo de tres?",
    b:"Un cambio del marco de lectura (frameshift), alterando todos los codones posteriores al sitio de la mutación."
  },
  {
    cat:"transformation",
    f:"¿Qué es un frameshift?",
    b:"Cambio del marco de lectura de una secuencia codificante debido a una inserción o deleción que no es múltiplo de tres."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que una construcción esté en orientación correcta?",
    b:"Que el inserto está orientado de manera compatible con el promotor y la función que se desea obtener."
  },
  {
    cat:"transformation",
    f:"¿Por qué importa la orientación de un inserto?",
    b:"Porque una orientación incorrecta puede impedir la transcripción adecuada o alterar la organización de la construcción."
  },
  {
    cat:"transformation",
    f:"¿Qué es un sitio de restricción único?",
    b:"Secuencia de reconocimiento para una enzima de restricción que aparece una sola vez dentro de una molécula determinada."
  },
  {
    cat:"transformation",
    f:"¿Por qué es útil que un vector tenga sitios de restricción únicos?",
    b:"Permite cortar el vector en una posición específica para insertar el fragmento de interés."
  },
  {
    cat:"transformation",
    f:"¿Qué es una digestión de restricción?",
    b:"Tratamiento de ADN con una o más enzimas de restricción para generar fragmentos específicos."
  },
  {
    cat:"transformation",
    f:"¿Qué es un mapa de restricción?",
    b:"Representación de las posiciones de los sitios de reconocimiento de diferentes enzimas dentro de una molécula de ADN."
  },
  {
    cat:"transformation",
    f:"¿Qué es una digestión diagnóstica?",
    b:"Digestión utilizada para comprobar si una construcción tiene el tamaño o estructura esperada."
  },
  {
    cat:"transformation",
    f:"¿Qué es un gel de agarosa?",
    b:"Matriz utilizada para separar fragmentos de ADN principalmente según su tamaño mediante electroforesis."
  },
  {
    cat:"transformation",
    f:"¿Por qué el ADN migra hacia el polo positivo durante una electroforesis?",
    b:"Porque el ADN posee carga neta negativa debido a sus grupos fosfato."
  },
  {
    cat:"transformation",
    f:"¿Qué información entrega una banda de ADN en un gel?",
    b:"Indica la presencia de una población de fragmentos de tamaño aproximadamente similar."
  },
  {
    cat:"transformation",
    f:"¿Qué significa una banda inesperada en un gel de digestión?",
    b:"Puede indicar una construcción incorrecta, un sitio de restricción inesperado, una digestión incompleta u otro problema experimental."
  },
  {
    cat:"transformation",
    f:"¿Qué significa una digestión incompleta?",
    b:"Que una parte de las moléculas de ADN no fue cortada por la enzima de restricción."
  },
  {
    cat:"transformation",
    f:"¿Qué puede causar una digestión incompleta?",
    b:"Cantidad insuficiente de enzima, tiempo o temperatura inadecuados, inhibidores, exceso de ADN o buffer incorrecto."
  },
  {
    cat:"transformation",
    f:"¿Qué es un control de carga?",
    b:"Control utilizado para confirmar que cantidades comparables de muestra fueron cargadas o que una técnica de detección funcionó correctamente."
  },
  {
    cat:"transformation",
    f:"¿Qué es una PCR de colonia positiva?",
    b:"Colonia cuyo análisis por PCR muestra una banda compatible con el tamaño esperado del inserto."
  },
  {
    cat:"transformation",
    f:"¿Por qué una banda del tamaño correcto en colony PCR no garantiza una secuencia correcta?",
    b:"Porque el tamaño puede ser correcto aunque existan mutaciones, errores de orientación o cambios internos en la secuencia."
  },
  {
    cat:"transformation",
    f:"¿Cuál es la mejor forma de confirmar completamente la secuencia de un clon?",
    b:"Secuenciar la región de interés y las uniones relevantes, comparándolas con la secuencia esperada."
  },
  {
    cat:"transformation",
    f:"¿Qué es contaminación en un cultivo transformado?",
    b:"Presencia de microorganismos o células no deseadas que pueden interferir con el experimento y alterar los resultados."
  },
  {
    cat:"transformation",
    f:"¿Qué indicaría crecimiento en el control negativo?",
    b:"Puede indicar contaminación o que la selección no está funcionando correctamente."
  },
  {
    cat:"transformation",
    f:"¿Qué indicaría que el control positivo no crezca?",
    b:"Sugiere que existe un problema con el procedimiento, las células, el medio o las condiciones de selección."
  },
  {
    cat:"transformation",
    f:"¿Qué es un fenotipo transgénico?",
    b:"Característica observable resultante de la introducción o expresión de un transgén."
  },
  {
    cat:"transformation",
    f:"¿Qué es un genotipo transgénico?",
    b:"Conjunto de características genéticas de un organismo que incluyen el transgén introducido."
  },
  {
    cat:"transformation",
    f:"¿Qué es una línea transgénica?",
    b:"Población o linaje derivado de un evento de transformación que mantiene una construcción genética específica."
  },
  {
    cat:"transformation",
    f:"¿Qué es una planta transgénica?",
    b:"Planta cuyo genoma contiene material genético introducido mediante ingeniería genética."
  },
  {
    cat:"transformation",
    f:"¿Qué es una bacteria recombinante?",
    b:"Bacteria que contiene una molécula de ADN recombinante introducida o generada mediante ingeniería genética."
  },
  {
    cat:"transformation",
    f:"¿Qué es ADN recombinante?",
    b:"Molécula de ADN construida mediante la unión de secuencias provenientes de diferentes fuentes."
  },
  {
    cat:"transformation",
    f:"¿Qué es ingeniería genética?",
    b:"Conjunto de técnicas utilizadas para modificar, introducir, eliminar o reorganizar material genético con un objetivo determinado."
  },
  {
    cat:"transformation",
    f:"¿Qué es clonación de un gen?",
    b:"Obtención y propagación de múltiples copias de una secuencia genética dentro de un vector y una célula hospedadora."
  },
  {
    cat:"transformation",
    f:"¿Qué es expresión génica?",
    b:"Proceso mediante el cual la información de un gen se utiliza para producir un ARN y/o producto funcional."
  },
  {
    cat:"transformation",
    f:"¿Qué es regulación génica?",
    b:"Control de cuándo, dónde y cuánto se expresa un gen."
  },
  {
    cat:"transformation",
    f:"¿Qué es un transgén?",
    b:"Gen o secuencia genética introducida artificialmente en un organismo o célula."
  },
  {
    cat:"transformation",
    f:"¿Qué diferencia existe entre transgén y gen endógeno?",
    b:"El transgén es introducido artificialmente desde otra construcción o fuente, mientras que el gen endógeno forma parte naturalmente del genoma del organismo."
  },
  {
    cat:"transformation",
    f:"¿Qué es una planta de tipo silvestre?",
    b:"Organismo que mantiene el genotipo de referencia o natural utilizado como control experimental."
  },
  {
    cat:"transformation",
    f:"¿Por qué se utiliza un control de tipo silvestre?",
    b:"Para comparar el fenotipo o comportamiento del organismo transgénico con una condición no modificada."
  },
  {
    cat:"transformation",
    f:"¿Qué es un vector vacío?",
    b:"Vector que contiene los elementos del vector pero no el inserto experimental de interés."
  },
  {
    cat:"transformation",
    f:"¿Para qué sirve un control de vector vacío?",
    b:"Permite determinar si un efecto observado se debe al gen insertado o simplemente a la presencia del vector."
  },
  {
    cat:"transformation",
    f:"¿Qué es un evento independiente de transformación?",
    b:"Línea obtenida de una transformación independiente, que puede presentar una integración diferente del transgén."
  },
  {
    cat:"transformation",
    f:"¿Por qué conviene analizar varios eventos transgénicos?",
    b:"Porque distintos sitios y estructuras de integración pueden producir diferentes niveles de expresión y fenotipos."
  },
  {
    cat:"transformation",
    f:"¿Qué es una inserción multicopia?",
    b:"Integración de varias copias del transgén en el genoma."
  },
  {
    cat:"transformation",
    f:"¿Más copias de un transgén siempre significan mayor expresión?",
    b:"No. El número de copias no garantiza mayor expresión porque pueden ocurrir silenciamiento, efectos de posición o estructuras complejas del T-DNA."
  },
  {
    cat:"transformation",
    f:"¿Qué es efecto de posición?",
    b:"Cambio en la expresión de un transgén debido al sitio genómico donde se integra."
  },
  {
    cat:"transformation",
    f:"¿Qué es un locus?",
    b:"Posición específica que ocupa una secuencia genética dentro de un genoma."
  },
  {
    cat:"transformation",
    f:"¿Qué es un alelo?",
    b:"Versión alternativa de una secuencia genética ubicada en un locus determinado."
  },
  {
    cat:"transformation",
    f:"¿Qué es homocigosis?",
    b:"Condición en la que los dos alelos de un locus son iguales."
  },
  {
    cat:"transformation",
    f:"¿Qué es heterocigosis?",
    b:"Condición en la que los dos alelos de un locus son diferentes."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que un rasgo transgénico sea estable?",
    b:"Que se mantiene de manera consistente entre generaciones o condiciones experimentales."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que una construcción sea funcional?",
    b:"Que los elementos genéticos presentes producen el efecto esperado bajo las condiciones utilizadas."
  },
  {
    cat:"transformation",
    f:"¿Qué es una estrategia de transformación?",
    b:"Conjunto de pasos y herramientas elegidos para introducir y mantener material genético en una célula u organismo."
  },
  {
    cat:"transformation",
    f:"¿Cómo elegirías entre transformación química y electroporación en bacterias?",
    b:"Consideraría la especie, eficiencia requerida, disponibilidad del protocolo y tolerancia de las células al método."
  },
  {
    cat:"transformation",
    f:"¿Cómo elegirías entre Agrobacterium y biobalística en plantas?",
    b:"Consideraría la especie, susceptibilidad a Agrobacterium, tipo de tejido, eficiencia requerida y capacidad de regeneración."
  },
  {
    cat:"transformation",
    f:"¿Qué criterio es fundamental al elegir un marcador de selección?",
    b:"Debe existir una diferencia clara de supervivencia entre células transformadas y no transformadas bajo la condición seleccionada."
  },
  {
    cat:"transformation",
    f:"¿Qué criterio es fundamental al elegir un promotor?",
    b:"Debe ser compatible con el organismo, tejido, momento y nivel de expresión que se desea obtener."
  },
  {
    cat:"transformation",
    f:"¿Qué criterio es fundamental al elegir un vector?",
    b:"Debe ser compatible con la célula hospedadora y contener los elementos necesarios para replicación, selección y/o expresión."
  },
  {
    cat:"transformation",
    f:"¿Qué es compatibilidad de hospedador?",
    b:"Capacidad de una construcción o vector para funcionar correctamente en una determinada célula u organismo."
  },
  {
    cat:"transformation",
    f:"¿Qué es rango de hospedadores?",
    b:"Conjunto de especies o tipos celulares en los que un vector puede mantenerse o funcionar."
  },
  {
    cat:"transformation",
    f:"¿Qué es estabilidad plasmídica?",
    b:"Capacidad de un plásmido de mantenerse dentro de una población celular a lo largo de las divisiones."
  },
  {
    cat:"transformation",
    f:"¿Qué puede favorecer la pérdida de un plásmido?",
    b:"Ausencia de presión selectiva, baja estabilidad de replicación o carga metabólica elevada."
  },
  {
    cat:"transformation",
    f:"¿Qué es carga metabólica de un plásmido?",
    b:"Costo fisiológico que supone para la célula mantener y expresar genes adicionales."
  },
  {
    cat:"transformation",
    f:"¿Por qué un gen heterólogo puede ser tóxico?",
    b:"Su producto puede interferir con procesos celulares, consumir recursos o alterar rutas metabólicas."
  },
  {
    cat:"transformation",
    f:"¿Cómo puede controlarse una proteína tóxica?",
    b:"Usando un promotor inducible, reduciendo el nivel de expresión o separando el crecimiento celular de la etapa de producción."
  },
  {
    cat:"transformation",
    f:"¿Qué es una inducción?",
    b:"Adición de una señal o compuesto que activa un sistema de expresión inducible."
  },
  {
    cat:"transformation",
    f:"¿Qué es el tiempo de inducción?",
    b:"Periodo durante el cual un sistema de expresión permanece activado para producir el producto deseado."
  },
  {
    cat:"transformation",
    f:"¿Qué puede pasar si se induce una proteína demasiado tiempo?",
    b:"Puede aumentar la toxicidad, agregación o estrés celular y no necesariamente aumentar proporcionalmente el producto soluble."
  },
  {
    cat:"transformation",
    f:"¿Qué es optimización de expresión?",
    b:"Ajuste de variables como promotor, temperatura, inducción, medio, cepa y concentración de inductor para maximizar la producción funcional."
  },
  {
    cat:"transformation",
    f:"¿Qué es una proteína soluble?",
    b:"Proteína que permanece dispersa en la fase soluble celular bajo las condiciones de extracción utilizadas."
  },
  {
    cat:"transformation",
    f:"¿Qué es una proteína insoluble?",
    b:"Proteína que se encuentra principalmente en agregados o fracciones insolubles."
  },
  {
    cat:"transformation",
    f:"¿Qué es un buffer?",
    b:"Solución que ayuda a mantener condiciones químicas, como el pH, relativamente constantes."
  },
  {
    cat:"transformation",
    f:"¿Por qué el pH puede afectar una proteína?",
    b:"Porque modifica la ionización de grupos químicos y puede alterar la estructura, estabilidad y actividad de la proteína."
  },
  {
    cat:"transformation",
    f:"¿Qué es una enzima?",
    b:"Proteína o molécula catalítica que acelera una reacción química sin consumirse de manera permanente."
  },
  {
    cat:"transformation",
    f:"¿Qué es el sitio activo?",
    b:"Región de una enzima donde se une el sustrato y ocurre la catálisis."
  },
  {
    cat:"transformation",
    f:"¿Qué significa especificidad enzimática?",
    b:"Capacidad de una enzima para reconocer determinados sustratos o catalizar reacciones específicas."
  },
  {
    cat:"transformation",
    f:"¿Qué es actividad catalítica?",
    b:"Capacidad de una enzima para acelerar una reacción química."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que dos enzimas tengan distinta actividad?",
    b:"Que pueden convertir el sustrato a diferentes velocidades bajo condiciones equivalentes."
  },
  {
    cat:"transformation",
    f:"¿Qué es un cofactor?",
    b:"Componente no proteico necesario para que algunas enzimas puedan realizar su función."
  },
  {
    cat:"transformation",
    f:"¿Qué es un coenzima?",
    b:"Cofactor orgánico que participa en una reacción enzimática."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que un cofactor sea limitante?",
    b:"Que su disponibilidad puede restringir la actividad de una enzima o ruta metabólica."
  },
  {
    cat:"transformation",
    f:"¿Qué es un precursor metabólico?",
    b:"Molécula que sirve como punto de partida para producir otro metabolito en una ruta biosintética."
  },
  {
    cat:"transformation",
    f:"¿Qué es un metabolito?",
    b:"Molécula que participa o se produce durante el metabolismo celular."
  },
  {
    cat:"transformation",
    f:"¿Qué significa acumulación de un metabolito?",
    b:"Aumento de su concentración dentro de una célula o tejido."
  },
  {
    cat:"transformation",
    f:"¿Qué es una ruta metabólica heteróloga?",
    b:"Ruta introducida artificialmente en un organismo mediante genes provenientes de otra fuente."
  },
  {
    cat:"transformation",
    f:"¿Qué es ingeniería metabólica?",
    b:"Modificación dirigida de rutas metabólicas mediante cambios genéticos para aumentar, disminuir o redirigir la producción de determinados compuestos."
  },
  {
    cat:"transformation",
    f:"¿Qué es biotecnología?",
    b:"Aplicación de organismos, células, moléculas o procesos biológicos para obtener productos o servicios útiles."
  },
  {
    cat:"transformation",
    f:"¿Qué es una aplicación biotecnológica de la transformación genética?",
    b:"Producción de proteínas recombinantes, metabolitos, enzimas, vacunas, organismos modificados y múltiples productos de interés industrial o biomédico."
  },
  {
    cat:"transformation",
    f:"¿Qué es una planta biofortificada mediante ingeniería genética?",
    b:"Planta modificada para producir o acumular mayores cantidades de un nutriente o compuesto beneficioso."
  },
  {
    cat:"transformation",
    f:"¿Qué es un organismo genéticamente modificado?",
    b:"Organismo cuyo material genético ha sido alterado mediante técnicas de ingeniería genética."
  },
  {
    cat:"transformation",
    f:"¿Qué diferencia existe entre organismo transgénico y organismo editado genéticamente?",
    b:"Un transgénico incorpora material genético introducido, mientras que la edición genética puede modificar secuencias existentes sin necesariamente incorporar ADN externo."
  },
  {
    cat:"transformation",
    f:"¿Qué es CRISPR-Cas?",
    b:"Sistema de edición genética que utiliza una nucleasa guiada por ARN para reconocer y modificar una secuencia de ADN específica."
  },
  {
    cat:"transformation",
    f:"¿Qué es una guía de ARN en CRISPR?",
    b:"ARN diseñado para dirigir la nucleasa hacia una secuencia específica mediante complementariedad de bases."
  },
  {
    cat:"transformation",
    f:"¿Qué es Cas9?",
    b:"Nucleasa asociada a CRISPR que puede cortar ADN en una posición determinada por el ARN guía."
  },
  {
    cat:"transformation",
    f:"¿Qué es edición dirigida?",
    b:"Modificación genética realizada de manera intencional en una región específica del genoma."
  },
  {
    cat:"transformation",
    f:"¿Qué es una reparación por NHEJ?",
    b:"Mecanismo de reparación de roturas de doble hebra que puede introducir pequeñas inserciones o deleciones."
  },
  {
    cat:"transformation",
    f:"¿Qué es HDR?",
    b:"Reparación dirigida por homología que utiliza una plantilla homóloga para introducir cambios específicos en una secuencia."
  },
  {
    cat:"transformation",
    f:"¿Qué diferencia existe entre transformación genética y edición genética?",
    b:"La transformación introduce material genético en una célula; la edición modifica de forma dirigida una secuencia genética existente."
  },
  {
    cat:"transformation",
    f:"¿Qué es un sistema de entrega genética?",
    b:"Método o vehículo utilizado para introducir ADN, ARN o herramientas de edición en una célula."
  },
  {
    cat:"transformation",
    f:"¿Qué factores determinan el éxito de una transformación?",
    b:"Compatibilidad del método con la célula, calidad del ADN, eficiencia de entrada, viabilidad celular, selección y capacidad de mantener o expresar el material introducido."
  },
  {
    cat:"transformation",
    f:"¿Qué es viabilidad celular?",
    b:"Capacidad de las células para mantenerse vivas y funcionales después de un tratamiento."
  },
  {
    cat:"transformation",
    f:"¿Por qué un método de transformación puede tener alta entrada de ADN pero baja eficiencia final?",
    b:"Porque la entrada de ADN no garantiza supervivencia, integración, mantenimiento ni expresión funcional."
  },
  {
    cat:"transformation",
    f:"¿Qué etapas deben considerarse para obtener una línea transgénica estable?",
    b:"Entrada del ADN → selección de transformantes → integración o mantenimiento estable → regeneración/propagación → verificación molecular → análisis del fenotipo."
  },
  {
    cat:"transformation",
    f:"¿Qué es verificación molecular?",
    b:"Conjunto de técnicas utilizadas para confirmar que la modificación genética esperada está presente y es correcta."
  },
  {
    cat:"transformation",
    f:"¿Qué técnicas pueden utilizarse para verificar una transformación?",
    b:"PCR, colony PCR, digestión de restricción, secuenciación, Southern blot, Western blot o análisis de expresión, dependiendo de la pregunta experimental."
  },
  {
    cat:"transformation",
    f:"¿Qué información entrega una PCR?",
    b:"Permite detectar o amplificar una secuencia específica si los primers y condiciones son adecuados."
  },
  {
    cat:"transformation",
    f:"¿Qué información entrega la secuenciación?",
    b:"Permite determinar la secuencia de nucleótidos y detectar cambios o mutaciones con gran precisión."
  },
  {
    cat:"transformation",
    f:"¿Qué información entrega un Western blot?",
    b:"Presencia y tamaño aparente de una proteína específica."
  },
  {
    cat:"transformation",
    f:"¿Qué información entrega un análisis de expresión?",
    b:"Permite determinar si un gen se expresa y, dependiendo de la técnica, cuánto ARN o proteína produce."
  },
  {
    cat:"transformation",
    f:"¿Qué es RT-qPCR?",
    b:"Técnica que combina retrotranscripción y PCR cuantitativa para medir niveles relativos de ARN mediante cDNA."
  },
  {
    cat:"transformation",
    f:"¿Qué es qPCR?",
    b:"PCR cuantitativa que permite seguir la amplificación en tiempo real y estimar la cantidad relativa o absoluta de una secuencia."
  },
  {
    cat:"transformation",
    f:"¿Qué es un housekeeping gene?",
    b:"Gen utilizado como referencia interna porque se espera que su expresión sea relativamente estable bajo las condiciones analizadas."
  },
  {
    cat:"transformation",
    f:"¿Por qué se necesita un gen de referencia en RT-qPCR?",
    b:"Para normalizar las diferencias de cantidad y calidad de ARN entre muestras."
  },
  {
    cat:"transformation",
    f:"¿Qué es normalización?",
    b:"Proceso de ajustar los datos respecto de una referencia para permitir comparaciones válidas entre muestras."
  },
  {
    cat:"transformation",
    f:"¿Qué es expresión diferencial?",
    b:"Diferencia en el nivel de expresión de un gen entre dos o más condiciones."
  },
  {
    cat:"transformation",
    f:"¿Qué es un fenotipo?",
    b:"Conjunto de características observables de un organismo, resultado de la interacción entre su genotipo y el ambiente."
  },
  {
    cat:"transformation",
    f:"¿Qué es un genotipo?",
    b:"Conjunto de variantes genéticas presentes en un organismo."
  },
  {
    cat:"transformation",
    f:"¿Qué relación existe entre genotipo y fenotipo?",
    b:"El genotipo contribuye al fenotipo, pero el resultado también depende de regulación génica y condiciones ambientales."
  },
  {
    cat:"transformation",
    f:"¿Qué es una hipótesis experimental?",
    b:"Explicación o predicción comprobable que se pone a prueba mediante un experimento."
  },
  {
    cat:"transformation",
    f:"¿Qué es una variable independiente?",
    b:"Variable que el investigador modifica o compara deliberadamente."
  },
  {
    cat:"transformation",
    f:"¿Qué es una variable dependiente?",
    b:"Variable que se mide para determinar el efecto de la variable independiente."
  },
  {
    cat:"transformation",
    f:"¿Qué es un control experimental?",
    b:"Condición utilizada como referencia para interpretar el efecto de una modificación o tratamiento."
  },
  {
    cat:"transformation",
    f:"¿Por qué se utilizan réplicas biológicas?",
    b:"Para evaluar la variabilidad entre organismos o cultivos independientes y obtener resultados más robustos."
  },
  {
    cat:"transformation",
    f:"¿Qué es reproducibilidad?",
    b:"Capacidad de obtener resultados consistentes cuando un experimento se repite bajo condiciones equivalentes."
  },
  {
    cat:"transformation",
    f:"¿Qué es una conclusión experimental válida?",
    b:"Interpretación respaldada por los datos obtenidos y los controles utilizados, evitando afirmar más de lo que el experimento permite."
  },
  {
    cat:"transformation",
    f:"Tu transformación bacteriana produjo muy pocas colonias. ¿Qué revisarías?",
    b:"Competencia celular, calidad y cantidad de ADN, método de transformación, recuperación, antibiótico, concentración del marcador y condiciones de cultivo."
  },
  {
    cat:"transformation",
    f:"Tu control negativo tiene muchas colonias. ¿Qué sospecharías?",
    b:"Problema con la selección, contaminación o resistencia previa de las células al agente selectivo."
  },
  {
    cat:"transformation",
    f:"Tu colony PCR muestra una banda del tamaño esperado. ¿Qué harías después?",
    b:"Confirmaría la identidad del clon mediante secuenciación u otra estrategia de verificación antes de utilizarlo en experimentos posteriores."
  },
  {
    cat:"transformation",
    f:"Tu proteína recombinante se expresa pero aparece principalmente insoluble. ¿Qué harías?",
    b:"Probaría menor temperatura, menor inducción, diferentes tiempos, concentración de inductor o una cepa de expresión diferente."
  },
  {
    cat:"transformation",
    f:"Tu construcción tiene el inserto correcto pero no se expresa. ¿Qué revisarías?",
    b:"Promotor, orientación, marco de lectura, secuencia del inserto, terminador, compatibilidad con el hospedador y condiciones de inducción."
  },
  {
    cat:"transformation",
    f:"Tu planta transgénica contiene el transgén pero no muestra el fenotipo esperado. ¿Qué podría explicar esto?",
    b:"El transgén podría no expresarse, estar silenciado, haberse integrado en una región poco activa, producir una proteína no funcional o requerir condiciones ambientales específicas."
  },
  {
    cat:"transformation",
    f:"Dos eventos transgénicos tienen el mismo transgén pero diferente expresión. ¿Cómo lo explicarías?",
    b:"Pueden tener diferentes sitios de integración, número de copias, estructuras del T-DNA o estados de cromatina."
  },
  {
    cat:"transformation",
    f:"¿Por qué analizar varios eventos independientes de transformación vegetal?",
    b:"Para seleccionar líneas con integración, estabilidad y expresión favorables y reducir la influencia de efectos de posición."
  },
  {
    cat:"transformation",
    f:"¿Qué diferencia clave existe entre una transformación y una infección?",
    b:"La transformación introduce material genético; una infección implica la entrada y replicación o acción de un agente infeccioso, aunque algunos sistemas virales pueden utilizarse como vehículos de transferencia genética."
  },
  {
    cat:"transformation",
    f:"¿Qué tienen en común EMT, electroporación bacteriana y electroporación vegetal?",
    b:"Las tres utilizan un campo eléctrico para generar poros transitorios en la membrana y permitir la entrada de ADN."
  },
  {
    cat:"transformation",
    f:"¿Qué diferencia clave existe entre transformación bacteriana y transformación de plantas mediada por Agrobacterium?",
    b:"En bacterias se introduce ADN foráneo directamente mediante métodos químicos o físicos. En plantas, Agrobacterium transfiere biológicamente el ADN-T desde su sistema Ti hacia la célula vegetal.",
    draw:"agrobacterium"
  },
  {
    cat:"transformation",
    f:"¿Cómo compararías transformación, conjugación y transducción en un examen?",
    b:"Transformación = ADN libre del ambiente. Conjugación = transferencia directa entre bacterias mediante contacto. Transducción = transferencia mediada por bacteriófagos."
  },
  {
    cat:"transformation",
    f:"Tu PCR no generó ninguna banda visible. Nombra posibles causas.",
    b:"Pocos ciclos, extensión insuficiente, temperatura de annealing inadecuada, desnaturalización incorrecta, molde degradado, producto rico en GC, primers mal diseñados o falta de algún componente."
  },
  {
    cat:"transformation",
    f:"En tu gel aparecen bandas inespecíficas o dímeros de primers. ¿Qué ajustarías?",
    b:"Aumentaría la temperatura de annealing, reduciría la concentración de primers y Mg²⁺, disminuiría el número de ciclos y revisaría el diseño de los primers."
  },
  {
    cat:"transformation",
    f:"Diseñaste un primer forward agregando un sitio EcoRI antes de la secuencia del gen. ¿Por qué funciona?",
    b:"El extremo adicional no necesita hibridar en el primer ciclo; queda incorporado al producto de PCR y en los ciclos siguientes forma parte del molde, quedando presente en las copias posteriores."
  },
  {
    cat:"transformation",
    f:"Caso de examen: diferencia transformación, conjugación y transducción bacteriana.",
    b:"Transformación: incorporación de ADN libre. Conjugación: transferencia de ADN, generalmente plasmídico, entre bacterias mediante contacto. Transducción: transferencia de ADN bacteriano mediada por un bacteriófago."
  },
  {
    cat:"transformation",
    f:"¿Qué método elegirías para obtener una transformación estable de una planta y por qué?",
    b:"Agrobacterium o biobalística, dependiendo de la especie y tejido. Ambos pueden generar integración estable y deben seguirse de selección, regeneración y verificación molecular."
  },
  {
    cat:"transformation",
    f:"¿Qué método elegirías para transformar bacterias competentes con un plásmido?",
    b:"Transformación química o electroporación. La elección depende de la cepa y de la eficiencia requerida.",
    draw:"transformation"
  },
  {
    cat:"transformation",
    f:"¿Qué método elegirías para transferir un plásmido desde una bacteria donadora a una receptora?",
    b:"Conjugación, siempre que el sistema de transferencia sea compatible.",
    draw:"conjugation"
  },
  {
    cat:"transformation",
    f:"¿Qué método utilizarías si quieres transferir ADN bacteriano mediante un fago?",
    b:"Transducción.",
    draw:"transduction"
  },
  {
    cat:"transformation",
    f:"¿Qué método utilizarías para introducir ADN en un protoplasto?",
    b:"Electroporación o PEG, dependiendo del sistema y del objetivo experimental.",
    draw:"protoplast"
  },
  {
    cat:"transformation",
    f:"¿Qué método permite aprovechar el mecanismo natural de Agrobacterium?",
    b:"Transformación mediada por Agrobacterium.",
    draw:"agrobacterium"
  },
  {
    cat:"transformation",
    f:"¿Qué método físico puede ser especialmente útil en monocotiledóneas difíciles de transformar?",
    b:"Biobalística, debido a que permite introducir directamente partículas recubiertas con ADN en los tejidos."
  },
  {
    cat:"transformation",
    f:"¿Qué es el sistema binario de Agrobacterium y por qué es importante?",
    b:"Separa las funciones vir necesarias para la transferencia del ADN-T de la construcción que contiene el gen de interés, facilitando el diseño del vector.",
    draw:"binario"
  },
  {
    cat:"transformation",
    f:"¿Qué es floral dip y cuál es su principal ventaja?",
    b:"Método de transformación de Arabidopsis mediante inmersión de estructuras florales en Agrobacterium; evita algunos pasos de cultivo y regeneración de tejidos."
  },
  {
    cat:"transformation",
    f:"¿Qué es la selección mediante antibióticos?",
    b:"Uso de un antibiótico para eliminar células que no poseen un gen de resistencia presente en la construcción."
  },
  {
    cat:"transformation",
    f:"¿Por qué se debe comprobar que el marcador de selección funciona en la célula utilizada?",
    b:"Porque la resistencia y sensibilidad pueden variar entre especies o cepas, y una selección inadecuada puede producir falsos positivos o eliminar transformantes."
  },
  {
    cat:"transformation",
    f:"¿Qué es una concentración mínima inhibitoria?",
    b:"Concentración más baja de un agente antimicrobiano que impide el crecimiento visible de un microorganismo bajo condiciones definidas."
  },
  {
    cat:"transformation",
    f:"¿Qué es presión selectiva?",
    b:"Condición que favorece la supervivencia o reproducción de células con una característica determinada."
  },
  {
    cat:"transformation",
    f:"¿Por qué puede ser necesario aumentar gradualmente la presión selectiva?",
    b:"Para permitir la recuperación de células transformadas y evitar una pérdida excesiva de viabilidad inmediatamente después del procedimiento."
  },
  {
    cat:"transformation",
    f:"¿Qué es regeneración vegetal in vitro?",
    b:"Proceso mediante el cual células o tejidos vegetales cultivados en condiciones controladas producen brotes, raíces y finalmente una planta completa."
  },
  {
    cat:"transformation",
    f:"¿Qué son células embriogénicas?",
    b:"Células vegetales con capacidad de formar estructuras embrionarias y regenerar una planta completa bajo condiciones adecuadas."
  },
  {
    cat:"transformation",
    f:"¿Por qué la capacidad de regeneración es importante en transformación vegetal?",
    b:"Porque introducir el ADN en una célula no basta: esa célula debe poder regenerarse para obtener un organismo transgénico completo."
  },
  {
    cat:"transformation",
    f:"¿Qué significa totipotencia vegetal?",
    b:"Capacidad de una célula vegetal, bajo condiciones apropiadas, de regenerar un organismo completo."
  },
  {
    cat:"transformation",
    f:"¿Qué es cultivo de tejidos vegetales?",
    b:"Cultivo de células, tejidos u órganos vegetales en condiciones estériles y controladas para estudiar o regenerar material vegetal."
  },
  {
    cat:"transformation",
    f:"¿Qué es un explante?",
    b:"Fragmento de tejido vegetal utilizado como material inicial para cultivo in vitro."
  },
  {
    cat:"transformation",
    f:"¿Qué es callo vegetal?",
    b:"Masa de células vegetales proliferativas y poco diferenciadas que puede utilizarse para transformación y regeneración."
  },
  {
    cat:"transformation",
    f:"¿Qué es transformación de callo?",
    b:"Introducción de ADN en células del callo seguida de selección y regeneración para obtener plantas transformadas."
  },
  {
    cat:"transformation",
    f:"¿Qué es un cultivo de suspensión celular?",
    b:"Población de células cultivadas en medio líquido y mantenidas en agitación."
  },
  {
    cat:"transformation",
    f:"¿Qué es un cultivo axénico?",
    b:"Cultivo que contiene únicamente el organismo o tipo celular de interés, libre de contaminantes."
  },
  {
    cat:"transformation",
    f:"¿Qué es esterilidad en cultivo celular?",
    b:"Ausencia de microorganismos contaminantes que puedan alterar el cultivo o experimento."
  },
  {
    cat:"transformation",
    f:"¿Qué es un antibiótico de selección?",
    b:"Compuesto utilizado para impedir el crecimiento de células que no poseen el mecanismo de resistencia correspondiente."
  },
  {
    cat:"transformation",
    f:"¿Qué es un marcador metabólico de selección?",
    b:"Gen que permite a las células transformadas utilizar un nutriente o crecer bajo una condición en la que las células no transformadas no pueden hacerlo."
  },
  {
    cat:"transformation",
    f:"¿Qué es PMI como marcador de selección?",
    b:"Gen de fosfomanosa isomerasa que puede utilizarse para seleccionar células capaces de metabolizar manosa bajo condiciones determinadas."
  },
  {
    cat:"transformation",
    f:"¿Qué ventaja puede tener un marcador metabólico frente a resistencia a antibióticos?",
    b:"Puede evitar el uso de antibióticos y utilizar una diferencia metabólica para seleccionar células transformadas."
  },
  {
    cat:"transformation",
    f:"¿Qué es un marcador dominante?",
    b:"Marcador cuya presencia es suficiente para conferir el fenotipo seleccionable independientemente del estado del otro alelo."
  },
  {
    cat:"transformation",
    f:"¿Qué es una construcción binaria?",
    b:"En el contexto de Agrobacterium, construcción en la que el ADN-T con el gen de interés está separado de los genes vir necesarios para su transferencia."
  },
  {
    cat:"transformation",
    f:"¿Qué función tienen los genes vir de Agrobacterium?",
    b:"Participan en el procesamiento, transferencia y entrega del ADN-T hacia la célula vegetal."
  },
  {
    cat:"transformation",
    f:"¿Qué ocurre naturalmente cuando Agrobacterium infecta una planta?",
    b:"El ADN-T del plásmido Ti puede transferirse e integrarse en el genoma vegetal, provocando en condiciones naturales la enfermedad de la corona."
  },
  {
    cat:"transformation",
    f:"¿Qué es crown gall?",
    b:"Enfermedad vegetal causada por Agrobacterium tumefaciens debido a la transferencia de ADN-T que altera el crecimiento celular."
  },
  {
    cat:"transformation",
    f:"¿Por qué Agrobacterium es útil en biotecnología?",
    b:"Su mecanismo natural de transferencia de ADN puede aprovecharse para introducir genes de interés en plantas y otros sistemas."
  },
  {
    cat:"transformation",
    f:"¿Qué es una transformación mediada por virus?",
    b:"Introducción de material genético mediante un vector viral diseñado o adaptado para infectar células diana."
  },
  {
    cat:"transformation",
    f:"¿Qué es una partícula viral recombinante?",
    b:"Partícula viral modificada para transportar una construcción genética específica."
  },
  {
    cat:"transformation",
    f:"¿Qué es tropismo viral?",
    b:"Preferencia de un virus por infectar determinados tipos celulares o tejidos."
  },
  {
    cat:"transformation",
    f:"¿Qué es transferencia génica dirigida?",
    b:"Introducción de material genético diseñada para alcanzar un tipo celular, tejido o sitio específico."
  },
  {
    cat:"transformation",
    f:"¿Qué es expresión específica de tejido?",
    b:"Expresión de un gen restringida a determinados tejidos mediante elementos reguladores apropiados."
  },
  {
    cat:"transformation",
    f:"¿Qué es un promotor específico de tejido?",
    b:"Promotor cuya actividad es preferentemente alta en un tejido o tipo celular determinado."
  },
  {
    cat:"transformation",
    f:"¿Qué es un promotor inducible por químicos?",
    b:"Promotor cuya actividad puede activarse mediante la aplicación de un compuesto específico."
  },
  {
    cat:"transformation",
    f:"¿Qué es un promotor inducible por temperatura?",
    b:"Promotor cuya actividad cambia en respuesta a una determinada temperatura."
  },
  {
    cat:"transformation",
    f:"¿Qué es regulación post-transcripcional?",
    b:"Control de la expresión después de que el ARN ha sido transcrito, por ejemplo mediante estabilidad del ARN, splicing o traducción."
  },
  {
    cat:"transformation",
    f:"¿Qué es regulación post-traduccional?",
    b:"Control de la actividad o estabilidad de una proteína después de su síntesis."
  },
  {
    cat:"transformation",
    f:"¿Qué es degradación proteica?",
    b:"Proceso mediante el cual las proteínas son descompuestas por sistemas celulares especializados."
  },
  {
    cat:"transformation",
    f:"¿Por qué la estabilidad de una proteína afecta su acumulación?",
    b:"Una proteína más estable puede permanecer más tiempo en la célula y acumularse a niveles mayores."
  },
  {
    cat:"transformation",
    f:"¿Qué es una proteína degradable?",
    b:"Proteína cuya estabilidad puede reducirse mediante señales o secuencias que favorecen su reconocimiento y degradación."
  },
  {
    cat:"transformation",
    f:"¿Qué es una secuencia de degradación?",
    b:"Secuencia que puede dirigir una proteína hacia mecanismos celulares de degradación."
  },
  {
    cat:"transformation",
    f:"¿Qué es localización subcelular?",
    b:"Distribución de una molécula o proteína dentro de diferentes compartimentos de una célula."
  },
  {
    cat:"transformation",
    f:"¿Por qué la localización subcelular puede afectar una ruta metabólica?",
    b:"Porque enzimas y sustratos deben encontrarse en un entorno compatible para que la ruta funcione eficientemente."
  },
  {
    cat:"transformation",
    f:"¿Qué es una señal de tránsito plastidial?",
    b:"Secuencia peptídica que dirige una proteína hacia un plastidio."
  },
  {
    cat:"transformation",
    f:"¿Por qué Golden Rice necesita dirigir enzimas de la ruta hacia plastidios?",
    b:"Porque la biosíntesis de carotenoides ocurre en plastidios y las enzimas deben localizarse allí para acceder a los sustratos y realizar las reacciones."
  },
  {
    cat:"transformation",
    f:"¿Qué es SSU?",
    b:"Pequeña subunidad de Rubisco; su péptido de tránsito plastidial puede utilizarse para dirigir proteínas hacia los plastidios."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que una proteína tenga un péptido de tránsito?",
    b:"Que posee una secuencia que puede dirigirla hacia un compartimento celular específico."
  },
  {
    cat:"transformation",
    f:"¿Qué es una fusión funcional?",
    b:"Construcción en la que dos secuencias se unen de manera que el producto resultante conserva las funciones necesarias de ambas partes."
  },
  {
    cat:"transformation",
    f:"¿Qué es un transgén quimérico?",
    b:"Secuencia construida a partir de elementos genéticos provenientes de diferentes fuentes."
  },
  {
    cat:"transformation",
    f:"¿Qué es un cassette génico?",
    b:"Unidad de ADN que contiene una secuencia funcional junto con los elementos reguladores necesarios para su expresión o selección."
  },
  {
    cat:"transformation",
    f:"¿Qué es un T-DNA?",
    b:"Región del plásmido Ti de Agrobacterium que puede ser transferida a una célula vegetal e integrarse en su genoma."
  },
  {
    cat:"transformation",
    f:"¿Qué es un vector binario de planta?",
    b:"Vector que contiene la región ADN-T con el gen de interés y que puede ser utilizado junto a un sistema auxiliar que proporciona las funciones vir."
  },
  {
    cat:"transformation",
    f:"¿Qué es un vector lanzadera?",
    b:"Vector diseñado para replicarse o funcionar en más de un organismo hospedador."
  },
  {
    cat:"transformation",
    f:"¿Qué es un origen de replicación?",
    b:"Secuencia que permite iniciar la replicación de una molécula de ADN en un hospedador compatible."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que un vector tenga un ori compatible?",
    b:"Que su origen de replicación puede ser reconocido y utilizado por la maquinaria de replicación del hospedador."
  },
  {
    cat:"transformation",
    f:"¿Qué es el número de copias de un plásmido?",
    b:"Cantidad aproximada de moléculas de ese plásmido presentes por célula."
  },
  {
    cat:"transformation",
    f:"¿Cómo puede afectar el número de copias a la expresión?",
    b:"Puede aumentar la cantidad de plantilla disponible, aunque una alta carga plasmídica también puede generar estrés celular."
  },
  {
    cat:"transformation",
    f:"¿Qué es una cepa recA- y por qué puede ser útil en clonación?",
    b:"Cepa con menor capacidad de recombinación homóloga, utilizada para ayudar a mantener estables determinadas construcciones de ADN."
  },
  {
    cat:"transformation",
    f:"¿Qué es una endonucleasa?",
    b:"Enzima que corta enlaces dentro de una molécula de ácido nucleico."
  },
  {
    cat:"transformation",
    f:"¿Qué es una exonucleasa?",
    b:"Enzima que elimina nucleótidos desde los extremos de una molécula de ácido nucleico."
  },
  {
    cat:"transformation",
    f:"¿Qué es una ligación?",
    b:"Reacción en la que fragmentos de ADN se unen mediante formación de enlaces fosfodiéster."
  },
  {
    cat:"transformation",
    f:"¿Qué es una reacción de ensamblaje?",
    b:"Proceso que combina varios fragmentos de ADN para formar una construcción genética completa."
  },
  {
    cat:"transformation",
    f:"¿Qué es un solapamiento?",
    b:"Región de secuencia compartida entre dos fragmentos de ADN que permite su reconocimiento y ensamblaje."
  },
  {
    cat:"transformation",
    f:"¿Qué es una mutación de sitio dirigido?",
    b:"Cambio intencional introducido en una posición específica de una secuencia."
  },
  {
    cat:"transformation",
    f:"¿Qué es una biblioteca de mutantes?",
    b:"Colección de variantes genéticas que contienen diferentes mutaciones de una secuencia."
  },
  {
    cat:"transformation",
    f:"¿Qué es evolución dirigida?",
    b:"Estrategia que combina generación de diversidad genética y selección para obtener proteínas con propiedades mejoradas."
  },
  {
    cat:"transformation",
    f:"¿Qué es selección funcional?",
    b:"Proceso de identificar variantes genéticas según una función o fenotipo deseado."
  },
  {
    cat:"transformation",
    f:"¿Qué es cribado (screening)?",
    b:"Proceso de analizar una colección de clones o variantes para identificar aquellos con una característica determinada."
  },
  {
    cat:"transformation",
    f:"¿Qué diferencia hay entre selección y screening?",
    b:"La selección elimina o favorece directamente células según una condición; el screening requiere analizar individuos o clones para identificar el fenotipo deseado."
  },
  {
    cat:"transformation",
    f:"¿Qué es un clon positivo?",
    b:"Clon que cumple con el criterio molecular o funcional que se está buscando."
  },
  {
    cat:"transformation",
    f:"¿Qué es un falso positivo?",
    b:"Resultado que parece cumplir el criterio experimental pero no corresponde al resultado verdadero esperado."
  },
  {
    cat:"transformation",
    f:"¿Qué es un falso negativo?",
    b:"Resultado que parece negativo aunque la característica buscada sí esté presente."
  },
  {
    cat:"transformation",
    f:"¿Qué es validación?",
    b:"Proceso de confirmar mediante evidencia independiente que un resultado o construcción cumple los criterios establecidos."
  },
  {
    cat:"transformation",
    f:"¿Por qué se utilizan varias técnicas de validación?",
    b:"Porque cada técnica responde una pregunta diferente y combinarlas permite aumentar la confianza en la conclusión."
  },
  {
    cat:"transformation",
    f:"¿Qué demuestra PCR + secuenciación?",
    b:"PCR demuestra la presencia de una región específica y la secuenciación permite confirmar su identidad y secuencia."
  },
  {
    cat:"transformation",
    f:"¿Qué demuestra Western blot + actividad funcional?",
    b:"Western blot demuestra presencia y tamaño de la proteína, mientras que el ensayo funcional demuestra si esa proteína realiza la función esperada."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que un resultado sea reproducible?",
    b:"Que puede obtenerse nuevamente de forma consistente al repetir el experimento bajo condiciones equivalentes."
  },
  {
    cat:"transformation",
    f:"¿Qué es una conclusión causal?",
    b:"Conclusión que atribuye un efecto a una causa específica respaldada por controles y diseño experimental adecuado."
  },
  {
    cat:"transformation",
    f:"¿Qué es una correlación?",
    b:"Relación estadística entre dos variables que no necesariamente demuestra causalidad."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que dos variables estén correlacionadas?",
    b:"Que sus valores tienden a cambiar conjuntamente, sin que esto por sí solo demuestre que una cause a la otra."
  },
  {
    cat:"transformation",
    f:"¿Qué es una variable de confusión?",
    b:"Factor que cambia junto con la variable estudiada y puede afectar la interpretación del resultado."
  },
  {
    cat:"transformation",
    f:"¿Qué es diseño experimental?",
    b:"Planificación de condiciones, controles, réplicas y mediciones necesarias para responder una pregunta experimental."
  },
  {
    cat:"transformation",
    f:"¿Qué es una réplica técnica?",
    b:"Repetición de una medición sobre la misma muestra para evaluar variabilidad técnica."
  },
  {
    cat:"transformation",
    f:"¿Qué es una réplica biológica?",
    b:"Muestra independiente que representa una unidad biológica diferente."
  },
  {
    cat:"transformation",
    f:"¿Por qué las réplicas biológicas son importantes?",
    b:"Permiten evaluar la variabilidad natural entre unidades biológicas y aumentan la robustez de las conclusiones."
  },
  {
    cat:"transformation",
    f:"¿Qué es significancia estadística?",
    b:"Criterio estadístico utilizado para evaluar si los datos son compatibles con una hipótesis nula bajo un modelo determinado."
  },
  {
    cat:"transformation",
    f:"¿Qué es un valor p?",
    b:"Probabilidad, bajo la hipótesis nula y el modelo utilizado, de observar un resultado tan extremo o más que el obtenido."
  },
  {
    cat:"transformation",
    f:"¿Qué significa p < 0,05?",
    b:"En un análisis convencional, indica que el resultado se considera estadísticamente significativo según ese umbral, pero no demuestra por sí solo importancia biológica ni causalidad."
  },
  {
    cat:"transformation",
    f:"¿Qué es un intervalo de confianza?",
    b:"Rango de valores utilizado para representar la incertidumbre asociada a una estimación estadística."
  },
  {
    cat:"transformation",
    f:"¿Qué es una desviación estándar?",
    b:"Medida de dispersión que indica cuánto se alejan, en promedio, los valores de una distribución respecto de su media."
  },
  {
    cat:"transformation",
    f:"¿Qué es error estándar?",
    b:"Medida de la incertidumbre de una estimación de la media, relacionada con la variabilidad y el tamaño de muestra."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que un resultado sea biológicamente relevante?",
    b:"Que el tamaño o naturaleza del efecto tiene una importancia funcional, fisiológica o aplicada, independientemente de su significancia estadística."
  },
  {
    cat:"transformation",
    f:"¿Qué es una limitación experimental?",
    b:"Factor del diseño o procedimiento que puede restringir la interpretación, precisión o generalización de los resultados."
  },
  {
    cat:"transformation",
    f:"¿Qué es una variable controlada?",
    b:"Factor que se mantiene constante entre las condiciones experimentales para reducir su influencia sobre el resultado."
  },
  {
    cat:"transformation",
    f:"¿Qué es una condición basal?",
    b:"Condición de referencia respecto de la cual se comparan los efectos de un tratamiento o modificación."
  },
  {
    cat:"transformation",
    f:"¿Qué es una condición inducida?",
    b:"Condición en la que se activa deliberadamente un proceso o sistema mediante una señal o tratamiento."
  },
  {
    cat:"transformation",
    f:"¿Qué es una curva de crecimiento?",
    b:"Representación del cambio en la cantidad de células o biomasa a lo largo del tiempo."
  },
  {
    cat:"transformation",
    f:"¿Por qué la fase de crecimiento puede importar para la transformación o expresión?",
    b:"El estado fisiológico de las células influye en competencia, viabilidad, metabolismo y capacidad de expresar o mantener ADN exógeno."
  },
  {
    cat:"transformation",
    f:"¿Qué es fase logarítmica?",
    b:"Periodo de crecimiento rápido en el que las células se dividen de manera activa."
  },
  {
    cat:"transformation",
    f:"¿Qué es fase estacionaria?",
    b:"Periodo en el que el crecimiento neto disminuye debido a limitaciones de nutrientes, acumulación de productos u otros factores."
  },
  {
    cat:"transformation",
    f:"¿Qué es densidad óptica?",
    b:"Medida de turbidez utilizada como aproximación de la cantidad de células en un cultivo."
  },
  {
    cat:"transformation",
    f:"¿Qué es OD600?",
    b:"Medición de absorbancia/turbidez a 600 nm, utilizada habitualmente para estimar la densidad de cultivos bacterianos."
  },
  {
    cat:"transformation",
    f:"¿Por qué se controla la OD600 antes de inducir una expresión?",
    b:"Porque el estado de crecimiento del cultivo puede influir en la productividad y el estado fisiológico de las células."
  },
  {
    cat:"transformation",
    f:"¿Qué es producción recombinante?",
    b:"Obtención de una proteína, enzima o metabolito mediante un organismo que contiene una construcción genética introducida."
  },
  {
    cat:"transformation",
    f:"¿Qué es bioproducción?",
    b:"Producción de un compuesto utilizando sistemas biológicos, como microorganismos, células o plantas."
  },
  {
    cat:"transformation",
    f:"¿Qué es una plataforma de expresión?",
    b:"Sistema celular o biológico elegido para producir una molécula recombinante."
  },
  {
    cat:"transformation",
    f:"¿Qué ventajas pueden tener las bacterias como plataforma de expresión?",
    b:"Crecimiento rápido, cultivos relativamente simples y herramientas moleculares bien desarrolladas."
  },
  {
    cat:"transformation",
    f:"¿Qué limitación pueden tener las bacterias para producir proteínas eucariotas?",
    b:"Pueden carecer de ciertas modificaciones postraduccionales o sistemas de plegamiento presentes en células eucariotas."
  },
  {
    cat:"transformation",
    f:"¿Qué ventaja pueden tener las levaduras como plataforma de expresión?",
    b:"Son eucariotas unicelulares y combinan facilidad de cultivo con algunas capacidades de procesamiento eucariota."
  },
  {
    cat:"transformation",
    f:"¿Qué ventaja pueden tener las plantas como plataforma de producción?",
    b:"Permiten producir determinadas moléculas a gran escala y pueden ser útiles para biofortificación y producción de proteínas."
  },
  {
    cat:"transformation",
    f:"¿Qué es molecular farming?",
    b:"Uso de plantas modificadas genéticamente para producir moléculas de interés, como proteínas, metabolitos o vacunas."
  },
  {
    cat:"transformation",
    f:"¿Qué es una planta fábrica?",
    b:"Planta diseñada o utilizada como sistema biológico para producir compuestos de interés."
  },
  {
    cat:"transformation",
    f:"¿Qué es biofortificación genética?",
    b:"Modificación genética dirigida a aumentar el contenido de un nutriente o precursor nutricional en un alimento."
  },
  {
    cat:"transformation",
    f:"¿Qué diferencia hay entre biofortificación genética y mejoramiento convencional?",
    b:"La biofortificación genética utiliza modificaciones genéticas dirigidas o introducción de genes, mientras que el mejoramiento convencional selecciona variación genética mediante cruces y selección."
  },
  {
    cat:"transformation",
    f:"¿Qué es una ruta de carotenoides?",
    b:"Conjunto de reacciones metabólicas que convierten precursores en carotenoides como fitoeno, licopeno y β-caroteno."
  },
  {
    cat:"transformation",
    f:"¿Qué es fitoeno?",
    b:"Carotenoide incoloro que constituye un intermediario temprano de la biosíntesis de carotenoides."
  },
  {
    cat:"transformation",
    f:"¿Qué es licopeno?",
    b:"Carotenoide intermedio de la ruta biosintética que puede convertirse posteriormente en otros carotenoides, incluido β-caroteno."
  },
  {
    cat:"transformation",
    f:"¿Qué es desaturación?",
    b:"Reacción que introduce dobles enlaces en una molécula, como ocurre durante la conversión de fitoeno hacia carotenoides más insaturados."
  },
  {
    cat:"transformation",
    f:"¿Qué es acumulación preferencial?",
    b:"Situación en la que un producto determinado representa una proporción especialmente alta de los compuestos acumulados."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que una enzima tenga una funcionalidad diferencial?",
    b:"Que variantes de la enzima pueden realizar la misma reacción pero con diferencias en eficiencia, afinidad, estabilidad o comportamiento en un entorno determinado."
  },
  {
    cat:"transformation",
    f:"¿Por qué una enzima de otra especie puede funcionar mejor en un organismo hospedador?",
    b:"Puede poseer propiedades catalíticas o estructurales más compatibles con el sustrato, el compartimento celular o las condiciones del hospedador."
  },
  {
    cat:"transformation",
    f:"¿Qué conclusión general puede extraerse del estudio de Golden Rice 2?",
    b:"Cambiar la fuente de PSY puede superar una limitación metabólica y aumentar fuertemente la acumulación de carotenoides sin que CRTI se convierta en el principal factor limitante.",
    draw:"golden"
  },
  {
    cat:"transformation",
    f:"¿Qué concepto de ingeniería metabólica ejemplifica Golden Rice 2?",
    b:"La identificación y reemplazo de un paso limitante de una ruta biosintética mediante una enzima heteróloga más eficaz."
  },
  {
    cat:"transformation",
    f:"¿Por qué el estudio comparó PSY de diferentes especies?",
    b:"Para identificar una fuente de PSY con mejor desempeño y determinar si la enzima de narciso era responsable de limitar la acumulación de carotenoides."
  },
  {
    cat:"transformation",
    f:"¿Qué sistema modelo utilizaron inicialmente para comparar las PSY?",
    b:"Callo de maíz carotenogénico, permitiendo comparar el rendimiento relativo de diferentes genes psy antes de transformar arroz."
  },
  {
    cat:"transformation",
    f:"¿Qué PSY mostró mejor rendimiento en los experimentos del estudio?",
    b:"Las PSY de maíz y arroz mostraron los mejores resultados en cuanto a acumulación de carotenoides."
  },
  {
    cat:"transformation",
    f:"¿Qué PSY mostró el peor rendimiento?",
    b:"La PSY de narciso utilizada en el Golden Rice original presentó el menor rendimiento entre las PSY evaluadas."
  },
  {
    cat:"transformation",
    f:"¿Qué demostró la comparación de diferentes PSY?",
    b:"Demostró que cambiar la fuente de PSY tenía un efecto importante sobre la cantidad de carotenoides acumulados."
  },
  {
    cat:"transformation",
    f:"¿Qué evidencia apoyó que el precursor no era el factor limitante?",
    b:"Los análisis indicaron que no existía una escasez evidente del precursor geranil-geranil difosfato."
  },
  {
    cat:"transformation",
    f:"¿Qué evidencia apoyó que el secuestro del producto no era la principal limitación?",
    b:"Los experimentos indicaron que la capacidad de acumulación del producto no constituía una restricción inmediata para aumentar los carotenoides."
  },
  {
    cat:"transformation",
    f:"¿Qué conclusión se obtuvo sobre CRTI en el endospermo transgénico?",
    b:"CRTI podía desaturar el fitoeno producido incluso cuando se utilizaban PSY muy eficaces, por lo que no parecía ser el paso limitante en esos tejidos."
  },
  {
    cat:"transformation",
    f:"¿Por qué el color de los granos de arroz se relacionó con el contenido de carotenoides?",
    b:"La acumulación de carotenoides produce una coloración amarilla o anaranjada visible en el endospermo."
  },
  {
    cat:"transformation",
    f:"¿Qué indica que una característica sea estable y heredable en T2?",
    b:"Que la capacidad carotenogénica observada en T1 se mantuvo en la siguiente generación, indicando transmisión genética estable."
  },
  {
    cat:"transformation",
    f:"¿Qué significa que una progenie sea homocigota para un transgén?",
    b:"Que posee copias del transgén en ambos cromosomas homólogos del locus correspondiente."
  },
  {
    cat:"transformation",
    f:"¿Qué resultado se obtuvo con la PSY de maíz en semillas T2?",
    b:"Las semillas homocigotas que contenían PSY de maíz junto con CRTI mantuvieron niveles muy altos de carotenoides, superiores a los observados con la PSY de narciso."
  },
  {
    cat:"transformation",
    f:"¿Qué relación hubo entre el número de sitios de inserción del T-DNA y el contenido de carotenoides?",
    b:"No se observó una correlación entre el número de sitios de inserción estimado y el contenido de carotenoides."
  },
  {
    cat:"transformation",
    f:"¿Qué confirmó el Western blot de PSY y CRTI?",
    b:"Confirmó la presencia de las proteínas y que ambas tenían el tamaño esperado."
  },
  {
    cat:"transformation",
    f:"¿Cuál fue la conclusión sobre la PSY de narciso?",
    b:"Que la propia PSY de narciso constituía una barrera para alcanzar niveles mayores de acumulación de carotenoides en Golden Rice."
  },
  {
    cat:"transformation",
    f:"¿Qué explicación propusieron para las diferencias entre PSY?",
    b:"Podrían deberse a diferencias sutiles en la capacidad catalítica, como kcat o KM, o a una mejor compatibilidad con el entorno del plastidio."
  },
  {
    cat:"transformation",
    f:"¿Qué similitud de secuencia tenían las dos mejores PSY?",
    b:"Las PSY de arroz y maíz eran aproximadamente 89 % idénticas en su secuencia primaria."
  },
  {
    cat:"transformation",
    f:"¿Por qué el entorno del plastidio podría importar para PSY?",
    b:"La localización y composición del compartimento celular pueden proporcionar condiciones más favorables para la actividad de una determinada enzima."
  },
  {
    cat:"transformation",
    f:"¿Qué demuestra en términos generales el estudio de Golden Rice 2 sobre ingeniería genética?",
    b:"Que modificar el origen de una enzima clave puede cambiar significativamente el flujo metabólico y el fenotipo producido por una construcción transgénica."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres introducir un plásmido en una bacteria. ¿Cuál sería el flujo general?",
    b:"Preparar células competentes → introducir el ADN por método químico o electroporación → recuperar → seleccionar → aislar colonias → verificar el clon."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres expresar una proteína tóxica. ¿Qué estrategia usarías?",
    b:"Utilizaría un promotor inducible para separar la etapa de crecimiento de la etapa de producción y optimizaría las condiciones de inducción."
  },
  {
    cat:"transformation",
    f:"Caso experimental: necesitas saber si una colonia tiene el inserto. ¿Qué técnica usarías primero?",
    b:"Colony PCR puede ser una estrategia rápida para detectar la presencia y tamaño esperado del inserto."
  },
  {
    cat:"transformation",
    f:"Caso experimental: necesitas confirmar que la secuencia es exactamente correcta. ¿Qué técnica usarías?",
    b:"Secuenciación del inserto y de las regiones de unión relevantes."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres comparar dos promotores. ¿Qué deberías mantener constante?",
    b:"Vector, gen reportero, hospedador, condiciones de cultivo, cantidad de células y método de medición, cambiando únicamente el promotor que se desea comparar."
  },
  {
    cat:"transformation",
    f:"Caso experimental: dos eventos transgénicos muestran diferente expresión. ¿Qué hipótesis probarías?",
    b:"Efecto de posición, número de copias, estructura del T-DNA, silenciamiento y diferencias en el entorno cromatínico."
  },
  {
    cat:"transformation",
    f:"Caso experimental: ninguna planta regeneró después de la transformación. ¿Qué revisarías?",
    b:"Viabilidad del tejido, condiciones de cultivo, selección, capacidad de regeneración, daño producido por el método y etapa de regeneración."
  },
  {
    cat:"transformation",
    f:"Caso experimental: Agrobacterium transforma muy poco tu especie vegetal. ¿Qué alternativa considerarías?",
    b:"Optimizar el protocolo de Agrobacterium o considerar biobalística, electroporación de protoplastos u otro método compatible con la especie."
  },
  {
    cat:"transformation",
    f:"Caso experimental: una transformación tiene muchas colonias pero pocas contienen el inserto. ¿Qué revisarías?",
    b:"Eficiencia de ligación/ensamblaje, vector vacío, sistema de selección, estrategia de screening y proporción inserto:vector."
  },
  {
    cat:"transformation",
    f:"Caso experimental: el vector se mantiene pero el gen no se expresa. ¿Qué revisarías?",
    b:"Promotor, orientación, marco de lectura, terminador, secuencia codificante, regulación del hospedador y posibles mecanismos de silenciamiento."
  },
  {
    cat:"transformation",
    f:"Caso experimental: el gen se expresa pero produce poca proteína. ¿Qué revisarías?",
    b:"Nivel de transcripción, estabilidad del ARN, traducción, estabilidad de la proteína, plegamiento y condiciones de cultivo."
  },
  {
    cat:"transformation",
    f:"Caso experimental: la proteína aparece en Western blot pero no tiene actividad. ¿Qué posibilidades existen?",
    b:"Plegamiento incorrecto, modificación postraduccional ausente, mutación, localización incorrecta o condiciones inadecuadas del ensayo funcional."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres que un gen se exprese solo en hojas. ¿Qué elegirías?",
    b:"Un promotor específico de tejido que tenga actividad preferente en hojas."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres controlar cuándo se expresa un gen. ¿Qué elegirías?",
    b:"Un sistema inducible, como Tet-ON/Tet-OFF u otro promotor inducible apropiado."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres aumentar la producción de un metabolito. ¿Qué estrategia general usarías?",
    b:"Identificar pasos limitantes, aumentar la expresión de enzimas clave, mejorar suministro de precursores y facilitar almacenamiento/secuestro del producto."
  },
  {
    cat:"transformation",
    f:"Caso experimental: aumentaste una enzima y no aumentó el producto. ¿Qué podrías investigar?",
    b:"Otro paso podría ser limitante, podría faltar precursor o cofactor, el producto podría ser tóxico o la enzima podría no estar correctamente localizada."
  },
  {
    cat:"transformation",
    f:"Caso experimental: aumentaste PSY y se acumuló fitoeno. ¿Qué sugeriría esto?",
    b:"Que la capacidad de la etapa posterior, por ejemplo la desaturación por CRTI, podría estar convirtiéndose en una limitación."
  },
  {
    cat:"transformation",
    f:"Caso experimental: aumentaste PSY y no se acumuló fitoeno. ¿Qué sugeriría?",
    b:"Que la etapa posterior puede estar procesando eficientemente el fitoeno producido."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres producir β-caroteno en una planta. ¿Qué debes considerar?",
    b:"Expresión de las enzimas necesarias, localización en el compartimento correcto, disponibilidad de precursores, actividad de las enzimas y capacidad de almacenamiento del producto."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres comparar dos genes homólogos de distintas especies. ¿Qué deberías controlar?",
    b:"Promotor, vector, hospedador, condiciones experimentales y método de transformación, de modo que la fuente del gen sea la principal variable."
  },
  {
    cat:"transformation",
    f:"Caso experimental: un gen funciona en maíz pero no en arroz. ¿Qué investigarías?",
    b:"Promotor, localización subcelular, compatibilidad de la proteína, disponibilidad de sustratos/cofactores y diferencias en el entorno celular."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres saber si una proteína llega al plastidio. ¿Qué estrategia podrías utilizar?",
    b:"Fusionarla a un marcador reportero apropiado o utilizar una técnica de localización subcelular para determinar dónde se acumula."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres saber si un transgén está integrado. ¿Qué podrías utilizar?",
    b:"PCR genómica, secuenciación u otras técnicas de análisis de integración dependiendo del nivel de información requerido."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres estimar el número de copias de un transgén. ¿Qué técnica podría utilizarse?",
    b:"qPCR o ddPCR pueden utilizarse para estimar número de copias; también existen métodos basados en análisis de integración."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres determinar si el transgén se expresa a nivel de ARN. ¿Qué técnica usarías?",
    b:"RT-qPCR puede utilizarse para cuantificar el ARN derivado del transgén."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres determinar si el transgén produce proteína. ¿Qué técnica usarías?",
    b:"Western blot, ELISA u otra técnica específica para la proteína."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres saber si la proteína producida es funcional. ¿Qué harías?",
    b:"Realizaría un ensayo funcional específico para la actividad de la proteína."
  },
  {
    cat:"transformation",
    f:"Caso experimental: una planta tiene el transgén pero no el fenotipo. ¿Es suficiente concluir que el gen no funciona?",
    b:"No. Primero habría que comprobar integración, transcripción, traducción, localización y actividad funcional."
  },
  {
    cat:"transformation",
    f:"Caso experimental: el fenotipo aparece pero el transgén no se detecta. ¿Qué investigarías?",
    b:"Posibles errores de detección, integración en una región no analizada, contaminación, cambios secundarios o que el fenotipo tenga otra causa."
  },
  {
    cat:"transformation",
    f:"Caso experimental: una línea transgénica pierde el fenotipo después de varias generaciones. ¿Qué podría explicar esto?",
    b:"Segregación del transgén, silenciamiento, inestabilidad genética o cambios en las condiciones ambientales."
  },
  {
    cat:"transformation",
    f:"Caso experimental: una línea tiene expresión muy variable entre semillas. ¿Qué podría explicar esto?",
    b:"Segregación del transgén, diferencias en dosis génica, efecto de posición o variabilidad biológica."
  },
  {
    cat:"transformation",
    f:"Caso experimental: necesitas una línea estable y heredable. ¿Qué característica buscarías?",
    b:"Integración estable del transgén, patrón de segregación compatible con herencia estable y expresión reproducible entre generaciones."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres disminuir el riesgo de efectos de posición. ¿Qué estrategia usarías?",
    b:"Analizar múltiples eventos independientes y seleccionar líneas con integración y expresión favorables."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres demostrar que un fenotipo depende del transgén. ¿Qué controles son importantes?",
    b:"Tipo silvestre, vector vacío cuando corresponda y, idealmente, múltiples eventos independientes y/o rescate del fenotipo."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres demostrar que una proteína recombinante es responsable de una actividad. ¿Qué comparación sería útil?",
    b:"Comparar células que expresan la proteína con un control apropiado que no la exprese, manteniendo las demás condiciones constantes."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres mejorar una transformación bacteriana. ¿Qué variables optimizarías?",
    b:"Estado de las células, cantidad y calidad del ADN, método de transformación, recuperación y condiciones de selección."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres mejorar una transformación vegetal. ¿Qué variables optimizarías?",
    b:"Genotipo y tejido, estado fisiológico, método de entrega, selección, condiciones de cultivo y capacidad de regeneración."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres mejorar una expresión recombinante. ¿Qué variables optimizarías?",
    b:"Promotor, cepa, vector, temperatura, medio, inducción, tiempo, localización y estabilidad de la proteína."
  },
  {
    cat:"transformation",
    f:"Caso experimental: necesitas elegir entre un sistema constitutivo e inducible. ¿Qué considerarías?",
    b:"Si la expresión continua es tolerable o si la proteína es tóxica, si se necesita control temporal y cuándo debe producirse el producto."
  },
  {
    cat:"transformation",
    f:"Caso experimental: necesitas máxima expresión pero la proteína es tóxica. ¿Qué priorizarías?",
    b:"Un sistema inducible y condiciones que separen crecimiento y producción, buscando el mejor equilibrio entre rendimiento y viabilidad."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres seleccionar transformantes sin antibióticos. ¿Qué podrías utilizar?",
    b:"Un marcador metabólico como PMI u otro sistema de selección no basado en resistencia antibiótica."
  },
  {
    cat:"transformation",
    f:"Caso experimental: necesitas introducir varios genes en una sola construcción. ¿Qué métodos de ensamblaje considerarías?",
    b:"Gibson Assembly, Golden Gate u otro sistema modular adecuado al diseño."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres ensamblar muchos fragmentos de forma modular. ¿Qué método sería especialmente útil?",
    b:"Golden Gate puede ser muy útil por su capacidad de ensamblaje modular y ordenado."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres ensamblar fragmentos con solapamientos. ¿Qué método considerarías?",
    b:"Gibson Assembly."
  },
  {
    cat:"transformation",
    f:"Caso experimental: necesitas mover el mismo gen entre muchos vectores. ¿Qué sistema considerarías?",
    b:"Gateway cloning puede ser útil para transferir un inserto entre diferentes vectores de manera eficiente."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres producir una proteína con una etiqueta His. ¿Qué sistema de purificación considerarías?",
    b:"Cromatografía de afinidad usando una resina como Ni-NTA.",
    draw:"his"
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres detectar rápidamente si una proteína está presente. ¿Qué técnica podrías usar?",
    b:"Western blot o ELISA, dependiendo de la disponibilidad de anticuerpos y del objetivo."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres cuantificar carotenoides en arroz transgénico. ¿Qué técnica podrías usar?",
    b:"HPLC, como en el estudio de Golden Rice, para separar y cuantificar los diferentes carotenoides."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres determinar qué PSY produce más carotenoides. ¿Qué estrategia experimental usarías?",
    b:"Expresar las diferentes PSY bajo condiciones comparables y medir el contenido de carotenoides, utilizando controles adecuados."
  },
  {
    cat:"transformation",
    f:"Caso experimental: una PSY produce más carotenoides que otra bajo el mismo promotor. ¿Qué hipótesis propondrías?",
    b:"Que existen diferencias intrínsecas en actividad catalítica, estabilidad o compatibilidad con el entorno celular."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres saber si el precursor es limitante. ¿Qué podrías comparar?",
    b:"Disponibilidad del precursor, acumulación de intermediarios y efecto de aumentar el suministro del precursor sobre el producto final."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres saber si el producto está siendo secuestrado correctamente. ¿Qué analizarías?",
    b:"Localización y forma de acumulación del producto, contenido lipídico, estructuras de almacenamiento y posible toxicidad."
  },
  {
    cat:"transformation",
    f:"Caso experimental: quieres identificar el paso limitante de una ruta. ¿Qué estrategia general usarías?",
    b:"Comparar niveles de intermediarios, aumentar individualmente la actividad de enzimas candidatas y observar qué modificación produce el mayor cambio de flujo."
  },
  {
    cat:"transformation",
    f:"¿Cuál es la idea central que debes recordar de Golden Rice 2?",
    b:"La PSY de narciso limitaba la acumulación de carotenoides. Reemplazarla por una PSY más eficaz, especialmente la de maíz, permitió aumentar fuertemente la producción de carotenoides, manteniendo CRTI como una etapa suficientemente eficiente.",
    draw:"golden"
  }
];
const grid = document.getElementById("cardList");
const flashcard = document.getElementById("flashcard");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const category = document.getElementById("category");
const application = document.getElementById("application");
const counter = document.getElementById("counterPill");
const progress = document.getElementById("progress");
const slider = document.getElementById("slider");
const totalCards = document.getElementById("totalCards");

let current = 0;
let filteredCards = CARDS.map((card,index)=>({...card,originalIndex:index}));

function renderList(){

  grid.innerHTML = "";

  filteredCards.forEach((card,index)=>{

    const button = document.createElement("button");

    button.className =
      "side-card" +
      (index === current ? " active" : "");

    button.innerHTML = `
      <span class="side-number">
        ${String(index + 1).padStart(2,"0")}
      </span>

      <span class="side-content">

        <span class="side-category">
          ${LABELS[card.cat] || card.cat}
        </span>

        <span class="side-question">
          ${stripHTML(card.f)}
        </span>

      </span>
    `;

    button.addEventListener("click",()=>{

      current = index;

      render();

      closeSidebar();

    });

    grid.appendChild(button);

  });

  totalCards.textContent =
    `${filteredCards.length} tarjetas`;

}


function stripHTML(text){

  const temporary =
    document.createElement("div");

  temporary.innerHTML = text;

  return temporary.textContent || temporary.innerText || "";

}


function render(){

  if(!filteredCards.length){

    question.innerHTML =
      "No hay tarjetas en esta categoría.";

    answer.innerHTML = "";

    counter.textContent = "0 / 0";

    progress.textContent = "0 / 0";

    return;

  }


  if(current < 0)
    current = 0;

  if(current >= filteredCards.length)
    current = filteredCards.length - 1;


  const card =
    filteredCards[current];


  const cardColor =
    getCardColor(card.cat);


  flashcard.style
    .setProperty(
      "--card-color",
      cardColor
    );


  category.textContent =
    LABELS[card.cat] || card.cat;


  question.innerHTML =
    card.f;


  let answerHTML =
    card.b || "";


  if(card.draw){

    answerHTML +=
      DRAW(card.draw);

  }


  answer.innerHTML =
    answerHTML;


  answer.classList.add("hidden");


  application.classList
    .toggle(
      "hidden",
      !card.app
    );


  document.getElementById("showAnswer").innerHTML =
    `
      <span>Mostrar respuesta</span>
      <span>↓</span>
    `;


  counter.textContent =
    `${current + 1} / ${filteredCards.length}`;


  progress.textContent =
    `${current + 1} / ${filteredCards.length}`;


  slider.max =
    Math.max(
      0,
      filteredCards.length - 1
    );


  slider.value =
    current;


  document
    .querySelectorAll(".side-card")
    .forEach((element,index)=>{

      element.classList
        .toggle(
          "active",
          index === current
        );

    });


  updateNavigation();

}


function getCardColor(cat){

  const colors = {

    basics: "#607d8b",

    pcr: "#1565c0",

    cloning: "#2e7d32",

    construction: "#6a1b9a",

    reasoning: "#e65100",

    transformation: "#2563a6"

  };


  return colors[cat] || "#6d5bd0";

}


function updateNavigation(){

  const previous =
    document.getElementById("previous");

  const next =
    document.getElementById("next");


  previous.disabled =
    current <= 0;


  next.disabled =
    current >= filteredCards.length - 1;

}


function go(direction){

  if(!filteredCards.length)
    return;


  const newIndex =
    current + direction;


  if(
    newIndex < 0 ||
    newIndex >= filteredCards.length
  ){

    return;

  }


  current =
    newIndex;


  render();

}


document
  .getElementById("showAnswer")
  .addEventListener(
    "click",
    ()=>{

      const hidden =
        answer.classList.toggle(
          "hidden"
        );


      document
        .getElementById("showAnswer")
        .innerHTML =
          hidden

          ? `
              <span>Mostrar respuesta</span>
              <span>↓</span>
            `

          : `
              <span>Ocultar respuesta</span>
              <span>↑</span>
            `;

    }
  );


document
  .getElementById("previous")
  .addEventListener(
    "click",
    ()=>go(-1)
  );


document
  .getElementById("next")
  .addEventListener(
    "click",
    ()=>go(1)
  );


slider
  .addEventListener(
    "input",
    ()=>{

      current =
        Number(slider.value);

      render();

    }
  );


document
  .querySelectorAll(".filter")
  .forEach(button=>{

    button.addEventListener(
      "click",
      ()=>{

        document
          .querySelectorAll(".filter")
          .forEach(other=>{
            other.classList
              .remove("active");
          });


        button.classList
          .add("active");


        const filter =
          button.dataset.filter;


        filteredCards =
          CARDS
            .map((card,index)=>({
              ...card,
              originalIndex:index
            }))
            .filter(card=>{

              return (
                filter === "all" ||
                card.cat === filter
              );

            });


        current = 0;


        renderList();

        render();

      }
    );

  });


function openSidebar(){

  document
    .getElementById("sidebar")
    .classList
    .add("open");


  document
    .getElementById("overlay")
    .classList
    .add("show");

}


function closeSidebar(){

  document
    .getElementById("sidebar")
    .classList
    .remove("open");


  document
    .getElementById("overlay")
    .classList
    .remove("show");

}


document
  .getElementById("menuBtn")
  .addEventListener(
    "click",
    openSidebar
  );


document
  .getElementById("closeSidebar")
  .addEventListener(
    "click",
    closeSidebar
  );


document
  .getElementById("overlay")
  .addEventListener(
    "click",
    closeSidebar
  );


document.addEventListener(
  "keydown",
  event=>{

    if(
      event.key === "ArrowRight"
    ){

      event.preventDefault();

      go(1);

    }


    if(
      event.key === "ArrowLeft"
    ){

      event.preventDefault();

      go(-1);

    }


    if(
      event.code === "Space"
    ){

      event.preventDefault();

      document
        .getElementById("showAnswer")
        .click();

    }

  }
);


renderList();

render();
/*
   =========================================================
   FUNCIONES AUXILIARES PARA LOS DIBUJOS
   =========================================================
*/

function safeDraw(type){

  try{

    return DRAW(type);

  }catch(error){

    console.warn(
      "No se pudo cargar el dibujo:",
      type,
      error
    );

    return "";

  }

}


/*
   =========================================================
   COMPATIBILIDAD CON TARJETAS CON HTML
   =========================================================
*/

function normalizeCard(card){

  return {

    cat:
      card.cat || "basics",

    f:
      card.f || "",

    b:
      card.b || "",

    app:
      card.app || false,

    draw:
      card.draw || null

  };

}


/*
   Normalizamos las tarjetas una sola vez.
*/

for(
  let i = 0;
  i < CARDS.length;
  i++
){

  CARDS[i] =
    normalizeCard(
      CARDS[i]
    );

}


/*
   =========================================================
   ACTUALIZAR LISTA SI CAMBIA EL TAMAÑO
   =========================================================
*/

function refreshCards(){

  filteredCards =
    CARDS.map(
      (card,index)=>({

        ...card,

        originalIndex:index

      })
    );


  current = 0;

  renderList();

  render();

}


/*
   =========================================================
   ATAJOS DE TECLADO
   =========================================================
*/

document.addEventListener(
  "keydown",
  event=>{

    if(
      event.target.tagName === "INPUT" ||
      event.target.tagName === "TEXTAREA"
    ){

      return;

    }


    switch(event.key){

      case "ArrowLeft":

        event.preventDefault();

        go(-1);

        break;


      case "ArrowRight":

        event.preventDefault();

        go(1);

        break;


      case " ":

        event.preventDefault();

        document
          .getElementById(
            "showAnswer"
          )
          .click();

        break;

    }

  }
);


/*
   =========================================================
   ASEGURAR ESTADO INICIAL
   =========================================================
*/

if(
  !Array.isArray(CARDS)
){

  console.error(
    "No se encontraron las flashcards."
  );

}else{

  refreshCards();

}


/*
   =========================================================
   FIN DEL SISTEMA
   =========================================================
*/