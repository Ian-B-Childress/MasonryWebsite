import "../App.css";

export default function FAQ() {
  return (
    <div className="faq">
      <div>
        <h1>Frequently Asked Questions</h1>
        <p>Here are some common questions we receive from our customers.</p>
      </div>
      <div className="faq-question-1">
        <h2>Do you offer free estimates?</h2>
        <p>
          Yes, we offer free estimates for all our services. Contact us at
          +x(xxx)xxx-xxxx to schedule a consultation.
        </p>
      </div>
      <div className="faq-question-2">
        <h2>Are you insured?</h2>
        <p>
          Yes, we are fully insured. Any accidents or unforeseen delays are
          covered by our team.
        </p>
      </div>
      <div className="faq-question-3">
        <h2>What areas do you service?</h2>
        <p>
          We serve Pikeville and the surrounding counties. For larger projects,
          we're happy to travel further.
        </p>
      </div>
      <div className="faq-question-4">
        <h2>What are your business hours?</h2>
        <p>
         Our regular hours are Monday through Friday, 7:00 AM to 5:00 PM. Weekend work is available for larger jobs if needed.
        </p>
      </div>
    </div>
  );
}
