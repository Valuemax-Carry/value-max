import Link from "next/link";

const openings = [
  {
    title: "Cashier",
    badge: "Sales & iPOS",
    description:
      "Must have experience for iPOS sales and inventory management system.",
  },
  {
    title: "Accountant",
    badge: "Finance & Retail",
    description:
      "Must have accounting education and work experience in retail industry.",
  },
];

export default function JobAdd() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');

        .vm-job-section {
          background: linear-gradient(180deg, #fffdf8 0%, #fff 100%);
          font-family: 'Poppins', sans-serif;
          padding: 72px 20px;
        }

        .vm-job-wrap {
          max-width: 1180px;
          margin: 0 auto;
        }

        .vm-job-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .vm-job-kicker {
          display: inline-block;
          background: #fff0f1;
          border: 1px solid rgba(182, 10, 1, 0.1);
          color: #b60a01;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          padding: 8px 14px;
          border-radius: 999px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .vm-job-title {
          margin: 0;
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.08;
          color: #111827;
          font-weight: 800;
        }

        .vm-job-title span {
          color: #b60a01;
        }

        .vm-job-sub {
          margin: 14px auto 0;
          max-width: 640px;
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.7;
        }

        .vm-job-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 24px;
          margin-top: 32px;
        }

        @media (min-width: 768px) {
          .vm-job-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        .vm-job-card {
          position: relative;
          border: 1px solid rgba(17, 24, 39, 0.06);
          border-radius: 28px;
          background: #ffffff;
          padding: 28px 24px 24px;
          box-shadow: 0 18px 42px rgba(17, 24, 39, 0.06);
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .vm-job-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 50px rgba(182, 10, 1, 0.12);
        }

        .vm-job-card::before {
          content: "";
          position: absolute;
          inset: 0 auto auto 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #b60a01 0%, #f4c542 100%);
        }

        .vm-job-badge {
          display: inline-flex;
          align-items: center;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: #fff4d6;
          color: #9a6d00;
          margin-bottom: 16px;
        }

        .vm-job-name {
          margin: 0 0 12px;
          font-size: clamp(1.45rem, 2vw, 2rem);
          font-weight: 800;
          color: #111827;
        }

        .vm-job-description {
          margin: 0;
          color: #4b5563;
          font-size: 0.98rem;
          line-height: 1.8;
        }

        .vm-job-actions {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        .vm-job-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 26px;
          border-radius: 999px;
          background: linear-gradient(135deg, #b60a01 0%, #d3211d 100%);
          color: #fff;
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 16px 30px rgba(182, 10, 1, 0.22);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .vm-job-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 38px rgba(182, 10, 1, 0.28);
        }
      `}</style>

      <section className="vm-job-section">
        <div className="vm-job-wrap">
          <div className="vm-job-header">
            <div className="vm-job-kicker">We are hiring</div>
            <h2 className="vm-job-title">
              Career Opportunities at <span>ValueMax</span>
            </h2>
            <p className="vm-job-sub">
              Join a growing retail team that values service, discipline, and operational excellence.
            </p>
          </div>

          <div className="vm-job-grid">
            {openings.map((job) => (
              <article key={job.title} className="vm-job-card">
                <div className="vm-job-badge">{job.badge}</div>
                <h3 className="vm-job-name">{job.title}</h3>
                <p className="vm-job-description">{job.description}</p>
              </article>
            ))}
          </div>

          <div className="vm-job-actions">
            <Link href="/career" className="vm-job-btn">
              Go to Careers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

