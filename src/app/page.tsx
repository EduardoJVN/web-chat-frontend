import type { Metadata } from 'next';
import ThemeSwitch from '@/components/themeSwitch'

export const metadata: Metadata = {
  title: 'Tu App',
  description: 'Descripción aquí',
};
export default function Home() {
  return (
    <div className="p-4">

    <ThemeSwitch />

    <div className="bg-bubble-user">user</div>
    <div className="bg-bubble-guest">invitado</div>

    <div className="bg-success">success</div>

    <div className="bg-testcolor">test</div>
  </div>
  );
}
