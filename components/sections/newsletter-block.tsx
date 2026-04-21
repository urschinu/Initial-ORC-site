export function NewsletterBlock() {
  return (
    <section className="container-shell section-pad">
      <div className="panel overflow-hidden">
        <div className="grid gap-8 p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-laterite">Newsletter</div>
            <h2 className="mt-3">Stay connected to ORC’s research, archives, and public programmes</h2>
            <p className="mt-4 max-w-measure text-slate">
              In production, this block can connect to Mailchimp, Brevo, or the organisation’s
              preferred mailing system.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-4">
            <label className="mb-2 block text-sm font-medium" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="name@example.org"
              className="w-full rounded-xl border border-line bg-white px-4 py-3 outline-none"
            />
            <button className="mt-4 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
