import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, CONTACT_EMAIL_MAILTO } from '../config/contact';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/" className="text-slate-50/90 hover:text-slate-50 hover:underline transition-colors">&larr; Back to Home</Link>
      </div>

      <article className="prose prose-invert prose-neutral lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-slate-50">About EAE Broadcast Station</h1>

        <div className="space-y-4">
          <p>
            EAE is a 21st-century educational broadcast station. Not a lecture hall — a factory that broadcasts the process of making things.
          </p>

          <p>
            AI replaced information transfer. What remains is <strong>judgment</strong> — and judgment comes from public failure, not from absorbing information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-50">Four Categories</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Editorial Technique</strong> — Making things. Deconstruct originals, recombine into new meaning. Six skillsets: EML (music), QSketch (drawing), MAL (language), PENON (diagrams), PHL (concept tokens), Patchtech (technology).</li>
            <li><strong>Operational Technique</strong> — Running the factory. PhonePress ERP: smartphone + AI + GitHub as the ledger for a content manufacturing system.</li>
            <li><strong>Channeling Technique</strong> — Reading people. Enter another person's perspective, extract their questions, delegate to AI from their viewpoint. Creates character IP.</li>
            <li><strong>Survival Technique</strong> — Replicating the system. Quantum Jump: clone 28 repositories to a new account. The franchise model for solo operators.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-50">Two-Repository Architecture</h2>
          <p>
            <strong>eae-univ</strong> (private) is the local ledger — editorial engine, game system, original manifests.
            <strong> eae.kr</strong> (public) is the actual ledger — the broadcast station where content gets published.
            Content migrates from local to actual via publish scripts. eae.kr is wider than eae-univ — it is the broadcast front, not a copy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-50">Core Philosophy</h2>
          <p>
            No recruiting. No teaching. Natural selection only. Build the environment, abandon it, and those who seek will find it. 10-20 year horizon.
          </p>
          <p>
            Everything is work-in-progress — never a finished product. The process of building is the content. Public failure is how judgment forms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-50">Contact</h2>
          <p>
            For inquiries, please contact us at{' '}
            <a href={CONTACT_EMAIL_MAILTO} className="text-blue-400 hover:text-blue-300 underline transition-colors">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </article>
    </div>
  );
}
