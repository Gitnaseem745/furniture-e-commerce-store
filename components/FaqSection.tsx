'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: 'Can I order by telephone?',
      answer:
        'Et adipiscing mattis egestas mi placerat duis congue id. Scelerisque integer pulvinar justo sed eget pretium ipsum id faucibus euismod empor sagittis facilisis tristique. Egestas massa purus vel at consectetur convallis cras imperdiet. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Arcu non odio euismod lacinia at quis risus.',
    },
    { question: 'Do you sell gift cards?', answer: 'Yes, we do! You can purchase them online.' },
    { question: 'Can I order catalog products online?', answer: 'Absolutely! All our catalog items are online.' },
    { question: 'Who can answer my warranty questions?', answer: 'Our support team is happy to help with warranty queries.' },
    { question: 'Arcu non odio euismod lacinia at quis?', answer: 'Yes, our products support various needs effectively.' },
    { question: 'Magna ac placerat vestibulum?', answer: 'We ensure quality products delivered on time.' },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F4F8FA] p-10 rounded-lg flex flex-col md:flex-row gap-10">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
        <p className="text-gray-600">
          Donec et odio pellentesque diam volutpat commodo amet consectetur adipiscing elit ut aliquam purus vitae et leo
          duis ut diam quam.
        </p>
        <div className="mt-6">
          <img
            src="images/contact-us-faq-image.webp"
            alt="FAQ Illustration"
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="md:w-1/2 space-y-4 mt-32">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4"
          >
            <button
              className="flex justify-between w-full text-left text-lg font-medium text-gray-900"
              onClick={() => toggleFAQ(index)}
            >
              <span className='text-[16px] font-medium'>{item.question}</span>
              <span>{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="mt-8 text-neutral-600 text-sm leading-7">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
