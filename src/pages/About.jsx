import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Home</Link>
      </div>
      
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About EAE</h1>
        
        <div className="space-y-4">
          <p>
            Welcome to EAE, a Progressive Web App built with React, Vite, and MDX.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Categories</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Quick Sketch (qsketch)</strong> - Quick sketches and ideas</li>
            <li><strong>Penon</strong> - Penon related content</li>
            <li><strong>Mal</strong> - Mal related content</li>
            <li><strong>Patchtech</strong> - Patchtech related content</li>
            <li><strong>EML</strong> - EML related content</li>
            <li><strong>PHL</strong> - PHL related content</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Technology Stack</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>React 19</li>
            <li>Vite</li>
            <li>React Router</li>
            <li>MDX (Markdown with JSX)</li>
            <li>Tailwind CSS</li>
            <li>PWA (Progressive Web App)</li>
          </ul>
        </div>
      </article>
    </div>
  );
}
