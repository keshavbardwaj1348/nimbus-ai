import PageWrapper from "../components/PageWrapper";

function Contact() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
        <section className="mx-auto max-w-3xl">

          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

          <p className="text-slate-300 mb-12">
            Have questions about NimbusAI? Fill out the form and our team will respond.
          </p>

          <form className="space-y-6 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <input required className="w-full rounded-lg bg-slate-800 px-4 py-3" placeholder="Full Name" />
            <input required type="email" className="w-full rounded-lg bg-slate-800 px-4 py-3" placeholder="Email" />
            <textarea required rows="5" className="w-full rounded-lg bg-slate-800 px-4 py-3" placeholder="Message" />

            <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-500 transition">
              Send Message
            </button>
          </form>

        </section>
      </main>
    </PageWrapper>
  );
}

export default Contact;
