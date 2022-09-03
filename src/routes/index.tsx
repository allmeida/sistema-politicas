import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { Dashboard,  Relatorio , UploadArquivo, Politica } from '../pages';

export const AppRoutes = () => {
  const { setDrawerOptions} = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página inicial', 
      },
      {
        icon: 'backup',
        path: '/upload-arquivo',
        label: 'Upload de arquivos', 
      },
      {
        icon: 'article',
        path: '/relatorio',
        label: 'Relatórios', 
      },
      {
        icon: 'policy',
        path: '/politica',
        label: 'Políticas', 
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/upload-arquivo" element={<UploadArquivo />} />
      <Route path="/relatorio" element={<Relatorio />} />
      <Route path="/politica" element={<Politica />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      <Route path="upload-arquivo" element={<Navigate to="/upload-arquivo" />} />
      <Route path="relatorio" element={<Navigate to="/relatorio" />} />
      <Route path="politica" element={<Navigate to="/politica" />} />
    </Routes>
  );
};