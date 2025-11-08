import KabarySection from '../KabarySection';

export default function KabarySectionExample() {
  return (
    <div className="p-8 max-w-4xl">
      <KabarySection 
        id="example-section" 
        title="Kabary am-panambadiana"
        color="#3B82F6"
        subtitle="Fialan-tsiny"
      >
        <p className="leading-relaxed">
          <strong>Mpamaoka:</strong> (mitsangana)
        </p>
        <p className="leading-relaxed mt-4">
          Tompokolahy sy tompokovavy : Azafady indrindra fa toa hitsangana tsy fidina aho hamely izany kabary izany. Tsy tokony hitsangana eto akory anefa aho, fa mbola ao an-tampon'ny loha izay tena tompon'ny teny, ao ireo zokibe toa ray izay trafo nasondroty ny nofo, fela-tanana manainga ny rantsana, ao ireo olona mitovy saranga amin'ny tena.
        </p>
      </KabarySection>
    </div>
  );
}
