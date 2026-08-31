const ICONS = {
  basics: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="var(--basics)" stroke-width="1.8"><path d="M5 2c4 4.5 4 6.5 0 11s-4 6.5 0 11"/><path d="M19 2c-4 4.5-4 6.5 0 11s4 6.5 0 11"/><line x1="7" y1="6" x2="17" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="7" y1="18" x2="17" y2="18"/></svg>`,
  pcr: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="var(--pcr)" stroke-width="1.8"><path d="M12 2v11.5"/><circle cx="12" cy="18" r="4"/><path d="M9 2h6"/><path d="M12 6h2"/><path d="M12 9h2"/></svg>`,
  cloning: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="var(--cloning)" stroke-width="1.8"><circle cx="7" cy="5" r="2.3"/><circle cx="7" cy="19" r="2.3"/><line x1="19" y1="3" x2="8.5" y2="13.5"/><line x1="8.5" y1="10.5" x2="19" y2="21"/></svg>`,
  construction: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="var(--construction)" stroke-width="1.8"><rect x="1" y="9" width="5" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/><rect x="18" y="9" width="5" height="6" rx="1"/><path d="M6 12h3"/><path d="M15 12h3"/></svg>`,
  reasoning: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="var(--reasoning)" stroke-width="1.8"><circle cx="12" cy="9" r="6"/><line x1="9.5" y1="18" x2="14.5" y2="18"/><line x1="10.3" y1="21" x2="13.7" y2="21"/></svg>`
};
const LABELS = {basics:"Bases ADN", pcr:"PCR", cloning:"Clonación", construction:"Construcción/Expresión", reasoning:"Razonamiento"};

function DRAW(type){
  const W=330,H=78;
  const B="#1565c0",G="#2e7d32",P="#6a1b9a",O="#e65100",D="#555";
  const box=(x,w,c,t)=>`<rect x="${x}" y="18" width="${w}" height="28" rx="6" fill="${c}" opacity=".16" stroke="${c}" stroke-width="1.5"/><text x="${x+w/2}" y="36" text-anchor="middle" font-size="9" font-weight="700" fill="#333">${t}</text>`;
  const ar=(x1,x2)=>`<line x1="${x1}" y1="32" x2="${x2}" y2="32" stroke="${D}" stroke-width="2"/><path d="M${x2-5} 28 L${x2} 32 L${x2-5} 36" fill="none" stroke="${D}" stroke-width="2"/>`;
  const wrap=(s)=>`<div class="mini-drawing"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${s}</svg></div>`;
  const d={
    replication:box(4,48,G,"Helicasa")+box(58,48,B,"SSB")+box(112,48,O,"Primasa")+box(166,58,P,"Pol III")+box(230,48,G,"Pol I")+box(284,42,O,"Ligasa"),
    pcr:box(8,76,B,"95–98°C")+ar(86,108)+box(110,76,P,"50–65°C")+ar(188,210)+box(212,76,G,"~72°C")+`<text x="165" y="66" text-anchor="middle" font-size="9">Desnaturalización → annealing → extensión</text>`,
    primers:`<path d="M15 22 H315 M15 52 H315" stroke="${D}" stroke-width="4"/><path d="M50 22 H92" stroke="${B}" stroke-width="8"/><path d="M280 52 H238" stroke="${P}" stroke-width="8"/><text x="71" y="13" text-anchor="middle" font-size="9" font-weight="700" fill="${B}">Forward 5'→3'</text><text x="260" y="69" text-anchor="middle" font-size="9" font-weight="700" fill="${P}">Reverse 5'→3' = reverso complementario</text>`,
    restriction:`<path d="M15 25 H135 M15 53 H135" stroke="${D}" stroke-width="4"/><path d="M195 25 H315 M195 53 H315" stroke="${D}" stroke-width="4"/><path d="M105 25 V34 M115 53 V44" stroke="${G}" stroke-width="5"/><path d="M235 25 V53" stroke="${O}" stroke-width="5"/><text x="75" y="70" text-anchor="middle" font-size="9">Sticky: sobresalen bases</text><text x="255" y="70" text-anchor="middle" font-size="9">Blunt: corte parejo</text>`,
    ta:box(5,70,B,"PCR + A")+ar(78,103)+box(108,70,G,"Vector + T")+ar(181,206)+box(211,114,P,"A–T → ligación"),
    bluewhite:box(8,140,B,"AmpR + LacZ intacto → AZUL")+box(182,140,G,"LacZ interrumpido → BLANCA"),
    gateway:box(4,56,B,"attB")+ar(62,78)+box(82,56,G,"BP")+ar(140,156)+box(160,70,P,"Entrada")+ar(230,246)+box(250,76,G,"LR")+`<text x="165" y="66" text-anchor="middle" font-size="9">1 entrada → múltiples vectores de destino</text>`,
    gibson:box(4,76,O,"Exonucleasa")+ar(84,98)+box(102,76,B,"Polimerasa")+ar(182,196)+box(200,76,G,"Ligasa")+`<text x="165" y="66" text-anchor="middle" font-size="9">overlaps homólogos</text>`,
    golden:`<path d="M8 40 H72 M92 40 H146 M166 40 H220 M240 40 H322" stroke="${D}" stroke-width="5"/><circle cx="82" cy="40" r="9" fill="${O}" opacity=".2" stroke="${O}"/><circle cx="156" cy="40" r="9" fill="${O}" opacity=".2" stroke="${O}"/><circle cx="230" cy="40" r="9" fill="${O}" opacity=".2" stroke="${O}"/><text x="165" y="14" text-anchor="middle" font-size="9" font-weight="700">IIS → corta FUERA → overhangs personalizados → ensamblaje modular</text>`,
    expression:box(4,70,P,"PROMOTOR")+ar(76,86)+box(90,92,B,"GEN DE INTERÉS")+ar(184,198)+box(202,70,G,"TERMINADOR")+ar(274,286)+box(290,36,O,"SEL"),
    t7:box(4,52,D,"IPTG")+ar(60,76)+box(80,78,B,"T7 RNA pol")+ar(162,178)+box(182,48,P,"T7")+ar(234,250)+box(254,70,G,"GEN")+`<text x="165" y="66" text-anchor="middle" font-size="9">IPTG → libera LacI → alta expresión</text>`,
    gal:box(8,72,D,"GAL80")+ar(82,100)+box(104,72,P,"GAL4")+ar(176,194)+box(198,72,O,"UASGAL")+`<text x="165" y="66" text-anchor="middle" font-size="9">sin galactosa: GAL80 inhibe · con galactosa: GAL4 activo</text>`,
    hybrid:box(6,60,B,"BD")+box(70,74,D,"Proteína A")+ar(146,174)+box(178,60,P,"AD")+box(242,74,D,"Proteína B")+`<text x="165" y="66" text-anchor="middle" font-size="9">One: proteína–ADN · Two: proteína–proteína</text>`,
    tet:box(8,86,D,"Tet-Off")+box(122,86,P,"Dox → OFF")+box(236,86,G,"Tet-On")+`<text x="165" y="66" text-anchor="middle" font-size="9">TRE = elemento regulatorio</text>`,
    his:box(6,66,B,"His-tag")+ar(74,96)+box(100,70,D,"Resina")+ar(174,196)+box(200,124,G,"Lavar → Eluir")+`<text x="165" y="66" text-anchor="middle" font-size="9">afinidad por metal</text>`,
    western:box(4,62,D,"Proteínas")+ar(68,84)+box(88,66,B,"SDS-PAGE")+ar(156,172)+box(176,66,G,"Membrana")+ar(244,260)+box(264,62,P,"Ab")+`<text x="165" y="66" text-anchor="middle" font-size="9">detección → presencia/nivel relativo</text>`,
    vector:`<circle cx="165" cy="38" r="28" fill="none" stroke="${D}" stroke-width="4"/><path d="M165 10 A28 28 0 0 1 190 25" stroke="${P}" stroke-width="7" fill="none"/><path d="M142 57 A28 28 0 0 1 143 17" stroke="${G}" stroke-width="7" fill="none"/><text x="165" y="36" text-anchor="middle" font-size="9" font-weight="700">ori</text><text x="165" y="49" text-anchor="middle" font-size="8">promotor + inserto</text>`
  };
  return wrap(d[type]||"");
}


// cat: basics | pcr | cloning | construction | reasoning
// app: true -> añade badge  APLICACIÓN
const CARDS = [
// ===================== BASES DE ADN =====================
{cat:"basics", f:"¿De qué está compuesto un nucleótido?", b:"Un grupo <b>fosfato</b> + una <b>azúcar (pentosa)</b> + una <b>base nitrogenada</b> (purina: A,G / pirimidina: T,C)."},
{cat:"basics", f:"Bases complementarias y tipo de unión", b:"<b>A–T</b> (2 puentes H) y <b>C–G</b> (3 puentes H). Cadenas <b>antiparalelas</b> unidas por puentes de hidrógeno (interacción débil)."},
{cat:"basics", f:"Proteínas que intervienen en la replicación (7)", b:"<b>Helicasa</b> (abre horquilla) · <b>Topoisomerasa</b> (evita superenrollamiento) · <b>SSB</b> (estabiliza hebra simple) · <b>Primasa</b> (ARN primer) · <b>ADN pol III</b> (sintetiza 5'→3') · <b>ADN pol I</b> (quita primers ARN, rellena con ADN) · <b>Ligasa</b> (une fragmentos).", draw:"replication"},
{cat:"basics", f:"¿Por qué la ADN polimerasa no puede iniciar síntesis desde cero?", b:"Necesita un extremo <b>3'-OH libre</b> ya existente (lo entrega el primer/cebador); solo puede añadir nucleótidos, no crear la cadena desde la nada."},

// ===================== PCR =====================
{cat:"pcr", f:"¿Qué es la PCR y para qué sirve?", b:"Reacción en Cadena de la Polimerasa: <b>copia/amplifica</b> millones de veces un segmento específico de ADN. Paso previo indispensable antes de clonar o modificar un fragmento."},
{cat:"pcr", f:"¿Por qué la PCR necesita SIEMPRE dos primers?", b:"1) La polimerasa no inicia sin 3'-OH libre. 2) La síntesis es siempre <b>5'→3'</b>. Por eso un primer marca cada extremo de la región (uno por cada hebra)."},
{cat:"pcr", f:"7 componentes necesarios para un PCR", b:"<b>Molde</b> (ADN/ADNc) · <b>dNTPs</b> (dATP,dTTP,dCTP,dGTP) · <b>Buffer</b> de la polimerasa · <b>Mg2+</b> (o Mn2+) · <b>Primers</b> (18-24nt) · <b>Polimerasa termoestable</b> · <b>Termociclador</b>."},
{cat:"pcr", f:"¿Existe una 'receta universal' de PCR?", b:"<b>NO.</b> Siempre revisar el datasheet de la polimerasa: cada enzima requiere distinta [Mg2+], tiempos y temperaturas."},
{cat:"pcr", f:"Taq polimerasa: origen e importancia", b:"De <b>Thermus aquaticus</b> (bacteria termófila, aguas termales de Yellowstone). Es termoestable: permite hacer todos los ciclos sin agregar enzima nueva tras cada calentamiento."},
{cat:"pcr", f:"Pfu y Phusion: ¿de dónde vienen?", b:"<b>Pfu</b>: de <i>Pyrococcus furiosus</i> (con proofreading). <b>Phusion</b>: tipo Pfu con proofreading fusionada a un dominio que aumenta la <b>procesividad</b>."},
{cat:"pcr", f:"Procesividad vs. Fidelidad (proofreading) — ¡no confundir!", b:"<b>Procesividad</b>: cantidad de nucleótidos incorporados antes de desprenderse del ADN. <b>Fidelidad/proofreading</b>: capacidad de detectar y corregir errores. Son conceptos distintos."},
{cat:"pcr", f:"Las 3 etapas de un ciclo de PCR y sus temperaturas", b:"1) <b>Desnaturalización</b> 95-98°C (ADN a hebra simple) · 2) <b>Annealing/alineamiento</b> Ta 50-65°C (primers hibridan) · 3) <b>Extensión</b> ~72°C (polimerasa sintetiza 5'→3').", draw:"pcr"},
{cat:"pcr", f:"Regla mnemotécnica de la temperatura de annealing (Ta)", b:"Ta <b>muy alta</b> → primers no se unen bien → poco producto. Ta <b>muy baja</b> → primers se unen donde no deben → productos inespecíficos."},
{cat:"pcr", f:"¿'PCR siempre = 95, 55, 72'?", b:"<b>Falso.</b> No memorizar valores fijos: la temperatura depende de la enzima usada y de los primers diseñados (Tm de cada set)."},
{cat:"pcr", f:"Primer Forward vs. Primer Reverse", b:"<b>Forward</b>: idéntico a la secuencia 5'→3' del extremo que quiero amplificar. <b>Reverse</b>: <b>reverso complementario</b> del extremo opuesto. Ambos se sintetizan/entregan siempre en sentido 5'→3'.", draw:"primers"},
{cat:"pcr", f:"Error común al diseñar el primer reverse", b:"No basta con copiar las últimas 20 bases de la secuencia: hay que sacar su <b>reverso complementario</b>."},
{cat:"pcr", f:"5 criterios de diseño de primers (muy preguntable)", b:"<b>Longitud</b> 18-24nt · <b>%GC</b> 40-60% distribuido · <b>Tm</b> 50-65°C con dif. máx. 5°C entre F/R · <b>sin complementariedad</b> entre ambos (evitar dímeros) · <b>especificidad</b> (no unirse a otras regiones)."},
{cat:"pcr", f:"Fórmula simplificada de Tm", b:"<b>Tm = 2×(A+T) + 4×(G+C)</b><br>Ejemplo: A=5,T=5,G=3,C=3 → Tm=2(10)+4(6)=20+24=<b>44°C</b>."},
{cat:"pcr", app:true, f:" Practica: primer con A=6, T=4, G=5, C=5. ¿Tm?", b:"Tm = 2×(6+4) + 4×(5+5) = 2(10) + 4(10) = 20+40 = <b>60°C</b>. (Ojo: los programas reales también consideran sales y estructura secundaria)."},
{cat:"pcr", f:"Relación entre Tm y Ta (annealing)", b:"La Ta depende fuertemente de la Tm. Ta muy baja → productos inespecíficos. Ta muy alta → poca unión templado-primer → poco producto."},
{cat:"pcr", f:"Herramientas para diseñar primers", b:"<b>Primer3 / Primer3Plus</b>, <b>Benchling</b>, calculadoras de Tm de <b>NEB</b>. El propósito (clonamiento, qPCR, mutagénesis, screening) determina el diseño."},
{cat:"pcr", f:"Concentraciones de referencia: molde y primers", b:"<b>Molde</b>: 1pg-1ng (plasmidial/viral) o 1ng-1µg (genómico). <b>Primers</b>: 0.1-0.5µM c/u (exceso → uniones inespecíficas y dímeros)."},
{cat:"pcr", f:"Concentraciones de referencia: Mg2+ y dNTPs", b:"<b>Mg2+</b>: 1.5-2mM (bajo=sin producto; alto=inespecífico). <b>dNTPs</b>: 0.2µM c/u clásico (menos=+fidelidad -rendimiento; más=+rendimiento -fidelidad)."},
{cat:"pcr", f:"Concentración de polimerasa y regla de extensión", b:"<b>Polimerasa</b>: 0.5-2U por 50µL de reacción. <b>Extensión</b>: ~1 min/kb (productos <1kb: 45-60 seg)."},
{cat:"pcr", f:"Orden correcto para armar el mix de PCR", b:"Preparar todos los componentes comunes <b>en hielo</b>, con la <b>polimerasa al final</b>, y luego agregar el <b>molde por separado</b> (reduce errores de pipeteo)."},
{cat:"pcr", f:"Controles obligatorios en un PCR", b:"<b>Control negativo</b>: todo el mix menos el molde (no debe amplificar). <b>Control positivo</b>: molde que sí contiene la secuencia blanco."},
{cat:"pcr", f:"¿Cómo se visualiza el producto de PCR?", b:"<b>Electroforesis en gel de agarosa</b>: ADN con carga negativa migra al electrodo (+); fragmentos chicos migran más rápido. Se usa un <b>DNA ladder</b> y se tiñe con <b>GelRed</b>, viendo en transiluminador UV."},
{cat:"pcr", app:true, f:" No hay amplificación: causas por ciclos/temperatura", b:"Muy pocos ciclos (usar 20-35) · extensión muy corta (usar 1min/kb) · annealing muy corto o Ta muy alta · denaturación insuficiente (no separa ADN) o excesiva (degrada ADN)."},
{cat:"pcr", app:true, f:" No hay amplificación: causas por componentes/molde", b:"dNTPs muy altos (agotan Mg2+) · producto rico en GC >65% (subir Ta, gradiente térmico, DMSO ≤10%) · molde dañado/con inhibidores (diluir o usar molde nuevo) · primers en exceso · poca enzima · diseño incorrecto de primers."},
{cat:"pcr", app:true, f:" No hay amplificación: causa MÁS frecuente en la práctica", b:"<b>Falta algún componente</b> por error humano: dNTPs, primers, molde, enzima o Mg2+ ausentes. ¡Siempre revisar antes de sospechar de la biología!"},
{cat:"pcr", app:true, f:" Bandas inespecíficas o dímeros de primers: causas", b:"Demasiados ciclos · Ta de annealing muy baja (unión inespecífica) · primers impuros o en exceso · exceso de Mg2+ (favorece unión no específica)."},
{cat:"pcr", app:true, f:" Tu PCR de un gen rico en GC (>65%) no amplifica. ¿Qué haces?", b:"Aumentar la Ta, optimizar con <b>gradiente térmico</b>, y/o agregar <b>DMSO</b> (máximo 10%) para desestabilizar estructuras secundarias."},
{cat:"pcr", app:true, f:" Diseñaste primers con Tm 52°C (F) y 61°C (R). ¿Problema?", b:"Sí: la diferencia (9°C) supera el máximo permitido de <b>5°C</b> entre F y R. Hay que rediseñar para que sean más parecidos, o la Ta de compromiso dañará la eficiencia de uno de los dos."},

// ===================== CLONACIÓN EN VECTORES =====================
{cat:"cloning", f:"¿Qué significa 'clonar' en biología molecular?", b:"Introducir un fragmento de ADN en un <b>vector</b> para mantenerlo, propagarlo o usarlo. <b>No</b> es clonar un organismo completo."},
{cat:"cloning", f:"6 tipos de vectores según su función", b:"<b>Clonación</b> (mantener/propagar) · <b>Expresión</b> (producir ARN/proteína) · <b>Transformación</b> (introducir ADN al genoma) · <b>Reportero</b> (monitorear expresión) · <b>Silenciamiento/sobreexpresión</b> · <b>Edición génica</b> (ej. CRISPR)."},
{cat:"cloning", f:"5 elementos básicos de un vector", b:"<b>ori</b> (origen de replicación) · gen de <b>resistencia a antibiótico</b> · <b>promotor</b> (si es de expresión) · <b>MCS/polylinker</b> (sitios de restricción) · el <b>inserto</b>.", draw:"vector"},
{cat:"cloning", f:"Enzimas de restricción: qué son y su historia", b:"'Tijeras moleculares' que reconocen y cortan secuencias específicas de ADN. Descubiertas en los años 60 por <b>Stewart Lynn y Werner Arber</b> en E. coli — <b>Premio Nobel de Medicina 1978</b>.", draw:"restriction"},
{cat:"cloning", f:"Tipos I, II, III y IV de enzimas de restricción", b:"<b>I</b>: ATP+AdoMet+Mg2+, corta lejos y al azar. <b>II</b>: Mg2+, corta dentro/cerca del sitio (¡las usadas en clonamiento!). <b>III</b>: ATP+Mg2+, corta 20-25pb fuera. <b>IV</b>: Mg2+, reconoce ADN metilado."},
{cat:"cloning", f:"Isoesquizómeros", b:"Enzimas que reconocen la <b>misma secuencia</b> pero cortan en <b>posiciones distintas</b> del mismo palíndromo. Ej: <b>XmaI</b> (C↓CCGGG) y <b>SmaI</b> (CCC↓GGG)."},
{cat:"cloning", app:true, f:" Actividad estrella: ¿qué es y qué la provoca?", b:"Corte en sitios NO específicos por condiciones subóptimas. Causas: <b>exceso de enzima</b>, alta sal/glicerol, impurezas del ADN, incubación excesiva, buffer incompatible. Regla: ¡más enzima NO es mejor!"},
{cat:"cloning", f:"ADN metilado y enzimas de restricción", b:"Algunas enzimas no cortan sitios metilados. Ej: <b>MboI no corta G6mATC</b> generado por metiltransferasas <b>Dam</b> de E. coli."},
{cat:"cloning", f:"Temperatura óptima de digestión — excepciones", b:"La mayoría corta a <b>37°C</b>, pero: <b>TaqI</b> a 65°C y <b>ApaI</b> a 25°C."},
{cat:"cloning", f:"Extremos cohesivos (sticky) vs. romos (blunt)", b:"<b>Cohesivos</b>: bases de cadena simple sobresalientes, pueden aparear. <b>Romos</b>: extremos parejos, sin bases sobresalientes.", draw:"restriction"},
{cat:"cloning", app:true, f:" 4 pasos para clonar con enzimas de restricción", b:"1) Analizar enzimas del MCS del vector · 2) Elegir un par que NO corte dentro del gen de interés · 3) Verificar extremos y buffers compatibles · 4) Cuidar la <b>orientación direccional</b> del inserto."},
{cat:"cloning", app:true, f:" Mi gen no tiene sitios de restricción. ¿Cómo los agrego?", b:"Se agregan en el <b>extremo 5' de los primers</b> (parte que inicialmente no aparea con el molde, pero que queda incorporada en el producto de PCR)."},
{cat:"cloning", app:true, f:" Ejemplo AtZSP1: diseño de primers con EcoRI + HindIII", b:"Forward: 5'-GCG-<u>GAATTC</u>-ATGCAA...-3' (sitio EcoRI). Reverse: 5'-GCG-<u>AAGCTT</u>-TCAGGA...-3' (sitio HindIII). Luego: amplificar → digerir PCR y vector con ambas enzimas → ligar con T4 ligasa → transformar → <b>secuenciar</b> para confirmar."},
{cat:"cloning", f:"5 criterios para elegir el par de enzimas ideal", b:"Que corten <b>1 sola vez</b> en el vector · estén en el <b>MCS</b> · <b>no corten</b> dentro del gen · generen <b>extremos compatibles</b> · permitan <b>orientar</b> correctamente el inserto."},
{cat:"cloning", f:"Clonamiento por PCR (TA cloning): mecanismo", b:"Taq agrega una <b>A extra</b> en el extremo 3' del producto de PCR. El vector viene linealizado con <b>T-overhang</b>; aparean por A-T y se ligan. <b>Desventaja</b>: el inserto puede quedar en cualquier orientación.", draw:"ta"},
{cat:"cloning", f:"pGEM-T Easy: blue-white screening", b:"Selección con ampicilina + X-gal. <b>Colonia azul</b> = LacZ intacto = <b>sin inserto</b>. <b>Colonia blanca</b> = LacZ interrumpido = <b>con inserto</b>. Ampicilina indica si tiene el vector; el color indica si tiene el inserto.", draw:"bluewhite"},
{cat:"cloning", f:"TOPO cloning: mecanismo y ventaja", b:"Usa la enzima <b>topoisomerasa I</b> para unir el fragmento sin restricción ni ligasa adicional. Muy <b>rápido (~5 min)</b> y eficiente, aunque más caro."},
{cat:"cloning", f:"Gateway cloning: fundamento", b:"Recombinación específica de sitio del <b>bacteriófago lambda</b> entre sitios <b>att</b>: attB (E. coli) + attP (lambda) → attL + attR. Se usan enzimas <b>clonasas BP y LR</b>.", draw:"gateway"},
{cat:"cloning", f:"Gateway: flujo de trabajo", b:"Gen de interés → <b>vector de entrada</b> (vía PCR/restricción/librería cDNA) → clonasas → múltiples <b>vectores de destino</b> (expresión en bacteria, levadura, insectos, mamíferos, con distintos tags).", draw:"gateway"},
{cat:"cloning", f:"Gateway: ventajas y desventajas", b:"<b>Ventajas</b>: rápido (5min), high-throughput, 1 entrada→múltiples destinos, fácil combinar fragmentos. <b>Desventajas</b>: deja <b>cicatrices (scars)</b> de secuencias att, costoso, requiere mantener clonasas BP/LR."},
{cat:"cloning", f:"Gibson Assembly: enzimas y mecanismo", b:"3 enzimas en un tubo: <b>5' exonucleasa</b> (chew-back, genera extremos simples) → <b>Phusion polimerasa</b> (rellena huecos con los overlaps apareados) → <b>Taq ligasa</b> (sella). Requiere regiones de <b>homología (overlap)</b>.", draw:"gibson"},
{cat:"cloning", f:"Gibson Assembly: ¿por qué elegirlo?", b:"No necesita sitios de restricción específicos · <b>no deja cicatriz</b> · una reacción isotérmica en un solo tubo · puede combinar <b>muchos fragmentos</b> a la vez."},
{cat:"cloning", f:"Golden Gate Assembly: fundamento", b:"Usa enzimas de restricción <b>tipo IIS</b> (cortan FUERA de su secuencia de reconocimiento) → permite diseñar <b>overhangs personalizados y direccionales</b>. Ideal para ensamblajes modulares (ej. 3 cassettes promotor-gen-terminador).", draw:"golden"},
{cat:"cloning", f:"Costo aproximado por reacción de cada técnica", b:"Restricción $5 · TA cloning $3-6.5 · Golden Gate $8.9 · Gibson $11-21 · Gateway $36 · TOPO $36. PCR/restricción = más económicas; Gateway = costosa pero muy eficiente para múltiples destinos."},
{cat:"cloning", f:"Línea de tiempo de estrategias de clonación", b:"1972 <b>Restricción</b> → 1985 <b>Clonamiento por PCR</b> → 1996 <b>TOPO</b> → 2000 <b>Gateway</b> → 2009 <b>Gibson</b> → 2016 <b>Golden Gate</b>. No memorizar años: cada una resuelve una limitación de la anterior (rapidez, menos cicatriz, más fragmentos)."},
{cat:"cloning", app:true, f:" ¿Qué técnica usarías para clonar 1 solo fragmento, barato y simple?", b:"<b>Restricción + ligación</b> o <b>TA cloning</b> (las más económicas, $3-6 por reacción)."},
{cat:"cloning", app:true, f:" ¿Qué técnica usarías para mover un gen a bacteria, levadura Y mamífero?", b:"<b>Gateway</b>: 1 vector de entrada, fácilmente transferible a múltiples vectores de destino sin volver a clonar desde cero."},
{cat:"cloning", app:true, f:" ¿Qué técnica usarías para ensamblar 3 cassettes (promotor-gen-terminador) en 1 vector?", b:"<b>Golden Gate Assembly</b> (o Gibson): diseño modular, ideal para ensamblajes con múltiples fragmentos ordenados."},
{cat:"cloning", app:true, f:" Necesitas orientación específica del inserto para expresión. ¿Qué evitas?", b:"Evitar <b>TA cloning</b> (orientación aleatoria). Usar restricción <b>direccional</b> (2 enzimas distintas), Gateway o Gibson con diseño dirigido."},
{cat:"cloning", f:"Glosario rápido: 'Scar' (cicatriz)", b:"Secuencia residual que queda tras la clonación (ej. sitios att remanentes en Gateway)."},
{cat:"cloning", f:"Glosario rápido: 'Overlap'", b:"Región de homología compartida entre fragmentos, usada para que aparee correctamente en Gibson Assembly."},
{cat:"cloning", f:"Glosario rápido: Enzima tipo IIS", b:"Corta <b>fuera</b> de su secuencia de reconocimiento, generando overhangs no palindrómicos y personalizables — es la base de Golden Gate."},

// ===================== CONSTRUCCIONES Y EXPRESIÓN =====================
{cat:"construction", f:"Antes de diseñar una construcción, ¿qué preguntas hago?", b:"¿Quiero evaluar <b>localización</b>? ¿<b>función</b>? ¿<b>purificar</b> la proteína? ¿<b>interacción</b> entre proteínas? La respuesta define qué elementos necesito."},
{cat:"construction", f:"Elementos básicos de una construcción de expresión", b:"<b>Promotor</b> · <b>gen de interés</b> (± epitope-tag) · <b>terminador</b> · <b>marcador de selección</b>. Opcionales: señal de destinación subcelular, reportero (GFP).", draw:"expression"},
{cat:"construction", f:"¿Por qué importa tanto la orientación en una construcción de expresión?", b:"Debe quedar <b>5'→PROMOTOR→GEN→TERMINADOR→3'</b>. Si el gen queda invertido, <b>no hay expresión correcta</b>.", draw:"expression"},
{cat:"construction", f:"¿Qué es un promotor?", b:"Secuencia de ADN regulatoria cerca del inicio de la transcripción. En bacterias: elementos <b>-35 y -10 (caja TATA)</b>; su distancia (óptimo ~17pb) influye en la actividad."},
{cat:"construction", f:"Función del factor sigma en procariontes", b:"Reduce la afinidad de la ARN pol por el ADN general y <b>aumenta su afinidad específica por promotores</b>, formando la <b>holoenzima</b>."},
{cat:"construction", f:"¿De qué depende la fuerza de un promotor?", b:"De qué tan parecidos son sus elementos -35/-10 a la secuencia <b>consenso</b> y de la <b>distancia entre ellos</b> (óptimo ~17pb). Mutaciones que acercan al consenso = ↑ actividad."},
{cat:"construction", app:true, f:" Quieres expresar una proteína TÓXICA para la bacteria. ¿Qué promotor eliges?", b:"Uno <b>más débil, inducible o regulable</b> — NO el promotor más fuerte posible, porque podría matar a la bacteria antes de producir suficiente proteína."},
{cat:"construction", f:"Tipos de promotores (clasificación general)", b:"<b>Fuertes/débiles</b> · <b>tejido-específicos</b> · <b>constitutivos</b> (expresión continua/basal) · <b>inducibles</b> (se activan con un estímulo)."},
{cat:"construction", f:"Ejemplos de sistemas inducibles por organismo", b:"Bacterias: <b>lac/IPTG</b>. Levaduras: <b>GAL1/galactosa</b>. Hongos filamentosos: <b>LOV/luz</b>. Mamíferos: <b>Tet-On/Off/doxiciclina</b>."},
{cat:"construction", f:"Operón lac: mecanismo sin y con lactosa", b:"Sin lactosa: represor <b>LacI</b> se une fuerte al operador, impide transcripción. Con lactosa (o IPTG): el represor se libera y permite la transcripción."},
{cat:"construction", f:"Regulación cruzada del operón lac por glucosa", b:"Vía <b>cAMP/CAP</b>: para expresión FUERTE se necesita <b>lactosa presente</b> Y <b>glucosa baja/ausente</b> (glucosa baja → ↑cAMP → CAP ayuda a la ARN pol a unirse)."},
{cat:"construction", f:"Sistema T7/BL21(DE3): lógica completa paso a paso", b:"IPTG libera LacI → se produce <b>T7 RNA polimerasa</b> (bajo control del operón lac en el genoma de BL21(DE3)) → la T7 pol reconoce el <b>promotor T7</b> del vector → <b>expresión muy alta</b> del gen de interés.", draw:"t7"},
{cat:"construction", f:"Sistema GAL4/GAL80 en levadura", b:"Genes GAL necesarios en galactosa: estructurales (GAL1,2,7,10) y reguladores (GAL4,80,3). <b>GAL4</b> activa vía <b>UASGAL</b>; sin galactosa, <b>GAL80</b> se une a GAL4 y lo inactiva.", draw:"gal"},
{cat:"construction", f:"Punto clave: modularidad de los factores de transcripción", b:"Tienen un dominio de <b>unión al ADN (BD)</b> y un dominio de <b>activación (AD)</b> que se pueden <b>separar y recombinar artificialmente</b>. Es la base de los sistemas one- y two-hybrid."},
{cat:"construction", f:"Optogenética FUN-LOV", b:"GAL4 modificado fusionando <b>dominios LOV</b> para responder a <b>luz azul</b> en vez de galactosa → control óptico de la expresión génica (ej. floculación en levadura)."},
{cat:"construction", f:"⚡ Para memorizar: one-hybrid vs. two-hybrid", b:"<b>One-hybrid</b> → interacción <b>proteína–ADN</b>. <b>Two-hybrid</b> → interacción <b>proteína–proteína</b>.", draw:"hybrid"},
{cat:"construction", f:"Mecanismo del yeast one-hybrid", b:"La proteína en estudio se fusiona a un <b>dominio de activación (AD)</b> y se coloca frente a un reportero regido por la secuencia de ADN de interés. Si la reconoce, se activa el reportero.", draw:"hybrid"},
{cat:"construction", app:true, f:" ¿Cómo sabes si dos proteínas A y B interactúan?", b:"<b>Yeast two-hybrid</b>: proteína A fusionada a <b>BD</b>, proteína B fusionada a <b>AD</b>. Si A y B interactúan, BD y AD quedan juntos, se reconstituye el factor de transcripción funcional y se activa el reportero (ej. luciferasa).", draw:"hybrid"},
{cat:"construction", f:"Sistemas Tet-On vs. Tet-Off", b:"<b>Tet-Off</b>: la presencia de doxiciclina (Dox) <b>apaga</b> la expresión. <b>Tet-On</b>: la presencia de Dox <b>activa</b> la expresión. El elemento regulatorio se llama <b>TRE</b>.", draw:"tet"},
{cat:"construction", app:true, f:" ¿Cómo se hace un ratón condicional con sistema Tet?", b:"Se cruzan 2 líneas transgénicas: una con el <b>transactivador Tet-On/Off</b> bajo promotor específico de tejido, y otra con el <b>gen de interés detrás de TRE</b>. La expresión depende de la presencia/ausencia de Dox en el agua de bebida."},
{cat:"construction", f:"Epitope tags: qué son y ejemplos", b:"Péptidos cortos fusionados al extremo N o C de una proteína para <b>detectarla, purificarla o localizarla</b>. Ejemplos: <b>His, HA, Flag, Myc, GFP</b>."},
{cat:"construction", f:"Purificación con His-tag: flujo y elección del metal", b:"Cromatografía de afinidad por metal inmovilizado. Flujo: <b>equilibrar resina → cargar muestra → lavar → eluir</b>. La elección del ion (Ni, Co, Cu, Zn) siempre es un <b>compromiso entre afinidad y especificidad</b>.", draw:"his"},
{cat:"construction", f:"GFP: ¿para qué se usa?", b:"Proteína fluorescente usada como <b>reportero</b> para visualizar expresión, <b>localización subcelular</b> y dinámica de proteínas."},
{cat:"construction", f:"Western blot: flujo y pregunta que responde", b:"<b>Proteínas → SDS-PAGE → transferencia a membrana → anticuerpo → detección</b> (quimioluminiscencia). Responde: '¿está presente mi proteína?' y permite comparar <b>niveles relativos</b>.", draw:"western"},
{cat:"construction", f:"Terminador de la transcripción", b:"Participa en el término de la transcripción. En eucariontes se asocia a la señal de <b>poliadenilación (AAUAAA)</b> que dirige el corte del ARN naciente."},
{cat:"construction", f:"4 tipos de marcadores de selección", b:"<b>Resistencia a antibiótico</b> (amp, higromicina) · <b>cambio de color</b> (LacZ + X-gal) · <b>proteínas fluorescentes</b> (GFP) · <b>marcadores auxotróficos</b> (dependencia metabólica)."},
{cat:"construction", f:"Mecanismo de resistencia a ampicilina", b:"El gen codifica <b>β-lactamasa</b>, que inactiva antibióticos β-lactámicos. Estos normalmente inhiben la transpeptidación (PBP) del peptidoglicano, causando lisis y muerte celular."},
{cat:"construction", f:"Mecanismo de resistencia a higromicina B", b:"El gen codifica <b>higromicina fosfotransferasa</b>, que <b>fosforila e inactiva</b> el antibiótico (que normalmente inhibe la traducción/ribosoma)."},
{cat:"construction", f:"¿Qué es la auxotrofía?", b:"Incapacidad de un organismo de sintetizar una sustancia por carecer de una <b>ruta metabólica funcional</b> (ej. levaduras que no sintetizan uracilo/His/Leu y dependen de que el vector aporte el gen faltante)."},

// ===================== RAZONAMIENTO / CASOS =====================
{cat:"reasoning", f:"Flujo mental para razonar cualquier diseño experimental", b:"<b>PCR → clonamiento → construcción → expresión → detección/análisis</b>. Siempre recorrer este camino frente a un objetivo experimental."},
{cat:"reasoning", app:true, f:" Caso 1: expresar una proteína de PLANTA en E. coli", b:"1) Partir de RNA maduro → <b>ADNc</b> (evita intrones) · 2) Diseñar primers con sitios/overlaps necesarios · 3) PCR y clonar en vector bacteriano con promotor inducible (ej. T7) · 4) Transformar e inducir con IPTG · 5) Si se requiere purificar: agregar <b>His-tag</b> y cromatografía de afinidad."},
{cat:"reasoning", app:true, f:" Caso 2: expresar 3 genes en la MISMA construcción", b:"Diseñar 3 <b>cassettes independientes</b> (promotor-gen-terminador) y ensamblarlos en un mismo vector. <b>Golden Gate</b> es especialmente atractivo para este tipo de ensamblaje modular."},
{cat:"reasoning", app:true, f:" Caso 3: probar un gen en bacteria, levadura Y células animales", b:"No conviene clonar desde cero 3 veces. Usar la lógica de <b>Gateway</b>: 1 vector de entrada → múltiples vectores de destino (uno por sistema de expresión)."},
{cat:"reasoning", app:true, f:" Caso 4: saber si dos proteínas interactúan", b:"No basta con expresarlas por separado. Usar <b>yeast two-hybrid</b>: proteína A-BD + proteína B-AD; si interactúan se reconstituye el factor de transcripción y se activa el reportero."},
{cat:"reasoning", f:"ADN genómico vs. ADNc — ¿por qué importa la diferencia?", b:"ADN genómico eucarionte = <b>intrones + exones</b>. RNA maduro = solo <b>exones</b>. Para expresar un gen eucarionte en bacteria (sin splicing) hay que partir de RNA maduro y generar <b>ADNc</b>."},
{cat:"reasoning", f:"Vector de clonamiento vs. vector de expresión: diferencia clave", b:"<b>Clonamiento</b>: objetivo es mantener/copiar el ADN. <b>Expresión</b>: objetivo es que sea transcrito y traducido; por eso necesita <b>promotor Y terminador</b>.", draw:"vector"},
{cat:"reasoning", app:true, f:" Diseña la lógica: quieres purificar una proteína recombinante Y confirmar su expresión", b:"Combo: <b>His-tag + cromatografía de afinidad</b> para purificar, más <b>Western blot</b> (anti-His o anticuerpo específico) para confirmar que la proteína está presente y comparar niveles."},
{cat:"reasoning", app:true, f:" Tu gel de PCR muestra una banda pequeña incluso en el control negativo", b:"Sospecha de <b>dímeros de primers</b> o contaminación de reactivos. Revisar el diseño de primers (complementariedad entre F/R) y usar reactivos limpios/desalados."},
];


const COLOR = {
  basics:"#607d8b",
  pcr:"#1565c0",
  cloning:"#2e7d32",
  construction:"#6a1b9a",
  reasoning:"#e65100"
};

let current = 0;
let filteredCards = CARDS.map((card,index)=>({...card,originalIndex:index}));

const $ = id => document.getElementById(id);

const question = $("question");
const answer = $("answer");
const category = $("category");
const application = $("application");
const counter = $("counterPill");
const progress = $("progress");
const slider = $("slider");
const cardList = $("cardList");
const totalCards = $("totalCards");
const flashcard = $("flashcard");

function renderList(){
  cardList.innerHTML = "";

  filteredCards.forEach((card,index)=>{
    const button = document.createElement("button");
    button.className = "side-card" + (index === current ? " active" : "");

    button.innerHTML = `
      <span class="side-number">${String(index+1).padStart(2,"0")}</span>
      <span class="side-content">
        <span class="side-category">${LABELS[card.cat]}</span>
        <span class="side-question">${card.f.replace(/<[^>]*>/g,"")}</span>
      </span>
    `;

    button.addEventListener("click",()=>{
      current = index;
      render();
      closeSidebar();
    });

    cardList.appendChild(button);
  });

  totalCards.textContent = `${filteredCards.length} tarjetas`;
}

function render(){
  if(!filteredCards.length) return;

  const card = filteredCards[current];
  const color = COLOR[card.cat] || "#6d5bd0";

  flashcard.style.setProperty("--card-color",color);

  category.textContent = LABELS[card.cat];
  question.innerHTML = card.f;

  answer.innerHTML =
    card.b +
    (card.draw ? DRAW(card.draw) : "");

  application.classList.toggle("hidden",!card.app);

  answer.classList.add("hidden");

  $("showAnswer").innerHTML =
    "<span>Mostrar respuesta</span><span>↓</span>";

  counter.textContent =
    `${current+1} / ${filteredCards.length}`;

  progress.textContent =
    `${current+1} / ${filteredCards.length}`;

  slider.max =
    Math.max(0,filteredCards.length-1);

  slider.value = current;

  document.querySelectorAll(".side-card")
    .forEach((el,i)=>{
      el.classList.toggle("active",i===current);
    });
}

function go(direction){
  const next = current + direction;

  if(next < 0 || next >= filteredCards.length)
    return;

  current = next;
  render();
}

$("showAnswer").addEventListener("click",()=>{
  const isHidden = answer.classList.toggle("hidden");

  $("showAnswer").innerHTML = isHidden
    ? "<span>Mostrar respuesta</span><span>↓</span>"
    : "<span>Ocultar respuesta</span><span>↑</span>";
});

$("previous").addEventListener("click",()=>go(-1));

$("next").addEventListener("click",()=>go(1));

slider.addEventListener("input",()=>{
  current = Number(slider.value);
  render();
});

document.querySelectorAll(".filter").forEach(button=>{
  button.addEventListener("click",()=>{
    document.querySelectorAll(".filter")
      .forEach(b=>b.classList.remove("active"));

    button.classList.add("active");

    const filter = button.dataset.filter;

    filteredCards =
      CARDS
      .map((card,index)=>({...card,originalIndex:index}))
      .filter(card =>
        filter === "all" || card.cat === filter
      );

    current = 0;

    renderList();
    render();
  });
});

function openSidebar(){
  $("sidebar").classList.add("open");
  $("overlay").classList.add("show");
}

function closeSidebar(){
  $("sidebar").classList.remove("open");
  $("overlay").classList.remove("show");
}

$("menuBtn").addEventListener("click",openSidebar);
$("closeSidebar").addEventListener("click",closeSidebar);
$("overlay").addEventListener("click",closeSidebar);

document.addEventListener("keydown",(event)=>{
  if(event.key === "ArrowRight"){
    event.preventDefault();
    go(1);
  }

  if(event.key === "ArrowLeft"){
    event.preventDefault();
    go(-1);
  }

  if(event.code === "Space"){
    event.preventDefault();
    $("showAnswer").click();
  }
});

renderList();
render();
