import { Link } from 'react-router-dom';
import { getCategoryCounts } from '../utils/posts';
import { CATEGORIES } from '../utils/categories';

const CATEGORY_DESCRIPTIONS = {
  'eae-blueprint': 'Meta-architecture and design documents for EAE University YouTube channel',
  'editorial': 'Making things — deconstruct originals, recombine into new meaning (EML, QSketch, MAL, PENON, PHL, Patchtech)',
  'operational': 'Running the factory — PhonePress ERP, Matrix Architecture, deployment pipelines',
  'channeling': 'Reading people — perspective entry, question extraction, character IP creation',
  'survival': 'Replicating the system — Quantum Jump, franchise model, 28-repo portability',
};

export default function CategoryIndex() {
  const counts = getCategoryCounts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/" className="text-slate-50/90 hover:text-slate-50 hover:underline transition-colors">&larr; Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-slate-50">Broadcast Categories</h1>

      <ul className="space-y-4">
        {CATEGORIES.map((cat) => (
          <li key={cat.slug}>
            <Link
              to={`/category/${cat.slug}`}
              className="block p-6 bg-slate-800/60 border border-slate-700 rounded-lg hover:bg-slate-700/60 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold text-slate-200">{cat.name}</h2>
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {counts[cat.slug] || 0} posts
                </span>
              </div>
              {CATEGORY_DESCRIPTIONS[cat.slug] && (
                <p className="text-slate-400 text-sm">{CATEGORY_DESCRIPTIONS[cat.slug]}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
