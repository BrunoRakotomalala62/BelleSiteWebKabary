import TableOfContents from '../TableOfContents';

export default function TableOfContentsExample() {
  const items = [
    { id: 'alasarona', title: 'Alasarona', color: '#8B5CF6' },
    { 
      id: 'kabary-panambadiana', 
      title: 'Kabary am-panambadiana', 
      color: '#3B82F6',
      subsections: [
        { id: 'fialan-tsiny', title: 'Fialan-tsiny' },
        { id: 'ohatra-voalohany', title: 'Ohatra voalohany' }
      ]
    },
    { id: 'dontany', title: 'Dontany sy kapotandroka', color: '#10B981' },
  ];

  return (
    <TableOfContents 
      items={items} 
      activeSection="kabary-panambadiana"
      onItemClick={(id) => console.log('Clicked:', id)}
    />
  );
}
