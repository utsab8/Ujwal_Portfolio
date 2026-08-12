import * as Icons from 'lucide-react';

export default function IconRenderer({ name, ...props }) {
  const IconComponent = Icons[name] || Icons.Circle; // Fallback to Circle if icon not found
  return <IconComponent {...props} />;
}
