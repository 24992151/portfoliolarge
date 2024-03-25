import React from 'react';
import './faqsPage.css'; // Import your CSS file for styling

// Hero
const FaqsPage = () => {
  return (
    <section>
      <section className="faqs-title-bar">
        <h1>Answering your questions</h1>
      </section>

      {/* Main Content */}
      <section className="content">
        <section className="section1-content">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p>Want to know more about the services we offer? Maybe you have specific questions about our processes that you’d like to learn more about? Or perhaps you just need clarification on a few details. Whatever the case, the team at Dubai Landscapes is on hand to help answer any questions you have. Check out our list of frequently asked questions below; if your question is not covered feel free to contact our team directly. Drop us a message on WhatsApp or give us a call.</p>
        </section>
      </section>

      {/* Questions & Answers */}
      <section className="faqs-list">
        <article className="faq-item">
          <strong>What services do you offer?</strong> {/* Strong unlike 'p' makes content bold without styling in CSS */}
          <p>We offer a wide range of landscaping services including soft and hard landscaping, garden design, paving, decking, water features, and more.</p>
        </article>
        <article className="faq-item">
          <strong>Do you provide free consultations?</strong>
          <p>Yes, we offer free consultations to discuss your landscaping needs and provide expert advice tailored to your specific requirements.</p>
        </article>
        <article className="faq-item">
          <strong>How long does a typical landscaping project take?</strong>
          <p>The duration of a landscaping project varies depending on its complexity and size. We will provide you with an estimated timeline during the consultation phase.</p>
        </article>
        <article className="faq-item">
          <strong>Are your landscaping products environmentally friendly?</strong>
          <p>Yes, we prioritize the use of environmentally friendly and sustainable landscaping products to minimize our impact on the environment.</p>
        </article>
        <article className="faq-item">
          <strong>Can you work within my budget?</strong>
          <p>We understand that every project has budget constraints. Our team will work with you to create a customised landscaping plan that fits your budget without compromising on quality.</p>
        </article>
        <article className="faq-item">
          <strong>How do I schedule a consultation with your team?</strong>
          <p>You can schedule a consultation with our team by contacting us via WhatsApp, phone, or by filling out the online form on our website. We'll get back to you asap.</p>
        </article>
      </section>
    </section>
  );
}

export default FaqsPage;
