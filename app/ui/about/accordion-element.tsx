import { motion } from 'framer-motion';

export default function AccordionItem({ question, index, activeIndex, toggleAccordion }: { question: { question: string, answer: string }, index: number, activeIndex: number | null, toggleAccordion: (index: number) => void }) {
  return (
    <div className="mb-4">
      <h2 id={`accordion-collapse-heading-${index}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 rounded-lg"
          data-accordion-target={`#accordion-collapse-body-${index}`}
          aria-expanded={activeIndex === index}
          aria-controls={`accordion-collapse-body-${index}`}
          onClick={() => toggleAccordion(index)}
        >
          <span>{question.question}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${activeIndex === index ? '' : 'rotate-180'} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <motion.div
        id={`accordion-collapse-body-${index}`}
        className={`${activeIndex === index ? '' : 'hidden'}`}
        aria-labelledby={`accordion-collapse-heading-${index}`}
        initial={{ height: 0 }}
        animate={{ height: activeIndex === index ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-b-lg">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{question.answer}</p>
        </div>
      </motion.div>
    </div>
  );
}